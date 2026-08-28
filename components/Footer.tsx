import { business } from '@/lib/constants'

/**
 * Two blocks, not four columns.
 *
 * This was a four-column link farm — brand, a copy of the nav, an unlinked
 * list of services, contact — and the other two demos had the same one.
 * Nothing is lost by cutting it: the nav is a sticky bar three scrolls up,
 * and the services were plain text that linked nowhere.
 *
 * What is left is what a mobile mechanic's footer is for: who you are ringing
 * and the number to ring.
 */
export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="hazard-rule" />
      <div className="mx-auto max-w-7xl px-5 py-14 flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display font-extrabold uppercase tracking-tight text-lg">
            {business.name}
          </p>
          <p className="font-body text-sm text-paper/60 mt-2 leading-relaxed">
            {business.tagline}
            <br />
            {business.suburb}, {business.city}
          </p>
          <p className="font-mono text-[11px] text-paper/55 mt-3">
            {business.abnLabel}
          </p>
        </div>

        {/* The number, at the size a number should be when the whole service
            is "we come to you". */}
        <div className="sm:text-right">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber">
            Book it in
          </p>
          <a
            href={business.phoneHref}
            className="press block font-display font-extrabold text-3xl sm:text-4xl tracking-tight mt-2 hover:text-amber"
          >
            {business.phoneLabel}
          </a>
          <p className="font-mono text-sm text-paper/70 mt-2">{business.email}</p>
        </div>
      </div>

      <div className="border-t border-paper/15">
        <p className="mx-auto max-w-7xl px-5 py-6 font-body text-xs text-paper/55">
          {business.name} is a made-up business. This site is an example of the
          kind of site Pixel Pundit builds.
        </p>
      </div>
    </footer>
  )
}
