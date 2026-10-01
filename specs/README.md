# Specs

Feature specifications for Pro Clinic. Each spec is written before implementation.

One file per issue: `specs/NNN-kort.md`, combining the *what*, the *how* (exact `file:line` changes),
acceptance criteria, verification and edge cases in a single document.

## Automated workflow
Driven by slash commands (in [`.claude/commands/`](../.claude/commands/)), governed by the
constitution + template in [`.claude/spec-kit/`](../.claude/spec-kit/):

| Command | Phase |
|---------|-------|
| `/createspec <issue# \| "desc">` | Scaffold the spec + set up the `NNN-kort` branch off its feature |
| `/clarify` | Resolve `[NEEDS CLARIFICATION]` markers via targeted questions |
| `/implement` | Plan exact `file:line` changes, implement, add tests, run typecheck/lint/tests |
| `/analyze` | Cross-check spec ↔ code ↔ constitution; if all passes, close the spec out |
| `/push` | Commit pending changes + push (never main/develop, never force) |
| `/pr-check` | Pre-PR merge-safety check against the target branch |
| `/security` | Review the whole repository for vulnerabilities, fix the invisible ones, write `SECURITY_AUDIT.md` |

## What to spec first
These are the capabilities chosen in the interview. Each one is a spec waiting to be written — run
`/createspec` for the one you need next and the command scaffolds `specs/NNN-kort.md` for you.

Home page: hero section, featured treatments carousel, call-to-action buttons for booking, overview of salon values. Treatment directory: filterable by category (skincare, massage, laser, lashes, brows, hair), each treatment displays name, description, duration, price, and contact button. Team page: professional photos and bios of practitioners. Offers page: calendar view or list of current promotions. Contact/Book page: form capturing name, email, phone, preferred service and date-time preference; submissions trigger email confirmation to client and notification to salon. Admin dashboard: password-protected area allowing salon staff to add/edit treatments, manage pricing, publish offers, and view booking requests. Site-wide search bar returning treatment results by name or category.
