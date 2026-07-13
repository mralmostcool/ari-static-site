---
trigger: always_on
---

---
description: Prevent terminal hangs on Windows by wrapping shell commands
---

# Windows Terminal Rule

Antigravity on Windows has a known bug where the integrated terminal can get
stuck in a permanent "Running..." state after a command finishes, because
the shell doesn't send a clear completion signal back to the IDE. To avoid
this, wrap terminal commands so the shell always terminates immediately
after running.

## Command wrapping
- Prefix every terminal command with `cmd /c` so the shell exits as soon as
  the command finishes, e.g.:
  - `cmd /c "git push -u origin main"`
  - `cmd /c "npm run build"`
  - `cmd /c "git add -A && git commit -m \"message\" && git push"`
- Never use `cmd /k` for agent-run commands — it keeps the shell open after
  execution, which can also cause the chat to appear to hang waiting on a
  background process.
- This applies to all commands run by the agent on this project, including
  git, npm, and any other CLI tools — not just git.

## If it still hangs
- If a terminal does get stuck on "Running..." despite the `cmd /c` wrap,
  do not restart the whole IDE first. Tell the user, and suggest: Ctrl+C in
  the stuck terminal, open a new terminal, then reload the window if needed.
- If commands start running unwrapped again partway through a long
  conversation (this rule can get "forgotten" in extended sessions), treat
  any reminder from the user to "wrap commands" or "use cmd /c" as
  reapplying this exact rule, not a new instruction.