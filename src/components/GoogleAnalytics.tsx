import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Google Analytics 4 tracking for the SPA.
 *
 * The gtag loader lives in index.html and is gated to the live prayaancapital.com
 * domain, so `window.gtag` is only defined in production — everything here is a
 * no-op on localhost and Vercel previews.
 *
 *  - page_view : sent on every React Router change (base config uses
 *                send_page_view:false to avoid double-counting the landing page).
 *  - ui_interaction : a single delegated listener auto-captures clicks on links,
 *                buttons, phone/email links and form submits, so we don't have to
 *                instrument every CTA by hand. GA4's built-in engagement/time,
 *                scroll and outbound tracking (Enhanced Measurement) run alongside.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const clean = (s: string | null | undefined) =>
  (s || "").replace(/\s+/g, " ").trim().slice(0, 100);

const GoogleAnalytics = () => {
  const location = useLocation();

  // page_view on every route change (fires on first render too).
  useEffect(() => {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", "page_view", {
      page_path: location.pathname + location.search + location.hash,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location]);

  // Delegated interaction tracking — attached once.
  useEffect(() => {
    if (typeof window.gtag !== "function") return;

    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest(
        'a, button, [role="button"], input[type="submit"], input[type="button"]',
      ) as HTMLElement | null;
      if (!el) return;

      const tag = el.tagName.toLowerCase();
      let interaction_type = tag === "a" ? "link" : "button";
      let link_url: string | undefined;

      if (tag === "a") {
        const href = (el as HTMLAnchorElement).getAttribute("href") || "";
        link_url = href;
        if (href.startsWith("tel:")) interaction_type = "phone_click";
        else if (href.startsWith("mailto:")) interaction_type = "email_click";
        else if (/^https?:\/\//.test(href) && !href.includes(window.location.host))
          interaction_type = "outbound_link";
      }

      const label =
        clean(el.getAttribute("aria-label")) ||
        clean(el.textContent) ||
        clean(el.getAttribute("title")) ||
        "(no label)";

      window.gtag!("event", "ui_interaction", {
        interaction_type,
        label,
        link_url,
        page_path: window.location.pathname,
      });

      // A phone or email tap is a lead. Fire GA4's recommended `generate_lead`
      // event (mark it as a Key event in GA4 to count it as a conversion). It
      // reuses the existing interaction_type / label custom dimensions, so the
      // phone-vs-email split is visible with no extra setup.
      if (interaction_type === "phone_click" || interaction_type === "email_click") {
        window.gtag!("event", "generate_lead", {
          method: interaction_type === "phone_click" ? "phone" : "email",
          interaction_type,
          label,
          page_path: window.location.pathname,
        });
      }
    };

    const onSubmit = (e: SubmitEvent) => {
      const form = e.target as HTMLFormElement | null;
      if (!form) return;
      window.gtag!("event", "ui_interaction", {
        interaction_type: "form_submit",
        label: clean(form.getAttribute("name") || form.getAttribute("id") || "form"),
        page_path: window.location.pathname,
      });
    };

    document.addEventListener("click", onClick, { capture: true });
    document.addEventListener("submit", onSubmit, { capture: true });
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      document.removeEventListener("submit", onSubmit, { capture: true });
    };
  }, []);

  return null;
};

export default GoogleAnalytics;
