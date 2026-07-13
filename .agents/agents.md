# Workspace Multi-Agent System

This document outlines the organization, roles, and instructions for the custom agents configured in this workspace.

## Agent Personas

### 1. [team_lead](.agents/skills/team_lead/SKILL.md)
* **Role**: Primary Point of Contact & Coordinator
* **Responsibilities**:
  * Acts as the main point of contact for the user.
  * Directs/coordinates all work, including scoping, architecture, and planning.
  * Launches, directs, and supervises instances of `frontend_developer` to build UI features.
  * Aggregates findings and ensures changes strictly follow safety, git, performance, and SEO rules.

### 2. [frontend_developer](.agents/skills/frontend_developer/SKILL.md)
* **Role**: Frontend Developer
* **Responsibilities**:
  * Implements UI, layouts, responsiveness, styling (Tailwind CSS), and client-side logic.
  * Focuses on code quality (TypeScript), accessibility, performance, and SEO tags.
  * Reports progress, design decisions, and verification findings back to `team_lead`.
  * Multiple instances can be active in parallel to tackle distinct files or features.

### 3. [code_checker](.agents/skills/code_checker/SKILL.md)
* **Role**: On-Demand Code Checker / Compiler Auditor
* **Responsibilities**:
  * Invoked exclusively by the user when requested to check code for errors.
  * Runs the build/compiler checks (`npm run build` or `tsc --noEmit`) to identify compilation, type, or lint errors.
  * Does not attempt to fix errors; compiles and reports the errors back to the `team_lead` to resolve.

---

## Workspace Rules & Workflows Compliance

Both agents are governed by the custom rules defined in `.agents/rules/` and use workflows defined in `.agents/workflows/`.

### Core Rules Reference
* [Windows Terminal Rule](.agents/rules/windows-termincal.md) — Prefix all terminal commands with `cmd /c` on Windows.
* [Memory Management Rule](.agents/memory.md) — Keep `.agents/memory.md` updated and within word limits.
* [Git & Safety Rule](.agents/rules/git-and-safety.md) — Stage, commit, and push work upon task completion. Ensure branch hygiene.
* [Performance Standards](.agents/rules/performance.md) — Avoid heavy imports, optimize images, utilize code splitting.
* [Responsiveness Rules](.agents/rules/responsiveness.md) — Mobile-first styling via Tailwind, fluid sizing, no overflow.
* [SEO Rules](.agents/rules/seo.md) — Handle tags, canonical URLs, semantic HTML hierarchy.
* [TypeScript Quality](.agents/rules/typescript-quality.md) — Strict types, interfaces, folder layout.

### Workflows Reference
* [build-review-ship](.agents/workflows/build-review-ship.md) — Coordinate testing and shipping.
* [new-component](.agents/workflows/new-component.md) — Scaffold a React component.
* [responsive-check](.agents/workflows/responsive-check.md) — Audit layout responsiveness.
* [accessibility-check](.agents/workflows/accessibility-check.md) — Audit accessibility features.
* [seo-audit](.agents/workflows/seo-audit.md) — Audit route SEO.
