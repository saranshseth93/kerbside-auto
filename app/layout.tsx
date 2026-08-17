import type { Metadata } from 'next'
import { archivo, inter, jetbrainsMono } from '@/lib/fonts'
import './globals.css'

const title = 'Kerbside Auto — Mobile Mechanic, Melbourne (Demo Site)'
const description =
  'A fictional mobile mechanic covering Melbourne’s inner north, designed and built by Pixel Pundit as a portfolio piece. Not a real business.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en_AU',
    siteName: 'Kerbside Auto (demo site)',
  },
  icons: { icon: '/favicon.svg' },
}

/*
 * No AutoRepair / LocalBusiness JSON-LD here on purpose. Kerbside Auto has no
 * premises, no phone and no ABN; publishing one as structured data would put a
 * fictional trader into local search results.
 */

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning: the inline script below adds `js-reveal` to
    // <html> before React hydrates, so the client element legitimately carries
    // a class the server markup does not. Scoped to this element only.
    <html lang="en-AU" suppressHydrationWarning>
      <head>
        {/*
          Opts the page into the hidden-until-revealed state, before first
          paint so there is no flash. Everything stays visible if this never
          runs — see the .js-reveal rules in globals.css.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js-reveal')`,
          }}
        />
      </head>
      <body
        className={`${archivo.variable} ${inter.variable} ${jetbrainsMono.variable} grain bg-paper text-ink font-body antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-amber focus:text-ink focus:px-4 focus:py-2 focus:font-display focus:font-bold"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
