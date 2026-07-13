---
trigger: always_on
description: Performance standards for this React + TypeScript + Vite static site
---

---
description: Performance standards for this React + TypeScript + Vite static site
---

# Performance Rules

This is a static site built with Vite + React + TypeScript. Speed is a first-class
requirement, not an afterthought. Apply these rules to every change:

## Bundling & code splitting
- Lazy-load routes and heavy/rarely-used components with `React.lazy` + `Suspense`.
  Never eagerly import a component only needed behind a modal, tab, or route that
  isn't the initial view.
- Prefer named/ESM imports that tree-shake cleanly. Never import a whole library
  when a smaller subset or lighter alternative exists (e.g. avoid moment.js,
  prefer date-fns or native `Intl`; avoid lodash, prefer lodash-es or native JS).
- Before adding any new npm dependency, check its bundle size (bundlephobia or
  similar) and mention the size tradeoff to the user if it's non-trivial (>20kb
  min+gzip). Prefer zero-dependency solutions where reasonable.

## Images & assets
- All images must have explicit `width` and `height` (or aspect-ratio via
  Tailwind, e.g. `aspect-[16/9]`) to prevent layout shift.
- Use modern formats (WebP/AVIF) where possible.
- Add `loading="lazy"` to any image not in the initial viewport.
- Never ship unoptimized/uncompressed images — flag large image files to the user.

## Build hygiene
- Always run `npm run build` before considering a task complete, to catch
  type errors and confirm the production build succeeds.
- Watch for and flag any single chunk over ~150kb gzipped in the build output.
- Do not disable Vite's default minification, tree-shaking, or code-splitting
  behavior without explicit user approval.

## Rendering
- Avoid unnecessary re-renders: memoize expensive computations (`useMemo`) and
  stable callbacks (`useCallback`) passed to memoized children.
- Avoid large inline objects/arrays created on every render inside JSX props.