---
trigger: always_on
---

---
description: SEO standards for this React + TypeScript + Vite static site
---

# SEO Rules

This is a client-rendered React SPA built with Vite. Standard SPA SEO pitfalls
(empty initial HTML, missing meta tags, no sitemap) must be actively avoided.

## Meta tags & head management
- Every route/page must set a unique, descriptive `<title>` and
  `<meta name="description">`. Never leave pages sharing a generic title.
- Manage head tags with a dedicated library (e.g. `react-helmet-async`) rather
  than manual DOM manipulation, so tags update correctly on route change.
- Include Open Graph (`og:title`, `og:description`, `og:image`, `og:url`) and
  Twitter Card meta tags on every shareable page.
- Set a canonical `<link rel="canonical">` tag per page to avoid duplicate
  content issues, especially if trailing slashes or query params can vary.

## Crawlability (critical for a CSR SPA)
- Flag to the user if a page's core content is not present in the initial
  server-rendered/static HTML — pure client-side-only rendering can hurt
  crawlability. Recommend static pre-rendering (e.g. `vite-plugin-ssg`,
  `vite-plugin-prerender`, or a prerendering service) for any
  content-relevant public page if the project isn't already using one.
- Ensure a `robots.txt` exists at the project root and is not accidentally
  blocking pages that should be indexed.
- Generate and keep an up-to-date `sitemap.xml` listing all public routes.
  Regenerate it whenever routes are added or removed.
- Verify there are no orphan pages — every important page should be reachable
  via internal links, not JS-only navigation with no `<a href>` fallback.

## Semantic HTML & structure
- Use exactly one `<h1>` per page, with a logical heading hierarchy below it
  (no skipped levels like h1 → h3).
- Use semantic landmarks (`<main>`, `<nav>`, `<header>`, `<footer>`, `<article>`)
  instead of generic `<div>`s for structural content.
- Internal navigation must use real `<a href="...">` (React Router `<Link>`,
  which renders an anchor) — never a `<div onClick>` or `<button>` styled as
  a link for navigation.

## Structured data
- Add JSON-LD structured data (schema.org) for content types that benefit
  from rich results — e.g. Organization/WebSite on the homepage, Article for
  blog posts, BreadcrumbList for nested pages — where relevant to the site's
  content.

## Performance as an SEO factor
- Core Web Vitals (LCP, CLS, INP) directly affect search ranking. This
  reinforces the performance rules already in place: optimized images, no
  layout shift, minimal blocking JS on initial load.

## URLs
- Use clean, human-readable, hyphenated URLs (`/about-us`, not `/page?id=3`).
- Avoid changing existing published URLs without setting up a redirect.