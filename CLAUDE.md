# Familieopstellingen door Jessica Abicht: instructions for Claude

Website for family constellations (group and private) at Homecoming Land, Brasschaat.
Part of Embrace Evolve. Dutch first, English at `/en/`.

## Way of working (owner's rules)

- Work on `main` only. Never create other branches. Commit and push after every step.
- Every push to `main` deploys automatically to Cloudflare (Workers, `wrangler.jsonc`):
  https://familieopstellingen.gertembrechts.workers.dev
- The owner is not technical. Reply in plain English, short, no jargon. Give click-by-click steps
  for anything they must do themselves (Cloudflare, Stripe, Billit, GitHub settings).
- Process checklist for this and future websites: `docs/website-cheatsheet.pdf` (phases 1 to 9).
- Open points and content how-to: `docs/handover.md`.

## Brand (full guide: `docs/brand/merkgids-familieopstellingen.pdf`)

Follow the brand guide for every change to the site, and for social media, documents or a next website.
Hidden brand page (noindex, not linked): `/brand/` (`src/pages/brand/index.astro`), with the standalone
`public/brand/brand.css` and a PDF copy. Keep both in sync with the guide.

- Colours (already in `sites/familieopstellingen/src/styles/theme.css`): paper `#f7f3ef` (page background,
  never pure white as base), white `#ffffff`, sand `#b69984`, sand 25 `#ede5e0`, sand 50 `#dacbbf`,
  clay `#a26d57` (buttons, link hover, sparingly), moss `#549183` (focus ring, almost never),
  ink `#141210` (text), ink soft `#5e5752`, line `#e6ddd6`.
  About 70% paper/white, 20% sand. No gradients, no shadows. Text only in ink or ink soft.
- Fonts: Cormorant Garamond 500 for titles (never bold, never coloured); Jost 400 body 17px, line height 1.55;
  labels Jost 600 uppercase 0.14em. Wordmark: Cormorant Garamond uppercase, 0.22em. No third font.
- Elements: rectangular buttons, thin border, uppercase; one clay-filled main action per page.
  Titles with a 14mm ink hairline. No rounded corners. Photos cropped 4:3, 3:4 or 21:9. Lots of white space.
- Photos: own photos of Homecoming Land and sessions, natural light, mist, forest, fire, water, bark.
  No stock or symbolic images, no filters, no participants' faces without consent,
  no text over photos except hero and closing call to action.
- Tone: warm, clear, down to earth (Warm. Helder. Nuchter.). Address the reader as "je". Short sentences.
  First what the reader feels, then what we do. No over-promising, no unexplained jargon, no "!!".
  Fixed words: opstelling, vraagsteller, representant, toeschouwer, Homecoming Land, Embrace Evolve.

## Business rules

- Prices: private persons pay the listed price incl. 21% VAT; companies pay the listed price excl. VAT
  plus 21% (EUR 120 vs EUR 145.20). Logic in `src/lib/pricing.ts` and the form script in `src/views/Inschrijven.astro`.
- Group days: maximum 20 participants.
- Payments (to do): Stripe for payment, Billit for company invoices via Peppol. See cheat sheet phase 9.
- Forms (to do): Netlify Forms does not work on Cloudflare; set `formEndpoint` in `src/site.config.ts`.

## Build

`npm ci && npm run build` at the repo root (npm workspaces). Output: `sites/familieopstellingen/dist`.
