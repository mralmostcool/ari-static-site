---
trigger: always_on
---

---
description: Maintain a rolling memory file for cross-session context
---

# Memory Management Rule

This project keeps a single memory file at `.agents/memory.md` so context
persists without needing to re-read the whole codebase or conversation
history each time. Update it after every completed prompt/task.

## File structure
`.agents/memory.md` always has exactly two sections, in this order:

1. `## Summary` — a condensed running summary of everything older than the
   last 5 prompts. Max 300 words.
2. `## Recent History` — a numbered list of the last up to 5 prompts, each
   as a single short entry. Max 5 entries, ~30-40 words each (~200 words
   total).

Hard cap: the entire file must stay under 500 words. If it's ever over,
compress the Summary section further before adding anything new.

## After every prompt
1. Write a new entry for the just-completed prompt: what was asked, what
   was done/decided, and any state worth remembering (e.g. "added Card
   component," "decided font scale lives in @theme," "fixed mobile nav
   overflow"). Keep it factual and brief — no filler.
2. Append it to the bottom of `Recent History`.
3. If `Recent History` now has more than 5 entries:
   a. Take the current `Summary` plus all entries in `Recent History`.
   b. Rewrite them into a single updated `Summary` (max 300 words) that
      preserves the important decisions and state, dropping resolved
      trivial details.
   c. Clear `Recent History` and start it fresh with only the newest
      entry (the one just added).
4. Save the file. Do not ask the user for permission to do this — it's
   automatic housekeeping, like the git auto-commit rule.

## Reading memory
- At the start of a new session or when context is unclear, read
  `.agents/memory.md` first before re-reading source files, to get
  oriented faster.
- Treat the Summary as the authoritative "what's been built and decided
  so far," and Recent History as "what just happened."

## What belongs in memory vs. what doesn't
- Include: decisions made (design tokens, architecture choices), features
  completed, known issues/TODOs, anything the user explicitly said to
  remember.
- Exclude: full code snippets, verbose explanations, anything already
  permanently captured in rules/workflows files (don't duplicate those).