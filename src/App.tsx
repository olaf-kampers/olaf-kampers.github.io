function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#" className="text-sm font-semibold tracking-widest text-cyan-400">
          OLAF
        </a>

        <div className="flex gap-6 text-sm text-slate-400">
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-28">
        <p className="mb-4 text-sm font-medium tracking-widest text-cyan-400">
          REACT / TYPESCRIPT / FRONTEND
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl">
          I build websites.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          I’m Olaf, a full-stack software engineer focused on React, TypeScript, accessible UI,
          and polished product experiences.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#projects"
            className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Contact me
          </a>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-2xl font-semibold text-white">About</h2>
        <p className="mt-4 max-w-2xl leading-8 text-slate-400">
          Intro to be added here.
        </p>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-2xl font-semibold text-white">Featured Projects</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-sm text-cyan-400">React / TypeScript</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Project One</h3>
            <p className="mt-3 text-slate-400">
              A concise project description will go here.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-sm text-cyan-400">UI / Accessibility</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Project Two</h3>
            <p className="mt-3 text-slate-400">
              Another case-study style project preview will go here.
            </p>
          </article>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-2xl font-semibold text-white">Contact</h2>
        <p className="mt-4 text-slate-400">
          Email, GitHub, and LinkedIn links go here.
        </p>
      </section>
    </main>
  )
}

export default App