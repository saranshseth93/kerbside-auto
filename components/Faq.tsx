import { Reveal } from '@/components/ui/Reveal'
import { faqs } from '@/lib/constants'

/**
 * Everything on the page, nothing to open.
 *
 * The other demos in this portfolio use a <details> accordion, and all three
 * had drifted into the same component. A workshop's answers are short and
 * worth reading in one pass, so these lie flat as a two-column question
 * sheet — the way a service brochure prints them.
 *
 * It also removes an interaction: nobody has to guess which question hides
 * the answer they want, and find-in-page hits every answer rather than only
 * the open one.
 */
export function Faq() {
  return (
    <section id="faq" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-24">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-amber-ink">
                Questions
              </p>
              <h2 className="font-display font-extrabold text-ink uppercase tracking-[-0.02em] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.02] mt-4">
                The ones we
                <br />
                actually get asked.
              </h2>
              <p className="font-body text-ink-soft mt-5 leading-relaxed">
                No accordion. Every answer is on the page.
              </p>
            </div>
          </Reveal>

          <dl className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {faqs.map((faq, i) => (
              <Reveal key={faq.question} delay={Math.min(i, 4) * 0.05}>
                <dt className="font-display font-bold text-ink leading-snug border-t-2 border-ink pt-4">
                  {faq.question}
                </dt>
                <dd className="font-body text-sm text-ink-soft leading-relaxed mt-2">
                  {faq.answer}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
