# Working with more than one AI assistant

Pro Clinic ships for Claude Code, Copilot and Codex. They run the same commands, read
the same documents and follow the same rules — so when one runs out of context halfway through a
spec, you open another and it carries on.

This guide is also the pattern for adding the next one. Follow it and the next assistant costs a few
files; ignore it and this project ends up with three sets of instructions that disagree.

## The rule: pointers, never copies

One file holds each piece of knowledge, and every assistant is pointed at it.

| The knowledge            | Lives in                    | Assistants reach it through                                     |
| ------------------------ | --------------------------- | --------------------------------------------------------------- |
| The rules, reading order | `CLAUDE.md`                 | Claude Code reads it directly; `.github/copilot-instructions.md` and `AGENTS.md` point at it |
| Each command's steps     | `.claude/commands/<name>.md` | Claude Code reads it directly; `.agents/skills/<name>/SKILL.md` points at it — the one skills directory Copilot *and* Codex read, and Claude Code does not |
| What is being built      | `specs/NNN-*.md`            | Named by the commands themselves                                  |

Mechanisms change — Copilot moved from prompt files to Agent Skills within a year — and pointers are
what makes that a rename rather than a rewrite. The commands never moved.

A copy is the failure mode, not a shortcut. Two files describing `/implement` drift within weeks, and
the founder finds out when two assistants do different things on the same branch.

## Adding an assistant

1. **Check whether it already reads `.agents/skills/`** — Copilot and Codex do, and an assistant that
   does needs nothing at all. Otherwise find the two files it reads: its instructions file and its
   command (or "prompt", or "skill", or "rule")
   format. Do not invent locations — check the tool's own documentation.
2. **Write the instructions file as a pointer** to `CLAUDE.md`: read it first, it is binding, and
   anything addressed to "Claude" means you.
3. **Write one pointer per command**, naming `.claude/commands/<name>.md` and how that tool passes
   arguments. Keep the command's own description so the tool's UI says the same thing.
4. **Give it the same abilities, never fewer.** If a command needs to run terminal commands or edit
   files, the pointer must not restrict it to less than that.
5. **Add it to `CLAUDE.md` § "Working in another assistant"** if any concept needs translating.

## What a command may never do

**Keep state in the chat.** Every command records its progress in the repository — a spec's checked
boxes, the map of the project, the plan a command writes before it acts — so a different assistant, in a
different session, can pick the work up exactly where it stopped. A command that depends on what was
said earlier in a conversation cannot be handed over, and handing over is the point.
