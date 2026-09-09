# NForceOne — marketing site

A single-page marketing site for NForceOne, rebuilt on Next.js. Dark, high-contrast
enterprise-tech look aimed at stakeholders and prospective clients.

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build (statically prerendered)
npm start          # serve the production build
npm run lint
npx tsc --noEmit   # typecheck
```

`NEXT_DIST_DIR=.next-build npm run build` builds into a separate directory, which
lets you verify a production build while `npm run dev` is still running.

## Stack

- **Next.js 16** (App Router, Turbopack) — the page is fully static, so it deploys
  to Vercel, Netlify, S3 + CloudFront, or any static host.
- **Tailwind CSS v4** — theme tokens live in the `@theme` block at the top of
  `src/app/globals.css`, not in a JS config file.
- **No animation library.** Scroll reveals use a small IntersectionObserver
  component (`src/components/Reveal.tsx`); everything else is CSS. Reduced-motion
  preferences are respected globally.

## Where things live

```
src/
  app/
    layout.tsx      fonts, SEO metadata, Open Graph
    globals.css     design tokens, custom utilities, reveal + marquee keyframes
    page.tsx        composes the sections in order
  lib/
    content.ts      <- every string on the page
  components/
    Nav, Hero, Services, Quality, Differentiators,
    Process, Industries, About, Contact, Footer
    Reveal, SectionHeading, Logo, Icons
```

### Editing copy

Change `src/lib/content.ts`. Section components read from it and render — they
contain no hard-coded marketing copy, so a copy change never means touching JSX.

### Design tokens

The palette is NForceOne's own, read from the live site's theme variables
(`--vamtam-btn-bg-color`, `--vamtam-body-link-regular`) and brand illustrations:

| Token | Value | Source |
| --- | --- | --- |
| `brand-800` | `#010ED0` | Their primary — buttons and links |
| `brand-100` | `#DEE0FF` | Their illustration tint |
| `gold-500` | `#FFBA08` | Their illustration accent |
| `ink-700` | `#242627` | Their body text / button hover |

`#010ED0` is very dark, so on a near-black canvas it anchors the ramp at 800 and
the lighter steps (`brand-300` … `brand-600`) do the visible work — a saturated
navy has nowhere near enough contrast for text or icons against `ink-950`.
Primary buttons use white text on brand blue, matching their
`--vamtam-btn-text-color: #FFFFFF`.

Gold is used sparingly, as they use it — currently only on case-study metrics,
where the number should beat the card for attention.

Four custom utilities live in `src/app/globals.css`: `container-page` (gutter and
max width), `text-gradient` and `text-gradient-gold` (the accented half of a
headline, and the warm variant for numbers), and `hairline` (a 1px gradient
border drawn with a mask — drop `<span className="hairline" />` inside any
`relative` rounded element).

One deliberate exception: `<SampleBadge />` is rose, not gold. A warning must not
look like part of the palette it is warning you about.

## Known gaps before launch

- **The contact form has no backend.** It validates and shows a confirmation
  state client-side only; nothing is sent anywhere. Point it at a route handler
  or your CRM — see the comment in `src/components/Contact.tsx`.
- No Open Graph image yet; adding `src/app/opengraph-image.tsx` would cover it.
- Copy is condensed and partly rewritten from nforceone.com. Marketing should
  review it before this goes public — in particular the service descriptions and
  the metrics shown in the hero panel, which are illustrative.
