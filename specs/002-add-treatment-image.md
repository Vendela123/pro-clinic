# Spec 002 — Add treatment image

> **In one sentence:** Show the existing treatment images on all five treatment cards on both homepages.

|                |                                      |
| ---------------- | ------------------------------------ |
| **Status**     | ✅ Done                              |
| **Issue**      | #TBD [NEEDS CLARIFICATION: assign issue #] — "Add treatment image" |
| **Branch**     | `002-add-treatment-image` (from `feature/pro-clinic-foundation`) |
| **Feature**    | Homepage treatment discovery          |
| **Depends on** | nothing                              |

---

## User story

As a visitor to either homepage, I want each treatment card to show its corresponding treatment image so that the treatment area is easier to recognize.

## Background

- **Today:** Treatment cards in `src/components/public-homepage.tsx` render visual placeholders or incomplete image mappings.
- **The problem:** The five treatment cards should show their corresponding existing images in both locales.
- **Already in place:** The homepage uses Next.js and already imports `Image`.

## Design decision

Add the existing image path to each treatment-card data entry in both locales and render them with Next.js `Image`, preserving the existing card links, text, and layout.

**Not touched:** Other treatment cards, Swedish content, routing, or database functionality.

## Acceptance criteria

- [x] All five existing treatment images are used by the matching cards on both homepages.
- [x] Each image has descriptive alternative text and does not remove the card link or label.
- [x] Missing image files produce a clear build failure rather than a silent placeholder.
- [x] Typecheck passes; lint adds no new issues; tests green.

### Verification

- **New tests** — Existing homepage smoke coverage is extended or manually verified for the image path.
- **Manual check** — `/` and `/en/` show the matching image in each of the five treatment cards.
- Full suite result + typecheck/lint/build status: `pnpm typecheck`, `pnpm lint`, `pnpm test`, and `pnpm build` all passed.

### Implementation notes

- The existing image files are stored in `public/images/`.
- The Massage and Lashes & brows mappings use the existing filenames `massgae.jpg` and `fransförlänging.jpg`.
- Treatment card images use eager, unoptimized `next/image` loading so static files with the existing filenames render reliably.

## Exact changes (file:line)

1. **`src/components/public-homepage.tsx`** — add the matching image source to all five cards in both locale configurations and render them in the treatment-card visual.
2. **`src/app/globals.css`** — size and crop treatment images to fill the existing card visual.

## Data model

**No schema changes.**

## Security

Nothing security-relevant, because this is a static public image asset.

## Edge cases

- If the asset is absent, Next.js should fail during build so the missing deployment asset is visible.

## Out of scope

- Changing treatment content or introducing an upload/admin flow.
