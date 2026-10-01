# CLAUDE.md

This file provides guidance to Claude Code when working with code in the Pro Clinic repository.

## Starting a chat here

**New to this project? Type one of these. That is the whole first session.**

| Step | You type                                | What happens                                                        |
| ---- | --------------------------------------- | ------------------------------------------------------------------- |
| 1    | `/start`                     | Installs the tools, scaffolds the stack, builds the first screen and verifies it — then removes itself                                            |
| 2    | "read START_HERE.md and walk me through it" | The accounts only you can create — one at a time, in order       |
| 3    | `/createspec "<the thing you want>"`    | Scaffolds the spec and the branch, and asks what it does not know   |
| 4    | `/clarify`                              | Answers the open questions in that spec, one at a time              |
| 5    | `/implement`                            | Builds it, tests it, and runs the verification bar                  |
| 6    | `/analyze` → `/push` → `/pr-check`      | Checks the work against the spec, commits, opens the pull request   |

Steps 3–6 are the loop, repeated once per change, forever. Nothing else needs remembering.

**Assistant:** if someone opens a session with no spec and no command — "can you add X?", "why is this
broken?" — answer the question, and if the answer means changing code, say so and offer
`/createspec` rather than starting. `/start` only applies while
`.claude/commands/start.md` still exists; when it does not, this project is past that step and step 3 is
where a founder starts.

## After a command finishes

End every command with one short line: what to do next, and only that. Not a summary of what you
just did — the founder watched that happen.

| After | Tell them |
| --- | --- |
| `/start` | Pro Clinic runs. Next: step 2 of [START_HERE.md](START_HERE.md) — the No database for the core website content. Use a simple database only where needed for newsletter subscribers, contact/appointment requests and future editable content such as treatments, prices, offer and Vercel accounts only they can create — or `/createspec "<your first change>"` if they would rather build something first. |
| `/createspec` | The spec and its branch exist. Next: `/clarify`, which asks about anything the spec left open. |
| `/clarify` | Every open question in the spec is answered. Next: `/implement`. |
| `/implement` | Built, tested, and the verification bar passed. Next: `/analyze`, which checks the work against the spec. |
| `/analyze` | The spec is checked off and closed. Next: `/push`. |
| `/push` | The branch is on GitHub. Next: `/pr-check`, which confirms it merges cleanly and prints the command that opens the pull request. |
| `/pr-check` | Run the `gh pr create --base <target> --head <branch>` line it printed, then on **GitHub → Pull requests**: wait for the CI check to go green, then **Squash and merge**, and delete the branch when it offers. |
| `/security` | The findings are in `SECURITY_AUDIT.md`, which is gitignored and stays on this machine. Next: read **Needs you, outside the code** — those are theirs to decide, and anything that changes behaviour goes through `/createspec` like everything else. |

After that merge the issue branch is finished. The same route takes the work the rest of the way:
`feature/<name>` → `develop` → `main`, one pull request each, never skipped — and the next change
starts at `/createspec` again.

If a command failed or stopped early, say what would unblock it instead. Never point at the next
step of a step that did not finish.

## Working in another assistant

This foundation ships for **Claude Code, Copilot and Codex**, and the commands are the same
files for all three: `.claude/commands/<name>.md`. Claude Code reads those directly; Copilot and
Codex find them through the pointer in `.agents/skills/<name>/SKILL.md`, which both read and which
Claude Code deliberately does not — one directory, no command listed twice. Anything this file
addresses to "Claude" is addressed to whichever assistant is reading it.

Where a command names something only one tool calls by that name, this is the translation:

| The command says  | In Claude Code      | In Copilot or Codex                                        |
| ----------------- | ------------------- | ----------------------------------------------------------- |
| a subagent        | the Agent tool      | `runSubagent`, a custom agent, or the steps run in order     |
| ask the founder   | `AskUserQuestion`   | ask in chat and wait for the answer                          |
| wait for approval | a permission prompt | your own confirmation before a command or an edit            |

Never skip a step because your tool names it differently — do the equivalent. **And never keep a
command's progress in the conversation:** it goes in the repository — the spec's checked boxes,
and the notes a command writes as it goes — so the other assistant can pick up a
half-finished job exactly where it stopped. Adding a third assistant:
[docs/guides/AI_ASSISTANTS.md](docs/guides/AI_ASSISTANTS.md).

## What we're building
Pro Clinic operates a physical beauty and wellness salon in Gothenburg offering skincare, massage, medical foot care, laser treatments, lashes, brows and hairdressing. The website serves as a digital storefront for clients seeking high-quality personal treatments. Visitors arrive to discover what treatments exist, understand their details and pricing, learn about the salon and its professionals, and initiate contact to book appointments. The site must feel luxurious yet professional, establish trust through clear information, and guide visitors toward booking contact.

**Where this goes:** A modern, premium website that serves as Pro Clinic's digital home. It makes treatment discovery effortless, builds trust through professional presentation of the salon and its team, and converts visitors into booking requests and returning clients. The experience feels welcoming and established, reflecting the quality and personal care of the physical salon.

**The MVP must, above all else:** First, the website must make it easy for visitors to discover Pro Clinic’s treatments, understand what each treatment includes and quickly find the information they need to book an appointment.
If it works well, it becomes a modern, premium and welcoming digital home for Pro Clinic that builds trust, showcases the salon and its treatments, and turns visitors into returning clients.

Build toward that, not just toward the current ticket. Full picture: `docs/VISION.md`.

## Not our problem
These are deliberate exclusions, not gaps waiting to be filled. Don't build them, don't scaffold for
them, and don't suggest them unless asked directly.

_Not yet decided — add what this product is deliberately not doing._

## Communication style
Be concise but clear. Short responses save tokens — avoid restating what was asked, keep summaries
at the bare minimum, and omit filler. One clear sentence beats a paragraph.

## Clean code
Always write clean code. Avoid duplication — if the same expression appears twice, restructure to
eliminate it. Prefer clarity over cleverness: a reader should understand intent from the code itself.

## Read first (in order)
1. **`.claude/spec-kit/constitution.md`** — the single source of truth for all rules. When any file
   disagrees with it, the constitution wins.
2. The spec for your issue in `/specs` (`specs/NNN-kort.md`).
3. `docs/VISION.md` — what this becomes if it wins.
4. `docs/architecture/SYSTEM_OVERVIEW.md` and `docs/guides/DEVELOPER_GUIDE.md`.

Before touching a public page, read [`docs/guides/SEO.md`](docs/guides/SEO.md) — this project's
decision record for how those pages get found. It settles questions that are otherwise re-argued
once per feature.

## Before implementing anything
1. Read the relevant spec file in `/specs` before writing code.
2. If no spec exists for the task, say so and ask before proceeding — or run `/createspec`.

The spec lifecycle is automated via slash commands (`/createspec → /clarify → /implement → /analyze`,
plus `/pr-check` before a PR) governed by `.claude/spec-kit/constitution.md`. See `specs/README.md`.
`/security` sits outside that loop: it reviews the whole repository for vulnerabilities, fixes only
what changes nothing a user can see, asks before anything else, and writes the gitignored
`SECURITY_AUDIT.md`.

## After implementing anything
Update the corresponding spec in `/specs` — check off acceptance criteria, note any deviations.

## Branching & workflow
We work via GitHub: a **feature** is a GitHub Project, **issues** are linked to it. Branch hierarchy:
`main` ← `develop` ← `feature/<name>` ← `<nr>-kort` (issue branch, no `issue/` prefix). PR direction
is strict and never skipped: `<nr>-kort` → its `feature/<name>` → `develop` → `main`. **Never** PR an
issue branch to `main`/`develop`. Full detail in `docs/architecture/BRANCHING.md`.

## Commands
Pro Clinic — Next.js (App Router) · TypeScript · Tailwind + shadcn/ui · No database for the core website content. Use a simple database only where needed for newsletter subscribers, contact/appointment requests and future editable content such as treatments, prices, offer (Postgres) · Vercel · GitHub. Run from the repo root:
- `pnpm dev`        # start the dev server
- `pnpm build`      # production build
- `pnpm typecheck`  # type check
- `pnpm lint`       # linter
- `pnpm test`       # run all tests

## Architecture
Client layer: Next.js pages and components using shadcn/ui. Server layer: Next.js API routes and server components handle data fetching, admin authentication, and email notifications. Database layer: Supabase PostgreSQL stores treatments, professionals, offers, and booking requests. All server-side logic runs within the Next.js runtime; the client receives rendered HTML and interacts via forms and fetch requests.

## Key conventions
Page routes follow the URL structure: /treatments (directory), /team (professionals), /offers (promotions), /contact (booking form), /admin (staff dashboard). Server actions handle form submissions (booking requests, admin edits); API routes are used for read-heavy operations like fetching treatment lists. Supabase row-level security policies ensure admin data is accessible only after authentication. Tailwind utility-first approach; custom CSS is minimal. shadcn/ui components provide buttons, forms, dialogs and modals; customize via Tailwind props.
