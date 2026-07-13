---
trigger: always_on
description: TypeScript and code quality standards
---

---
description: TypeScript and code quality standards
---

# TypeScript & Code Quality Rules

- Strict mode stays enabled in `tsconfig.json`. Never weaken strictness
  settings to silence an error — fix the underlying type issue instead.
- Avoid `any`. If truly unavoidable, add a comment explaining why and prefer
  `unknown` with a type guard where possible.
- Component props are typed with a named `interface` (e.g. `interface CardProps`),
  not inline object types, for any component used in more than one place.
- Co-locate related files: a component's `.tsx`, its types (if extracted),
  and any component-specific hooks live together in the same folder under
  `src/components/<ComponentName>/`.
- Prefer function components with explicit return types where the return type
  isn't obvious.
- No unused variables, imports, or props — clean these up before finishing
  a task rather than leaving lint warnings.
- Run `npm run build` (or `tsc --noEmit` if available) before considering any
  task complete, to catch type errors early.