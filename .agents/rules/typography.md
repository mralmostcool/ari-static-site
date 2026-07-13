---
trigger: always_on
---

---
description: Single source of truth for font sizes via Tailwind @theme
---

# Typography Rules

All font sizes across the project are controlled from one place: the
`@theme` block in the global CSS entry file (e.g. `src/index.css`).

## Single source of truth
- Every font size used anywhere in the app must come from a `--text-*`
  theme variable defined in the `@theme` block of the global CSS file.
- Never hardcode a font size with an arbitrary Tailwind value
  (e.g. `text-[17px]`, `text-[1.3rem]`) in a component. If a new size is
  needed, add it to the `@theme` block first, then reference it via the
  normal utility class (e.g. `text-lg`).
- Never use inline styles or component-level CSS to set `font-size`.
  Always use Tailwind's `text-*` utility classes.

## Keeping the global file simple
- The `@theme` block should only contain the font size scale (and its
  paired `--text-*--line-height` / `--text-*--letter-spacing` /
  `--text-*--font-weight` if used) — do not mix in unrelated design
  tokens (colors, spacing, radii) in the same block unless the user
  explicitly asks to expand scope.
- Keep the scale to a reasonable, named set (e.g. xs, sm, base, lg, xl,
  2xl, 3xl, 4xl) rather than many one-off custom names. Reuse an existing
  size before adding a new one.
- Before adding a new font size token, check whether an existing token is
  close enough to reuse, to avoid the scale growing unnecessarily.

## When changing a size
- To change how a size looks across the whole site, edit only its value in
  the `@theme` block — never chase down individual components to change
  a font size that already has a token.