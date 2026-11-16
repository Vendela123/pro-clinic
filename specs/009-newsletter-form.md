# Spec 009 — Newsletter signup section

> **In one sentence:** Add a centered, responsive Brevo newsletter signup section above the existing homepage footer in Swedish and English without changing other homepage sections.

|                |                                      |
| -------------- | ------------------------------------ |
| **Status**     | 🔄 In progress                       |
| **Issue**      | #TBD — "Add Brevo newsletter form"  |
| **Branch**     | `009-newsletter-form`                |
| **Feature**    | `feature/pro-clinic-foundation`      |
| **Depends on** | nothing                             |

---

## User story

As a **Pro Clinic visitor** I want **to subscribe to salon news and offers from the homepage** so that **I can stay informed without leaving the site**.

---

## Background

_To be grounded in the homepage and shared styles during `/implement`._

- **Today:** The homepage has no newsletter signup section.
- **The problem:** Visitors have no visible way to subscribe to Pro Clinic news and offers.
- **Already in place:** The homepage has localized Swedish and English copy, shared section styling, and an existing footer.

---

## Design decision

Add one homepage section immediately before the existing footer. Embed the supplied Brevo iframe URL with the existing beige section background and no internal scrolling, while wrapping it in compact, centered responsive layout. Use Swedish copy for the Swedish homepage and English copy for `/en/`.

**Not touched:** The existing footer, navigation, hero, treatment sections, contact sections, and the supplied Brevo iframe URL or form behavior.

---

## Acceptance criteria

- [x] A newsletter section appears at the bottom of both homepage locales, directly above the existing footer.
- [x] The Swedish section heading is `Få nyheter från Pro Clinic` and its supporting text is `Ta del av nyheter, inspiration och aktuella erbjudanden från oss.`.
- [x] The English section uses equivalent localized copy: `Get news from Pro Clinic` and `Get news, inspiration and current offers from us.`.
- [x] The supplied Brevo iframe is embedded without changing its form URL; the surrounding section retains the beige background and its internal scrolling is disabled.
- [x] The section is centered and responsive on mobile and desktop, with no unnecessary iframe margins or horizontal page scroll.
- [x] The section matches the existing warm beige, elegant, minimalist design.
- [x] The existing footer and all other homepage sections remain unchanged.
- [x] Typecheck passes; lint adds no new issues; tests green (note known pre-existing failures).

### Verification

- **New tests** — `src/app/page.test.ts`: verify localized newsletter copy, iframe URL, and placement before the footer in the homepage source.
- Inspect the Swedish and English homepages at desktop and mobile widths.
- Confirm the iframe remains within the viewport and does not add horizontal scrolling.
- Full suite result: `pnpm test` passed (9 tests); `pnpm typecheck` passed; `pnpm lint` passed with the existing warning in `src/components/public-homepage.tsx:287`.

### Implementation notes

- Added the newsletter section immediately after `main` and before the existing footer.
- Kept the supplied Brevo iframe URL unchanged and constrained its wrapper and iframe to the viewport width.
- Restored the beige newsletter background, reduced section spacing, increased the iframe height to 360px, and disabled iframe scrolling.
- Added Swedish and English copy to the existing homepage locale content.

---

## Exact changes (file:line)

_To be completed during `/implement` with grounded line references._

1. **`src/components/public-homepage.tsx:49,105,181,355`** — add localized newsletter copy and the supplied Brevo iframe section immediately before the footer.
2. **`src/app/globals.css:273`** — add minimal scoped newsletter layout and responsive styles using the existing design tokens.
3. **`src/app/page.test.ts:18`** — add focused source-level assertions for localized copy, exact iframe URL, and footer ordering.

**No change needed:** The existing footer markup and locale route structure already provide the insertion point and Swedish/English rendering.

---

## Data model

**No schema changes.** The form submits directly to Brevo through its supplied iframe.

---

## Security

The section embeds the user-supplied Brevo form from its fixed HTTPS origin. No new application-side secrets, credentials, or user-controlled HTML are introduced.

---

## Edge cases

- On narrow screens, the iframe must shrink to the available width without causing page-level horizontal scrolling.
- If the external Brevo form is unavailable, the surrounding section and localized heading/text should still render without breaking the homepage layout.
- The English route must never display the Swedish newsletter copy, and vice versa.

---

## Out of scope

- Replacing or recreating the Brevo form.
- Adding a local newsletter database, server action, API route, or email integration.
- Changing the existing footer or other homepage sections.
