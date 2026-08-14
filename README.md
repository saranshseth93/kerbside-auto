# Kerbside Auto

A **fictional** mobile mechanic covering Melbourne's inner north, designed and
built by [Pixel Pundit](https://pixelpundit.com.au) as a portfolio spec piece.

Kerbside Auto is not a real business. The services, prices, service area, hours,
phone number and ABN are illustrative.

There are deliberately **no reviews, star ratings, job counts or customer
numbers** anywhere on this site. A business that has never turned a spanner has
nothing to be rated on, so the trust strip states how the service is set up
instead of inventing social proof. The booking form is inert and says so on
submit.

**Live:** https://saranshseth93.github.io/kerbside-auto/

## What it demonstrates

- A postcode service-area checker that does a real lookup and can answer "no" —
  the answer that actually matters to a caller.
- Six services with indicative pricing, duration and an itemised inclusions
  list, rather than a vague "contact us for a quote".
- A FAQ built on native `<details>`/`<summary>`, so keyboard, screen reader and
  find-in-page all work with no JavaScript.
- Scroll reveals with no animation library: one IntersectionObserver toggling a
  class against a CSS keyframe. The hidden state is scoped to a `.js-reveal`
  class set before first paint, so the page still reads as plain content if the
  script never runs.

## Stack

Next.js 16 static export, Tailwind CSS 4, no runtime UI dependencies. Deployed
to GitHub Pages by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## Photography

Every photo is royalty-free and credited in [CREDITS.md](./CREDITS.md).

Images are not committed. They are resolved from a provider API, pinned in
`images.lock.json`, then downloaded and turned into responsive AVIF/WebP
derivatives at build time.

| Command | What it does |
|---|---|
| `pnpm images:resolve` | Pins a real photo to each slot in `images.config.mjs`, recording photographer, licence and source page. Only fills slots that are missing or whose query changed. |
| `pnpm images:resolve --force` | Re-pins every slot. |
| `pnpm images:build` | Downloads the pins, generates derivatives, writes `CREDITS.md`. |
| `pnpm images:build --offline` | Procedural stand-ins, so the site builds with no network. |
| `pnpm images:verify` | Deploy gate: fails if any slot is a stand-in, unbuilt or uncredited. |

Uses [Pexels](https://www.pexels.com/license/) when a `PEXELS_API_KEY`
repository secret is set, falling back to [Openverse](https://openverse.org)
(CC0 and public domain, no key needed) when it is not.

To pin a photo by hand, edit its entry in `images.lock.json` and add
`"manual": true` — the resolver will leave it alone.

## Local development

```bash
pnpm install
pnpm images:build --offline   # or `pnpm images:build` with a network
pnpm dev
```

| Command | |
|---|---|
| `pnpm dev` | Dev server |
| `pnpm build` | Static export to `out/` |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | `tsc --noEmit` |
