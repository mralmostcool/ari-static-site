---
description: Code quality rules for TypeScript, React components, and directory layout conventions
---

# TypeScript Quality Standards

This project has strict quality guidelines for directory structures, component definitions, and type safety.

## 1. Directory Layout Conventions

To maintain a clean codebase, distinct boundaries must be enforced between reusable blocks and top-level pages:

- **Shared Components (`src/components/`)**:
  - Contains strictly shared, modular UI parts (e.g., `Button`, `Navbar`, `Footer`, `Card`).
  - These elements must be highly reusable, modular, and must NOT define routing or handle dynamic page controller state.
  - Structure: `src/components/<ComponentName>/` containing `<ComponentName>.tsx` and a barrel export `index.ts`.

- **Page Views (`src/pages/`)**:
  - Contains route-level page views (e.g., `Home`, `About`, `Products`, `Clients`, `Newsroom`, `Training`).
  - Represents the main controller pages swapped by the application router in `src/App.tsx`.
  - Structure: `src/pages/<PageName>/` containing `<PageName>.tsx` and a barrel export `index.ts`.

## 2. React Components & Props Typing

- **TypeScript Prop Interfaces**:
  - Always explicitly type component props using named interfaces. Avoid inline type definitions.
  - Syntax:
    ```typescript
    export interface ButtonProps {
      label: string;
      onClick?: () => void;
    }
    export function Button({ label, onClick }: ButtonProps) { ... }
    ```

- **Functional Declarations**:
  - Declare React components as standard named functions, not arrow functions assigned to variables (for better stack traces).
  - Explicitly export named components; avoid default exports except when required by frameworks or tools (like Vite's main file configurations).

## 3. Strict Types and Safeties

- Avoid using the `any` type. If a type is unknown or untyped, use `unknown` and perform strict checks or narrow the scope.
- Enforce strict typing on events (e.g. `React.MouseEvent<HTMLButtonElement>`).
