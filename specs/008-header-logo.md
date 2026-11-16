# Spec 008 — Header logo image

> **In one sentence:** Replace the circular PC text mark in the site header and related brand links with the supplied Pro Clinic logo image while preserving the existing brand text, spacing, and responsive layout.

|                |                                      |
| -------------- | ------------------------------------ |
| **Status**     | 🔄 In progress                       |
| **Issue**      | #TBD — "Update the website header logo" |
| **Branch**     | `008-header-logo`                    |
| **Feature**      | `feature/pro-clinic-foundation`              |
| **Depends on** | nothing                             |

---

## User story

As a **website visitor** I want **the Pro Clinic brand mark to use the supplied logo asset** so that **the site header presents the salon's intended identity consistently**.

---

## Background

_To be completed during `/implement` with grounded file and line references._

- **Today:** The header and related brand links render a circular `PC` text mark.
- **The problem:** The supplied Pro Clinic logo asset is not used.
- **Already in place:** Existing brand text, header spacing, links, and responsive layout.

---

## Design decision

Use `/images/pro-clinic-logo.png` as the brand mark, sized to approximately 40px high on desktop, with no circular border. Keep the existing `Pro Clinic` text and layout classes so current spacing and responsive behavior remain unchanged.

**Not touched:** Navigation, header spacing, responsive breakpoints, page content, and any non-logo styling.

---

## Acceptance criteria

- [x] The circular `PC` text mark is replaced by the exact `/images/pro-clinic-logo.png` asset wherever the site brand is rendered.
- [x] The text `Pro Clinic` remains next to the image and is vertically aligned with it.
- [x] The existing circular border is removed.
- [x] The desktop monogram height is approximately 38–42px.
- [x] Existing header spacing and responsive behavior are preserved.
- [x] No unrelated page, content, or styling changes are made.
- [x] Typecheck passes; lint adds no new issues; tests green (note known pre-existing failures).

### Verification

- **New tests** — `src/app/page.test.ts`: extend the existing source-level homepage smoke tests to verify the shared brand markup and logo asset reference.
- Inspect the rendered header and related brand links at desktop and mobile widths.
- Confirm the image source, dimensions, adjacent text, and absence of the circular border in the relevant component and styles.
- Full suite result: `pnpm test` passed (8 tests); `pnpm typecheck` passed; `pnpm lint` passed with one pre-existing warning in `src/components/public-homepage.tsx:275`.

### Implementation notes

- Replaced the `PC` text spans in the homepage header/footer, contact header, and treatment-area header with `next/image` using the exact supplied asset.
- Set the shared mark to 40px high with no border or circular radius; retained the existing `.brand` flex alignment and 11px gap.

---

## Exact changes (file:line)

The shared brand markup is repeated in the public homepage, contact page, and treatment-area page; the footer uses the same mark class. The shared styles live in `src/app/globals.css`.

1. **`src/components/public-homepage.tsx:188,334`**, **`src/components/contact-page.tsx:76`**, and **`src/components/treatment-area-page.tsx:224`** — replace each `PC` text mark with the supplied image and retain the adjacent `Pro Clinic` text.
2. **`src/app/globals.css:123`** — size the image mark to approximately 40px high, remove the circular border styling, and preserve the existing flex alignment and spacing.
3. **`src/app/page.test.ts:6`** — add focused source-level assertions for the exact asset path, adjacent brand text, and removal of the old text mark.

**No change needed:** The supplied image asset already exists at `public/images/pro-clinic-logo.png`.

---

## Data model

**No schema changes.**

---

## Security

Nothing security-relevant changes because this is a local static image and presentational markup only.

---

## Edge cases

- If the image fails to load, its accessible alternative should still identify the Pro Clinic brand.
- The brand must remain usable and aligned at narrow responsive widths.

---

## Out of scope

- Recreating, editing, or replacing the supplied logo asset.
- Changing navigation, header spacing, responsive breakpoints, or any unrelated page content.
