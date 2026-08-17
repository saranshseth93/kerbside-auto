import { specNotice } from '@/lib/constants'

/** Permanent. A visitor should know this is a spec build before they read a price. */
export function SpecNoticeBar() {
  return (
    <div className="bg-ink text-paper">
      <p className="mx-auto max-w-7xl px-5 py-2 font-mono text-[11px] tracking-wide text-center">
        <span className="font-bold uppercase text-amber">{specNotice.short}</span>
        <span className="hidden sm:inline text-paper/80">
          {' '}— a spec build by{' '}
          <a
            href={specNotice.studioUrl}
            className="underline underline-offset-2 hover:text-amber transition-colors"
          >
            {specNotice.studio}
          </a>
          . Kerbside Auto is not a real workshop.
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
          Photography is royalty-free and credited in{' '}
          <a
            href={specNotice.creditsUrl}
            className="text-steel underline underline-offset-4 hover:text-ink transition-colors"
          >
            CREDITS.md
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
