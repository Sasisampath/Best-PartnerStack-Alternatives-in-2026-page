# JazzHQ editorial buyer guide

The complete PartnerStack alternatives guide, integrated into the supplied JazzHQ Next.js homepage project.

## Run

Requires Node.js 20 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000/buyers-guide/partnerstack-alternatives.
The original homepage is at `/`.

```sh
npm run build
npm start
```

The development preview in this workspace uses the supplied homepage's existing dependencies through a local symlink. The ZIP excludes that symlink; run `npm ci` after extracting it. The original Next.js Google Fonts setup needs network access during a clean build.

## Implementation

- `src/app/buyers-guide/partnerstack-alternatives/page.tsx`: complete article and original content arrays.
- `src/app/buyers-guide/partnerstack-alternatives/page.module.css`: responsive editorial design.
- `src/app/buyers-guide/partnerstack-alternatives/table-of-contents.tsx`: sticky neutral contents panel, smooth section navigation, current-section mobile accordion, and article reading progress.
- `src/components/layout/header.tsx` and `footer.tsx`: shared homepage components with Home/About navigation and the preserved vendor/partner CTAs.
- `public/buyers-guide/partnerstack`: all eight supplied product screenshots.
- `public/assets/guide`: original JazzHQ arrow and ready-to-grow artwork, sourced from the public JazzHQ homepage.

The design includes a plain typographic hero, slim information rail, sticky-note editorial callout, spacious two-column editorial shortlist (one column on mobile), reusable vendor sections, mobile comparison cards, buying criteria, fit guidance, three FAQ accordions, and the shared footer. A contained light-purple closing action now uses the approved JazzHQ copy and one button. Browser zoom is enabled.

The vendor data, comparison rows, criteria, FAQs, and editorial paragraphs are unchanged from the supplied buyer guide. Heading capitalization and action labels follow the design brief. Product claims and pricing are supplied editorial copy, not newly researched content.

The About, vendor/partner signup, and policy links use verified destinations on https://www.jazzhq.ai because those pages are not included in the homepage-only source package. The public site was also used to restore the footer links and original illustrations.

## Validation

- Production build passed with `npm run build -- --webpack`.
- TypeScript check passed.
- Full-project lint results are documented in the cleanup audit.
- Verified original content arrays are byte-for-byte unchanged, and fixed paragraphs preserved.
- Browser checked at 1440px desktop and 390px mobile: section navigation, active TOC, mobile menu, contents dropdown, eight comparison cards, FAQ expansion, CTA and footer.
- No page-wide horizontal overflow at either checked width.

This is a local implementation and preview; it has not been deployed.
