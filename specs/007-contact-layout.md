# Spec 007 — Contact staff layout

> **In one sentence:** Rebalance the contact page so the introduction remains visible and each staff member has a clear, uncluttered booking section.

|                |                                      |
| -------------- | ------------------------------------ |
| **Status**     | ✅ Done                              |
| **Issue**      | #TBD [NEEDS CLARIFICATION: assign issue #] — "Contact staff layout" |
| **Branch**     | `007-contact-layout`                 |
| **Feature**    | Public contact conversion            |
| **Depends on** | [006 — Contact spacing and booking CTA](006-contact-spacing.md) |

---

## User story

As a **visitor** I want **the contact page to present the introduction and staff booking details clearly** so that **I can quickly identify the right person and contact them without clutter**.

---

## Background

- **Today:** Staff contact details render as repeated phone and SMS definition rows, and the contact grid does not explicitly constrain its columns against viewport overflow.
- **The problem:** The right column feels cluttered and the left introduction can become unbalanced or clipped.
- **Already in place:** The page has the required staff names, treatment descriptions, phone/SMS destinations, warm beige background, typography and responsive grid foundation.

---

## Design decision

Keep the existing contact data and two-column desktop grid, but simplify each staff section to name, treatments, paired actions and one phone number. Use subtle dividers and consistent spacing, constrain grid columns with `minmax(0, ...)`, and preserve natural mobile stacking without cards, shadows or decorative additions.

**Not touched:** Phone numbers, treatment descriptions, link destinations, button styles, typography choices, colors or page routes.

---

## Acceptance criteria

- [x] The left heading and introductory paragraph remain fully visible without horizontal overflow or clipping.
- [x] Christine, Maria and Lotta render as three separated staff sections with names, treatments, paired actions and one phone number.
- [x] Treatment text appears directly beneath each name; both actions appear beneath it; the phone number appears once beneath the actions.
- [x] The desktop layout remains two columns and mobile layout stacks naturally.
- [x] Existing visual identity is preserved without cards, shadows or decorative elements.
- [x] Typecheck passes; lint adds no new issues; tests green.

### Verification

- **Regression test** — `src/app/page.test.ts`: assert the simplified staff markup and scoped layout rules.
- **Manual check** — Inspect Swedish and English contact pages at desktop and mobile widths; confirm no clipping, overflow or repeated phone/SMS rows.
- Full suite result + typecheck/lint status: typecheck and tests pass; lint reports one pre-existing unused `index` warning in `public-homepage.tsx:275`.

---

## Exact changes (file:line)

1. **`src/components/contact-page.tsx`** — render one phone detail per staff member and simplify the staff section semantics.
2. **`src/app/globals.css`** — constrain contact grid columns, add section dividers/spacing and remove obsolete details layout rules.
3. **`src/app/page.test.ts`** — add regression assertions for the contact structure and responsive-safe CSS.
4. **`specs/README.md`** — list this completed feature.

**No change needed:** Contact data, phone/SMS hrefs, button classes, routes and locale copy.

---

## Data model

**No schema changes.**

---

## Security

Nothing security-relevant, because this change only adjusts static public presentation and retains existing direct contact links.

---

## Edge cases

- Christine’s longer treatment list must not clip or push the left column outside the viewport.
- Swedish and English labels must remain localized.
- The phone number must remain available once below the actions in both locales.

---

## Out of scope

- Changing phone numbers, treatment descriptions, contact functionality, colors, typography or button sizes.
- Adding cards, shadows, photos, forms or new contact methods.
