# Spec 005 — Homepage hero

> **In one sentence:** Recreate the homepage hero’s architectural image composition while preserving its content and responsive layout.

|                |                                      |
| -------------- | ------------------------------------ |
| **Status**     | ✅ Complete                          |
| **Issue**      | #TBD [NEEDS CLARIFICATION: assign issue #] — "Homepage hero visual refresh" |
| **Branch**     | `005-homepage-hero`                   |
| **Feature**    | Homepage presentation                |
| **Depends on** | [004 — Homepage cleanup](004-homepage-cleanup.md) |

---

## User story

As a visitor to the homepage, I want the hero to present Pro Clinic with a warm, architectural visual composition so that the salon feels premium and welcoming.

## Background

- **Today:** The hero renders `spa.jpg` in a plain image container and includes a small uppercase eyebrow above the heading.
- **The problem:** The hero does not match the requested arch-based reference composition, and the header retains a bottom border.
- **Already in place:** The hero already has the required heading, paragraph, buttons, responsive grid and existing spa image.

## Design decision

Use CSS pseudo-elements on the hero visual for the offset beige arch and blush organic accent, with the existing spa image in front using an architectural arch mask. Remove only the hero eyebrow and shared header bottom border; preserve all other homepage content, colors, typography, links and image sources.

**Not touched:** Treatment, about, location, footer content or other homepage sections.

## Acceptance criteria

- [x] The hero keeps `/images/spa.jpg` on the right at desktop widths.
- [x] The photo has a tall arch with rounded top, straight sides and straight bottom, without distortion.
- [x] A muted beige offset arch sits behind the photo, matching the supplied reference composition.
- [x] The hero eyebrow is removed while the heading, paragraph and both buttons remain.
- [x] Header bottom border is removed while header content remains unchanged.
- [x] Hero composition remains responsive on mobile.
- [x] Typecheck passes; lint adds no new issues; tests green.

### Verification

- **Regression test** — `src/app/page.test.ts`: assert the hero eyebrow is absent and the hero shape/image class hooks remain.
- **Manual check** — Inspect `/` and `/en/` at desktop and mobile widths; confirm layering, arch proportions, text balance and header border removal.
- Full suite result + typecheck/lint status.

## Exact changes (file:line)

1. **`src/components/public-homepage.tsx`** — remove the hero eyebrow element while retaining existing hero content and image source.
2. **`src/app/globals.css`** — remove the shared header bottom border and add scoped hero arch, offset beige shape, blush accent, image cover and responsive positioning rules.
3. **`src/app/page.test.ts`** — add source/style regression assertions for the hero update.

**No change needed:** Image assets, routes, navigation labels, treatment section and all non-hero homepage sections.

## Data model

**No schema changes.**

## Security

Nothing security-relevant, because this change only adjusts static public presentation.

## Edge cases

- The image must remain cropped rather than stretched at every responsive width.
- Decorative shapes must remain behind the photo and not obscure hero text.
- Both Swedish and English homepages must omit the hero eyebrow.

## Out of scope

- Changing hero copy, buttons, image source, colors, typography or other homepage sections.
