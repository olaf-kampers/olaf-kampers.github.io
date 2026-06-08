import { profile } from '../data/profile'
import { ChaosText } from './ChaosText'

type ContactSectionProps = {
    chaosEnabled: boolean
}

export function ContactSection({ chaosEnabled }: ContactSectionProps) {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 md:p-10">
        <p className="text-sm font-medium tracking-widest text-cyan-400">
            <ChaosText enabled={chaosEnabled}>CONTACT</ChaosText>
        </p>

        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            <ChaosText enabled={chaosEnabled}>Let’s have a coffee chat! ☕</ChaosText>
        </h2>

        <p className="mt-4 max-w-2xl leading-8 text-slate-400">
            <ChaosText enabled={chaosEnabled}>I’m interested in software engineering roles involving full-stack
          product development, backend systems, data infrastructure, and
          AI-powered applications.</ChaosText>
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={profile.links.email}
            className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Email me
          </a>

          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            LinkedIn
          </a>

          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}