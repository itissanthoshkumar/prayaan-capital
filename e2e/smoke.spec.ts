import { test, expect } from "@playwright/test";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Regression: load every live page, screenshot it, and assert it actually works.
 *
 * The route list is derived at runtime from src/routes.ts (uncommented `path:`
 * entries, minus parameterised routes), so it never goes stale when routes are
 * added/disabled. For each page we check: HTTP < 400, it is NOT the 404 page,
 * an <h1> renders with text, no broken images, and no unexpected console errors.
 * A full-page screenshot of each is saved to e2e/screenshots/ AND attached to
 * the Playwright HTML report (npx playwright show-report).
 *
 * This is the MANDATORY pre-push check — see CLAUDE.md.
 */

// Routes that intentionally redirect to a file/elsewhere instead of rendering
// an <h1> — tested separately below.
const REDIRECTS = new Set(["/interest-rates-and-charges"]);

function activeRoutes(): string[] {
  const src = readFileSync(path.join(__dirname, "../src/routes.ts"), "utf8");
  const routes = new Set<string>();
  for (const raw of src.split("\n")) {
    const line = raw.trim();
    if (line.startsWith("//")) continue; // skip disabled/commented routes
    const m = line.match(/\{\s*path:\s*"([^"]+)"/);
    if (m && !m[1].includes(":") && !REDIRECTS.has(m[1])) routes.add(m[1]); // skip params + redirects
  }
  return [...routes];
}

// console noise that is expected and not a real failure
const NOISE =
  /React Router Future Flag|Download the React DevTools|\[vite\]|Vercel (Web Analytics|Speed Insights)|clarity|gtag|favicon/i;

const NOT_FOUND = /couldn't find that page|404 — Page not found/i;

// Resources that only 404 under local `vite preview`: Vercel Web Analytics and
// Speed Insights inject these platform scripts, which Vercel serves in production
// but don't exist on localhost. A local 404 here is expected, not a regression, so
// it must not fail the suite. URL-scoped on purpose — a real app asset that 404s
// still fails.
const IGNORED_RESOURCE = /\/_vercel\/(insights|speed-insights)\/script\.js(\?|$)/;

const slugify = (route: string) =>
  route === "/" ? "home" : route.replace(/[^a-z0-9]+/gi, "_").replace(/^_|_$/g, "");

for (const route of activeRoutes()) {
  test(`page loads & renders: ${route}`, async ({ page }, testInfo) => {
    const consoleErrors: string[] = [];
    const failedResources: string[] = [];
    page.on("console", (m) => {
      if (m.type() !== "error") return;
      const text = m.text();
      if (NOISE.test(text)) return;
      // Resource-load 404s carry no URL in their console text, so they're checked
      // via the response listener below (which knows the URL). Skip them here.
      if (/Failed to load resource/i.test(text)) return;
      consoleErrors.push(text);
    });
    page.on("pageerror", (e) => {
      if (!NOISE.test(String(e))) consoleErrors.push("pageerror: " + String(e));
    });
    page.on("response", (resp) => {
      const url = resp.url();
      if (resp.status() >= 400 && !IGNORED_RESOURCE.test(url)) {
        failedResources.push(`${resp.status()} ${url}`);
      }
    });

    const res = await page.goto(route, { waitUntil: "domcontentloaded" });
    expect(res?.status(), `HTTP status for ${route}`).toBeLessThan(400);

    // the SPA must render a real <h1> (auto-retries until visible)
    const h1 = page.locator("h1").first();
    await expect(h1, `visible <h1> on ${route}`).toBeVisible();
    expect((await h1.innerText()).trim().length, `<h1> has text on ${route}`).toBeGreaterThan(0);

    // must not have fallen through to the 404 page
    await expect(page.locator("body"), `${route} should not be the 404 page`).not.toContainText(NOT_FOUND);

    // let images/fonts/animation settle, then screenshot.
    // networkidle is best-effort + bounded (the Vite HMR socket can keep it from settling).
    await page.waitForLoadState("networkidle", { timeout: 3000 }).catch(() => {});
    await page.waitForTimeout(400);

    const slug = slugify(route);
    const shot = await page.screenshot({
      path: path.join(__dirname, "screenshots", `${slug}.png`),
      fullPage: true,
    });
    await testInfo.attach(`screenshot-${slug}`, { body: shot, contentType: "image/png" });

    // no broken images
    const brokenImgs = await page.evaluate(
      () => [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.src),
    );
    expect(brokenImgs, `broken images on ${route}`).toEqual([]);

    // no failed resource loads (broken assets / 404s), ignoring platform scripts
    expect(failedResources, `failed resource loads on ${route}`).toEqual([]);

    // no unexpected console/page errors
    expect(consoleErrors, `console errors on ${route}`).toEqual([]);
  });
}

test("interest-rates-and-charges redirects to the PDF", async ({ page }) => {
  await page.goto("/interest-rates-and-charges");
  await expect
    .poll(() => page.url(), { message: "should redirect to the Interest Rates PDF" })
    .toMatch(/\/assets\/images\/downloads\/Interest.*\.pdf/i);
});

test("unknown route shows the 404 recovery page", async ({ page }, testInfo) => {
  await page.goto("/__this_route_should_not_exist__");
  await expect(page.locator("body")).toContainText(/couldn't find that page/i);
  await testInfo.attach("screenshot-404", {
    body: await page.screenshot({ path: path.join(__dirname, "screenshots", "_404.png"), fullPage: true }),
    contentType: "image/png",
  });
});
