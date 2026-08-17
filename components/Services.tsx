import { Photo } from '@/components/ui/Photo'
import { Reveal } from '@/components/ui/Reveal'
import { services } from '@/lib/constants'

export function Services() {
  return (
    <section id="services" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-amber-ink">
            What we do
          </p>
          <h2 className="font-display font-extrabold text-ink uppercase tracking-[-0.02em] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.02] mt-4 max-w-2xl">
            Six jobs, six prices, no surprises.
          </h2>
          <p className="font-body text-ink-soft mt-5 max-w-2xl leading-relaxed">
            Prices below are the starting point for a standard four-cylinder
            passenger car. Bigger engine, European, or something unusual under
            the bonnet and it moves — but you will see the real number before
            you agree to anything.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line mt-12 border border-line">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 0.08}>
              <article className="bg-panel h-full flex flex-col">
                {service.slot ? (
                  <Photo
                    slot={service.slot}
                    alt={`${service.name} — ${service.summary}`}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="w-full h-auto block border-b border-line"
                  />
                ) : null}

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display font-bold text-ink text-xl uppercase tracking-tight">
                      {service.name}
                    </h3>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-ink-mute whitespace-nowrap pt-1">
                      {service.duration}
                    </span>
                  </div>

                  <p className="font-body text-sm text-ink-soft leading-relaxed mt-3">
                    {service.summary}
                  </p>

                  <ul className="mt-5 space-y-2 flex-1">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="font-body text-sm text-ink-soft flex gap-2.5 leading-snug"
                      >
                        <span className="text-amber-ink font-bold shrink-0" aria-hidden="true">
                          /
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-baseline justify-between gap-4 mt-6 pt-5 border-t border-line">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
                      From
                    </span>
                    <span className="font-display font-extrabold text-ink text-2xl tabular-nums">
                      ${service.from}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="font-body text-sm text-ink-mute mt-6 max-w-2xl leading-relaxed">
            Parts are quoted separately and itemised. Prices include GST and the
            callout — there is no separate travel fee inside the service area.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
