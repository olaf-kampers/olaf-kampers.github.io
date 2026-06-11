import { profile } from '../data/profile'

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 md:p-10">
        <p className="text-sm font-medium tracking-widest text-ocean-light">CONTACT</p>

        <h2 className="mt-3 text-3xl font-semibold text-ocean-cream md:text-4xl">Let's have a coffee chat! ☕</h2>

        <p className="mt-4 max-w-2xl leading-8 text-slate-400">
          I'm interested in software engineering roles involving full-stack
          product development, backend systems, data infrastructure, and
          AI-powered applications.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={profile.links.email}
            className="rounded-full bg-ocean-red px-5 py-3 text-sm font-semibold text-ocean-cream transition hover:bg-ocean-red/80"
          >
            Email me
          </a>

          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-ocean-light hover:text-ocean-light"
          >
            LinkedIn
          </a>

          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-ocean-light hover:text-ocean-light"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
