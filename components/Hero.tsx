import { Photo } from '@/components/ui/Photo'
import { business, capabilities } from '@/lib/constants'

export function Hero() {
  return (
    <section id="top" className="relative bg-paper">
      <div className="absolute inset-0 blueprint-grid opacity-[0.5]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-0 lg:pt-24">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-end">
          <div className="pb-16 lg:pb-24">
            <p className="inline-flex items-center gap-2 bg-amber-soft border border-amber/40 px-3 py-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full bg-go"
                aria-hidden="true"
              />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink">
                Taking bookings · Mon to Sat
              </span>
            </p>

            <h1 className="font-display font-extrabold text-ink tracking-[-0.03em] leading-[0.92] text-[clamp(2.9rem,7.5vw,5.5rem)] mt-6 uppercase">
              We come
              <br />
              to you.
            </h1>

            <p className="font-body text-lg text-ink-soft leading-relaxed mt-6 max-w-lg">
              Servicing, brakes, batteries and pre-purchase inspections, done in
              your driveway across Melbourne&apos;s inner north. Quoted before we
              start. No tow, no courtesy car, no day off work.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#book"
                className="bg-ink text-paper font-display font-bold uppercase tracking-wide px-6 py-4 hover:bg-amber hover:text-ink transition-colors"
              >
                Get a fixed quote
              </a>
              <a
                href={business.phoneHref}
                className="border-2 border-ink text-ink font-display font-bold uppercase tracking-wide px-6 py-4 hover:bg-ink hover:text-paper transition-colors"
              >
                {business.phoneLabel}
              </a>
            </div>
          </div>

          {/* Photo sits flush to the section base so the hazard rule cuts it off */}
          <div className="relative -mb-px">
            <div className="parallax relative border-2 border-ink bg-panel">
              <Photo
                slot="hero"
                alt="A mechanic working on a car engine"
                sizes="(min-width: 1024px) 52vw, 116vw"
                priority
                className="parallax-img w-full h-auto block"
              />
              <div className="absolute -top-px -left-px bg-amber px-3 py-1.5">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-ink">
                  {business.suburb} · {business.city}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hazard-rule" />

      {/* Capability strip — what the service is, not what anyone thinks of it */}
      <div className="bg-ink">
        <ul className="mx-auto max-w-7xl px-5 grid sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap) => (
            <li
              key={cap.label}
              className="py-6 lg:px-6 first:lg:pl-0 last:lg:pr-0 border-b sm:border-b-0 border-paper/15 sm:border-r last:border-r-0 last:border-b-0"
            >
              <p className="font-display font-bold text-amber uppercase tracking-wide text-sm">
                {cap.label}
              </p>
              <p className="font-body text-sm text-paper/70 leading-relaxed mt-1.5">
                {cap.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
