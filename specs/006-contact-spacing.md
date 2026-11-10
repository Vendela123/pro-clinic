# Spec 006 — Contact spacing and booking CTA

> **In one sentence:** Improve spacing on the contact and Find Us sections and make the homepage header CTA clearly invite booking in both languages.

|                |                                      |
| -------------- | ------------------------------------ |
| **Status**     | ✅ Done                              |
| **Issue**      | #TBD [NEEDS CLARIFICATION: assign issue #] — "Contact spacing and booking CTA" |
| **Branch**     | `006-contact-spacing`                |
| **Feature**    | Public contact conversion            |
| **Depends on** | nothing                             |

---

## User story

As a **visitor** I want **the contact actions and booking CTA to be clearly spaced and labelled** so that **I can understand how to arrange an appointment without visual crowding**.

---

## Background

- **Today:** Contact cards place treatment descriptions, action buttons and phone/SMS details in sequence, while the homepage Find Us copy places the address close to its map button.
- **The problem:** These content groups are too close together, and the dark header CTA says "Kontakt" rather than explicitly inviting booking.
- **Already in place:** The contact page has a shared responsive card grid and the homepage has shared Swedish/English copy and responsive layout rules.

---

## Design decision

Use the existing CSS selectors to add vertical margins/gaps only, keeping the current two-column layout, typography, colors, button dimensions, alignment and responsive behavior. Change only the homepage header CTA labels to "Boka här" and "Book here"; other navigation labels remain unchanged.

**Not touched:** Contact content, phone/SMS destinations, button styles and sizes, page structure, map/address content, typography, colors or overall layout.

---

## Acceptance criteria

- [x] Each contact person has consistent extra space between treatment descriptions, action buttons and phone/SMS details.
- [x] The Find Us section has balanced spacing between its heading, description, address and button, including extra space above the button.
- [x] The homepage dark header CTA reads "Boka här" in Swedish and "Book here" in English.
- [x] Existing responsive two-column/stacked layouts, typography, colors and button styles remain unchanged.
- [x] Typecheck passes; lint adds no new issues; tests green.

### Verification

- **Regression test** — `src/app/page.test.ts`: assert the localized header CTA labels and the scoped spacing rules.
- **Manual check** — Inspect `/`, `/en/`, `/contact` and `/en/contact` at desktop and mobile widths; confirm balanced spacing and unchanged layout/style.
- Full suite result + typecheck/lint status: typecheck and tests pass; lint reports one pre-existing unused `index` warning in `public-homepage.tsx:275`.

---

## Exact changes (file:line)

1. **`src/components/contact-page.tsx`** — retain existing markup and use its contact card class hooks for scoped spacing.
2. **`src/components/public-homepage.tsx`** — change the Swedish and English header CTA copy and retain the existing Find Us markup.
3. **`src/app/globals.css`** — add scoped margins/gaps for contact cards and Find Us copy without changing layout or visual tokens.
4. **`src/app/page.test.ts`** — add source/style regression assertions for the CTA labels and spacing selectors.
5. **`specs/README.md`** — list this completed feature.

**No change needed:** Routes, contact destinations, button classes, map embed and responsive grid declarations already provide the required structure.

---

## Data model

**No schema changes.**

---

## Security

Nothing security-relevant, because this change only adjusts static public presentation and labels.

---

## Edge cases

- Both locales must use the localized booking CTA while the rest of the navigation remains localized as before.
- Contact card spacing must apply equally to Christine, Maria and Lotta despite different service-list lengths.
- Mobile stacking must preserve readable spacing without changing the existing responsive layout.

---

## Out of scope

- Changing font sizes, colors, button sizes, content, alignment or overall layout.
- Changing phone/SMS links, address data, map embed or contact page copy.
