---
name: pr-check
description: Pre-PR safety check: fetch, detect merge conflicts and overlapping files against the target branch, then surface the PR command.
argument-hint: [target branch — defaults to this branch's parent per the branch hierarchy]
disable-model-invocation: true
---

Read [`.claude/commands/pr-check.md`](../../../.claude/commands/pr-check.md) and do exactly what
it says, start to finish. That file is the command; this one only points at it, so Copilot and
Claude Code run the same steps.

Two translations while you read it:

- Where it says `$ARGUMENTS`, use whatever was typed after the command name.
- Where it addresses "Claude", it means you.

`CLAUDE.md` § "Working in another assistant" maps anything else that names a Claude Code
feature. Nothing in the command is optional for you.
