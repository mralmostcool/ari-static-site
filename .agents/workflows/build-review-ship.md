---
description: Run the full Builder -> Reviewer -> Deployer loop on a task
---

1. As Builder: implement the requested feature/component/page, following
   performance.md, responsiveness.md, typescript-quality.md, and seo.md.
2. As Reviewer: check the changed files against check-perf,
   responsive-check, accessibility-check, and seo-audit criteria. List any
   issues found.
3. If issues were found, fix them and re-check before proceeding.
4. As Deployer: confirm `npm run build` succeeds, then run
   commit-and-push.
5. Report a short summary of what was built, reviewed, and shipped.