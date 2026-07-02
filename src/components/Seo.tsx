import { useEffect } from "react";

const SITE_URL = "https://prayaan-capital.vercel.app";

interface SeoProps {
  /** Page-specific title. "| Prayaan Capital" is appended automatically. */
  title: string;
  /** ~150-160 char meta description, specific to this page's content. */
  description: string;
  /** Canonical path, e.g. "/why-prayaan". Also used for pages reached via an alias route. */
  path: string;
  /** Set for internal/preview pages that shouldn't be indexed. */
  noindex?: boolean;
}

function setMetaTag(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Sets document title, meta description, canonical link, and OG/Twitter tags
    for the current route. Dependency-free — no react-helmet needed for a
    site this size. Renders nothing. */
const Seo = ({ title, description, path, noindex = false }: SeoProps) => {
  useEffect(() => {
    const fullTitle = `${title} | Prayaan Capital`;
    document.title = fullTitle;

    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", `${SITE_URL}${path}`);
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "robots", noindex ? "noindex, nofollow" : "index, follow");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${SITE_URL}${path}`);
  }, [title, description, path, noindex]);

  return null;
};

export default Seo;
