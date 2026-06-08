export function HeroProfileCard() {
    const stats = [
      '5+ years production experience',
      'Published AI/ML research',
      'Full-stack systems engineering',
      'Data pipelines & modernization',
    ]
  
    return (
      <aside className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 shadow-2xl shadow-cyan-950/20">
        <div className="mt-6">
            <div className="flex items-start gap-5">
                <img
                    src="/olaf.png"
                    alt="Olaf Kampers"
                    className="h-20 w-20 shrink-0 rounded-3xl object-cover ring-2 ring-cyan-400/30"
                />

                <div className="pt-1">
                    <p className="text-sm font-medium text-cyan-400">
                    Full-Stack Software Engineer
                    </p>

                    <h2 className="mt-2 text-2xm font-semibold leading-tight text-white">
                    Systems, data, and AI-native engineering.
                    </h2>
                </div>
            </div>

            <p className="mt-6 leading-7 text-slate-400">
                Based in <b>San Francisco</b>, focused on reliable software for complex
                operational environments.
            </p>
        </div>
  
        <div className="mt-7 space-y-3">
          {stats.map((stat) => (
            <div
              key={stat}
              className="rounded-2xl border border-slate-800 bg-slate-950/50 px-4 py-3 text-sm text-slate-300"
            >
              {stat}
            </div>
          ))}
        </div>
      </aside>
    )
  }