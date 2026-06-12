import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { concretePaths } from "@/routes";

/**
 * Build-time guard: every URL listed in public/sitemap.xml must
 * resolve to a known concrete route in the React Router config.
 */
describe("sitemap.xml ↔ app routes", () => {
  const xml = fs.readFileSync(
    path.resolve(process.cwd(), "public/sitemap.xml"),
    "utf8",
  );
  const locs = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map(
    (m) => new URL(m[1]).pathname,
  );

  it("sitemap.xml lists at least 10 URLs", () => {
    expect(locs.length).toBeGreaterThan(10);
  });

  it.each(locs)("sitemap URL %s resolves to a known route", (p) => {
    expect(concretePaths.has(p), `unknown sitemap path: ${p}`).toBe(true);
  });
});
