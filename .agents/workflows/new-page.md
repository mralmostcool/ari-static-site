---
description: Scaffold a new top-level page/view in src/pages/
---

# Scaffold Page Component

This workflow governs the creation of new page views (top-level routing nodes) inside `src/pages/`.

1. Ask the user for the page name, URL hash route, and a brief description of the page's purpose and content outline.
2. Create a folder at `src/pages/<PageName>/`.
3. Inside it, create `<PageName>.tsx`:
   - Functional React component.
   - Use semantic layout blocks (e.g. `section`, `article`, `header`).
   - Use mobile-first Tailwind CSS classes with responsive prefixes (`sm:`, `md:`, `lg:`).
   - Ensure all buttons, links, or inputs satisfy touch-target guidelines (min 44x44px target sizes).
4. Create an `index.ts` barrel file exporting the component from that folder.
5. Update routing in `src/App.tsx`:
   - Import the page component from `./pages/<PageName>`.
   - Update `PageType` type union to include the new page token.
   - Add the routing condition inside `handleHashChange` and the rendering logic in `renderContent`.
   - Ensure dynamic `document.title` updating on navigation.
6. Verify layout responsiveness at ~375px, ~768px, and ~1280px widths.
7. Confirm compilation builds cleanly (`npm run build`) before ending work.
