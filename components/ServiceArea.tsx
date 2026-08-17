'use client'

import { useMemo, useState } from 'react'
import { Photo } from '@/components/ui/Photo'
import { serviceArea, business } from '@/lib/constants'

type Result =
  | { kind: 'idle' }
  | { kind: 'invalid' }
  | { kind: 'covered'; suburb: string; postcode: string }
  | { kind: 'outside'; postcode: string }

/**
 * Postcode checker.
 *
 * A real lookup against the service-area list in constants, not a mocked
 * "yes we cover you" for every input — the "outside the area" answer is the
 * one that actually matters to a caller, so it has to be reachable.
 */
export function ServiceArea() {
  const [postcode, setPostcode] = useState('')
  const [result, setResult] = useState<Result>({ kind: 'idle' })

  const suburbs = useMemo(
    () => Object.entries(serviceArea).sort((a, b) => a[1].localeCompare(b[1])),
    []
  )

  function check(e: React.FormEvent) {
    e.preventDefault()
    const value = postcode.trim()

    if (!/^\d{4}$/.test(value)) {
      setResult({ kind: 'invalid' })
      return
    }

    const suburb = serviceArea[value]
    setResult(
      suburb
        ? { kind: 'covered', suburb, postcode: value }
        : { kind: 'outside', postcode: value }
    )
  }

  return (
    <section id="area" className="bg-slab py-20 lg:py-28 border-y border-line">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-amber-ink">
              Service area
            </p>
            <h2 className="font-display font-extrabold text-ink uppercase tracking-[-0.02em] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.02] mt-4">
              Are we
              <br />
              near you?
            </h2>
            <p className="font-body text-ink-soft mt-5 leading-relaxed max-w-lg">
              We work across Melbourne&apos;s inner north and east. Put your
              postcode in and find out in one click, rather than ringing to be
              told no.
            </p>

            <form onSubmit={check} className="mt-8" noValidate>
              <label
                htmlFor="postcode"
                className="block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute"
              >
                Your postcode
              </label>
              <div className="flex gap-2 mt-2">
                <input
                  id="postcode"
                  name="postcode"
                  type="text"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  maxLength={4}
                  value={postcode}
                  onChange={(e) => {
                    setPostcode(e.target.value.replace(/\D/g, ''))
                    setResult({ kind: 'idle' })
                  }}
                  placeholder="3072"
                  aria-describedby="postcode-result"
                  className="w-36 bg-panel border-2 border-ink px-4 py-3 font-mono text-lg tabular-nums text-ink focus:outline-none focus:border-amber placeholder:text-ink-mute/60"
                />
                <button
                  type="submit"
                  className="bg-ink text-paper font-display font-bold uppercase tracking-wide px-6 hover:bg-amber hover:text-ink transition-colors"
                >
                  Check
                </button>
              </div>

              <div
                id="postcode-result"
                role="status"
                aria-live="polite"
                className="mt-4 min-h-16"
              >
                {result.kind === 'invalid' ? (
                  <p className="font-body text-sm text-ink-soft border-l-4 border-ink-mute pl-4 py-2">
                    That is not a four-digit postcode. Try again.
                  </p>
                ) : null}

                {result.kind === 'covered' ? (
                  <div className="border-l-4 border-go bg-panel pl-4 pr-4 py-3">
                    <p className="font-display font-bold text-ink uppercase">
                      Yes — {result.suburb} is in the area
                    </p>
                    <p className="font-body text-sm text-ink-soft mt-1">
                      No callout fee to {result.postcode}. Usually same week,
                      often next day.
                    </p>
                  </div>
                ) : null}

                {result.kind === 'outside' ? (
                  <div className="border-l-4 border-amber bg-panel pl-4 pr-4 py-3">
                    <p className="font-display font-bold text-ink uppercase">
                      Not on the regular run
                    </p>
                    <p className="font-body text-sm text-ink-soft mt-1">
                      {result.postcode} is outside the standard area. Give us a
                      ring on{' '}
                      <a
                        href={business.phoneHref}
                        className="text-steel underline underline-offset-2"
                      >
                        {business.phoneLabel}
                      </a>{' '}
                      — if we are already out that way we will often still do it.
                    </p>
                  </div>
                ) : null}
              </div>
            </form>
          </div>

          <div className="border-2 border-ink bg-panel">
            <Photo
              slot="van"
              alt="A work van parked on a suburban street"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="w-full h-auto block"
            />
            <div className="p-6 border-t-2 border-ink">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
                Suburbs covered
              </p>
              <ul className="flex flex-wrap gap-x-3 gap-y-1.5 mt-3">
                {suburbs.map(([code, suburb]) => (
                  <li
                    key={code}
                    className="font-body text-sm text-ink-soft after:content-['·'] after:ml-3 after:text-ink-mute/50 last:after:content-['']"
                  >
                    {suburb}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
