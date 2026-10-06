# Spec 003 — Treatment area images

> **In one sentence:** Show the matching existing treatment image in the hero visual on every treatment-area page.

|                |                                      |
| -------------- | ------------------------------------ |
| **Status**     | 🔄 In progress                       |
| **Issue**      | #TBD — "Visa motsvarande behandlingsbilder på alla behandlingssidor" |
| **Branch**     | `003-treatment-area-images` (from `feature/pro-clinic-foundation`)   |
| **Feature**    | Treatment discovery          |
| **Depends on** | [002 — Add treatment image](002-add-treatment-image.md) |

**Short on time?** Read _User story_ and _Acceptance criteria_ — that's the whole point of the change and
how you'll know it's done. Everything after those is detail for whoever implements and reviews it.

---

## User story

As a visitor browsing a treatment area, I want to see the corresponding treatment image so that I can recognize the treatment area before reading its services and prices.

---

## Background

_To be completed during `/implement` with grounded file and line references._

- **Today:** Treatment-area hero visuals in `src/components/treatment-area-page.tsx:244-246` render a placeholder instead of a treatment image.
- **The problem:** Visitors see no real photography after opening a treatment area from the homepage.
- **Already in place:** The homepage has the five existing image assets and matching mappings; treatment-area routes share one localized component and use static generated routes.

---

## Design decision

Add the existing image path and descriptive alt text to each treatment-area content entry, then render the matching asset with the existing `next/image` pattern in the shared hero visual. Preserve the current hero dimensions, layout, routes, labels, and treatment content.

**Not touched:** Treatment names, prices, descriptions, navigation, route structure, responsive layout, image assets, and unrelated homepage or contact content.

The issue remains `#TBD` because this spec was created from a description and no GitHub issue number exists yet.

---

## Acceptance criteria

- [x] Each of the five Swedish treatment-area pages shows its matching existing image in the hero visual.
- [x] Each of the five English treatment-area pages shows the same corresponding image as its Swedish counterpart.
- [x] The image paths point to files inside `public/images` using `/images/...` URLs and no new or renamed image files are introduced.
- [x] Images use `next/image`, have descriptive alternative text, and do not remove the existing hero label or links.
- [x] Existing hero layout, sizing, spacing, styling, routes, and treatment content remain unchanged.
- [x] Typecheck passes; lint adds no new issues; tests green.

### Verification

- **New tests** — `src/app/page.test.ts`: add deterministic assertions for all five existing image paths and their matching Swedish/English treatment-area mappings.
- **Manual check** — Visit all five Swedish routes and all five `/en/` routes and confirm the matching image renders without a broken-image icon.
- **Asset check** — Confirm all five referenced image URLs return successfully from the local app.
- Full suite result + typecheck/lint/build status: `pnpm test`, `pnpm typecheck`, `pnpm lint`, and `pnpm build` all passed.

### Implementation notes

- `src/components/treatment-area-images.ts:1-29` is the shared, locale-neutral source of truth for the five image paths and localized alt text.
- `src/components/treatment-area-page.tsx:244-245` renders the selected image with `next/image`, eager loading, and static-file rendering.
- `src/app/page.test.ts:11-49` verifies every image path and both locale alt-text mappings.
- Manual route verification passed for all five Swedish and five English treatment-area routes; each image was complete with a non-zero natural width.

---

## Exact changes (file:line)

_To be completed during `/implement` with exact line references._

1. **`src/components/treatment-area-page.tsx:1-4, 81-203, 244-245`** — wire the shared image mapping into both locale content definitions and render the selected image with `next/image` in the shared treatment-area hero.
2. **`src/app/globals.css`** — no change needed; the existing `.treatment-card__image` rule already provides full-size `object-fit: cover` rendering for the reused image class.
3. **`src/components/treatment-area-images.ts:1-29`** — define the shared five-image mapping and localized alt text without duplicating paths between locales.
4. **`src/app/page.test.ts:1-49`** — extend the existing Vitest smoke test with deterministic assertions for the five image paths and locale mappings; no component-test framework is introduced.

**No change needed:** `public/images/*` already contains the five treatment images used by the homepage.

---

## Data model

**No schema changes.**

---

## Security

Nothing security-relevant, because this change only renders existing static public image assets.

---

## Edge cases

- If a mapped asset is missing, the build or verification must expose the missing path rather than silently showing a placeholder.
- The same treatment area must use the same image in Swedish and English.
- Image loading must not produce a broken-image icon on either locale.

---

## Out of scope

- Adding, renaming, replacing, or uploading image files.
- Changing treatment information, pricing, routes, layout, or styling.
- Adding images to unrelated pages or sections.
