import { prepareWithSegments, layoutWithLines } from '@chenglou/pretext'
import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'

type Highlight = {
  word: string
  color: string
  onClick: () => void
}

type ChaosTextProps = {
  text: string
  enabled: boolean
  className?: string
  highlight?: Highlight
  colorHover?: boolean
}

type Token = { chars: string[]; isSpace: boolean }

const RADIUS = 160
const MAX_PUSH = 50

// Chaos mode wraps every grapheme in its own inline-block span so it can be
// individually transformed, which prevents the browser from applying kerning
// and ligatures across character boundaries. Disabling both here too keeps
// glyph widths identical between modes, so toggling chaos doesn't reflow text.
const TEXT_STYLE: CSSProperties = {
  fontKerning: 'none',
  fontVariantLigatures: 'none',
}

function randomColor() {
  return `hsl(${Math.floor(Math.random() * 360)}, 90%, 65%)`
}

// Per-character hover component: random color on enter, lingers 2s, then fades back.
// bounceEnabled should be false in chaos mode to avoid conflicting with the rAF transform.
function HighlightChar({
  char,
  baseColor,
  bounceEnabled,
  innerRef,
}: {
  char: string
  baseColor: string
  bounceEnabled: boolean
  innerRef?: (el: HTMLSpanElement | null) => void
}) {
  const [color, setColor] = useState(baseColor)
  const [bouncing, setBouncing] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  function onMouseEnter() {
    clearTimeout(timerRef.current)
    setColor(randomColor())
    if (bounceEnabled) setBouncing(true)
  }

  function onMouseLeave() {
    timerRef.current = setTimeout(() => setColor(baseColor), 2000)
  }

  useEffect(() => () => clearTimeout(timerRef.current), [])

  return (
    <span
      ref={innerRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onAnimationEnd={() => setBouncing(false)}
      style={{
        display: 'inline-block',
        whiteSpace: 'pre',
        color,
        transition: 'color 0.5s ease',
        ...(bouncing ? { animation: 'char-bounce 0.4s ease' } : {}),
      }}
    >
      {char}
    </span>
  )
}

function tokenize(text: string): Token[] {
  const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' })
  const graphemes = [...segmenter.segment(text)].map(s => s.segment)
  const tokens: Token[] = []
  for (const g of graphemes) {
    const isSpace = /^\s$/.test(g)
    const last = tokens[tokens.length - 1]
    if (last && last.isSpace === isSpace) {
      last.chars.push(g)
    } else {
      tokens.push({ chars: [g], isSpace })
    }
  }
  return tokens
}

// Wraps each non-space token in `white-space: nowrap` so hyphenated words
// (e.g. "AI-driven") wrap as a unit instead of breaking after the hyphen,
// matching how chaos mode keeps each token together.
function renderWords(tokens: Token[]) {
  return tokens.map((token, i) => {
    const str = token.chars.join('')
    return token.isSpace
      ? str
      : <span key={i} style={{ whiteSpace: 'nowrap' }}>{str}</span>
  })
}

// Same per-character hover color + bounce effect as a highlighted word,
// applied to every character with no click handler and no color override
// otherwise. Only used in non-chaos mode, so bouncing is safe to enable.
function renderColorHoverWords(tokens: Token[]) {
  return tokens.map((token, i) => {
    if (token.isSpace) return token.chars.join('')
    return (
      <span key={i} style={{ whiteSpace: 'nowrap' }}>
        {token.chars.map((char, ci) => (
          <HighlightChar key={ci} char={char} baseColor="inherit" bounceEnabled={true} />
        ))}
      </span>
    )
  })
}

export function ChaosText({ text, enabled, className, highlight, colorHover }: ChaosTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null)
  const charRefsRef = useRef<(HTMLSpanElement | null)[]>([])
  const cursorRef = useRef({ x: -9999, y: -9999 })
  const positionsRef = useRef<{ x: number; y: number }[]>([])
  const rafRef = useRef(0)

  const tokens = useMemo(() => tokenize(text), [text])

  const tokenStartIdx = useMemo(() => {
    const idx: number[] = []
    let cur = 0
    for (const t of tokens) { idx.push(cur); cur += t.chars.length }
    return idx
  }, [tokens])

  useEffect(() => {
    if (!enabled || !containerRef.current) return

    function measure() {
      const el = containerRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const cs = window.getComputedStyle(el)
      const fontStr = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`
      const letterSpacing = parseFloat(cs.letterSpacing) || 0
      const lineHeightRaw = parseFloat(cs.lineHeight)
      const lineHeight = isNaN(lineHeightRaw) ? parseFloat(cs.fontSize) * 1.2 : lineHeightRaw

      const prepared = prepareWithSegments(text, fontStr)
      const { lines } = layoutWithLines(prepared, rect.width, lineHeight)

      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')!
      ctx.font = fontStr

      const positions: { x: number; y: number }[] = []
      let idx = 0

      lines.forEach((line, lineIdx) => {
        const y = rect.top + lineIdx * lineHeight + lineHeight * 0.5
        let x = rect.left
        for (const char of line.text) {
          const w = ctx.measureText(char).width + letterSpacing
          positions[idx++] = { x: x + w / 2, y }
          x += w
        }
      })

      positionsRef.current = positions
    }

    let rafId: number
    document.fonts.ready.then(() => {
      rafId = requestAnimationFrame(measure)
    })

    window.addEventListener('scroll', measure, { passive: true })
    window.addEventListener('resize', measure, { passive: true })

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', measure)
      window.removeEventListener('resize', measure)
    }
  }, [enabled, text])

  useEffect(() => {
    if (!enabled) return

    const onMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY }
    }
    document.addEventListener('mousemove', onMove, { passive: true })

    function tick() {
      const { x: cx, y: cy } = cursorRef.current
      const positions = positionsRef.current
      charRefsRef.current.forEach((el, i) => {
        if (!el) return
        const pos = positions[i]
        if (!pos) return
        const dx = pos.x - cx
        const dy = pos.y - cy
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < RADIUS && dist > 0) {
          const strength = (1 - dist / RADIUS) ** 2
          const push = strength * MAX_PUSH
          el.style.transform = `translate(${(dx / dist) * push}px, ${(dy / dist) * push}px)`
        } else {
          el.style.transform = ''
        }
      })
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
      charRefsRef.current.forEach(el => {
        if (el) el.style.transform = ''
      })
    }
  }, [enabled])

  // Non-chaos path
  if (!enabled) {
    const words = colorHover ? renderColorHoverWords(tokens) : renderWords(tokens)

    if (!highlight) return <span className={className} style={TEXT_STYLE}>{words}</span>

    const wordIdx = text.indexOf(highlight.word)
    if (wordIdx === -1) return <span className={className} style={TEXT_STYLE}>{words}</span>

    const wordChars = [
      ...new Intl.Segmenter(undefined, { granularity: 'grapheme' }).segment(highlight.word),
    ].map(s => s.segment)

    return (
      <span className={className} style={TEXT_STYLE}>
        {text.slice(0, wordIdx)}
        <button
          onClick={highlight.onClick}
          style={{ background: 'none', border: 'none', font: 'inherit', padding: 0, cursor: 'pointer' }}
        >
          {wordChars.map((char, i) => (
            <HighlightChar key={i} char={char} baseColor={highlight.color} bounceEnabled={true} />
          ))}
        </button>
        {text.slice(wordIdx + highlight.word.length)}
      </span>
    )
  }

  // Chaos path
  return (
    <span ref={containerRef} className={className} style={TEXT_STYLE}>
      {tokens.map((token, tokenIdx) => {
        const start = tokenStartIdx[tokenIdx]
        const isHighlighted = !token.isSpace && highlight?.word === token.chars.join('')

        if (token.isSpace) {
          return token.chars.map((char, ci) => (
            <span
              key={ci}
              ref={el => { charRefsRef.current[start + ci] = el }}
              style={{ display: 'inline-block', whiteSpace: 'pre' }}
            >
              {char}
            </span>
          ))
        }

        if (isHighlighted) {
          return (
            <span
              key={tokenIdx}
              role="button"
              onClick={highlight!.onClick}
              style={{ display: 'inline', whiteSpace: 'nowrap', cursor: 'pointer' }}
            >
              {token.chars.map((char, ci) => (
                <HighlightChar
                  key={ci}
                  char={char}
                  baseColor={highlight!.color}
                  bounceEnabled={false}
                  innerRef={el => { charRefsRef.current[start + ci] = el }}
                />
              ))}
            </span>
          )
        }

        return (
          <span key={tokenIdx} style={{ display: 'inline', whiteSpace: 'nowrap' }}>
            {token.chars.map((char, ci) =>
              colorHover ? (
                <HighlightChar
                  key={ci}
                  char={char}
                  baseColor="inherit"
                  bounceEnabled={false}
                  innerRef={el => { charRefsRef.current[start + ci] = el }}
                />
              ) : (
                <span
                  key={ci}
                  ref={el => { charRefsRef.current[start + ci] = el }}
                  style={{ display: 'inline-block', whiteSpace: 'pre' }}
                >
                  {char}
                </span>
              )
            )}
          </span>
        )
      })}
    </span>
  )
}
