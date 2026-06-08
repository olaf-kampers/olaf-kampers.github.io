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
          Engineering for complex systems and practical outcomes
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-400">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="h-fit rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                Interests
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

            <div className="mt-8 border-t border-slate-800 pt-6">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                Currently exploring
                </h4>

                <ul className="mt-4 space-y-3 text-sm text-slate-400">
                    {about.current.map((activity, index) => (
                        <li key={index}>{activity}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-8 border-t border-slate-800 pt-6">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                Based in
                </h4>

                <p className="mt-3 text-sm text-slate-400">
                San Francisco, CA, United States
                </p>
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