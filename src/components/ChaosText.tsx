import { motion } from 'motion/react'
import type { ReactNode } from 'react'

type ChaosTextProps = {
  children: ReactNode
  enabled: boolean
  className?: string
}

function randomOffset() {
  return {
    x: Math.random() * 80 - 40,
    y: Math.random() * 50 - 25,
    rotate: Math.random() * 16 - 8,
    scale: 1.04,
  }
}

export function ChaosText({ children, enabled, className }: ChaosTextProps) {
  if (!enabled) {
    return <span className={className}>{children}</span>
  }

  return (
    <motion.span
      className={`inline-block ${className ?? ''}`}
      whileHover={randomOffset()}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        type: 'spring',
        stiffness: 220,
        damping: 10,
      }}
    >
      {children}
    </motion.span>
  )
}