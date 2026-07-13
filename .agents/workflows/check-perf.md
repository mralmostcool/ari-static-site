---
description: Build the project and audit bundle size / performance
---

1. Run `npm run build`.
2. Inspect the build output for chunk sizes. Flag any JS chunk over ~150kb
   gzipped and any CSS bundle over ~50kb gzipped.
3. Check for duplicate dependencies or accidentally-bundled dev-only code.
4. Summarize findings: total bundle size, largest chunks, and concrete
   suggestions to reduce size (lazy-loading candidates, heavy dependencies
   to replace, unused code to remove).
5. Do not make changes automatically — report findings and ask before
   refactoring anything for size.