# Changelog

All notable changes to the Prayaan Capital website are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/); dates are IST (YYYY-MM-DD).

## 2026-08-13

### Changed
- **Branch Locator** — replaced "South India" with "India" in the page heading, the "Always expanding" card, and the SEO description, since the branch network is expanding beyond South India.

### Fixed
- **Regression test** — the pre-push check no longer false-fails on the Vercel Web Analytics and Speed Insights scripts (`/_vercel/insights/script.js`, `/_vercel/speed-insights/script.js`), which 404 only under local `vite preview` but are served in production. Resource 404s are now detected by response status + URL, so genuine broken assets still fail the suite.

## 2026-07-29

### Added
- **Customer Grievance Redressal Policy** — self-hosted PDF, now listed on the Policies page (as a card) and on the RBI Disclosures page (regulatory-documents list).
- **Madhya Pradesh** highlighted on the branch-locator map, matching the existing operating states (with AP and MP pin positions centred).
- **Regression test** (`npm run regression`) — Playwright loads every live page in a real browser, screenshots each, and asserts it renders correctly. Now **mandatory before every push** (see CLAUDE.md); route list auto-derives from `src/routes.ts`.

### Changed
- **RBI Disclosures** — removed the internal "Grievance Redressal Policy" list item (which pointed to the `/grievance-redressal` page). The site-wide footer "Grievance Redressal" link is unchanged.

## 2026-07-20

### Added
- **Liquidity Risk Management Policy** — self-hosted PDF, added to both the Policies page and the RBI Disclosures list.

## 2026-07-17

### Added
- **Google Analytics 4** (`G-D5GDZVG2P9`) with single-page-app page-view tracking and delegated interaction tracking (clicks, phone/email taps, form submits). Gated to the live domain so dev/preview traffic is excluded.
- **Microsoft Clarity** (`xnyr3hzfff`) — heatmaps and session replay, gated to the live domain.
- **Lead tracking** — phone and email taps also fire GA4's `generate_lead` event so leads can be marked as conversions.

## 2026-07-14

### Added
- **Vercel Web Analytics + Speed Insights** — cookieless traffic and Core Web Vitals reporting.
- **Legacy loan-document redirects** — `/policies.html` → `/policies` and `/nach-instructions.php` → `/nach-mandate-instructions`, so URLs printed in older sanction letters and loan agreements resolve correctly (edge 308 + client-side fallback).

## 2026-07-11

### Changed
- Updated the CEO bio and dropped the "Mr." honorific.
- Investor Relations — replaced Form MGT-7 FY2021-22 with FY2019-20.

## 2026-07-10

### Fixed
- Replaced the stale social-preview image with a branded "Powering India's MSME Dreams" banner and added robust `og:image` meta tags for reliable WhatsApp/LinkedIn previews.
