import { about } from '../data/about'

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-sm font-medium tracking-widest text-cyan-400">
        ABOUT ME
      </p>

      <div className="mt-3 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            A little beyond the résumé.
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-400">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            Things I care about
          </h3>

          <div className="mt-5 flex flex-wrap gap-2">
            {about.interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full bg-slate-800 px-3 py-2 text-sm font-medium text-slate-300"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14">
        <h3 className="text-xl font-semibold text-white">Outside of work</h3>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {about.outsideWork.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/30"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h4 className="text-lg font-semibold text-white">
                  {item.title}
                </h4>

                <p className="mt-3 leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}