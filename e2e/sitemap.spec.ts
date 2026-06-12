import { test, expect, request } from "@playwright/test";

/**
 * Fetches /sitemap.xml and asserts every listed URL resolves to a
 * non-404 route in the running app.
 */
test("sitemap.xml: every listed URL resolves to a non-404 route", async ({
  baseURL,
  page,
}) => {
  const api = await request.newContext({ baseURL });
  const res = await api.get("/sitemap.xml");
  expect(res.status(), "sitemap.xml must be served").toBe(200);
  const xml = await res.text();
  const locs = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map(
    (m) => m[1],
  );
  expect(locs.length, "sitemap should list URLs").toBeGreaterThan(10);

  const broken: string[] = [];
  for (const loc of locs) {
    const url = new URL(loc);
    const path = url.pathname;
    const r = await page.goto(path, { waitUntil: "domcontentloaded" });
    const status = r?.status() ?? 0;
    const body = await page.locator("body").innerText();
    if (status >= 400 || /404 — Page not found/i.test(body)) {
      broken.push(`${path} (status ${status})`);
    }
  }
  expect(broken, `broken sitemap URLs:\n${broken.join("\n")}`).toEqual([]);
});
