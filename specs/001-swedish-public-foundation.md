# Spec 001 — Swedish-first public website foundation

> **In one sentence:** Establish the Swedish-first public website foundation for Pro Clinic, a beauty and wellness salon, with a premium warm design, language switcher, homepage structure, treatment discovery, direct contact actions, SEO-ready metadata, and responsive layout — without introducing booking, accounts, a database, or newsletter backend.

|                |                                      |
| -------------- | ------------------------------------ |
| **Status**     | ✅ Done                              |
| **Issue**      | #TBD [NEEDS CLARIFICATION: assign issue #] — "Swedish-first public website foundation" |
| **Branch**     | `001-swedish-public-foundation` (from `feature/pro-clinic-foundation`) |
| **Feature**    | Public website foundation            |
| **Depends on** | nothing                              |

**Short on time?** Read _User story_ and _Acceptance criteria_ — that's the whole point of the change and how you'll know it's done. Everything after those is detail for whoever implements and reviews it.

---

## User story

As a prospective client in Sweden, I want the Pro Clinic website to feel premium, trustworthy and immediately understandable in Swedish, so that I can discover treatments, identify the right contact channel, and decide whether to get in touch without confusion or friction.

As a visitor from outside Sweden, I want the English version at `/en/`, so that I can browse the same offerings in a familiar language.

---

## Background

- **Today:** The repository includes a working Next.js foundation and a first-screen landing page, but it is not yet structured as a Swedish-first public website with a real locale experience, navigation foundation, or SEO setup.
- **The problem:** The site does not yet clearly establish Pro Clinic as a premium Swedish beauty and wellness salon, does not provide a consistent language switch pattern, and does not yet surface treatment discovery and direct contact actions in the way the product requires.
- **Already in place:** The app shell, styling layers, and initial Pro Clinic landing-page visual foundation are present in the codebase, giving a solid starting point for the next public-facing feature work.

---

## Design decision

The first public website release will be intentionally simple and durable: Swedish is the default content language, English lives under `/en/`, and the homepage becomes the primary discovery and contact surface. The design will prioritize trust, readability, treatment discovery, and direct phone, SMS, and email contact actions so customers can arrange appointments with the salon themselves — without introducing a booking form, automated booking flow, user accounts, or any database-backed functionality. Where real Pro Clinic business content is not yet available, the implementation must use clearly marked placeholders rather than invented names, prices, descriptions, staff, contact details, or other facts.

**Not touched:** Online booking, booking forms, automated booking flows, customer accounts, newsletter backend persistence, any database schema work, CMS or admin-managed content editing, and invented business content are intentionally excluded from this release.

### Proposed homepage section structure

1. **Header and main navigation** — Pro Clinic wordmark placeholder, Swedish links `Behandlingar`, `Om oss / Team`, `Erbjudanden`, and `Kontakt`, their English equivalents on `/en/`, a direct contact entry point, and a visible `SV / EN` switcher. `Behandlingar` opens an accessible localized menu containing direct links to all five treatment areas on desktop and mobile.
2. **Hero** — concise localized salon positioning, a warm premium visual treatment, and localized direct-contact CTAs using placeholders until approved salon contact details are available.
3. **Treatment discovery** — category-led treatment navigation with homepage cards for the five approved treatment areas (`Hudvård`, `Massage`, `Fotvård`, `Fransar & bryn`, and `Hårborttagning`). Each card links to its own Swedish treatment-area page, with matching localized pages under `/en/`; the pages show only the supplied treatment names, durations, prices, descriptions, notes, and cancellation policy.
4. **Why Pro Clinic** — trust-building salon values and service approach, expressed as clearly marked localized placeholder copy until the salon provides approved facts.
5. **Contact and appointment prompt** — localized instruction that appointments are arranged by phone, SMS, or email, with no form and no automated booking flow.
6. **Footer** — repeated localized contact actions, basic salon location/contact placeholders, language links, and SEO-supporting site navigation.

---

## Acceptance criteria

- [x] The default site language is Swedish, and the homepage renders Swedish content on the root path `/`.
- [x] English content is available under `/en/` with a matching homepage structure and messaging.
- [x] A visible `SV / EN` language switcher is present in the main navigation and persists the chosen language across visits.
- [x] The homepage includes a premium, warm, modern visual direction with clear hierarchy and a strong first impression.
- [x] The Swedish main navigation uses `Behandlingar`, `Om oss / Team`, `Erbjudanden`, and `Kontakt`; the English version uses the corresponding English labels, and both remain usable on mobile and desktop.
- [x] `Behandlingar` opens a premium, keyboard-accessible treatment menu on hover or click on desktop and on tap/click on mobile; selecting an item navigates directly to the corresponding localized treatment-area route, and the menu closes on selection, outside click, or Escape.
- [x] Treatment discovery is clear and immediately actionable through five full-card links for `Hudvård`, `Massage`, `Fotvård`, `Fransar & bryn`, and `Hårborttagning`, with localized `Se behandlingar` / `View treatments` CTAs and distinct image placeholders.
- [x] Each treatment area has a Swedish route (`/treatments/hudvard`, `/treatments/massage`, `/treatments/fotvard`, `/treatments/fransar-bryn`, `/treatments/harborttagning`) and a matching English route under `/en/treatments/`.
- [x] Treatment-area pages contain only the supplied treatment names, durations, prices, descriptions, category note, and cancellation policy; no additional treatments, staff information, or business information is invented.
- [x] Treatment-area booking CTAs lead to the direct-contact pages (`/contact` and `/en/contact`) with no online booking flow.
- [x] Contact actions and all CTA text are localized to the current language and prominently let customers arrange an appointment by direct phone, SMS, or email contact with the salon; there is no booking form, online scheduling, or automated booking flow.
- [x] The homepage includes a strong SEO foundation: title, meta description, relevant headings, and language metadata (`lang` and `hreflang`-style setup for default + `/en/`).
- [x] The page is fully responsive and readable across mobile, tablet, and desktop breakpoints.
- [x] No online booking system, booking form, automated booking flow, customer accounts, database layer, CMS, or newsletter backend is introduced as part of this feature.
- [x] Typecheck passes; lint adds no new issues; tests green.

### Verification

- **Existing smoke test** — `src/app/page.test.ts`: baseline Pro Clinic and Swedish treatment-discovery intent remains covered.
- **Manual route check** — `/`, `/en/`, all five Swedish treatment-area routes, all five English treatment-area routes, `/contact`, and `/en/contact` returned successfully from the production build; treatment pages rendered no `<form>` element.
- **Full suite result + typecheck/lint/build status** — `pnpm typecheck`, `pnpm lint`, `pnpm test`, and `pnpm build` all passed. The homepage, contact pages, and all treatment-area routes were statically generated by the production build.

---

## Exact changes (file:line)

1. **`src/app/layout.tsx`** — define the default Swedish locale and root metadata foundation, with a clear structure for the site title, basic description, and language setup that can support `/en/` content.
3. **`src/app/page.tsx`** — replace the current scaffold with the premium Swedish homepage structure: localized header/navigation, hero, treatment discovery cards, trust-building placeholder content, direct contact actions, and footer.
4. **`src/app/en/page.tsx`** or an equivalent locale-aware route — create the English homepage mirror for the same content model under `/en/`.
5. **`src/components/public-homepage.tsx`** — model the five approved treatment areas, link each full card to its localized area route, and use localized discovery CTAs.
6. **`src/components/treatment-area-page.tsx`** and localized treatment route pages — render the ten treatment-area routes with the supplied treatment catalog and cancellation policy.
7. **`src/components/contact-page.tsx`** and contact routes — provide the direct phone, SMS, and email destination for treatment-area booking CTAs without online booking.
8. **`src/components/language-switcher.tsx`** — add the visible `SV / EN` switcher with accessible behavior and persistence.
9. **`src/app/globals.css`** — refine spacing, typography, palette, and UI rhythm to support the warm premium look without overcomplicating the build.
10. **`src/app/sitemap.ts` or metadata setup** — establish the SEO foundation for the public site, including relevant metadata and all applicable language hints.
11. **Responsive layout files/components** — ensure the localized navigation and content stack adapt cleanly across mobile and desktop breakpoints with no design regression.

**No change needed:** the project already has a working Next.js app shell, Tailwind setup, and smoke-test infrastructure; this feature builds on that rather than adding backend complexity. Real Pro Clinic business content and contact details will be supplied separately; until then, visible placeholders are required.

---

## Data model

**No schema changes.** This feature is intentionally front-end and public-facing only. It does not add any database tables, contact storage, or persistent user data.

---

## Security

Nothing security-relevant is introduced by this feature; it is public-facing content only, with no authentication, no user accounts, and no write path to persistent data.

---

## Edge cases

- **Locale fallback** — if a user lands on an unsupported locale or a stale path, the app should gracefully fall back to Swedish.
- **Language persistence** — if a browser has previously selected English, the switcher should restore that preference on return.
- **Mobile navigation** — the menu should remain usable and uncluttered at narrow widths without hiding key actions.
- **Contact action integrity** — phone, SMS, and email links must be clearly separated from the generic nav; use approved real contact details when supplied, otherwise use clearly marked non-production placeholders rather than inventing details.

---

## Out of scope

- Online booking or scheduling flow.
- Booking form or automated booking flow; appointments are arranged through direct phone, SMS, or email contact only.
- Customer account creation or login.
- Newsletter backend or subscription persistence.
- Database-backed treatment data or CMS editing.
- Additional treatment areas or treatments beyond the supplied catalog.
- Admin dashboard or authenticated staff area.
- Invented treatment names, prices, descriptions, staff members, contact details, or other business information.
- Any multi-step conversion funnel beyond public homepage discovery and contact.
