---
trigger: always_on
---

---
description: Always commit and push completed work to GitHub
---

# Git Auto-Commit Rule

After completing any coding task (feature, fix, refactor, or file change),
you MUST commit and push the work before ending your turn:

1. Run `git status` to see what changed.
2. Stage all relevant changes: `git add -A`.
3. Write a clear, conventional-commit-style message summarizing what was done
   (e.g. `feat: add user auth middleware`, `fix: correct pagination bug`).
4. Commit: `git commit -m "<message>"`.
5. Push to the current branch: `git push`.
   - If the branch has no upstream yet, run `git push -u origin <branch-name>`.
6. If the push fails (e.g. diverged history), pull with rebase first
   (`git pull --rebase`) and retry, or report the conflict to the user
   instead of force-pushing.

Do not skip this step even for small changes. Do not commit if the task
explicitly asked you not to (e.g. "just show me the diff" or "don't commit yet").