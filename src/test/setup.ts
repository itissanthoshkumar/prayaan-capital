import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

class StubObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() { return []; }
}

if (!("ResizeObserver" in window)) {
  (window as unknown as { ResizeObserver: typeof StubObserver }).ResizeObserver = StubObserver;
}
if (!("IntersectionObserver" in window)) {
  (window as unknown as { IntersectionObserver: typeof StubObserver }).IntersectionObserver = StubObserver;
}
if (typeof window.scrollTo !== "function") {
  window.scrollTo = (() => {}) as typeof window.scrollTo;
}
