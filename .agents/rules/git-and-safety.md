---
trigger: always_on
description: Git hygiene and workspace safety rules
---

---
description: Git hygiene and workspace safety rules
---

# Git & Workspace Rules

## Auto commit & push
After completing any coding task, commit and push the work before ending your
turn:
1. `git status` to review changes.
2. `git add -A`.
3. Write a clear conventional-commit-style message (`feat:`, `fix:`, `chore:`,
   `style:`, `refactor:`, `perf:`) summarizing what changed.
4. `git commit -m "<message>"`.
5. `git push` (use `git push -u origin <branch-name>` if no upstream is set).
6. If the push fails due to diverged history, run `git pull --rebase` and
   retry, or report the conflict instead of force-pushing.

Skip this only if the user explicitly says not to commit yet.

## Workspace boundary
- Never read, write, or reference any file outside this project's root folder,
  for any reason, even if a task seems to require it. If something outside
  the workspace seems necessary, stop and ask the user instead.

## Safety
- Never run destructive commands (`rm -rf`, `git reset --hard`,
  `git push --force`) without explicit user confirmation first.
- Never commit `.env`, credentials, `node_modules`, or `dist` — confirm
  `.gitignore` covers these before the first commit of a session.
- Never commit directly to `main` for anything beyond trivial config/docs
  changes — prefer a feature branch for actual feature work, unless the user
  says otherwise.