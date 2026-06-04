type TimelineItemProps = {
    item: {
      company: string
      role: string
      location: string
      period: string
      logo: string
      summary: string
      highlights: string[]
    }
  }
  
  export function TimelineItem({ item }: TimelineItemProps) {
    return (
      <article className="relative grid gap-6 border-l border-slate-800 pb-12 pl-8 md:grid-cols-[180px_1fr] md:gap-10">
        <div className="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-800 bg-slate-950">
          <img
            src={item.logo}
            alt={`${item.company} logo`}
            className="h-8 w-8 rounded-lg object-contain"
          />
        </div>
  
        <div className="pt-1 text-sm text-slate-500">
          <p>{item.period}</p>
          <p className="mt-1">{item.location}</p>
        </div>
  
        <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <h3 className="text-xl font-semibold text-white">
                {item.company}
              </h3>
              <p className="mt-1 text-sm font-medium text-cyan-400">
                {item.role}
              </p>
            </div>
          </div>
  
          <p className="mt-4 leading-7 text-slate-400">{item.summary}</p>
  
          <ul className="mt-5 space-y-2 text-sm text-slate-400">
            {item.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    )
  }