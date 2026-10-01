# Instructions for Copilot — Pro Clinic

**[`CLAUDE.md`](../CLAUDE.md) in the repository root is this project's rulebook. Read it before you
do anything here, and treat it as binding.** It is written to "Claude" because Claude Code was the
first assistant this foundation shipped for. Every rule in it applies to you, unchanged.

It holds the reading order (the constitution first, then the spec you are working on, then the
architecture and the product vision), the rule that no code is written without a spec, and the
verification bar a change has to pass.

The commands live in [`.claude/commands/`](../.claude/commands) as plain markdown. Each one has a
pointer in [`.agents/skills/`](skills) so you can run it as `/createspec`, `/implement` and the
rest. The command file is the command; the skill only points at it, so neither assistant can
end up following different steps.

If your editor is too old to discover skills, nothing is lost: the commands are ordinary markdown.
When someone types `/createspec`, open `.claude/commands/createspec.md` and follow it.

Nothing in this file repeats a rule. If it disagrees with `CLAUDE.md`, `CLAUDE.md` wins.
