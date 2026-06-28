---
name: frontend-design
description: "Frontend implementation intelligence for web applications. Covers component architecture, responsive CSS patterns, state management, performance optimization, modern build tooling, and production-ready code patterns across React, Next.js, Vue, Svelte, Astro, Angular, and vanilla HTML/CSS/JS. Actions: scaffold, implement, refactor, optimize, debug, review, migrate frontend code. Topics: component composition, CSS architecture, layout systems, data fetching, caching, hydration, bundling, code splitting, SSR/SSG, edge rendering, progressive enhancement, SEO, Web Vitals, testing patterns, and CI/CD integration."
---

# Frontend Design - Implementation Intelligence

Production-ready frontend implementation patterns for modern web applications. Covers architecture, CSS, state, performance, SEO, testing, and build tooling across major frameworks.

## When to Apply

Use this skill when the task involves **frontend code architecture, implementation patterns, or build/deploy optimization** — not visual design decisions (use `ui-ux-pro-max` for that).

### Must Use

- Scaffolding new frontend projects or pages
- Choosing component architecture patterns (atomic, feature-based, domain-driven)
- Implementing responsive layouts with CSS Grid, Flexbox, or Container Queries
- Setting up state management (local, global, server state)
- Optimizing Core Web Vitals (LCP, FID/INP, CLS)
- Configuring SSR, SSG, ISR, or edge rendering
- Setting up code splitting, lazy loading, and bundle optimization
- Implementing data fetching, caching, and revalidation strategies
- Writing frontend tests (unit, integration, E2E)

### Recommended

- Migrating between frameworks or upgrading major versions
- Debugging hydration mismatches or rendering issues
- Improving build times or CI pipeline performance
- Adding SEO, meta tags, structured data, or sitemap generation
- Setting up monorepo tooling (Turborepo, Nx, pnpm workspaces)

### Skip

- Pure visual/aesthetic design decisions → use `ui-ux-pro-max`
- Color palette, typography, or style selection → use `ui-ux-pro-max`
- Brand identity or marketing design → use `brand` or `design`
- Backend API design, database schema, or infrastructure
- Mobile-native development (SwiftUI, Flutter, Jetpack Compose)

## Component Architecture

### Composition Patterns

| Pattern | When to Use | Structure |
|---------|-------------|-----------|
| **Atomic Design** | Design-system-heavy projects | atoms → molecules → organisms → templates → pages |
| **Feature-Based** | Product-focused teams | `features/auth/`, `features/dashboard/`, shared `components/` |
| **Domain-Driven** | Complex business logic | `domains/billing/`, `domains/inventory/`, shared `ui/` |
| **Route-Colocation** | File-based routing (Next.js, Nuxt, SvelteKit) | `app/dashboard/page.tsx`, `app/dashboard/components/` |

### Component Rules

| Rule | Do | Don't |
|------|----|----|
| Single responsibility | One component = one concern | God components with 500+ lines |
| Props interface | Explicit typed props with defaults | Spreading unknown props blindly |
| Composition over config | Use children/slots for flexibility | Boolean prop explosion (`isLarge`, `isRound`, `isPrimary`) |
| Colocation | Keep styles, tests, types next to component | Distant `styles/` or `types/` folders |
| Barrel exports | One `index.ts` per feature folder | Deep import paths across features |
| Render logic | Extract complex conditionals to variables or subcomponents | Nested ternaries in JSX/template |
| Key prop | Stable, unique keys from data IDs | Array index as key for dynamic lists |

### File Naming Conventions

| Framework | Components | Styles | Tests |
|-----------|-----------|--------|-------|
| React/Next.js | `PascalCase.tsx` | `component.module.css` | `Component.test.tsx` |
| Vue | `PascalCase.vue` | `<style scoped>` in SFC | `Component.spec.ts` |
| Svelte | `PascalCase.svelte` | `<style>` in SFC | `Component.test.ts` |
| Angular | `kebab-case.component.ts` | `component.component.scss` | `component.component.spec.ts` |

## CSS Architecture

### Layout Systems

| System | Best For | Key Properties |
|--------|----------|---------------|
| **CSS Grid** | 2D layouts, page structure, dashboards | `grid-template-columns`, `grid-template-areas`, `gap` |
| **Flexbox** | 1D layouts, component internals, alignment | `flex-direction`, `justify-content`, `align-items`, `gap` |
| **Container Queries** | Responsive components independent of viewport | `container-type: inline-size`, `@container (min-width: 400px)` |
| **Subgrid** | Aligning nested grid children to parent tracks | `grid-template-columns: subgrid` |

### Responsive Strategy

```
/* Mobile-first breakpoints */
/* Base: 0–639px (mobile) */
/* sm: 640px (large phone / small tablet) */
/* md: 768px (tablet) */
/* lg: 1024px (laptop) */
/* xl: 1280px (desktop) */
/* 2xl: 1536px (large desktop) */

/* Prefer container queries for component-level responsiveness */
/* Prefer media queries for page-level layout shifts */
```

| Rule | Do | Don't |
|------|----|----|
| Mobile-first | Write base styles for mobile, add complexity up | Desktop-first with `max-width` overrides |
| Fluid typography | `clamp(1rem, 2.5vw, 2rem)` | Fixed `px` at every breakpoint |
| Fluid spacing | `clamp()` or viewport-relative units for margins | Hardcoded pixel spacing that doesn't scale |
| Logical properties | `margin-inline`, `padding-block` | `margin-left`/`margin-right` for LTR/RTL |
| CSS custom properties | Semantic tokens: `--color-surface`, `--spacing-md` | Hardcoded values repeated across files |
| Layer management | `@layer base, components, utilities` | Specificity wars with `!important` |
| Nesting | Native CSS nesting or preprocessor nesting (max 3 levels) | Deeply nested selectors (4+ levels) |

### Modern CSS Features

| Feature | Use Case | Support |
|---------|----------|---------|
| `container queries` | Component-level responsive design | Chrome 105+, Safari 16+, Firefox 110+ |
| `has()` selector | Parent selection based on children state | Chrome 105+, Safari 15.4+, Firefox 121+ |
| `@layer` | Cascade control for design systems | Chrome 99+, Safari 15.4+, Firefox 97+ |
| `color-mix()` | Dynamic color manipulation | Chrome 111+, Safari 16.2+, Firefox 113+ |
| `view transitions` | Smooth page/state transitions | Chrome 111+, Safari 18+, Firefox behind flag |
| `scroll-driven animations` | Scroll-linked effects without JS | Chrome 115+, Safari 18+, partial Firefox |
| `popover` attribute | Native popovers without JS | Chrome 114+, Safari 17+, Firefox 125+ |
| `anchor positioning` | Position elements relative to others | Chrome 125+, limited Safari/Firefox |

## State Management

### State Classification

| Type | Scope | Tools | Examples |
|------|-------|-------|----------|
| **UI State** | Component-local | `useState`, `ref()`, `$state` | Modal open, input value, active tab |
| **Client State** | App-wide | Zustand, Pinia, Svelte stores, Signals | Theme, user preferences, cart |
| **Server State** | Cached remote data | TanStack Query, SWR, Nuxt `useFetch` | API responses, user profile |
| **URL State** | Shareable/bookmarkable | Search params, `nuqs`, route state | Filters, pagination, sort order |
| **Form State** | Form lifecycle | React Hook Form, Formik, VeeValidate | Validation, dirty tracking, submission |

### State Rules

| Rule | Do | Don't |
|------|----|----|
| Derive don't duplicate | Compute values from source state | Store derived values separately |
| Colocate state | Keep state close to where it's used | Lift everything to global store |
| URL for shareable state | Filters, pagination, search in URL params | Hidden state that can't be shared/bookmarked |
| Server state ≠ client state | Use query libraries for remote data | Manual `useEffect` + `useState` for fetching |
| Optimistic updates | Update UI immediately, reconcile on response | Wait for server round-trip for every action |
| Immutable updates | Return new objects/arrays | Mutate state directly (except with Immer/Valtio) |

## Data Fetching & Caching

### Fetching Patterns by Framework

| Framework | Primary Pattern | Cache Strategy |
|-----------|----------------|----------------|
| Next.js App Router | Server Components + `fetch` with `revalidate` | Request dedup, ISR, `unstable_cache` |
| Next.js Pages Router | `getServerSideProps` / `getStaticProps` | ISR with `revalidate` |
| Nuxt 3 | `useFetch` / `useAsyncData` | Built-in payload cache |
| SvelteKit | `load` functions in `+page.server.ts` | Depends on adapter |
| Astro | Top-level `await` in `.astro` files | Static by default |
| React SPA | TanStack Query / SWR | `staleTime`, `gcTime`, background refetch |
| Vue SPA | TanStack Query for Vue / Pinia + fetch | Same as React SPA |

### Caching Rules

| Rule | Do | Don't |
|------|----|----|
| Stale-while-revalidate | Serve cached data, refetch in background | Block render waiting for fresh data |
| Cache keys | Derive from endpoint + params | Generic keys that cause collisions |
| Prefetch on intent | Prefetch on hover/focus for likely navigation | Prefetch everything on page load |
| Pagination | Use cursor-based or `keepPreviousData` | Refetch all pages when one changes |
| Error boundaries | Catch fetch errors at route/section level | Let errors crash the whole page |

## Performance Optimization

### Core Web Vitals Targets

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| **LCP** (Largest Contentful Paint) | ≤ 2.5s | ≤ 4.0s | > 4.0s |
| **INP** (Interaction to Next Paint) | ≤ 200ms | ≤ 500ms | > 500ms |
| **CLS** (Cumulative Layout Shift) | ≤ 0.1 | ≤ 0.25 | > 0.25 |

### Performance Checklist

| Area | Optimization | Impact |
|------|-------------|--------|
| **Images** | Use `<img>` with `srcset`/`sizes`, `loading="lazy"`, `fetchpriority="high"` for hero | LCP, CLS |
| **Fonts** | `font-display: swap`, preload critical fonts, subset unused glyphs | LCP, CLS |
| **JS** | Route-based code splitting, dynamic imports for heavy components | INP, TTI |
| **CSS** | Extract critical CSS, defer non-critical stylesheets | LCP |
| **Third-party** | Load analytics/ads async, use `Partytown` for workers | INP |
| **Hydration** | Partial hydration (Astro Islands), progressive hydration, React Server Components | TTI, INP |
| **Lists** | Virtualize 50+ item lists (`@tanstack/virtual`, `vue-virtual-scroller`) | INP |
| **Rendering** | `useMemo`/`memo`/`computed` for expensive calculations | INP |
| **Network** | HTTP/2 multiplexing, CDN for static assets, edge rendering | LCP |
| **Bundle** | Tree-shaking, `sideEffects: false`, analyze with `bundleanalyzer` | All |

### Rendering Strategies

| Strategy | When to Use | Framework Support |
|----------|-------------|-------------------|
| **SSG** (Static Site Generation) | Content that rarely changes | Next.js, Nuxt, Astro, SvelteKit |
| **SSR** (Server-Side Rendering) | Personalized or real-time content | Next.js, Nuxt, SvelteKit |
| **ISR** (Incremental Static Regeneration) | Static content with periodic updates | Next.js, Nuxt |
| **CSR** (Client-Side Rendering) | Authenticated dashboards, SPAs | React, Vue, Svelte |
| **Streaming SSR** | Large pages with slow data sources | Next.js App Router, Nuxt |
| **Edge Rendering** | Geo-personalized, low-latency responses | Next.js Edge, Cloudflare Workers |
| **Partial Hydration** | Mostly-static pages with interactive islands | Astro, Qwik |

## SEO & Meta

### Essential Meta Tags

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Page Title — Site Name</title>
  <meta name="description" content="155-char max description" />
  <link rel="canonical" href="https://example.com/page" />

  <!-- Open Graph -->
  <meta property="og:title" content="Page Title" />
  <meta property="og:description" content="Description" />
  <meta property="og:image" content="https://example.com/og.jpg" />
  <meta property="og:url" content="https://example.com/page" />
  <meta property="og:type" content="website" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Page Title" />
  <meta name="twitter:description" content="Description" />
  <meta name="twitter:image" content="https://example.com/og.jpg" />
</head>
```

### SEO Rules

| Rule | Do | Don't |
|------|----|----|
| Semantic HTML | Use `<main>`, `<article>`, `<section>`, `<nav>`, `<aside>` | Div soup with no semantic meaning |
| Heading hierarchy | One `<h1>` per page, sequential `<h2>`→`<h6>` | Skip levels or multiple `<h1>` |
| Image alt text | Descriptive alt for content images, `alt=""` for decorative | Missing alt attributes |
| Link text | Descriptive anchor text | "Click here" or "Read more" without context |
| Structured data | JSON-LD for products, articles, FAQ, breadcrumbs | No structured data on content-rich pages |
| Sitemap | Auto-generate `sitemap.xml` from routes | Manual sitemap that gets outdated |
| Robots | Set `noindex` for auth pages, pagination, search results | Accidentally blocking important pages |
| Performance | Fast LCP directly improves search ranking | Ignoring Core Web Vitals |

## Testing Patterns

### Testing Pyramid

| Level | Tools | What to Test | Coverage Target |
|-------|-------|-------------|-----------------|
| **Unit** | Vitest, Jest | Pure functions, utils, hooks, composables | High coverage |
| **Component** | Testing Library, Vue Test Utils | Render, interaction, accessibility | Key components |
| **Integration** | Testing Library, MSW | Feature flows with mocked APIs | Critical paths |
| **E2E** | Playwright, Cypress | User journeys, cross-browser | Happy paths + edge cases |
| **Visual** | Chromatic, Percy, Playwright screenshots | UI regression detection | Component library |

### Testing Rules

| Rule | Do | Don't |
|------|----|----|
| Test behavior | Test what users see and do | Test implementation details |
| Accessible queries | `getByRole`, `getByLabelText`, `getByText` | `getByTestId` as first choice |
| Mock at boundaries | Mock API calls, not internal modules | Mock everything for "isolation" |
| Async handling | `waitFor`, `findBy` for async operations | `sleep()` or fixed timeouts |
| Test IDs | Add `data-testid` only when no accessible query works | Test IDs on everything |

## Build & Tooling

### Modern Build Stack

| Tool | Purpose | When to Use |
|------|---------|-------------|
| **Vite** | Dev server + bundler | Default for new projects (React, Vue, Svelte) |
| **Turbopack** | Next.js dev bundler | Next.js 13+ projects |
| **esbuild** | Fast JS/TS compilation | Custom build scripts, library bundling |
| **Rollup** | Library bundling | Publishing npm packages |
| **Webpack** | Legacy/complex builds | Existing projects, complex config needs |
| **Biome** | Linter + formatter | Replaces ESLint + Prettier (faster) |
| **ESLint** | Linting | Established projects, plugin ecosystem |
| **Prettier** | Formatting | When not using Biome |

### Project Config Essentials

| Config | Purpose |
|--------|---------|
| `tsconfig.json` | TypeScript strict mode, path aliases, target |
| `.env` / `.env.local` | Environment variables (never commit secrets) |
| `package.json` engines | Lock Node.js version for team consistency |
| `.nvmrc` / `.node-version` | Node version pinning |
| `.browserslistrc` | Target browser support for CSS/JS compilation |
| `postcss.config.js` | CSS processing (autoprefixer, nesting) |

## Production Readiness

### Pre-Deploy Checklist

- [ ] Error boundaries at route and section level
- [ ] 404 and 500 error pages implemented
- [ ] Environment variables validated at build time
- [ ] Console errors/warnings resolved
- [ ] Bundle size analyzed and within budget
- [ ] Images optimized (WebP/AVIF, responsive, lazy-loaded)
- [ ] Fonts preloaded and subsetted
- [ ] Security headers configured (CSP, HSTS, X-Frame-Options)
- [ ] HTTPS enforced with proper redirects
- [ ] Analytics and error tracking integrated
- [ ] Lighthouse score ≥ 90 for Performance, Accessibility, Best Practices, SEO
- [ ] Tested on Chrome, Firefox, Safari, Edge (latest 2 versions)
- [ ] Tested on iOS Safari and Android Chrome
- [ ] `robots.txt` and `sitemap.xml` configured
- [ ] Open Graph and Twitter meta tags verified
- [ ] Favicon and PWA manifest configured
