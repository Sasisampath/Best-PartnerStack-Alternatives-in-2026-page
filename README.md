# JazzHQ Alternatives

Standalone frontend with two page types:

- `/alternatives`: published buyer-guide gallery.
- `/alternatives/partnerstack-alternatives`: full PartnerStack comparison article.

The old `/buyers-guide/partnerstack-alternatives` URL permanently redirects to the new detail URL, preserving browser fragments. `/` and the former `/assets` entry redirect to the gallery. No additional homepage or Marketplace route exists.

## Development

Use Node 20 or newer. Run `npm ci`, then `npm run dev`.

Checks: `npm run typecheck`, `npm run lint`, `npm run build`. Existing Google Fonts require network access during a clean build.

## Components and data

- `src/components/layout/header.tsx` and `header.css`: reference JazzHQ header with standalone navigation and Get started dropdown.
- `src/components/shared/footer*`: reference footer, AI actions, trust tooltips and closing wordmark.
- `src/data/navigation.ts`: approved standalone link map. Unavailable destinations are visibly disabled; no production-site signup or Marketplace links.
- `src/data/alternatives.ts`: published article registry and optional verified editorial metadata. Reading time uses the actual rendered article word count (3,409 words) at 225 words/minute. Recount when editorial copy changes.
- `src/components/alternatives`: reusable gallery card, breadcrumbs, optional article metadata.
- `src/app/alternatives/partnerstack-alternatives`: preserved article, white reading surfaces, centered reading cards, tables, FAQs and progress bar.

No author, author photo, role or publication history was supplied; these fields are omitted until verified information is available. Signup journeys remain disabled until an approved standalone destination exists. Existing article CTA destinations are preserved.

Set `NEXT_PUBLIC_SITE_URL` to this deployment’s origin for absolute canonical/social metadata. The development fallback is `http://localhost:3000`; no production domain is assumed.

## Reference boundary

Header/footer components and supporting assets were adapted from `Sasisampath/testpublichome`. That repository was inspected read-only and was not modified, committed or pushed. No homepage sections, forms, analytics or tracking configuration were copied. Existing article content and product screenshots are unchanged.
