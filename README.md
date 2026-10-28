# Innovation Construction Development website

Marketing site for Innovation Construction Development LLC (ICD), built by C360 Digital. 11 pages plus a privacy page and a 404. Every page is statically generated; the only server code is the contact form handler.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · `next/font` (Barlow, Barlow Condensed) · `next/image` · zod · Resend

## Run it locally

Requires Node 20.9 or newer.

```bash
npm install
cp .env.example .env.local   # then fill in the values (see below)
npm run dev                  # http://localhost:3000
```

Other scripts:

| Command | What it does |
|---|---|
| `npm run build` | Production build (also type-checks) |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript only |
| `npm run placeholders` | List every `[BRACKETED]` placeholder still in the copy |
| `npm run assets` | Regenerate favicon, apple icon, and the social share image |

## Environment variables

Set these in `.env.local` for local work, and in Vercel for **both Preview and Production**. Never commit real values.

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key |
| `CONTACT_TO_EMAIL` | Where proposal requests are delivered. `r.fuentes@inncd.com` in production |
| `CONTACT_FROM_EMAIL` | Sender. `ICD Website <website@inncd.com>` once inncd.com is verified in Resend |

**Until inncd.com is verified in Resend** (it needs DNS records added at the domain), use Resend's test sender (`ICD Website <onboarding@resend.dev>`) and set `CONTACT_TO_EMAIL` to a test inbox, not Robert's. Switch both values when the domain is verified.

If any of the three is missing, the form shows its error message (with the phone number and email as a fallback) and logs the reason on the server.

## Where things live

```
content/            ALL page copy, as typed TypeScript objects. Edit text here.
  site.ts           Phone, email, address, badges, nav labels, footer text
  pages.ts          Route registry, nav menus, footer columns
  images.ts         Photo registry (file, size, default alt text)
  home.ts           Home page copy, plus the shared "Why Partner" and past-performance copy
  interior.ts       Government, GC, Commercial, Multifamily, Insurance, Maintenance
  systems.ts        Roofing Systems page
  why.ts            Why Partner With Us page
  florida.ts        Florida Partner page
  contact.ts        Contact page copy and the form's dropdown options
  privacy.ts        Privacy page
src/app/            Routes (one folder per page), layout, sitemap, robots, 404
src/components/     Shared components (Header, Footer, PageHero, NumberedGrid, ...)
src/lib/            Metadata helper, form schema, email builder, rate limiter
public/images/      Photos and logos
scripts/            Asset and placeholder scripts
design/             Approved design mockups (reference only, not part of the build)
```

### Edit page copy

Open the matching file in `content/` and change the string. You do not need to touch components.

- Anything in `[SQUARE BRACKETS]` automatically renders as a highlighted placeholder. Remove the brackets once you have the real value, and update `PLACEHOLDERS.md`.
- Copy rules: no em-dashes (use periods, commas, or "and"). Do not add claims, stats, certifications, or project names that are not approved.
- **Insurance Restoration:** keep the wording to inspection, documentation, meeting the adjuster, and repair. Do not write that ICD negotiates claims, "handles your claim," works against the insurer, or waives deductibles. Contractors cannot act as public adjusters in Texas or Florida.
- Page titles and meta descriptions live in the same content files (`meta`).

### Swap a photo

1. Easiest: replace the file in `public/images/` and keep the same filename.
2. If the new photo has a different size or you want a new filename, update its entry in `content/images.ts` (`src`, `width`, `height`, and `alt`). The `alt` there is the default description used wherever the photo is meaningful. Photos used as backgrounds or card thumbnails are marked decorative in the components.
3. To use a different photo in one spot, change the image key in that page's content file (for example `hero.image` in `content/interior.ts`).

Use photos at least 1600px wide for full-width heroes. The current placeholders are 260 to 1120px wide, so large heroes look soft until they are replaced.

If you replace `logo-icd.png` or `hero.jpg`, run `npm run assets` to rebuild the favicon, apple icon, and social share image (`public/og-image.jpg`, 1200×630).

## Contact form

- Validated with one zod schema (`src/lib/contact-schema.ts`) on the client (inline errors tied to fields with `aria-describedby`) and again on the server.
- Handled by a Server Action (`src/app/contact/actions.ts`) that emails the request through Resend with **Reply-To** set to the submitter. Subject is `Proposal request: {Project type} in {City, State}`, and the body lists every field.
- **Florida:** if the city/state says FL or Florida, the email starts with `FLORIDA PROJECT, LOOP IN EPIC`. It is still sent only to `CONTACT_TO_EMAIL`.
- **Spam protection:** a hidden honeypot field (bots that fill it get a normal-looking success and nothing is sent) and a per-IP rate limit of 5 requests per 10 minutes (`src/lib/rate-limit.ts`). The limiter keeps its counts in server memory, so on Vercel each serverless instance counts separately. It slows casual abuse but is not a hard guarantee. If spam appears, move the counter to a shared store (Upstash Redis or Vercel KV) behind the same function, or add a CAPTCHA.
- The success message and the page intro both contain `[RESPONSE TIME]`; change both in `content/contact.ts`.

## SEO

Every page has a unique title (`{Page} | Innovation Construction Development`), meta description, canonical URL, and Open Graph and Twitter tags (`src/lib/metadata.ts`). Home has `RoofingContractor` JSON-LD. `sitemap.xml` and `robots.txt` are generated from `content/pages.ts`, so a new page needs one entry there.

Vercel automatically marks Preview deployments `noindex`. The canonical URLs point at `https://inncd.com`, so a production deployment on a `*.vercel.app` address is not treated as a duplicate.

## Deploying (Vercel)

1. Push this repo to GitHub as `icd-website`.
2. Import it in Vercel under the `harrisenterprises` team (framework: Next.js, defaults are fine).
3. Add the three environment variables for Preview and Production.
4. Share the Preview URL for client review.
5. **Do not add `inncd.com` to the project until C360 Digital gives the go-ahead.** At cutover: add `inncd.com` and `www.inncd.com` in Project Settings, Domains; set `www` to redirect to the apex; confirm SSL is issued. (`next.config.ts` also redirects `www` to the apex as a safeguard.)
6. After cutover, submit the live form and confirm it reaches `r.fuentes@inncd.com`.

## Quality checks

Lighthouse (mobile preset, simulated throttling, production build run locally): Performance typically 93 to 99 (an occasional run dips to about 90), Accessibility 100, Best Practices 100, SEO 100 on every page. Performance moves by a few points between runs; re-measure on the deployed URL. Checked at 375, 768, 1024, 1280, and 1440px wide with no horizontal scroll, and with keyboard-only navigation (dropdown, mobile menu, and form).
