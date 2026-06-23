import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import AIFloatingElements, { AIBadge } from "@/components/AIFloatingElements";

const groups = [
  {
    title: "Main Pages",
    links: [
      ["Home", "/"],
      ["About Us", "/about"],
      ["Why Prayaan", "/why-prayaan"],
      ["Leadership", "/leadership"],
      ["Technology", "/technology"],
      ["Careers", "/careers"],
      ["Contact Us", "/contact"],
      ["Apply Now", "/eligibility"],
      ["Thank You", "/thank-you"],
    ],
  },
  {
    title: "Products",
    links: [
      ["All Products", "/products"],
    ],
  },
  {
    title: "Customer",
    links: [
      ["Customer Hub", "/customer"],
      ["Payments", "/customer/payments"],
      ["Grievance", "/grievance-redressal"],
      ["Calculators", "/calculators/emi"],
      ["NACH Instructions", "/nach-instructions"],
    ],
  },
  {
    title: "Calculators & Tools",
    links: [
      ["EMI Calculator", "/calculators/emi"],
      ["Check Eligibility", "/eligibility"],
      ["Branch Locator", "/branches"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["FAQ", "/faqs"],
      ["Document Checklist", "/document-checklist"],
      ["Interest Rates & Charges", "/interest-rates-and-charges"],
      ["News", "/news"],
      ["Case Studies", "/case-studies"],
    ],
  },
  {
    title: "Investors",
    links: [
      ["Investor Relations", "/investor-relations"],
    ],
  },
  {
    title: "Compliance & Regulatory",
    links: [
      ["RBI Disclosures", "/rbi-disclosures"],
      ["Policies", "/policies"],
      ["Privacy Policy", "/privacy-policy"],
      ["Terms & Conditions", "/terms"],
      ["Grievance Redressal", "/grievance"],
    ],
  },
  {
    title: "Utility",
    links: [
      ["Sitemap", "/sitemap"],
      ["404 Page", "/404-example-broken-link"],
    ],
  },
];

const Sitemap = () => (
  <Layout>
    <section className="pt-24 pb-8 md:pt-32 md:pb-12 bg-hero relative overflow-hidden">
      <AIFloatingElements />
      <div className="container mx-auto px-5 relative z-10">
        <AIBadge label="Sitemap" />
        <h1 className="font-display text-3xl md:text-6xl font-bold text-foreground mt-4 mb-3">
          Sitemap
        </h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-xl">
          Every page on prayaancapital.com — neatly organised.
        </p>
      </div>
    </section>
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-5 max-w-6xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g) => (
          <div key={g.title} className="clay-surface p-6">
            <h2 className="font-display text-sm font-bold text-foreground uppercase tracking-wider mb-4">
              {g.title}
            </h2>
            <ul className="space-y-2.5">
              {g.links.map(([l, h]) => (
                <li key={h}>
                  <Link
                    to={h}
                    className="text-sm text-muted-foreground hover:text-primary transition font-body"
                  >
                    {l}
                  </Link>
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
