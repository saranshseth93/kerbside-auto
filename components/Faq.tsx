import { Reveal } from '@/components/ui/Reveal'
import { faqs } from '@/lib/constants'

/**
 * Native <details>/<summary>. Keyboard support, screen-reader semantics and
 * find-in-page all work without a line of JavaScript.
 */
export function Faq() {
  return (
    <section id="faq" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-amber">
            Questions
          </p>
          <h2 className="font-display font-extrabold text-ink uppercase tracking-[-0.02em] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.02] mt-4">
            The ones we actually get asked.
          </h2>
        </Reveal>

        <div className="mt-10 border-t border-line">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i, 4) * 0.05}>
              <details className="group border-b border-line">
                <summary className="flex items-start justify-between gap-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-display font-bold text-ink text-lg leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className="relative shrink-0 w-6 h-6 border-2 border-ink flex items-center justify-center mt-0.5 transition-colors group-open:bg-amber"
                    aria-hidden="true"
                  >
                    <span className="block w-3 h-0.5 bg-ink" />
                    <span className="absolute block w-0.5 h-3 bg-ink transition-transform group-open:scale-y-0" />
                  </span>
                </summary>
                <p className="font-body text-ink-soft leading-relaxed pb-6 pr-12 -mt-1">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
