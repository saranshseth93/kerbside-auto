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

        {/*
          A bento, not six equal cards.

          Three equal columns is the default every generated site lands on,
          and it was making this page interchangeable with the other demos in
          the portfolio. An asymmetric grid gives the two jobs people actually
          search for — a logbook service and brakes — room to show their
          photograph properly, while the rest stay compact. Tiles vary in
          content as well as size: the wide ones carry the full inclusions
          list, the small ones lead with the price.

          It collapses to one column below md, where an asymmetric grid has no
          width to be asymmetric in.
        */}
        {/* items-start so tiles size to their content. Stretched to a shared
            row height the compact ones were mostly empty space under a short
            paragraph, which is the opposite of what a bento is for. */}
        <div className="grid gap-5 mt-12 md:grid-cols-2 lg:grid-cols-4 lg:items-start">
          {services.map((service, i) => {
            // 0 and 3 are the anchor tiles; the rest fill in around them.
            const wide = i === 0 || i === 3
            return (
              <Reveal
                key={service.id}
                delay={Math.min(i, 4) * 0.06}
                className={wide ? 'lg:col-span-2' : ''}
              >
                <article className="lift bg-panel h-full flex flex-col border border-line">
                  {service.slot ? (
                    <Photo
                      slot={service.slot}
                      alt={`${service.name} — ${service.summary}`}
                      sizes={
                        wide
                          ? '(min-width: 768px) 50vw, 100vw'
                          : '(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw'
                      }
                      className={`w-full block border-b border-line object-cover ${
                        wide ? 'h-56 lg:h-64' : 'h-40'
                      }`}
                    />
                  ) : null}

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3
                        className={`font-display font-bold text-ink uppercase tracking-tight ${
                          wide ? 'text-2xl' : 'text-lg'
                        }`}
                      >
                        {service.name}
                      </h3>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-ink-mute whitespace-nowrap pt-1">
                        {service.duration}
                      </span>
                    </div>

                    <p className="font-body text-sm text-ink-soft leading-relaxed mt-3">
                      {service.summary}
                    </p>

                    {/* Only the anchor tiles carry the full list; at a quarter
                        width the compact ones would become a wall of text. */}
                    {wide ? (
                      <ul className="mt-5 space-y-2 flex-1 sm:columns-2 sm:gap-6">
                        {service.includes.map((item) => (
                          <li
                            key={item}
                            className="font-body text-sm text-ink-soft flex gap-2.5 leading-snug break-inside-avoid"
                          >
                            <span
                              className="text-amber-ink font-bold shrink-0"
                              aria-hidden="true"
                            >
                              /
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="flex-1" />
                    )}

                    <div className="flex items-baseline justify-between gap-4 mt-6 pt-5 border-t border-line">
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
                        From
                      </span>
                      <span
                        className={`font-display font-extrabold text-ink tabular-nums ${
                          wide ? 'text-3xl' : 'text-2xl'
                        }`}
                      >
                        ${service.from}
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
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
