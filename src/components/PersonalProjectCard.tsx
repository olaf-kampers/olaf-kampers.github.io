type PersonalProject = {
    title: string
    description: string
    category: string
    tech: string[]
    githubUrl: string
  }
  
  type PersonalProjectCardProps = {
    project: PersonalProject
  }
  
  export function PersonalProjectCard({ project }: PersonalProjectCardProps) {
    return (
      <article className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition hover:border-cyan-400/50 hover:bg-slate-900/70">
        <p className="text-sm font-medium text-cyan-400">{project.category}</p>
  
        <h3 className="mt-3 text-xl font-semibold text-white">
          {project.title}
        </h3>
  
        <p className="mt-4 leading-7 text-slate-400">{project.description}</p>
  
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
  
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
        >
          View on GitHub →
        </a>
      </article>
    )
  }