# Spec 004 — Homepage cleanup

> **In one sentence:** Remove the homepage’s introductory banner and treatment card number labels while preserving treatment discovery.

|                |                                      |
| -------------- | ------------------------------------ |
| **Status**     | ✅ Complete                          |
| **Issue**      | #TBD [NEEDS CLARIFICATION: assign issue #] — "Homepage cleanup" |
| **Branch**     | `004-homepage-cleanup` (from `feature/pro-clinic-foundation`) |
| **Feature**    | Homepage treatment discovery          |
| **Depends on** | [002 — Add treatment image](002-add-treatment-image.md) |

---

## User story

As a visitor to the homepage, I want the treatment section to start without extra promotional framing or numbering so that I can focus on the treatment images, names, and links.

---

## Background

- **Today:** The shared homepage renders a beige introductory banner and a `01`–`05` index before each treatment title.
- **The problem:** The banner and numeric labels add visual content that is not needed for treatment discovery.
- **Already in place:** The treatment cards already contain the required images, titles, links, and responsive grid layout.

---

## Design decision

Remove the banner markup and its dedicated styles, along with the treatment card index markup and style. Leave the treatment images, titles, links, CTA labels, and grid structure unchanged in both locales.

**Not touched:** Treatment content, images, routes, card layout, navigation, or contact sections.

---

## Acceptance criteria

- [x] The homepage no longer renders the Swedish or English introductory banner text, background, or chevron.
- [x] The homepage no longer renders `01`, `02`, `03`, `04`, or `05` beneath treatment images.
- [x] All treatment images, titles, links, CTA labels, and layout remain unchanged.
- [x] All five treatment images use the same responsive container ratio and cover rendering.
- [x] The removed banner does not leave unnecessary homepage treatment-section spacing.
- [x] Typecheck passes; lint adds no new issues; tests green.

### Verification

- **Regression test** — `src/app/page.test.ts`: assert the homepage source no longer contains the removed banner text or `card-index` marker.
- **Manual check** — Visit `/` and `/en/`; confirm no banner or numbered labels are visible and all five treatment cards retain their images, titles, links, and layout.
- Full suite result + typecheck/lint status.

---

## Exact changes (file:line)

1. **`src/components/public-homepage.tsx`** — remove the homepage intro-band section, chevron import, and treatment card number span.
2. **`src/app/globals.css`** — remove obsolete intro-band/card-index rules, remove the treatment section's leftover top spacing, and enforce full-size cover rendering for treatment images.
3. **`src/app/page.test.ts`** — add regression assertions for the removed homepage elements and layout rules.

**No change needed:** Treatment image mappings and card layout remain in place.

---

## Data model

**No schema changes.**

---

## Security

Nothing security-relevant, because this change only removes static public presentation elements.

---

## Edge cases

- Both Swedish and English homepages must omit the banner.
- Removing the index must not remove or reorder any treatment card.

---

## Out of scope

- Changing treatment images, titles, links, CTA text, or responsive layout.
- Removing chevrons from the treatment navigation menu or other unrelated components.
