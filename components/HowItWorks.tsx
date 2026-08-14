import { Photo } from '@/components/ui/Photo'
import { Reveal } from '@/components/ui/Reveal'
import { steps } from '@/lib/constants'

export function HowItWorks() {
  return (
    <section id="how" className="bg-ink text-paper relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Photo
          slot="tools"
          alt=""
          sizes="100vw"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:py-28">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-amber">
            How it works
          </p>
          <h2 className="font-display font-extrabold uppercase tracking-[-0.02em] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.02] mt-4 max-w-2xl">
            Three steps. No workshop.
          </h2>
        </Reveal>

        <ol className="grid md:grid-cols-3 gap-px bg-paper/15 mt-12 border border-paper/15">
          {steps.map((step, i) => (
            <li key={step.number} className="bg-ink p-7">
              <Reveal delay={i * 0.1}>
                <span className="font-display font-extrabold text-amber text-5xl tabular-nums leading-none">
                  {step.number}
                </span>
                <h3 className="font-display font-bold uppercase tracking-wide text-lg mt-5">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-paper/70 leading-relaxed mt-3">
                  {step.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
