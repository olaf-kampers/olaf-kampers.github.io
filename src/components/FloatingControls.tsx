type FloatingControlsProps = {
    chaosEnabled: boolean
    onToggleChaos: () => void
  }
  
  export function FloatingControls({
    chaosEnabled,
    onToggleChaos,
  }: FloatingControlsProps) {
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  
    return (
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-lg text-slate-300 shadow-lg backdrop-blur-sm transition hover:border-cyan-400 hover:text-cyan-400"
        >
          ↑
        </button>
  
        <div className="group relative">
            <button
                type="button"
                onClick={onToggleChaos}
                aria-label={chaosEnabled ? 'Disable bounce mode' : 'Enable bounce mode'}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-lg shadow-lg backdrop-blur-sm transition hover:border-cyan-400"
            >
                {chaosEnabled ? '😐' : '👻'}
            </button>

            <div className="pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg border border-slate-700 bg-slate-900/90 px-3 py-2 text-sm text-slate-300 opacity-0 shadow-lg backdrop-blur-sm transition-opacity group-hover:opacity-100">
                {chaosEnabled ? 'Deactivate bounce mode' : 'Activate bounce mode'}
            </div>
        </div>
      </div>
    )
}