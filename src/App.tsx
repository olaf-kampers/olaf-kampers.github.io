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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_35%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-28 lg:grid-cols-[1.4fr_0.8fr]">
          {/* your existing hero content goes here */}
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-28 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <p className="mb-4 text-sm font-medium tracking-widest text-cyan-400">
            <ChaosText enabled={chaosEnabled}>FULL-STACK SOFTWARE ENGINEER • AI-NATIVE</ChaosText>
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
            <ChaosText enabled={chaosEnabled}>{profile.name}</ChaosText>
          </h1>

          <h2 className="mt-4 max-w-4xl text-3xl font-medium leading-tight text-slate-300 md:text-5xl">
            <ChaosText enabled={chaosEnabled}>{profile.headline}</ChaosText>
          </h2>

          <div className="mt-10 flex flex-wrap gap-4">
            <ChaosText enabled={chaosEnabled}>
              <a 
                href="#experience" 
                className="rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-700"
              >
                View Experience
              </a>
            </ChaosText>
            <ChaosText enabled={chaosEnabled}>
              <a 
                href="#personal-projects" 
                className="rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-700"
              >
                Personal Projects
              </a>
            </ChaosText>
            <ChaosText enabled={chaosEnabled}>
              <a 
                href="#about" 
                className="rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-700"
              >
                About Me
              </a>
            </ChaosText>

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
        <ChaosText enabled={chaosEnabled}><HeroProfileCard /></ChaosText>
      </section>
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-medium tracking-widest text-cyan-400">
          <ChaosText enabled={chaosEnabled}>Featured Projects</ChaosText>
        </p>

        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          <ChaosText enabled={chaosEnabled}>Selected Production Systems</ChaosText>
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ChaosText enabled={chaosEnabled}><ProjectCard key={project.title} project={project} /></ChaosText>
          ))}
        </div>
      </section>
      <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-medium tracking-widest text-cyan-400">
          <ChaosText enabled={chaosEnabled}>Experience</ChaosText>
        </p>

        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          <ChaosText enabled={chaosEnabled}>Work history</ChaosText>
        </h2>

        <p className="mt-4 max-w-2xl leading-8 text-slate-400">
          <ChaosText enabled={chaosEnabled}>A timeline of engineering, research, and product work across production
          systems, financial workflows, infrastructure, and machine learning.</ChaosText>
        </p>

        <div className="mt-12">
          {experience.map((item) => (
            <ChaosText enabled={chaosEnabled}><TimelineItem key={`${item.company}-${item.period}`} item={item} /></ChaosText>
          ))}
        </div>
      </section>
      <section id="credentials" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-medium tracking-widest text-cyan-400">
          <ChaosText enabled={chaosEnabled}>EDUCATION & PROFESSIONAL DEVELOPMENT</ChaosText>
        </p>

        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          <ChaosText enabled={chaosEnabled}>Education & certifications</ChaosText>
        </h2>

        <p className="mt-4 max-w-2xl leading-8 text-slate-400">
          <ChaosText enabled={chaosEnabled}>Formal training across computer science, artificial intelligence, software
          engineering, and teaching.</ChaosText>
        </p>

        <div className="mt-10">
          <h3 className="text-lg font-semibold text-white"><ChaosText enabled={chaosEnabled}>Academic background</ChaosText></h3>

          <div className="mt-5 grid gap-6 md:grid-cols-3">
            {education.map((credential) => (
              <ChaosText enabled={chaosEnabled}><CredentialCard key={credential.title} credential={credential} /></ChaosText>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-semibold text-white">
            <ChaosText enabled={chaosEnabled}>Professional certifications</ChaosText>
          </h3>

          <div className="mt-5 grid gap-6 md:grid-cols-3">
            {certifications.map((credential) => (
              <ChaosText enabled={chaosEnabled}><CredentialCard key={credential.title} credential={credential} /></ChaosText>
            ))}
          </div>
        </div>
      </section>
      <section id="publications" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-medium tracking-widest text-cyan-400">
          <ChaosText enabled={chaosEnabled}>RESEARCH & PUBLICATIONS</ChaosText>
        </p>

        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          <ChaosText enabled={chaosEnabled}>Applied machine learning research</ChaosText>
        </h2>

        <p className="mt-4 max-w-2xl leading-8 text-slate-400">
          <ChaosText enabled={chaosEnabled}>Published research connecting anomaly detection, streaming data, and market
          surveillance in cryptocurrency trading environments.</ChaosText>
        </p>

        <div className="mt-10">
          {publications.map((publication) => (
            <ChaosText enabled={chaosEnabled}><PublicationCard key={publication.title} publication={publication} /></ChaosText>
          ))}
        </div>
      </section>
      <section id="personal-projects" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-medium tracking-widest text-cyan-400">
          <ChaosText enabled={chaosEnabled}>PERSONAL PROJECTS</ChaosText>
        </p>

        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          <ChaosText enabled={chaosEnabled}>Side projects and experiments</ChaosText>
        </h2>

        <p className="mt-4 max-w-2xl leading-8 text-slate-400">
          <ChaosText enabled={chaosEnabled}>Smaller projects exploring AI interfaces, backend systems, and product ideas.</ChaosText>
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {personalProjects.map((project) => (
            <ChaosText enabled={chaosEnabled}><PersonalProjectCard key={project.title} project={project} /></ChaosText>
          ))}
        </div>
      </section>
      <AboutSection 
        chaosEnabled={chaosEnabled}
      />
      <ContactSection
        chaosEnabled={chaosEnabled}
      />
      <Footer/>
      <FloatingControls
        chaosEnabled={chaosEnabled}
        onToggleChaos={() => setChaosEnabled((current) => !current)}
      />
    </main>
  )
}

export default App