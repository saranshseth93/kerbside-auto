import { specNotice } from '@/lib/constants'

/** Permanent. A visitor should know this is an example before they read a price. */
export function SpecNoticeBar() {
  return (
    <div className="bg-ink text-paper">
      <p className="mx-auto max-w-7xl px-5 py-2 font-mono text-[11px] tracking-wide text-center">
        <span className="font-bold uppercase text-amber">{specNotice.short}</span>
        <span className="hidden sm:inline text-paper/80">
          {' '}— {specNotice.bar}{' '}
          <a
            href={specNotice.studioUrl}
            className="underline underline-offset-2 hover:text-amber transition-colors"
          >
            {specNotice.studio}
          </a>
        </span>
      </p>
    </div>
  )
}

export function SpecNoticeFooter() {
  return (
    <aside aria-label="About this site" className="bg-slab border-t border-line">
      <div className="mx-auto max-w-3xl px-5 py-14 text-center">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.28em] text-amber-ink">
          About this site
        </h2>
        <p className="font-body text-sm text-ink-soft leading-relaxed mt-4">
          {specNotice.long}
        </p>
        <p className="font-body text-sm text-ink-soft leading-relaxed mt-4">
          {specNotice.honesty}
        </p>

        <div className="mt-10 border-t border-line pt-8">
          <p className="font-display text-lg text-ink">{specNotice.ctaLabel}</p>
          <p className="font-body text-sm text-ink-soft leading-relaxed mt-2">
            {specNotice.ctaText}
          </p>
          <a
            href={specNotice.ctaHref}
            className="mt-5 inline-block bg-ink px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-paper hover:bg-amber hover:text-ink transition-colors"
          >
            {specNotice.ctaButton}
          </a>
        </div>

        <p className="font-body text-xs text-ink-soft leading-relaxed mt-8">
          Photos are royalty-free and{' '}
          <a
            href={specNotice.creditsUrl}
            className="text-steel underline underline-offset-4 hover:text-ink transition-colors"
          >
            credited here
          </a>
          . Built by{' '}
          <a
            href={specNotice.studioUrl}
            className="text-steel underline underline-offset-4 hover:text-ink transition-colors"
          >
            {specNotice.studio}
          </a>
          .
        </p>
      </div>
    </aside>
  )
}
