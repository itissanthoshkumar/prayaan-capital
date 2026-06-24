import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ScrollText } from "lucide-react";

const PDF_RATES = "https://prayaancapital.com/assets/images/downloads/Interest%20Rates%20and%20Gradation%20of%20Risk%20Policy%20V4.0.pdf";

type SitemapLink = { label: string; href: string; external?: boolean };

const groups: { title: string; links: SitemapLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About Prayaan", href: "/why-prayaan" },
      { label: "Team", href: "/team" },
      { label: "Technology", href: "/technology" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Our Products", href: "/products" },
      { label: "EMI Calculator", href: "/calculators/emi" },
      { label: "Branch Locator", href: "/branch-locator" },
      { label: "Case Studies", href: "/case-studies" },
    ],
  },
  {
    title: "Customer",
    links: [
      { label: "Customer Hub", href: "/customer" },
      { label: "Grievance Redressal", href: "/grievance-redressal" },
      { label: "NACH Instructions", href: "/nach-instructions" },
    ],
  },
  {
    title: "Investor Relations",
    links: [
      { label: "Investor Relations", href: "/investor-relations" },
      { label: "RBI Disclosures", href: "/rbi-disclosures" },
    ],
  },
  {
    title: "Compliance",
    links: [
      { label: "Policies", href: "/policies" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Interest Rates & Charges", href: PDF_RATES, external: true },
    ],
  },
  {
    title: "Utility",
    links: [
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];

const Sitemap = () => (
  <Layout>
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
