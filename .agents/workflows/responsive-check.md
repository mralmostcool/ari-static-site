---
description: Review a component or page for responsive design issues
---

1. Ask the user which component or page to review, if not already specified.
2. Read the relevant file(s) and check for:
   - Fixed pixel widths/heights that should be relative or use max-w-*
   - Missing responsive Tailwind prefixes (sm:, md:, lg:, xl:)
   - Layouts that would overflow or break at 375px, 640px, 768px, 1024px,
     or 1280px widths (Tailwind's default breakpoint scale)
   - Text that doesn't scale or wrap sensibly on small screens
   - Touch targets that are too small on mobile
3. List each issue found with the file/line and a suggested fix.
4. Do not apply fixes automatically unless the user confirms — present the
   list first.