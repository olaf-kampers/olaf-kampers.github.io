import { profile } from './data/profile'
import { projects } from './data/projects'
import { ProjectCard } from './components/ProjectCard'
import { experience } from './data/experience'
import { TimelineItem } from './components/TimelineItem'

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-6 py-28">
        <p className="mb-4 text-sm font-medium tracking-widest text-cyan-400">
          REACT / TYPESCRIPT / FULL-STACK ENGINEERING
        </p>

        <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
          {profile.name}
        </h1>

        <h2 className="mt-4 max-w-4xl text-3xl font-medium leading-tight text-slate-300 md:text-5xl">
          {profile.headline}
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          {profile.summary}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View Projects
          </a>

          <a href="#experience" className="hover:text-cyan-400">
            Experience
          </a>
        </div>
      </section>
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-medium tracking-widest text-cyan-400">
          FEATURED WORK
        </p>

        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          Selected projects and systems
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
      <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-medium tracking-widest text-cyan-400">
          EXPERIENCE
        </p>

        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          Work history
        </h2>

        <p className="mt-4 max-w-2xl leading-8 text-slate-400">
          A timeline of engineering, research, and product work across production
          systems, financial workflows, infrastructure, and machine learning.
        </p>

        <div className="mt-12">
          {experience.map((item) => (
            <TimelineItem key={`${item.company}-${item.period}`} item={item} />
          ))}
        </div>
    </section>
    </main>
  )
}

export default App