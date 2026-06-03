type Project = {
    title: string
    company: string
    type: string
    period: string
    description: string
    highlights: string[]
    tech: string[]
  }
  
  type ProjectCardProps = {
    project: Project
  }
  
  export function ProjectCard({ project }: ProjectCardProps) {
    return (
      <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-cyan-400/50 hover:bg-slate-900/70">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-medium text-cyan-400">{project.company}</p>
          <p className="text-sm text-slate-500">{project.period}</p>
        </div>
  
        <h3 className="mt-3 text-xl font-semibold text-white">
          {project.title}
        </h3>
  
        <p className="mt-1 text-sm text-slate-500">{project.type}</p>
  
        <p className="mt-4 leading-7 text-slate-400">{project.description}</p>
  
        <ul className="mt-5 space-y-2 text-sm text-slate-400">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
  
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