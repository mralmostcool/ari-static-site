---
description: Responsive design standards using Tailwind CSS
---

# Responsiveness Rules

This project uses Tailwind CSS for all styling. The site must work well from
small mobile screens up through large desktop viewports.

## Mobile-first
- Always write base (unprefixed) Tailwind classes for the smallest screen size,
  then layer on responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`) to
  adapt upward. Never design desktop-first and try to cram it down with
  overrides.
- Every new component must be visually correct at minimum at these widths:
  ~375px (mobile), ~768px (tablet), ~1280px (desktop).

## Layout
- Use Flexbox/Grid utility classes (`flex`, `grid`, `grid-cols-*`) for layout.
  Avoid fixed pixel widths on containers — prefer `w-full`, `max-w-*`,
  percentage-based or `flex-1` based sizing.
- Use `clamp()`-style fluid values (via Tailwind's arbitrary value syntax,
  e.g. `text-[clamp(1rem,2vw,1.5rem)]`) for typography that needs to scale
  smoothly, rather than a long list of breakpoint-specific font sizes when
  avoidable.
- Avoid horizontal scroll at any breakpoint. Test that no element causes
  overflow on narrow screens (watch for fixed-width children, long
  unbreakable strings, or negative margins).

## Tailwind conventions
- Do not write custom CSS files for things Tailwind utilities already cover.
  Only drop into `@layer` / custom CSS for truly reusable, non-trivial patterns.
- Keep class lists readable: group related utilities (layout, spacing, color,
  typography) rather than random order. For very long class lists on complex
  components, consider extracting with `clsx`/`tailwind-merge` rather than
  repeating strings.
- Use Tailwind's design tokens (spacing scale, color palette, breakpoints)
  rather than arbitrary one-off values unless there's a specific reason.

## Touch & interaction
- Interactive elements (buttons, links) must have adequate tap targets on
  mobile — minimum effective size around 44x44px.
- Test hover-only interactions have a reasonable touch/mobile fallback.
