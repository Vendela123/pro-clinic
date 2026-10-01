# Pro Clinic — Spec Constitution

The single source of truth for how Pro Clinic is built and what every spec and change must
respect. When any other file disagrees with this one, **this file wins**. It holds the *invariants*
and links to canonical docs for detail. Amendments are recorded in the spec that changes them.

Canonical sources: [`CLAUDE.md`](../../CLAUDE.md) ·
[`VISION.md`](../../docs/VISION.md) ·
[`SYSTEM_OVERVIEW.md`](../../docs/architecture/SYSTEM_OVERVIEW.md) ·
[`DEVELOPER_GUIDE.md`](../../docs/guides/DEVELOPER_GUIDE.md) ·
[`BRANCHING.md`](../../docs/architecture/BRANCHING.md).

---

## I. Architecture invariants
Admin features (editing treatments, viewing requests) execute only after password verification in a server action or API route. Public pages (home, treatments, team, offers) are pre-rendered or server-rendered without authentication checks. Booking request submissions validate input server-side before storage. Email notifications from booking requests are sent server-side, not exposed to the client.

## II. Data invariants
Treatments belong to categories; each treatment record includes name, description, duration, price and a reference to a professional. Professionals have name, title, bio and a photo URL. Offers have start and end dates; only current offers are displayed. Booking requests capture client name, email, phone, treatment reference, requested date-time and notes; they are immutable once stored.

## III. Design invariants
Visual hierarchy prioritizes treatment discovery and booking calls-to-action. Color palette and typography convey luxury without harshness; photography of treatments and team builds trust and warmth. Navigation is flat and intuitive; treatment categories are immediately visible. Whitespace and spacing follow Tailwind's scale. Responsive design works from mobile to desktop; touch targets meet accessibility standards.

## IV. Process invariants  (PORTABLE — the Pro Clinic workflow, do not weaken)
- We work via GitHub: a **feature** is a GitHub Project, and **issues** are
  linked to that feature. Each issue gets a spec and a branch.
- **Spec before code.** Every issue gets a `specs/NNN-kort.md` before implementation; the spec is the
  source of truth and code is reviewed *against* it. One feature at a time. When code and spec
  disagree, stop and **fix the spec first**.
- **`/start` sets up, the spec loop builds.** `/start` scaffolds the stack and builds the MVP
  focus for real, to the design in `docs/architecture/UI_ARCHITECTURE.md`. That is its ceiling —
  not a second feature, not schema, not real auth. Everything past it goes through a spec: no
  spec, no feature.
- **`/security` closes what nobody can see, and reports the rest.** It reviews the whole repository
  for vulnerabilities and may change code — but only where nothing about how Pro Clinic looks
  or behaves changes with it. Everything else it proposes and waits for a yes. It installs nothing,
  sends nothing anywhere, attacks nothing, and rewrites no history. Its report,
  `SECURITY_AUDIT.md`, is a list of the holes still open and stays out of version control. What it
  may not fix that way is a spec, like everything else.
- Branch `NNN-kort` (issue number + short name, **no** `issue/` prefix) is cut from its
  `feature/<name>`. **PR direction is strict and never skipped:** issue branch → its `feature/<name>`
  → `develop` → `main`. An issue branch is **never** PR'd to `main` or `develop`.
- **Conventional Commits**, atomic and buildable. Small PRs — one coherent slice; squash-merge.
- **Decisions are recorded** in the spec that introduces them, or a short note under `docs/` (with or
  before the implementing PR).
- **AI context stays synchronized.** `CLAUDE.md` and docs update in the **same** change as the code.
  Single source of truth: a fact lives in one file, everything else links; duplication is a bug.
- After implementing: check off acceptance criteria, set the spec **Status**, and update
  [`specs/README.md`](../../specs/README.md).

## V. Testing invariants  (PORTABLE — do not weaken)
- Tests are **co-located** with the code they cover, matching the test runner's glob so CI runs them.
- Tests are **deterministic**: no dependence on local time/timezone, randomness, or the network. Pin
  `TZ=UTC` and anchor fake time in UTC.
- Each spec's **Verification** section names the tests it adds. `/implement` writes them; `/analyze`
  confirms they exist and are green before closing a spec.
- Bug fixes ship with a regression test that fails before the fix. Failing/skipped tests never merge.

## VI. Verification bar
A change is not done until:
- Typecheck is clean:  `pnpm typecheck`
- Linter adds **no new** issues:  `pnpm lint`
- Tests are green:  `pnpm test`  — noting known pre-existing failures.
- The relevant acceptance criteria are demonstrably met (by a test or an explicit manual check).
