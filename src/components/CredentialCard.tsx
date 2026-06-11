type Credential = {
    title: string
    institution: string
    period: string
    type: string
    details: string[]
    logo?: string
  }
  
  type CredentialCardProps = {
    credential: Credential
  }
  
  export function CredentialCard({ credential }: CredentialCardProps) {
    return (
      <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
        <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-medium text-ocean-light">
              {credential.type}
            </p>

            <h3 className="mt-3 text-xl font-semibold text-ocean-cream">
              {credential.title}
            </h3>
  
            <p className="mt-1 text-slate-400">{credential.institution}</p>
          </div>
  
            <div className="flex shrink-0 flex-col gap-3 sm:items-end">
                <p className="text-sm text-slate-500 sm:text-right">
                    {credential.period}
                </p>

                {credential.logo && (
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-950">
                    <img
                      src={credential.logo}
                      alt={`${credential.institution} logo`}
                      className="h-7 w-7 rounded-md object-contain"
                    />
                  </div>
                )}
            </div>
        </div>
  
        <ul className="mt-5 space-y-2 text-sm text-slate-400">
          {credential.details.map((detail) => (
            <li key={detail} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ocean-light" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </article>
    )
  }