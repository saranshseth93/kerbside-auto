import type { Metadata } from 'next'
import { business, specNotice } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Brand System — Kerbside Auto (Example)',
  description:
    'The identity behind Kerbside Auto: mark, palette, type, van livery and paperwork. An example built by Pixel Pundit for a business that does not exist.',
}

/*
 * The brand system, shown the way it would be handed to a real client.
 *
 * Saffron & Co proved the studio can do brand for hospitality. This is the
 * same argument for a trade: the buyer is a mechanic or a sparkie, so the
 * system has to survive a vinyl cutter, a dusty invoice and a van doing 100
 * on the Monash — not just a screen.
 *
 * Two sections here that the café system does not have, because they are what
 * a tradie actually asks for: the van livery and the paperwork. A logo that
 * cannot be cut in one colour or read at forty metres is a logo that fails the
 * only test this customer cares about.
 *
 * Nothing is a mockup. The hexes are the CSS custom properties in globals.css
 * and the typefaces are the ones loaded in lib/fonts.ts, so this page cannot
 * drift from the site it documents without someone noticing.
 */

const palette = [
  { name: 'Paper', hex: '#F4F4F2', token: '--color-paper', use: 'Page ground. The workshop is bright, not moody.' },
  { name: 'Panel', hex: '#FFFFFF', token: '--color-panel', use: 'Cards, forms, anything raised off the page.' },
  { name: 'Slab', hex: '#E8E8E4', token: '--color-slab', use: 'Alternating bands and inset panels.' },
  { name: 'Ink', hex: '#14181F', token: '--color-ink', use: 'Headlines and the mark. Near-black, slightly blue.' },
  { name: 'Ink soft', hex: '#48505D', token: '--color-ink-soft', use: 'Body copy.' },
  { name: 'Ink mute', hex: '#5F6875', token: '--color-ink-mute', use: 'Captions and fine print.' },
  { name: 'Amber', hex: '#F2830C', token: '--color-amber', use: 'The signal colour. Buttons, the stripe, the van.' },
  { name: 'Amber ink', hex: '#A34F05', token: '--color-amber-ink', use: 'Amber that has to pass contrast on paper.' },
  { name: 'Amber soft', hex: '#FFF2E0', token: '--color-amber-soft', use: 'Highlight blocks behind amber text.' },
  { name: 'Steel', hex: '#1E3A5F', token: '--color-steel', use: 'Links and the second voice. Never competes with amber.' },
  { name: 'Go', hex: '#17795E', token: '--color-go', use: 'Booked, confirmed, paid. Used sparingly.' },
  { name: 'Line', hex: '#D6D6D0', token: '--color-line', use: 'Hairlines, table rules, dividers.' },
]

const type = [
  {
    face: 'Archivo',
    role: 'Headlines',
    css: 'font-display',
    weight: 'font-extrabold',
    sample: 'We come to you.',
    note: 'Heavy, tight, a little industrial. Set large and confident. Never below 18px, never used for body copy.',
  },
  {
    face: 'Inter',
    role: 'Body',
    css: 'font-body',
    weight: 'font-normal',
    sample:
      'A mobile mechanic who turns up when he says he will, does the job in your driveway, and sends the invoice the same day.',
    note: 'Does the reading. Everything a customer has to get through is set in this.',
  },
  {
    face: 'JetBrains Mono',
    role: 'Numbers & codes',
    css: 'font-mono',
    weight: 'font-medium',
    sample: '0400 000 000 · $189.00 · REGO 1ABC-234 · VIC 3121',
    note: 'Anything that reads as data. Tabular figures keep prices and quantities in a column on an invoice.',
  },
]

/** The mark: a wheel sitting on a kerb. Drawn once, used at every size. */
function Mark({ className = '', stroke = 'currentColor' }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      {/* the kerb — road, step up, footpath */}
      <path
        d="M2 38 H14 V30 H46"
        stroke={stroke}
        strokeWidth="4"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      {/* the wheel, sitting exactly on the raised kerb */}
      <circle cx="30" cy="21" r="9" stroke={stroke} strokeWidth="4" />
      <circle cx="30" cy="21" r="3" fill={stroke} />
    </svg>
  )
}

function Swatch({ name, hex, token, use }: (typeof palette)[number]) {
  return (
    <div className="border border-line bg-panel">
      <div className="h-20 border-b border-line" style={{ background: hex }} />
      <div className="p-4">
        <p className="font-body text-sm font-semibold text-ink">{name}</p>
        <p className="font-mono mt-1 text-xs text-amber-ink">{hex}</p>
        <p className="font-mono mt-1 break-all text-[10px] text-ink-mute">{token}</p>
        <p className="font-body mt-3 text-xs leading-relaxed text-ink-soft">{use}</p>
      </div>
    </div>
  )
}

export default function BrandPage() {
  return (
    <main className="min-h-screen bg-paper px-5 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber-ink">
          Brand system
        </p>
        <h1 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          Kerbside Auto
        </h1>
        <p className="font-body mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          One mark, twelve colours, three typefaces, and the rules that keep them
          working on a van door, an invoice and a phone screen. This is the whole
          system, in the form a client would receive it.
        </p>

        <div className="mt-8 border border-line bg-panel p-5">
          <p className="font-body text-sm leading-relaxed text-ink-soft">
            <span className="font-semibold text-ink">
              Kerbside Auto is not a real business.
            </span>{' '}
            We invented it so we&rsquo;d have something honest to show you. No car
            has ever been fixed by it. Built by{' '}
            <a
              href={specNotice.studioUrl}
              className="text-steel underline underline-offset-4 transition-colors hover:text-ink"
            >
              Pixel Pundit
            </a>
            .
          </p>
        </div>

        {/* ── The mark ── */}
        <section className="mt-20">
          <h2 className="font-display text-3xl tracking-tight text-ink">The mark</h2>
          <p className="font-body mt-4 max-w-2xl leading-relaxed text-ink-soft">
            A wheel sitting on a kerb. That is the whole business in one drawing —
            the van pulls up at your kerb and the work happens there. No spanner,
            no cog, no swoosh. Every mobile mechanic in the country uses a spanner.
          </p>
          <p className="font-body mt-4 max-w-2xl leading-relaxed text-ink-soft">
            It is built from four straight lines and two circles, on a square
            grid, with one stroke weight throughout. That is not minimalism for
            its own sake — it is what survives a vinyl cutter, an embroidery
            machine and a 16px browser tab.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {/* Primary lockup */}
            <div className="border border-line bg-panel p-6 sm:col-span-2">
              <div className="flex items-center gap-5">
                <Mark className="h-16 w-16 shrink-0 text-ink" />
                <div>
                  <p className="font-display text-2xl leading-none tracking-tight text-ink">
                    KERBSIDE
                  </p>
                  <p className="font-mono mt-1.5 text-[11px] uppercase tracking-[0.4em] text-amber-ink">
                    Auto
                  </p>
                </div>
              </div>
              <p className="font-mono mt-6 text-[10px] uppercase tracking-[0.2em] text-ink-mute">
                Primary lockup — the default
              </p>
            </div>

            {/* Icon */}
            <div className="border border-line bg-ink p-6">
              <div className="flex h-16 items-center justify-center">
                <Mark className="h-14 w-14 text-amber" />
              </div>
              <p className="font-mono mt-6 text-[10px] uppercase tracking-[0.2em] text-paper/60">
                Icon — avatar, favicon
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {/* Stacked */}
            <div className="border border-line bg-panel p-6">
              <div className="flex flex-col items-center text-center">
                <Mark className="h-12 w-12 text-ink" />
                <p className="font-display mt-3 text-lg leading-none tracking-tight text-ink">
                  KERBSIDE
                </p>
                <p className="font-mono mt-1 text-[9px] uppercase tracking-[0.4em] text-amber-ink">
                  Auto
                </p>
              </div>
              <p className="font-mono mt-6 text-[10px] uppercase tracking-[0.2em] text-ink-mute">
                Stacked — tight spaces
              </p>
            </div>

            {/* One colour */}
            <div className="border border-line bg-panel p-6">
              <div className="flex h-[68px] items-center justify-center">
                <Mark className="h-12 w-12 text-ink" />
              </div>
              <p className="font-mono mt-6 text-[10px] uppercase tracking-[0.2em] text-ink-mute">
                One colour — vinyl, stamps
              </p>
            </div>

            {/* Reversed */}
            <div className="border border-line bg-steel p-6">
              <div className="flex h-[68px] items-center justify-center">
                <Mark className="h-12 w-12 text-paper" />
              </div>
              <p className="font-mono mt-6 text-[10px] uppercase tracking-[0.2em] text-paper/60">
                Reversed — dark grounds
              </p>
            </div>
          </div>

          {/* Size test */}
          <div className="mt-4 border border-line bg-panel p-6">
            <div className="flex flex-wrap items-end gap-8">
              <div className="text-center">
                <Mark className="h-16 w-16 text-ink" />
                <p className="font-mono mt-2 text-[10px] text-ink-mute">64px</p>
              </div>
              <div className="text-center">
                <Mark className="h-8 w-8 text-ink" />
                <p className="font-mono mt-2 text-[10px] text-ink-mute">32px</p>
              </div>
              <div className="text-center">
                <Mark className="h-6 w-6 text-ink" />
                <p className="font-mono mt-2 text-[10px] text-ink-mute">24px</p>
              </div>
              <div className="text-center">
                <Mark className="h-4 w-4 text-ink" />
                <p className="font-mono mt-2 text-[10px] text-ink-mute">16px</p>
              </div>
              <p className="font-body max-w-xs text-xs leading-relaxed text-ink-soft">
                The same file at every size. If the hub fills in at 16px, the
                stroke is too heavy — that is the test the mark was drawn against.
              </p>
            </div>
          </div>
        </section>

        {/* ── Van livery ── */}
        <section className="mt-20">
          <h2 className="font-display text-3xl tracking-tight text-ink">Van livery</h2>
          <p className="font-body mt-4 max-w-2xl leading-relaxed text-ink-soft">
            For a mobile trade the van is the shopfront, and it is read at forty
            metres by someone driving past in the other direction. That rules out
            almost everything a logo can do on a screen.
          </p>
          <p className="font-body mt-4 max-w-2xl leading-relaxed text-ink-soft">
            Three things, in this order of size: what you do, the phone number,
            the name. A customer who needs a mechanic does not need the name
            first — they need to know you come to them, and how to call.
          </p>

          {/* Van panel */}
          <div className="mt-8 overflow-hidden border border-line bg-panel">
            <div className="bg-paper p-6 sm:p-10">
              {/* the side of the van */}
              <div className="relative overflow-hidden rounded-sm bg-panel shadow-sm ring-1 ring-line">
                {/* hazard stripe, straight off globals.css */}
                <div className="hazard-rule" />

                <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-9">
                  <div>
                    <p className="font-display text-2xl leading-[1.05] tracking-tight text-ink sm:text-4xl">
                      MOBILE MECHANIC
                    </p>
                    <p className="font-display mt-1 text-2xl leading-[1.05] tracking-tight text-amber sm:text-4xl">
                      WE COME TO YOU
                    </p>
                    <p className="font-mono mt-4 text-xl font-bold tracking-tight text-ink sm:text-3xl">
                      {business.phoneLabel}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:text-right">
                    <Mark className="h-12 w-12 shrink-0 text-ink sm:h-16 sm:w-16" />
                    <div>
                      <p className="font-display text-base leading-none tracking-tight text-ink sm:text-xl">
                        KERBSIDE
                      </p>
                      <p className="font-mono mt-1 text-[9px] uppercase tracking-[0.4em] text-amber-ink sm:text-[10px]">
                        Auto
                      </p>
                    </div>
                  </div>
                </div>

                <div className="hazard-rule" />
              </div>
            </div>

            <div className="border-t border-line bg-slab px-6 py-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
                Driver-side panel — white van, cut vinyl
              </p>
              <ul className="font-body mt-3 grid gap-2 text-xs leading-relaxed text-ink-soft sm:grid-cols-2">
                <li>
                  <span className="font-semibold text-ink">Two colours, no gradients.</span>{' '}
                  Amber and ink on the van&rsquo;s own white. Cut vinyl, not a
                  printed wrap — a fraction of the cost, and it can be patched.
                </li>
                <li>
                  <span className="font-semibold text-ink">
                    The number is the biggest thing after the offer.
                  </span>{' '}
                  Set in the mono face so digits stay even and legible at speed.
                </li>
                <li>
                  <span className="font-semibold text-ink">The stripe is the brand.</span>{' '}
                  The same hazard stripe runs across the top of the website. One
                  motif doing two jobs is what makes a system feel deliberate.
                </li>
                <li>
                  <span className="font-semibold text-ink">Nothing in the lower third.</span>{' '}
                  It is behind a wheel arch, splashed with mud, or hidden by a
                  parked car half the time.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Paperwork ── */}
        <section className="mt-20">
          <h2 className="font-display text-3xl tracking-tight text-ink">Paperwork</h2>
          <p className="font-body mt-4 max-w-2xl leading-relaxed text-ink-soft">
            The quote and the invoice are the two documents a customer actually
            keeps, and for most trades they are the weakest part of the brand — a
            default template from accounting software with a logo dropped in the
            corner. Here they are the same system as everything else.
          </p>

          <div className="mt-8 border border-line bg-panel">
            <div className="p-6 sm:p-10">
              <article className="mx-auto max-w-xl bg-panel ring-1 ring-line">
                <div className="hazard-rule" />

                <div className="flex items-start justify-between gap-4 border-b border-line p-6">
                  <div className="flex items-center gap-3">
                    <Mark className="h-10 w-10 shrink-0 text-ink" />
                    <div>
                      <p className="font-display text-lg leading-none tracking-tight text-ink">
                        KERBSIDE
                      </p>
                      <p className="font-mono mt-1 text-[9px] uppercase tracking-[0.4em] text-amber-ink">
                        Auto
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
                      Tax invoice
                    </p>
                    <p className="font-mono mt-1 text-sm font-bold text-ink">KA-0412</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 border-b border-line p-6">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-mute">
                      Billed to
                    </p>
                    <p className="font-body mt-2 text-sm text-ink">A. Whitlam</p>
                    <p className="font-body text-xs text-ink-soft">
                      14 Barkly St, Brunswick VIC 3056
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-mute">
                      Vehicle
                    </p>
                    <p className="font-mono mt-2 text-sm text-ink">1ABC-234</p>
                    <p className="font-body text-xs text-ink-soft">
                      2016 Mazda 3 · 98,412 km
                    </p>
                  </div>
                </div>

                <table className="w-full">
                  <thead>
                    <tr className="border-b border-line">
                      <th className="font-mono px-6 py-3 text-left text-[9px] uppercase tracking-[0.2em] text-ink-mute">
                        Item
                      </th>
                      <th className="font-mono px-6 py-3 text-right text-[9px] uppercase tracking-[0.2em] text-ink-mute">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-sm text-ink-soft">
                    <tr className="border-b border-line/60">
                      <td className="px-6 py-3">Logbook service — 100,000 km</td>
                      <td className="font-mono px-6 py-3 text-right tabular-nums text-ink">
                        320.00
                      </td>
                    </tr>
                    <tr className="border-b border-line/60">
                      <td className="px-6 py-3">Front brake pads, fitted</td>
                      <td className="font-mono px-6 py-3 text-right tabular-nums text-ink">
                        240.00
                      </td>
                    </tr>
                    <tr className="border-b border-line/60">
                      <td className="px-6 py-3">Oil and filter</td>
                      <td className="font-mono px-6 py-3 text-right tabular-nums text-ink">
                        95.00
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="bg-amber-soft">
                      <td className="font-display px-6 py-4 text-base tracking-tight text-ink">
                        Total
                      </td>
                      <td className="font-mono px-6 py-4 text-right text-base font-bold tabular-nums text-ink">
                        $655.00
                      </td>
                    </tr>
                  </tfoot>
                </table>

                <div className="border-t border-line p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-go">
                    Paid — thanks, Anne
                  </p>
                  <p className="font-body mt-2 text-xs leading-relaxed text-ink-mute">
                    {business.name} · {business.abnLabel} · {business.phoneLabel}{' '}
                    · {business.email}
                  </p>
                </div>
              </article>
            </div>

            <div className="border-t border-line bg-slab px-6 py-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
                Tax invoice — A4, prints in one pass
              </p>
              <ul className="font-body mt-3 grid gap-2 text-xs leading-relaxed text-ink-soft sm:grid-cols-2">
                <li>
                  <span className="font-semibold text-ink">
                    The total is the loudest thing on the page.
                  </span>{' '}
                  It is the number the customer is looking for, so it gets the
                  amber block and the heaviest weight. Hiding it reads as evasive.
                </li>
                <li>
                  <span className="font-semibold text-ink">Amounts are tabular figures.</span>{' '}
                  Every digit takes the same width, so the decimal points line up
                  down the column without a single alignment hack.
                </li>
                <li>
                  <span className="font-semibold text-ink">The quote is this document.</span>{' '}
                  Same layout, the header reads QUOTE, the total says
                  &ldquo;estimate&rdquo; and the footer carries the expiry date.
                  One template, two jobs.
                </li>
                <li>
                  <span className="font-semibold text-ink">It prints in black and white.</span>{' '}
                  The stripe and the amber block still read as grey bands. A
                  customer&rsquo;s printer is not something to wish away.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Palette ── */}
        <section className="mt-20">
          <h2 className="font-display text-3xl tracking-tight text-ink">Palette</h2>
          <p className="font-body mt-4 max-w-2xl leading-relaxed text-ink-soft">
            Amber does the signalling and everything else gets out of its way. The
            dark is a blue-black rather than a true black, so it sits with the
            steel instead of fighting it.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {palette.map((c) => (
              <Swatch key={c.token} {...c} />
            ))}
          </div>
          <p className="font-body mt-6 max-w-2xl text-xs leading-relaxed text-ink-mute">
            Amber at <span className="font-mono">#F2830C</span> is a signal colour,
            not a text colour — on paper it fails contrast at small sizes. Amber
            ink at <span className="font-mono">#A34F05</span> exists for that, and
            is the only one of the two allowed to carry small type.
          </p>
        </section>

        {/* ── Type ── */}
        <section className="mt-20">
          <h2 className="font-display text-3xl tracking-tight text-ink">Type</h2>
          <p className="font-body mt-4 max-w-2xl leading-relaxed text-ink-soft">
            Three faces, one job each. All three are free and open-source, so there
            is no licence to renew and no invoice arriving in a year for a font.
          </p>
          <div className="mt-8 space-y-4">
            {type.map((t) => (
              <div key={t.face} className="border border-line bg-panel p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-body text-sm font-semibold text-ink">{t.face}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-ink">
                    {t.role}
                  </p>
                </div>
                <p className={`${t.css} ${t.weight} mt-5 text-2xl leading-snug text-ink`}>
                  {t.sample}
                </p>
                <p className="font-body mt-4 text-xs leading-relaxed text-ink-soft">
                  {t.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Rules ── */}
        <section className="mt-20">
          <h2 className="font-display text-3xl tracking-tight text-ink">The rules</h2>
          <p className="font-body mt-4 max-w-2xl leading-relaxed text-ink-soft">
            A brand guide is only useful where it says no. These are the six that
            actually get broken.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              [
                'Never stretch the mark.',
                'Scale it from a corner, both axes together. A squashed wheel is the fastest way to look cheap.',
              ],
              [
                'Keep one wheel of clear space.',
                'Nothing enters the box around the mark — not the phone number, not the edge of the van door.',
              ],
              [
                'Amber is a signal, not a decoration.',
                'One amber thing per view. Two amber things means neither of them is urgent.',
              ],
              [
                'Never put the mark on a photo.',
                'It is a line drawing. Put it on paper, ink, steel or the van, never on a busy background.',
              ],
              [
                'The stripe keeps its angle.',
                'Forty-five degrees, ink and amber, never rounded and never re-coloured. It reads as hazard tape because it is drawn like hazard tape.',
              ],
              [
                'Do not add a spanner.',
                'Someone will ask. The answer is no — the mark already says mobile mechanic, and every competitor has the spanner.',
              ],
            ].map(([rule, why]) => (
              <div key={rule} className="border border-line bg-panel p-5">
                <p className="font-body text-sm font-semibold text-ink">{rule}</p>
                <p className="font-body mt-2 text-xs leading-relaxed text-ink-soft">{why}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="mt-20 border-t border-line pt-10 text-center">
          <p className="font-display text-2xl tracking-tight text-ink">
            {specNotice.ctaLabel}
          </p>
          <p className="font-body mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
            This whole system — mark, colours, type, van, paperwork — is what a
            brand build produces. {specNotice.ctaText}
          </p>
          <a
            href={specNotice.ctaHref}
            className="mt-6 inline-block bg-ink px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition-colors hover:bg-amber hover:text-ink"
          >
            {specNotice.ctaButton}
          </a>
        </section>
      </div>
    </main>
  )
}
