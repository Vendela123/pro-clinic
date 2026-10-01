---
description: Take this foundation from documents to a project that runs, once.
allowed-tools: Read, Write, Edit, Bash, Grep, Glob
---

Set up **Pro Clinic** so it runs.

This foundation ships the documents, the rules and the workflow. It does not ship a stack — that is
what this command is for. Run it once, in a fresh clone. Read
@.claude/spec-kit/constitution.md first; everything below is subject to it.

## How this runs

Six sections, in this order. Finish one before starting the next, and say out loud which one you are
in:

| #   | Section          | What it leaves behind                                                     |
| --- | ---------------- | ------------------------------------------------------------------------- |
| 1   | Tools            | git, this stack's runtime and the CLI for your repo host, all installed    |
| 2   | Stack            | the framework, the toolchain, and `.env.example`                          |
| 3   | Git              | a local repository on `main`, plus `develop` and your first feature branch |
| 4   | The first screen | Pro Clinic's core action, built and finished                        |
| 5   | Verify           | all five commands run, with their real output                             |
| 6   | Hand back        | `START_HERE.md` updated, this command removed                             |

**Show progress.** When a section is done, print exactly this line and nothing else, so the founder
can see where they are without reading the transcript:

```
[██░░░░░░░░░░] 1/6 · Tools ✓
```

Two filled cells per finished section, twelve in total. Print `[░░░░░░░░░░░░] 0/6 · starting` before
section 1, and add `(already done)` after the section name when there was nothing left to do there —
it still counts as finished. If a section fails, print the bar as far as you actually got, say which
step failed, and stop: a bar that runs ahead of the work is worse than no bar at all.

**Re-runnable until it succeeds.** Check before every step and skip what is already there. A founder
who runs this twice, or runs it after writing code, must lose nothing. When a step's output already
exists, say so and move on — never overwrite, never scaffold on top. Once section 5 has passed in
full, this command has nothing left to do: it updates step 1 of `START_HERE.md` and then removes
itself (section 6) — so a second run only ever happens because the first one did not finish.

**It stops at this machine.** Section 1 installs developer tools, and that is the only thing here
that reaches outside this directory. No creating a remote repository, no provisioning a database, no
deploying, no writing secrets anywhere, and no signing in to anything. Those need a human with an
account and are step 2 of [START_HERE.md](../../START_HERE.md).

---

## 1. Tools

Nothing else in this command works without these.

**Check first, install only what is missing.** Run every check below before installing anything.

| Tool | Check | Why this project needs it |
| --- | --- | --- |
| **Git** | `git --version` | section 3, and every branch you push after it |
| **Node.js 20 or newer** | `node --version` | running Pro Clinic at all — section 2 cannot start without it |
| **the GitHub CLI (`gh`)** | `gh --version` | step 2 of [START_HERE.md](../../START_HERE.md), and `/pr-check` opening pull requests later |

Install what is missing with the package manager this machine already has — **one** of these,
not all three:

```bash
# macOS
brew install git node gh

# Windows
winget install --id Git.Git -e
winget install --id OpenJS.NodeJS.LTS -e
winget install --id GitHub.cli -e

# Debian / Ubuntu — git comes from apt; take the rest from the install pages below
sudo apt-get update && sudo apt-get install -y git
```

Install pages, for a machine with neither package manager, or an apt version too old for this
project:

- Node.js 20 or newer — https://nodejs.org/en/download
- the GitHub CLI (`gh`) — https://github.com/cli/cli#installation

**pnpm comes with Node.** Run `corepack enable` — never `npm install -g pnpm`, which installs a
second copy that shadows the one this project pins.

**The five rules of this section:**

1. **Check before you install.** A tool that answers its `--version` is done — say so, and move on.
2. **Never upgrade what is already there.** A machine-wide version bump is not this command's to
   make, and it can break every other project on the founder's laptop. If a version is genuinely
   too old for this project, say which and leave the decision to them.
3. **If an install fails, stop trying and say so.** Print the tool's own install page, and do not
   build from source, download an installer into this repository, or pipe a script into a shell.
   `sudo` may ask for a password you cannot answer from here — that is a report, not a puzzle.
   Then carry on with the sections that do not need it: a missing runtime stops section 2, a
   missing `git` stops section 3, and both belong in your final report.
4. **Sign in to nothing.** `gh auth login` is the founder's own, in step 2 of
   [START_HERE.md](../../START_HERE.md). This command installs tools; it never holds a credential.
5. **A tool installed just now may not be on this shell's `PATH` yet.** If a command you have just
   installed successfully still reports "not found", that is what happened — say so and ask the
   founder to restart their terminal (and this session) before you continue. Do not install it a
   second time, and do not edit their shell profile to work around it.

**Done when:** every check above either passes or is reported as something you could not install.

## 2. Stack and toolchain

Turn this directory into a project that runs. Keep every file the foundation already put here.

**Already has a `package.json`?** Then this section has run. Skip to section 3.

1. **Scaffold into a throwaway directory.** Every flag is passed, so it asks nothing:

   ```bash
   pnpm create next-app@latest pro-clinic-scaffold --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-pnpm --yes --disable-git --skip-install
   ```

2. **Move it in.** Copy everything from `pro-clinic-scaffold/` into this directory, **skipping any
   path that already exists** — this foundation's `README.md`, `CLAUDE.md`, `.github/` and
   `.gitignore` win over the generator's. Then delete `pro-clinic-scaffold/`, and set `name` in
   `package.json` to `pro-clinic` — the generator took it from that throwaway directory.
   Nothing that was here before you started may be modified or lost by this step; if you cannot
   move a file in without overwriting one of ours, leave ours and say so.

3. **Install dependencies:** `pnpm install`.

4. **Initialise shadcn/ui.** Tailwind came with the scaffolder (`--tailwind`); shadcn/ui did not,
   and this project's documents name both as its stack:

   ```bash
   pnpm dlx shadcn@4.16.1 init --yes -b radix -p nova
   ```

   That writes `components.json` and the `cn` helper, and installs **no components**.
   Components arrive one at a time, when a spec calls for one: `pnpm dlx shadcn@4.16.1 add <name>`.

5. **Add the test runner:** `pnpm add -D vitest@^3`. Pinned to a major deliberately —
   unpinned, this lands whatever shipped today, and a test runner that will not start is the
   exact failure this command exists to prevent. A project whose `pnpm test`
   does nothing is worse than one without tests: it reports green having checked nothing.

6. **Make the five commands real.** The `scripts` block in `package.json` must define `dev`,
   `build`, `typecheck`, `lint` and `test`, because `START_HERE.md` and `.github/workflows/ci.yml`
   already name them. `typecheck` is `tsc --noEmit`; TypeScript runs `strict`.

7. **Create `.env.example`, then copy it to `.env.local`.** The foundation names this file but
   does not ship it — nothing here knows your keys, and a committed file that might hold one is
   not worth the risk. It carries variable *names* only, never values:

   ```
   DATABASE_URL=   # No database for the core website content. Use a simple database only where needed for newsletter subscribers, contact/appointment requests and future editable content such as treatments, prices, offer connection string, server-only
   ```

   `.env.local` is where real values go, and `.gitignore` must already exclude it.

**Done when:** the dependencies are installed and `package.json` (or this stack's equivalent) defines
the five commands section 5 runs.

## 3. Git, locally

A repository on this machine only — no remote, no push. Skip any step that is already done.

1. **`git init -b main`**, if there is no `.git` here yet. The branch model this foundation ships is
   `main` ← `develop` ← `feature/<name>`, and git still defaults to `master` on many machines.
2. **Commit everything as the first commit** — the foundation as it was generated, before your
   changes. If `git` has no `user.name` or `user.email` on this machine, ask the founder for them and
   set them locally (`git config user.name …` in this repository), rather than committing as nobody.
3. **Create the long-lived branches:** `develop`, then your first `feature/<name>`. See
   [BRANCHING.md](../../docs/architecture/BRANCHING.md).

No remote. Adding one, and pushing, is yours to do in [START_HERE.md](../../START_HERE.md).

**Done when:** `git log` shows the first commit and `git branch` lists `main`, `develop` and one
`feature/<name>`.

## 4. The first screen

Build the one thing this product is for, and finish it. The ceiling below is the whole of it.

Read `docs/architecture/UI_ARCHITECTURE.md` before writing anything. It is the build brief for
what you are about to make — the screens, the navigation, the layout, the states, the design
language — written for this project. The core action it should perform: **First, the website must make it easy for visitors to discover Pro Clinic’s treatments, understand what each treatment includes and quickly find the information they need to book an appointment.
If it works well, it becomes a modern, premium and welcoming digital home for Pro Clinic that builds trust, showcases the salon and its treatments, and turns visitors into returning clients.**

**Where that names both a first thing and a long-term one, the first thing is the ceiling.** A
clause about where this is heading is context for the decisions you make — never a second thing
to build. If the two are hard to tell apart, build the smaller one.

The founder showed us what they had in mind, and the brief's references section says what it said. Read it as direction — the layout, the density, the tone — never as something to copy: no logo, no brand name, no borrowed wording. This product is not theirs and must not look like it is.

**Build that action for real — not a placeholder screen.** A founder opening this for the first
time should recognise their product and see the beginning of the real thing, not a generator's
default page with the name swapped in.

The core objects this product is about: Home — Introduces Pro Clinic, highlights popular treatments and guides visitors toward booking or contacting the salon.
Treatments — Shows all treatments in clear categories. Each treatment includes details, pricing, duration and a way to contact the salon about booking.
About / Our team — Introduces Pro Clinic, the salon, its professionals and the personal experience behind the business.
Offers & News — Displays current promotions, special offers and news.
Contact / Book — Allows visitors to contact the salon by phone, SMS or email to request an appointment. There is currently no online booki

Style it with Tailwind, using the shadcn/ui primitives section 2 installed. That is this project's design system, and using it is not a feature.

**The ceiling is `mvpFocus`, built well — a bound, not a hard line.** Build the surrounding shell a
real product needs to present that one action honestly: navigation, the loading/error/empty
states, a sign-in surface where the action makes no sense without one. Where `UI_ARCHITECTURE.md`
was thin, finish the screen to a reasonable standard with this project's own design system — the
layout, the spacing, placeholder content in the shape the real content will take. That is
presentation, and polish is allowed to fill a gap in taste. It is never allowed to fill a gap in
function.

**Every screen, field, label and route you create must trace back to something the founder wrote**
— an interview answer, `mvpFocus`, the core objects above, or `UI_ARCHITECTURE.md`. That test
permits a sign-in screen when the product is plainly account-based, and forbids a settings page
nobody asked for, however tasteful. Where something cannot be traced, leave a
`[NEEDS CLARIFICATION]` note rather than deciding it yourself.

**Auth follows the same rule as everything else: surface, never service.** Build the sign-in
screens and wire them to the auth this stack already provides when the core action requires one —
but provision no auth service, write no secret, and create no user table. Where the surface cannot
work without a real backend, say so plainly instead of faking a session.

**No schema, no persistence.** Build against local or in-memory state. The table this action needs
is the founder's first spec, not this command's job — `/createspec` picks up from here.

**Still a ceiling, not a starting budget.** No second feature, no capability the founder picked for
later, no database beyond what a spec calls for. The founder should open the page, recognise their
product doing its one real thing, and see plainly where `/createspec` picks up. Everything past
this goes through the spec loop — that is what the rest of this foundation is for.

### Finish it

**A screen that works is half the job.** The bar is a first version the founder is glad to show
someone, and the difference is almost never features — it is that the spacing is consistent, the
type has a hierarchy, the empty state says something useful, and nothing shifts or flashes while
it loads. `UI_ARCHITECTURE.md` has a section on each of those; they are not decoration, and they
are not a second pass to do later. Build them the first time.

**Before you report done, walk the screen yourself and answer these honestly:**

- With no data at all, does it look designed, or does it look broken?
- While it loads, does anything jump, flash, or go blank?
- If the action fails, does the person reading know what failed and what to do?
- Is every spacing value and every colour from the scale in `UI_ARCHITECTURE.md`, or did some
  get typed in by hand?
- Can the core action be completed with the keyboard alone, with focus visible the whole way?
- Read the words on screen: are they this product's words, or the generator's?

Fix what those find before you say it is finished. If something cannot be fixed without a
decision the founder has not made, leave a `[NEEDS CLARIFICATION]` note and say so in your report
rather than choosing for them.

## 5. Verify, and report honestly

Run all five and show the real output:

```bash
pnpm dev        # starts, serves the page, then stop it
pnpm build      # builds
pnpm typecheck  # type check
pnpm lint       # linter
pnpm test       # tests
```

This is the **verification bar**, and every change from here has to pass it before it merges — the
same bar `.github/workflows/ci.yml` runs on every push.

Report what you did, what you skipped because it already existed, and the result of each command. If
one of them fails, say which and why rather than working around it. A green bar that was reached by
weakening a check is worth less than a red one that is honest.

**Done when:** all five have actually run, and you have shown what each one printed.

## 6. Hand back, and remove this command

**Only if all five commands above actually ran and passed.** If any of them failed, if you skipped
one, or if anything in section 4 was left as a `[NEEDS CLARIFICATION]` note, stop here and leave this
file and [START_HERE.md](../../START_HERE.md) exactly as they are — the founder will want to run this
again once that is resolved, and a command that deleted itself after half a job is the one failure
mode this step must never have.

Otherwise, do these two things in this order — the guide first, the deletion second, so an
interruption between them leaves a command that can still be run rather than instructions for one
that no longer exists.

**6a. Update [START_HERE.md](../../START_HERE.md) so it no longer tells anyone to run this command.**
It is the first file anyone opens, and it currently describes this step as work still to do. Two
places name the command, and both change:

- **Step 1, "Get it running"** — replace the instruction to run this command, and the paragraph
  describing what it would do, with one or two sentences saying what is now true: the stack is
  scaffolded, git is initialised locally, and Pro Clinic runs. Two things in that step survive
  untouched: the **Claude Code** paragraph that opens it, which is still how every other command gets
  run, and the four commands with the **verification bar** sentence below them — that block is what
  the founder comes back to, and it stays true forever.
- **"How the commands work"** — drop this command from the list of commands this foundation ships.
  The rest of the list — `/createspec`, `/clarify`, `/implement`, `/analyze`, `/push`, `/pr-check` —
  is untouched, because those are the ones they run from now on.

Change nothing else in that file: not the reading list, not the spec loop, not step 2's accounts.
Anything you write there is the founder's own documentation now — keep it in the voice of the rest of
the file, and do not add a changelog entry, a note about this command, or a date.

**6b. Delete `.claude/commands/start.md` and `.agents/skills/start/`** — this file and the
pointer that lets Copilot run it. Both go, in the same step: one left behind is a command that half
exists, offered by one assistant and missing from the other. It scaffolds a stack into an empty
repository, and that has now happened; a command that can only be run once, offering itself forever,
is a trap for whoever opens this project next. Everything from here goes through the spec loop, and
`/createspec` is where that starts.

Then print the finished bar, `[████████████] 6/6 · done`, and point the founder at step 2 of
[START_HERE.md](../../START_HERE.md): the accounts and services only they can create — and tell them
plainly that this command has removed itself and rewritten step 1, so nothing about the project looks
quietly different next time they look.
