import { AboutSection } from './components/AboutSection'
import { ChaosText } from './components/ChaosText'
import { ContactSection } from './components/ContactSection'
import { CredentialCard } from './components/CredentialCard'
import { education, certifications } from './data/credentials'
import { experience } from './data/experience'
import { FloatingControls } from './components/FloatingControls'
import { Footer } from './components/Footer'
import { HeroProfileCard } from './components/HeroProfileCard'
import { personalProjects } from './data/personalProjects'
import { PersonalProjectCard } from './components/PersonalProjectCard'
import { profile } from './data/profile'
import { projects } from './data/projects'
import { ProjectCard } from './components/ProjectCard'
import { publications } from './data/publications'
import { PublicationCard } from './components/PublicationCard'
import { TimelineItem } from './components/TimelineItem'
import { useState } from 'react'

function App() {
  const [chaosEnabled, setChaosEnabled] = useState(false)
  return (
    <main className="min-h-screen text-slate-100">
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-28 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <p className="mb-4 text-sm font-medium tracking-widest text-cyan-400">
            <ChaosText text="FULL-STACK SOFTWARE ENGINEER • AI-NATIVE" enabled={chaosEnabled} />
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
            <ChaosText text={profile.name} enabled={chaosEnabled} />
          </h1>

          <h2 className="mt-4 max-w-4xl text-3xl font-medium leading-tight md:text-5xl">
            <span className="text-slate-300">
              <ChaosText text={profile.headline} enabled={chaosEnabled} />
            </span>
            <span className="font-mono text-[#6A9955] text-2xl md:text-4xl">
              <ChaosText
                text=" // And having fun along the way!"
                enabled={chaosEnabled}
                highlight={{
                  word: 'fun',
                  color: '#fb923c',
                  onClick: () => setChaosEnabled(c => !c),
                }}
              />
            </span>
          </h2>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#experience"
              className="rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-700"
            >
              View Experience
            </a>
            <a
              href="#personal-projects"
              className="rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-700"
            >
              Personal Projects
            </a>
            <a
              href="#about"
              className="rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-700"
            >
              About Me
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-400">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-cyan-400"
            >
              GitHub ↗
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-cyan-400"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
        <HeroProfileCard />
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-medium tracking-widest text-cyan-400">Featured Projects</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Selected Production Systems</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-medium tracking-widest text-cyan-400">Experience</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Work history</h2>
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

      <section id="credentials" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-medium tracking-widest text-cyan-400">EDUCATION & PROFESSIONAL DEVELOPMENT</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Education & certifications</h2>
        <p className="mt-4 max-w-2xl leading-8 text-slate-400">
          Formal training across computer science, artificial intelligence, software
          engineering, and teaching.
        </p>
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-white">Academic background</h3>
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            {education.map((credential) => (
              <CredentialCard key={credential.title} credential={credential} />
            ))}
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-white">Professional certifications</h3>
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            {certifications.map((credential) => (
              <CredentialCard key={credential.title} credential={credential} />
            ))}
          </div>
        </div>
      </section>

      <section id="publications" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-medium tracking-widest text-cyan-400">RESEARCH & PUBLICATIONS</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Applied machine learning research</h2>
        <p className="mt-4 max-w-2xl leading-8 text-slate-400">
          Published research connecting anomaly detection, streaming data, and market
          surveillance in cryptocurrency trading environments.
        </p>
        <div className="mt-10">
          {publications.map((publication) => (
            <PublicationCard key={publication.title} publication={publication} />
          ))}
        </div>
      </section>

      <section id="personal-projects" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-medium tracking-widest text-cyan-400">PERSONAL PROJECTS</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Side projects and experiments</h2>
        <p className="mt-4 max-w-2xl leading-8 text-slate-400">
          Smaller projects exploring AI interfaces, backend systems, and product ideas.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {personalProjects.map((project) => (
            <PersonalProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <AboutSection />
      <ContactSection />
      <Footer />
      <FloatingControls />
    </main>
  )
}

export default App
