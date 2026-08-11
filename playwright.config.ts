import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: "list",
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:8080",
    trace: "on-first-retry",
  },
  projects: [
    // Uses the system-installed Google Chrome (channel: "chrome") so the suite
    // runs without downloading Playwright's bundled browser.
    { name: "chromium", use: { ...devices["Desktop Chrome"], channel: "chrome" } },
  ],
  // Regression runs against the PRODUCTION build (what actually deploys) served by
  // `vite preview` — pre-compiled, so page loads are fast (no dev on-demand compile).
  webServer: process.env.PLAYWRIGHT_BASE_URL
    ? undefined
    : {
        command: "npm run build && npm run preview -- --port 8080 --strictPort",
        url: "http://localhost:8080",
        reuseExistingServer: !process.env.CI,
        timeout: 180_000,
      },
});
