import { test, expect } from "@playwright/test";

/**
 * Smoke tests: navigate to each top-level page and confirm
 * the expected H1 / page heading renders.
 */
const pages: { path: string; heading: RegExp }[] = [
  { path: "/", heading: /AI[- ]native|Prayaan|MSME/i },
  { path: "/about", heading: /about/i },
  { path: "/team", heading: /team/i },
  { path: "/careers", heading: /careers/i },
  { path: "/news", heading: /news/i },
  { path: "/contact", heading: /contact/i },
  { path: "/products", heading: /product/i },
  { path: "/products/business-loan", heading: /business/i },
  { path: "/products/loan-against-property", heading: /property|loan/i },
  { path: "/products/working-capital", heading: /working capital/i },
  { path: "/eligibility", heading: /eligibility/i },
  { path: "/calculators/emi", heading: /emi/i },
  { path: "/calculators/eligibility", heading: /eligibility/i },
  { path: "/calculators/foreclosure", heading: /foreclosure/i },
  { path: "/how-to-apply", heading: /how to apply/i },
  { path: "/document-checklist", heading: /document/i },
  { path: "/interest-rates-and-charges", heading: /interest rate|charges/i },
  { path: "/faqs", heading: /faq/i },
  { path: "/downloads", heading: /download/i },
  { path: "/customer-login", heading: /login|customer/i },
  { path: "/blog", heading: /blog/i },
  { path: "/case-studies", heading: /case stud/i },
  { path: "/investor-relations", heading: /investor/i },
  { path: "/partner-with-us", heading: /partner/i },
  { path: "/branch-locator", heading: /branch/i },
  { path: "/sitemap", heading: /sitemap/i },
  { path: "/privacy-policy", heading: /privacy/i },
  { path: "/terms", heading: /terms/i },
  { path: "/grievance-redressal", heading: /grievance/i },
  { path: "/fair-practice-code", heading: /fair practice/i },
  { path: "/interest-rate-policy", heading: /interest rate/i },
  { path: "/kyc-aml-policy", heading: /kyc|aml/i },
  { path: "/code-of-conduct-recovery", heading: /recovery|conduct/i },
  { path: "/whistleblower-policy", heading: /whistleblower/i },
  { path: "/csr-policy", heading: /csr/i },
  { path: "/citizens-charter", heading: /citizen/i },
  { path: "/most-important-terms", heading: /terms|mitc/i },
  { path: "/notices-disclosures", heading: /notice|disclosure/i },
  { path: "/cookie-policy", heading: /cookie/i },
  { path: "/disclaimer", heading: /disclaimer/i },
  { path: "/ombudsman-scheme", heading: /ombudsman/i },
];

for (const { path, heading } of pages) {
  test(`smoke: ${path} renders heading`, async ({ page }) => {
    const res = await page.goto(path, { waitUntil: "domcontentloaded" });
    expect(res?.status(), `HTTP status for ${path}`).toBeLessThan(400);
    // SPA — main h1 should match
    const h1 = page.locator("h1").first();
    await expect(h1).toBeVisible();
    await expect(h1).toHaveText(heading);
    // Make sure we did not land on the 404 page
    await expect(page.locator("body")).not.toContainText("404 — Page not found");
  });
}
