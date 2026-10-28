# Placeholders

Everything the client still has to supply. Each `[BRACKETED]` item renders on the site as gold text with a dashed underline, so it is easy to spot. To fill one in, edit the string in the file listed under **Where** (all copy lives in `content/`). Run `npm run placeholders` to list what is still open.

## By page

| Page | Placeholder | Where | What is needed |
|---|---|---|---|
| Home (`/`) | `[UEI]` | `content/home.ts` | SAM.gov Unique Entity ID |
| Home (`/`) | `[CAGE]` | `content/home.ts` | CAGE code |
| Government Contracting | `[UEI]` | `content/interior.ts` (government) | Same UEI as above |
| Government Contracting | `[CAGE]` | `content/interior.ts` (government) | Same CAGE code as above |
| Government Contracting | `[ACTIVE?]` | `content/interior.ts` (government) | SAM registration status (for example, "Active") |
| General Contractor Partnerships | `[BONDING CAPACITY]` | `content/interior.ts` (gc) | Bonding capacity wording |
| General Contractor Partnerships | `[COI ON REQUEST]` | `content/interior.ts` (gc) | Insurance / certificate of insurance wording |
| Roof Maintenance Programs | `[e.g., semi-annual]` | `content/interior.ts` (maintenance) | Standard inspection frequency |
| Roofing Systems | `[MANUFACTURER CERTIFICATIONS]` | `content/systems.ts` | List of manufacturer certifications |
| Why Partner With Us | `[UEI / CAGE]` | `content/why.ts` | SAM registration identifiers |
| Why Partner With Us | `[TBD]` (manufacturer certifications) | `content/why.ts` | Same list as Roofing Systems |
| Why Partner With Us | `[TBD]` (insurance and bonding) | `content/why.ts` | Insurance and bonding summary |
| Why Partner With Us | `[SHORT BIO]` | `content/why.ts` | Robert Fuentes bio, a few sentences |
| Why Partner With Us | `[HEADSHOT]` | `content/why.ts` and `src/app/why-partner-with-us/page.tsx` | Headshot photo. Add the file to `public/images`, then swap the dashed box for an image |
| Florida Partner | `[SERVICE AREA]` | `content/florida.ts` | Florida regions Epic covers |
| Florida Partner | `[Confirm list with Epic]` | `content/florida.ts` | Tag next to the services heading. Remove once Epic confirms the list of services |
| Florida Partner | `[EPIC CONTACT NAME, TITLE]` | `content/florida.ts` | Epic contact |
| Florida Partner | `[EPIC PHONE]` | `content/florida.ts` | Epic phone |
| Florida Partner | `[EPIC EMAIL]` | `content/florida.ts` | Epic email |
| Florida Partner | `[EPIC ADDRESS]` | `content/florida.ts` | Epic address |
| Florida Partner | `[EPIC WEBSITE]` | `content/florida.ts` | Epic website. Currently plain text, make it a link when known |
| Contact | `[RESPONSE TIME]` (intro paragraph) | `content/contact.ts` (`lead`) | Promised response time, for example "one business day" |
| Contact | `[RESPONSE TIME]` (form success message) | `content/contact.ts` (`success.body`) | Same wording as above. It appears in two strings, so change both |
| Privacy | `[PLACEHOLDER: this page is a stub...]` and `[PRIVACY POLICY TEXT]` | `content/privacy.ts` | The client's approved privacy policy |

## Not bracketed in the site, but still needed

- **Real project photography.** Every image in `public/images` is a temporary placeholder (and low resolution, so full-width heroes look soft). Swap files as described in the README.
- **Final vector or transparent logo files** for ICD and Epic. The current logos are raster images on a black background. The header, footer, favicon, and social image are all cut from `logo-icd.png`.
- **Capability statement PDF.** The current file is `public/capability-statement.pdf`. Update it once the UEI, CAGE, and SAM status are known so it matches the site.

## Wording we drafted that the client should review

The brief did not supply this text. It stays within what the brief and capability statement already say, but the client should read it.

- Roofing Systems: the three "Repair. Restore. Replace." columns and the section heading "What we install, repair, and restore." (`content/systems.ts`)
- Section headings "How it works" on Multifamily & HOA, Insurance Restoration, and Roof Maintenance Programs (`content/interior.ts`)
- Why Partner With Us: the "Leadership" and "Certifications & Qualifications" section labels (`content/why.ts`)
- Privacy page structure and the 404 page text
- Page meta descriptions for search results (taken from each page's lead copy)
