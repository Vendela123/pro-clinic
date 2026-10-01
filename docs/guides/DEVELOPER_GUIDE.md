# Pro Clinic — Developer Guide

## Setup
```bash
pnpm dev        # start the dev server
```
Next.js (App Router) · TypeScript · Tailwind + shadcn/ui · No database for the core website content. Use a simple database only where needed for newsletter subscribers, contact/appointment requests and future editable content such as treatments, prices, offer (Postgres) · Vercel · GitHub

## Verification bar (run before any PR)
```bash
pnpm typecheck  # type check
pnpm lint       # linter — no new issues
pnpm test       # tests — green (note known pre-existing failures)
```

## Patterns & conventions
Page routes follow the URL structure: /treatments (directory), /team (professionals), /offers (promotions), /contact (booking form), /admin (staff dashboard). Server actions handle form submissions (booking requests, admin edits); API routes are used for read-heavy operations like fetching treatment lists. Supabase row-level security policies ensure admin data is accessible only after authentication. Tailwind utility-first approach; custom CSS is minimal. shadcn/ui components provide buttons, forms, dialogs and modals; customize via Tailwind props.

## Getting to a deployed product

What it should look like, and how someone moves through it, is
[`../architecture/UI_ARCHITECTURE.md`](../architecture/UI_ARCHITECTURE.md). `/start`
deliberately doesn't touch any of the accounts below — follow these in order; each one verifies the
one before it.

## 1. Database

1. Provision **No database for the core website content. Use a simple database only where needed for newsletter subscribers, contact/appointment requests and future editable content such as treatments, prices, offer** and note how this project connects to it.
2. Put that connection detail in `.env.local` (copied from `.env.example`) — server-only, never sent to the browser, whatever that database calls it.
3. **Apply the migrations** with that database's own migration tool — every schema change is a committed migration, never a hand-edit.
4. **Auth, storage and realtime updates are yours to build** — this database gives you none of them out of the box. Spec each one like any other capability, through `/createspec`.

## 2. Vercel project

1. Create a project at [vercel.com](https://vercel.com) and import this repository once it is pushed (step 3 below).
2. **Environment Variables** (Project Settings → Environment Variables) — paste in every value from your environment file. Vercel needs its own copy; it never reads your local `.env.local`.
3. Framework preset: Next.js — Vercel usually detects it from `package.json`; confirm it if not.
4. Put `VERCEL_TOKEN` in this repository's CI secrets — the deploy workflow already generated for you uses it to deploy on every push, and every pull request gets its own preview URL.

## 3. Git integration

1. Create an empty repository on GitHub and push this foundation — /start already created the `develop` branch locally.
2. **Protect `main` and `develop`** (Settings → Branches): require a pull request and a passing CI check. The workflows in `.github/workflows/` start running the moment they land on GitHub — nothing else to register.
3. **Sign in:** `gh auth login`, so the spec commands can read issues and open pull requests. `/start` installed the GitHub CLI (`gh`) for you — install it yourself only if it reported that it could not.

## 4. Verify end to end

1. `pnpm dev` locally — the app should start and reach the database.
2. Push to a branch and open a pull request — CI should run and go green.
3. Merge, or push to `develop` per your deploy workflow — a preview or DEV deployment should appear within a few minutes.

If any of these three fails, stop there rather than guessing further down the list — the earlier
step is almost always the real cause.

## Workflow
Spec-driven, via slash commands: `/createspec → /clarify → /implement → /analyze`, with `/push` and
`/pr-check` around the PR, and `/security` outside the loop — it reviews the whole repository for
vulnerabilities, fixes only what nobody can see, and writes the gitignored `SECURITY_AUDIT.md`.
Governed by
[`../../.claude/spec-kit/constitution.md`](../../.claude/spec-kit/constitution.md). Branch + PR
direction: see [`../architecture/BRANCHING.md`](../architecture/BRANCHING.md).
