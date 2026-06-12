import { describe, it, expect, afterEach, vi } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { appRoutes, knownPaths, concretePaths } from "@/routes";
import NotFound from "@/pages/NotFound";

afterEach(() => cleanup());

const renderAt = (path: string) => {
  const qc = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <QueryClientProvider client={qc}>
      <TooltipProvider>
        <MemoryRouter initialEntries={[path]}>
          <Routes>
            {appRoutes.map(({ path: p, component: C }) => (
              <Route key={p} path={p} element={<C />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MemoryRouter>
      </TooltipProvider>
    </QueryClientProvider>,
  );
};

describe("integration: every route renders", () => {
  const allPaths = Array.from(knownPaths);

  it.each(allPaths)("renders %s without errors", (path) => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const { container } = renderAt(path);
    // page must mount with content
    expect(container.firstChild).toBeTruthy();
    expect(container.textContent?.length ?? 0).toBeGreaterThan(20);
    // must NOT have rendered the 404 fallback for known paths
    expect(container.textContent).not.toMatch(/404 — Page not found/i);
    // no react render-time errors
    const realErrors = errorSpy.mock.calls.filter(
      (args) => !String(args[0] ?? "").includes("404 Error: User attempted"),
    );
    expect(realErrors, `console.error during ${path}`).toEqual([]);
    errorSpy.mockRestore();
  });
});

describe("integration: internal links resolve", () => {
  const isInternal = (href: string) =>
    href.startsWith("/") && !href.startsWith("//");

  // Known external/anchor exceptions allowed in `<Link to>` values.
  const allowedAnchorPaths = new Set(["/"]);

  it.each(Array.from(knownPaths))("links on %s point to known routes", (path) => {
    const { container } = renderAt(path);
    const anchors = Array.from(container.querySelectorAll("a[href]"));
    const broken: string[] = [];
    for (const a of anchors) {
      const href = a.getAttribute("href") ?? "";
      if (!isInternal(href)) continue;
      // strip query + hash
      const [pathname, hash] = href.split("#");
      const cleanPath = pathname.split("?")[0] || "/";
      // hash-only links (e.g. /#section) on the same page are fine
      if (cleanPath === "/" && hash && allowedAnchorPaths.has("/")) continue;
      if (!concretePaths.has(cleanPath)) {
        broken.push(href);
      }
    }
    expect(broken, `broken links on ${path}`).toEqual([]);
  });
});

describe("404 page", () => {
  it("renders claymorphism 404 for unknown route", () => {
    const { container } = renderAt("/this-route-does-not-exist");
    expect(container.textContent).toMatch(/404 — Page not found/i);
    expect(container.querySelector(".clay-surface")).toBeTruthy();
  });

  it("suggests nearby links", () => {
    const { container } = renderAt("/blogg");
    expect(container.textContent).toMatch(/Did you mean/i);
    // should suggest /blog
    const hrefs = Array.from(container.querySelectorAll("a[href]"))
      .map((a) => a.getAttribute("href"));
    expect(hrefs).toContain("/blog");
  });
});
