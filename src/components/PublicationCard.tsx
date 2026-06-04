type Publication = {
    title: string
    venue: string
    type: string
    year: string
    description: string
    highlights: string[]
    links: {
      label: string
      href: string
    }[]
  }
  
  type PublicationCardProps = {
    publication: Publication
  }
  
  export function PublicationCard({ publication }: PublicationCardProps) {
    return (
      <article className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-cyan-400">
              {publication.type}
            </p>
  
            <h3 className="mt-3 max-w-3xl text-2xl font-semibold text-white">
              {publication.title}
            </h3>
  
            <p className="mt-2 text-slate-400">
              {publication.venue} · {publication.year}
            </p>
          </div>
        </div>
  
        <p className="mt-5 max-w-3xl leading-8 text-slate-400">
          {publication.description}
        </p>
  
        <ul className="mt-5 space-y-2 text-sm text-slate-400">
          {publication.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
  
        <div className="mt-6 flex flex-wrap gap-3">
          {publication.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
        </div>
      </article>
    )
  }