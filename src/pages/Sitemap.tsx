import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";
import { ScrollText } from "lucide-react";

type SitemapLink = { label: string; href: string; external?: boolean };

// Mirrors the footer; covers every live (routed) page on the site.
const groups: { title: string; links: SitemapLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/why-prayaan" },
      { label: "Our Team", href: "/team" },
      { label: "Our Presence", href: "/branch-locator" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Products & Tools",
    links: [
      { label: "Products", href: "/products" },
      { label: "EMI Calculator", href: "/calculators/emi" },
      // { label: "Balance Transfer Calculator", href: "/calculators/bt" },   // disabled for now
      { label: "Interest Rates & Charges", href: "/assets/images/downloads/Interest%20Rates%20and%20Gradation%20of%20Risk%20Policy%20V4.0.pdf", external: true },
    ],
  },
  {
    title: "Customer Support",
    links: [
      { label: "Customer", href: "/customer" },
      { label: "NACH Instructions", href: "/nach-instructions" },
      { label: "NACH Mandate Instructions", href: "/nach-mandate-instructions" },
      { label: "Grievance Redressal", href: "/grievance-redressal" },
    ],
  },
  {
    title: "Investor Relations",
    links: [
      { label: "Investor Relations", href: "/investor-relations" },
    ],
  },
  {
    title: "Legal & Compliance",
    links: [
      { label: "Policies", href: "/policies" },
      { label: "RBI Disclosures", href: "/rbi-disclosures" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      // { label: "Sitemap", href: "/sitemap" },   // de-linked — URL stays active, no UI buttons to it
    ],
  },
];

const Sitemap = () => (
  <Layout>
      <Seo title="Sitemap" description="Browse every page on the Prayaan Capital website, neatly organised." path="/sitemap" />
    <section className="pt-24 pb-8 md:pt-32 md:pb-10 bg-hero relative overflow-hidden">
      <div className="container mx-auto px-5 relative z-10">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
          <ScrollText size={12} /> Sitemap
        </span>
        <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-3">
          Sitemap
        </h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-xl">
          Every page on prayaancapital.com — neatly organised.
        </p>
      </div>
    </section>
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-5 max-w-5xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g) => (
          <div key={g.title} className="clay-surface p-6">
            <h2 className="font-display text-xs font-bold text-foreground uppercase tracking-wider mb-4 text-primary">
              {g.title}
            </h2>
            <ul className="space-y-2.5">
              {g.links.map((l) => (
                <li key={l.href}>
                  {l.external ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition font-body"
                    >
                      {l.label} ↗
                    </a>
                  ) : (
                    <Link
                      to={l.href}
                      className="text-sm text-muted-foreground hover:text-primary transition font-body"
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);
export default Sitemap;
