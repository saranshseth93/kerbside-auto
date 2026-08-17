'use client'

import { useState } from 'react'
import { business, services, hours } from '@/lib/constants'

/**
 * Inert by design.
 *
 * Kerbside Auto cannot service anyone's car, so this form demonstrates the
 * booking flow and then says plainly that nothing was submitted. No data
 * leaves the page and no third-party endpoint is called.
 */
export function Booking() {
  const [sent, setSent] = useState(false)

  const field =
    'w-full bg-panel border-2 border-line px-4 py-3 font-body text-ink focus:outline-none focus:border-ink placeholder:text-ink-mute/70'
  const label =
    'block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute mb-2'

  return (
    <section id="book" className="bg-slab py-20 lg:py-28 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-amber-ink">
            Book it in
          </p>
          <h2 className="font-display font-extrabold text-ink uppercase tracking-[-0.02em] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.02] mt-4">
            Tell us the car
            <br />
            and the problem.
          </h2>
          <p className="font-body text-ink-soft mt-5 max-w-lg leading-relaxed">
            We come back with a fixed price and a time window. If we cannot help,
            we will say so and point you at someone who can.
          </p>

          <form
            className="mt-10 grid sm:grid-cols-2 gap-5"
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
          >
            <div>
              <label className={label} htmlFor="name">
                Name
              </label>
              <input id="name" name="name" required className={field} />
            </div>

            <div>
              <label className={label} htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                className={field}
              />
            </div>

            <div>
              <label className={label} htmlFor="vehicle">
                Make, model, year
              </label>
              <input
                id="vehicle"
                name="vehicle"
                placeholder="Mazda 3, 2018"
                required
                className={field}
              />
            </div>

            <div>
              <label className={label} htmlFor="suburb">
                Suburb or postcode
              </label>
              <input
                id="suburb"
                name="suburb"
                autoComplete="postal-code"
                required
                className={field}
              />
            </div>

            <div className="sm:col-span-2">
              <label className={label} htmlFor="service">
                What do you need?
              </label>
              <select id="service" name="service" className={field} defaultValue="">
                <option value="" disabled>
                  Choose a service
                </option>
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} — from ${s.from}
                  </option>
                ))}
                <option value="other">Something else / not sure</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className={label} htmlFor="detail">
                What is it doing?
              </label>
              <textarea
                id="detail"
                name="detail"
                rows={4}
                className={`${field} resize-none`}
                placeholder="Noise, warning light, due for a service, anything you have noticed."
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full sm:w-auto bg-ink text-paper font-display font-bold uppercase tracking-wide px-8 py-4 hover:bg-amber hover:text-ink transition-colors"
              >
                Send it through
              </button>

              <p className="mt-4 min-h-6" role="status" aria-live="polite">
                {sent ? (
                  <span className="font-body text-sm text-go">
                    That is the flow. Kerbside Auto is a demo, so nothing was
                    sent, stored or emailed anywhere.
                  </span>
                ) : null}
              </p>
            </div>
          </form>
        </div>

        <aside className="lg:pt-16">
          <div className="border-2 border-ink bg-panel p-6">
            <h3 className="font-display font-bold text-ink uppercase tracking-wide">
              Or just ring
            </h3>
            <a
              href={business.phoneHref}
              className="block font-mono font-bold text-2xl text-ink mt-2 hover:text-amber-ink transition-colors"
            >
              {business.phoneLabel}
            </a>
            <p className="font-body text-sm text-ink-soft mt-2">
              Straight to the person doing the job, not a call centre.
            </p>

            <dl className="mt-6 pt-6 border-t border-line">
              {hours.map((entry) => (
                <div
                  key={entry.days}
                  className="flex justify-between gap-4 py-1.5"
                >
                  <dt className="font-body text-sm text-ink">{entry.days}</dt>
                  <dd className="font-mono text-sm text-ink-soft tabular-nums">
                    {entry.hours}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="font-body text-xs text-ink-mute mt-6 leading-relaxed">
              Contact details are placeholders. Nothing here reaches a real phone
              or inbox.
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}
