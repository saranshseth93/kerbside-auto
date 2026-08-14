import { business, navLinks, services } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="hazard-rule" />
      <div className="mx-auto max-w-7xl px-5 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <p className="font-display font-extrabold uppercase tracking-tight text-lg">
            {business.name}
          </p>
          <p className="font-body text-sm text-paper/60 mt-2 leading-relaxed">
            {business.tagline}
            <br />
            {business.suburb}, {business.city}
          </p>
          <p className="font-mono text-[11px] text-paper/40 mt-3">
            {business.abnLabel}
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber">
            Site
          </p>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-sm text-paper/70 hover:text-paper transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber">
            Services
          </p>
          <ul className="mt-3 space-y-2">
            {services.map((service) => (
              <li
                key={service.id}
                className="font-body text-sm text-paper/70"
              >
                {service.name}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber">
            Contact
          </p>
          <a
            href={business.phoneHref}
            className="block font-mono text-sm text-paper/70 hover:text-paper transition-colors mt-3"
          >
            {business.phoneLabel}
          </a>
          <p className="font-mono text-sm text-paper/70 mt-2">
            {business.email}
          </p>
        </div>
      </div>

      <div className="border-t border-paper/15">
        <p className="mx-auto max-w-7xl px-5 py-6 font-body text-xs text-paper/40">
          {business.name} is a fictional business. This site is a portfolio spec
          build.
        </p>
      </div>
    </footer>
  )
}
