import { profile } from './data/profile'

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

          <a
            href={profile.links.resume}
            className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Download Resume
          </a>
        </div>
      </section>
    </main>
  )
}

export default App