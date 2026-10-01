---
description: Resolve ambiguities in the active spec by asking targeted questions, then fold answers in.
argument-hint: [optional focus — the spec always comes from the current branch]
allowed-tools: Read, Edit, Grep, Glob, Bash, AskUserQuestion
---

Clarify the spec matching the current git branch. A bare `/clarify` is the normal way to run this. If
`$ARGUMENTS` is non-empty it is a **focus hint** — the questions it touches go first — never a gate.

1. **Resolve the spec.** Match the current branch to its file in `specs/`. If nothing matches, say so
   and stop; never guess a spec.
2. **Collect every open question** — `[NEEDS CLARIFICATION: …]` markers *and* underspecified areas
   (vague acceptance criteria, undefined data shapes, unstated edge cases, missing scope boundaries).
   **There is no cap.** A place where the issue text and the code that is actually there
   disagree is itself a question, raised with both sides cited.
3. **Resolve what the repository already answers.** A marker the code, the docs or a `git` fact
   settles is not a question: resolve it and say what the evidence was. Spend questions on decisions.
4. **Order them so the constraining ones come first** — an answer can delete a later question outright.
5. **Announce the total, then ask one question at a time**, numbered ("3 of 7"), waiting for each
   answer before composing the next. Never batch. Never offer to stop partway — the total is stated up
   front and you can stop whenever you like. If an answer settles a later question, drop it and say the
   count changed.
6. **State the recommendation in prose before each question** — what you would pick and why, citing a
   constitution invariant, an existing pattern, or a `file:line`. Put that option first, labelled
   `(Recommended)`. The point is an answer decided on substance rather than picked blind.
7. **Write each answer into the spec before you ask the next question** — into the correct section,
   removing the marker it resolves. Record the decision in *Design decision* **with its reason**; an
   answer that overrides the recommendation is recorded as your call, not re-argued. Never invent
   answers — a skipped question keeps its marker. **One edit per answer, never one pass at the end:**
   an answer that exists only in this conversation is lost when the session ends, and a session ends
   for reasons nobody chooses — a context limit, a crash, a closed laptop. The spec on disk is the
   only place an answer is safe, and it is what lets another assistant carry on from here.
8. **Report** how many markers were resolved, how many of those by evidence, and how many remain. When
   none remain, suggest `/implement`.

Stopping early is never lossy: every answer is already in the spec, and the unanswered markers stay
exactly as they were.

Respect @.claude/spec-kit/constitution.md — if an answer would violate an invariant, flag it rather
than recording it silently.
