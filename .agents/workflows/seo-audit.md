---
description: Audit a page or the whole site for SEO issues
---

1. Ask the user which page(s) to audit, or whether to audit the whole site,
   if not already specified.
2. Check each page for:
   - Unique, descriptive `<title>` and meta description
   - Open Graph / Twitter Card tags
   - Canonical URL tag
   - Exactly one `<h1>` with a logical heading hierarchy
   - Semantic HTML landmarks in use
   - Real `<a href>`-based internal links (not click-only divs/buttons)
   - Descriptive image `alt` text
   - Relevant JSON-LD structured data where applicable
3. Check project-wide for:
   - Presence and correctness of `robots.txt`
   - Presence and completeness of `sitemap.xml`
   - Whether pages are statically pre-rendered or purely client-rendered,
     and flag CSR-only content pages as a crawlability risk
4. Summarize findings as a list of issues with file/page references and
   concrete fixes. Do not apply fixes automatically unless the user confirms.