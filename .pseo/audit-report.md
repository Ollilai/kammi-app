## pSEO Audit Report

### Framework & Rendering
- **Framework**: React with Vite (`vite_react_shadcn_ts`)
- **Rendering Strategy**: Client-Side Rendering (CSR) only. The `index.html` has an empty `<div id="root"></div>`.
- **Finding**: CSR is generally detrimental to massive programmatic SEO because search engine crawlers (Googlebot, Bingbot) must execute JavaScript to see the content, which delays indexing and drastically reduces crawl budget at scale.
- **Readiness**: Missing. Needs transition to SSG (Static Site Generation), SSR (Server-Side Rendering), or migration to an SEO-first framework (Next.js, Astro).

### Data Architecture
- **Data Sources**: None found.
- **Data Models**: Missing.
- **Readiness**: Missing.

### Routing & Templates
- **Routing**: `react-router-dom` used purely on the client side (`src/App.tsx`). Routes are hardcoded (`/`, `/privacy`, `/support`).
- **Templates**: No dynamic page templates exist.
- **404 Handling**: A basic `*` to `<NotFound />` exists.
- **Readiness**: Missing.

### SEO Foundations
- **Metadata**: Static metadata in `index.html`. Using `react-helmet-async` on the frontend, but without SSR/SSG, this only updates in the user's browser, not in the initial HTML for raw crawlers.
- **Structured Data**: None found.
- **Sitemap**: None found.
- **Robots.txt**: None found.
- **Readiness**: Missing.

### Internal Linking
- **Breadcrumbs / Hubs**: None found.
- **Readiness**: Missing.

### Performance at Scale
- **Performance**: Vite builds fast for small apps, but there's no page generation infrastructure here to test at scale.
- **Readiness**: Missing.

### Content Quality Safeguards
- **Quality Safeguards**: None.
- **Readiness**: Missing.

### Priority Actions (ordered)
1. **Critical Architecture Decision**: Decide whether to stay with Vite and implement an SSG plugin (like `vite-plugin-ssg` or `vite-plugin-prerender`) OR migrate the project to a framework built for SEO (like Next.js App Router, Astro, or Remix). Without this, pSEO will fail to index properly.
2. **Build the Data Layer**: Create the data models (competitors, use-cases) proposed in the Discovery phase.
3. **Implement Dynamic Routing**: Create templates that can read the data layer and generate unique pages at build time.
4. **Implement SEO Tags Component**: Set up a robust SEO component to inject Title, Meta, and JSON-LD schema into the `<head>` during server/build rendering.

### Recommended Skill Sequence
1. We cannot proceed to `pseo-data` (Phase 2) until the **Priority Action 1** (Framework/SSG decision) is resolved.
2. Once the rendering architecture is chosen and configured, run `pseo-data` to scaffold the content collections.
