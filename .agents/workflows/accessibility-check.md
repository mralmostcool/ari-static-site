---
description: Quick accessibility pass on a component or page
---

1. Ask the user which component or page to review, if not already specified.
2. Check for:
   - Missing or non-descriptive `alt` text on images
   - Semantic HTML usage (headings in order, buttons vs. divs with onClick,
     landmarks like <nav>, <main>, <footer>)
   - Sufficient color contrast for text against its background
   - Keyboard focus states visible on interactive elements
   - Form inputs with associated labels
3. List each issue found with the file/line and a suggested fix.
4. Do not apply fixes automatically unless the user confirms — present the
   list first.