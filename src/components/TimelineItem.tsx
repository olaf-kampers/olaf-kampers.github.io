type Engagement = {
  client: string
  role: string
  location: string
  period: string
  logo: string
  tags?: string[]
  summary: string
  highlights: string[]
}

type TimelineItemProps = {
  item: {
    company: string
    role: string
    location: string
    period: string
    logo: string
    tags?: string[]
    summary: string
    highlights: string[]
    engagements?: Engagement[]
  }
}

export function TimelineItem({ item }: TimelineItemProps) {
  return (
    <article className="relative grid gap-6 border-l border-slate-400 pb-12 pl-8 md:grid-cols-[180px_1fr] md:gap-10">
      <div className="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-800 bg-slate-950">
        <img
          src={item.logo}
          alt={`${item.company} logo`}
          className="h-8 w-8 rounded-lg object-contain"
        />
      </div>

      <div className="pt-1 text-sm text-slate-300">
        <p>{item.period}</p>
        <p className="mt-1">{item.location}</p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6">
        <div>
          <h3 className="text-xl font-semibold text-white">{item.company}</h3>

          <p className="mt-1 text-sm font-medium text-ocean-light">
            {item.role}
          </p>

          {item.tags && (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <p className="mt-4 leading-7 text-slate-400">{item.summary}</p>

        <ul className="mt-5 space-y-2 text-sm text-slate-400">
          {item.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ocean-light" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {item.engagements && (
          <div className="mt-8 space-y-4 border-t border-slate-800 pt-6">
            <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
              Client engagements
            </p>

            {item.engagements.map((engagement) => (
              <div
                key={engagement.client}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-slate-950">
                    <img
                      src={engagement.logo}
                      alt={`${engagement.client} logo`}
                      className="h-7 w-7 rounded-md object-contain"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-ocean-cream">
                          {engagement.client}
                        </h4>
                        <p className="mt-1 text-sm text-ocean-light">
                          {engagement.role}
                        </p>
                        {engagement.tags && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {engagement.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="text-right text-sm text-slate-500">
                        <p>{engagement.period}</p>
                        <p>{engagement.location}</p>
                      </div>
                    </div>

                    <p className="mt-4 leading-7 text-slate-400">
                      {engagement.summary}
                    </p>

                    <ul className="mt-4 space-y-2 text-sm text-slate-400">
                      {engagement.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ocean-light/70" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}