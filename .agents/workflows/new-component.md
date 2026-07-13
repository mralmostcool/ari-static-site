---
description: Scaffold a new component with the project's standard structure
---

1. Ask the user for the component name and a brief description of its purpose,
   if not already provided.
2. Create a folder at `src/components/<ComponentName>/`.
3. Inside it, create `<ComponentName>.tsx`:
   - Functional component, typed props via a named `interface`.
   - Mobile-first Tailwind classes with responsive prefixes as needed.
   - Explicit width/height or aspect-ratio for any images.
4. Create an `index.ts` barrel file exporting the component.
5. If the component has non-trivial internal state or logic, consider
   extracting a `use<ComponentName>.ts` hook in the same folder.
6. Confirm the project still builds (`npm run build`) before finishing.