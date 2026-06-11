export function FloatingControls() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-lg text-slate-300 shadow-lg backdrop-blur-sm transition hover:border-ocean-light hover:text-ocean-light"
      >
        ↑
      </button>
    </div>
  )
}
