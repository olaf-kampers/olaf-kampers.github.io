export function HeroProfileCard() {
    const stats = [
      '7+ years production experience',
      'Published AI/ML research',
      'Full-stack systems engineering',
      'Data pipelines & modernization',
    ]
  
    return (
        <div className="group relative rounded-3xl">
            <svg
                className="pointer-events-none absolute inset-0 h-full w-full rounded-3xl"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <rect
                    x="1"
                    y="1"
                    width="98"
                    height="98"
                    rx="6"
                    ry="6"
                    fill="none"
                    stroke="rgba(238, 108, 77, 0.55)"
                    strokeWidth="0.4"
                    strokeLinecap="round"
                    strokeDasharray="6 10"
                    className="electric-border"
                />
            </svg>

            <aside className="
                relative
                rounded-3xl
                border
                border-slate-800
                group-hover:border-ocean-red/20
                group-hover:shadow-[0_0_40px_rgba(238,108,77,0.12)]
                bg-slate-900/60
                p-8
                backdrop-blur-sm
                transition-all
                duration-300
                ease-out
                group-hover:bg-ocean-red/10
            ">
                <div className="mt-6">
                    <div className="flex items-start gap-5">
                        <img
                            src="/olaf.png"
                            alt="Olaf Kampers"
                            className="h-20 w-20 shrink-0 rounded-3xl object-cover ring-2 ring-ocean-red/60"
                        />

                        <div className="pt-1">
                            <p className="text-sm font-medium text-ocean-cream">
                            Full-Stack Software Engineer
                            </p>

                            <h2 className="mt-2 text-2xm font-semibold leading-tight text-slate-400">
                            Systems, data, and AI-native engineering.
                            </h2>
                        </div>
                    </div>

                    <p className="mt-6 leading-7 text-ocean-cream">
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
        </div>
    )
  }