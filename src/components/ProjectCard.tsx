type Project = {
    title: string
    company: string
    period: string
    category: string
    challenge: string
    role: string
    technicalFocus: string[]
    impact: string[]
    tech: string[]
  }
  
  type ProjectCardProps = {
    project: Project
  }
  
  export function ProjectCard({ project }: ProjectCardProps) {
    return (
      <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-cyan-400/50 hover:bg-slate-900/70">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-medium text-cyan-400">{project.company}</p>
          <p className="text-sm text-slate-500">{project.period}</p>
        </div>
  
        <h3 className="mt-3 text-xl font-semibold text-white">
          {project.title}
        </h3>
  
        <p className="mt-1 text-sm text-slate-500">{project.category}</p>
  
        <div className="mt-6 space-y-5">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Challenge
            </h4>
            <p className="mt-2 leading-7 text-slate-400">{project.challenge}</p>
          </div>
  
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Role
            </h4>
            <p className="mt-2 leading-7 text-slate-400">{project.role}</p>
          </div>
  
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Technical Focus
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              {project.technicalFocus.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
  
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Impact
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              {project.impact.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </article>
    )
  }