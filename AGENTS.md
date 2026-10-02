# AGENTS.md — Pro Clinic

**[`CLAUDE.md`](CLAUDE.md) is this project's rulebook.** Read it first and follow it, whichever
assistant you are. It is addressed to "Claude" for historical reasons only; every rule in it applies
to you.

Copilot and Codex are already set up: each command has a pointer in `.agents/skills/`, the directory
both read, so they appear in the `/` menu.

The commands are plain markdown in [`.claude/commands/`](.claude/commands) — `/createspec`,
`/clarify`, `/implement`, `/analyze`, `/push`, `/pr-check`, `/security`. Read the matching file and
do what it says. If your tool has its own command format, point it at those files rather than copying
them: [`docs/guides/AI_ASSISTANTS.md`](docs/guides/AI_ASSISTANTS.md) explains how, and why a copy is
the wrong answer.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
