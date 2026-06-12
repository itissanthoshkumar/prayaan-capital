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
      ["Apply Now", "/apply"],
      ["Thank You", "/thank-you"],
    ],
  },
  {
    title: "Products",
    links: [
      ["All Products", "/products"],
      ["Secured Business Loans", "/products/secured-business-loans"],
      ["LAP-Style Financing", "/products/lap-financing"],
      ["Working Capital", "/products/working-capital"],
      ["Machinery Finance", "/products/machinery-finance"],
      ["MSME Loan", "/products/msme-loan"],
      ["Supply Chain Finance", "/products/supply-chain-finance"],
      ["Women Entrepreneur Loan", "/products/women-entrepreneur-loan"],
    ],
  },
  {
    title: "Customer",
    links: [
      ["Customer Hub", "/customer"],
      ["Payments", "/customer/payments"],
      ["Grievance", "/customer/grievance"],
      ["Calculators", "/customer/calculators"],
      ["NACH Instructions", "/nach-instructions"],
      ["Customer Login", "/customer-login"],
    ],
  },
  {
    title: "Calculators & Tools",
    links: [
      ["EMI Calculator", "/calculators/emi"],
      ["Eligibility Calculator", "/calculators/eligibility"],
      ["Foreclosure Calculator", "/calculators/foreclosure"],
      ["Check Eligibility", "/eligibility"],
      ["Branch Locator", "/branches"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Success Stories", "/success-stories"],
      ["FAQ", "/faq"],
      ["Downloads", "/downloads"],
      ["How to Apply", "/how-to-apply"],
      ["Document Checklist", "/document-checklist"],
      ["Interest Rates & Charges", "/interest-rates-and-charges"],
      ["Partnerships", "/partnerships"],
      ["News", "/news"],
      ["Blog", "/blog"],
    ],
  },
  {
    title: "Investors",
    links: [
      ["Investor Relations", "/investors"],
    ],
  },
  {
    title: "Compliance & Regulatory",
    links: [
      ["RBI Disclosures", "/rbi-disclosures"],
      ["Privacy Policy", "/privacy-policy"],
      ["Terms & Conditions", "/terms"],
      ["Grievance Redressal", "/grievance"],
      ["Fair Practice Code", "/fair-practice-code"],
      ["Interest Rate Policy", "/interest-rate-policy"],
      ["KYC & AML Policy", "/kyc-aml-policy"],
      ["Code of Conduct (Recovery)", "/code-of-conduct-recovery"],
      ["Whistleblower Policy", "/whistleblower-policy"],
      ["CSR Policy", "/csr-policy"],
      ["Citizen's Charter", "/citizens-charter"],
      ["MITC", "/most-important-terms"],
      ["Notices & Disclosures", "/notices-disclosures"],
      ["Cookie Policy", "/cookie-policy"],
      ["Disclaimer", "/disclaimer"],
      ["Ombudsman Scheme", "/ombudsman-scheme"],
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
        <h1 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mt-4 mb-3">
          Sitemap
        </h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-xl">
          Every page on prayaancapital.com — neatly organised.
        </p>
      </div>
    </section>
    <section className="py-12 md:py-20 bg-background">
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
