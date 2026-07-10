import { Link } from "react-router-dom";
import { Sparkles, Mail, Phone, MapPin } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

type FooterLink = { label: string; href: string; external?: boolean };

// Interest Rates & Charges is a direct PDF — open it in a new tab like the other documents.
const INTEREST_RATES_PDF = "/assets/images/downloads/Interest%20Rates%20and%20Gradation%20of%20Risk%20Policy%20V4.0.pdf";

const company: FooterLink[] = [
  { label: "About Us", href: "/why-prayaan" },
  { label: "Our Team", href: "/team" },
  { label: "Our Presence", href: "/branch-locator" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const productsTools: FooterLink[] = [
  { label: "Products", href: "/products" },
  { label: "Loan Calculator", href: "/calculators/emi" },
  { label: "Interest Rates & Charges", href: INTEREST_RATES_PDF, external: true },
];

const customerSupport: FooterLink[] = [
  { label: "Customer", href: "/customer" },
  { label: "NACH Mandate Instructions", href: "/nach-mandate-instructions" },
  { label: "Grievance Redressal", href: "/grievance-redressal" },
];

const investors: FooterLink[] = [
  { label: "Investor Relations", href: "/investor-relations" },
  { label: "Annual Returns", href: "/investor-relations" },
];

const legal: FooterLink[] = [
  { label: "Policies", href: "/policies" },
  { label: "RBI Disclosures", href: "/rbi-disclosures" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const Column = ({ title, links }: { title: string; links: FooterLink[] }) => (
  <div>
    <h3 className="font-display font-semibold text-xs uppercase tracking-[0.1em] mb-4 text-foreground">
      {title}
    </h3>
    <ul className="space-y-2.5">
      {links.map((link) => (
        <li key={`${link.label}-${link.href}`}>
          {link.external ? (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-colors font-body"
            >
              {link.label}
            </a>
          ) : (
            <Link
              to={link.href}
              className="text-xs text-muted-foreground hover:text-primary transition-colors font-body"
            >
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-section pt-16 md:pt-24 pb-8 relative overflow-hidden">
      {/* Blue ambient blob */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: "hsl(208,100%,31%)" }} />
      {/* Gold ambient blob */}
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: "hsl(42,100%,47%)" }} />

      <div className="container mx-auto px-5 relative z-10">
        <div className="clay-surface p-8 md:p-12">

          {/* Brand strip */}
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 md:gap-10 mb-10 pb-10 border-b border-border/40">
            <div>
              <Link to="/" className="inline-flex items-center mb-4">
                <BrandLogo size={36} />
              </Link>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-md font-body">
                Prayaan Capital Private Limited is a non-deposit taking NBFC providing secured business loans to India's micro, small and medium enterprises — backed by the property they own.
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card shadow-clay-sm">
                <Sparkles size={10} className="text-primary" />
                <span className="text-[10px] font-semibold text-primary uppercase tracking-wider">RBI Registered NBFC</span>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-muted-foreground font-body">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
                <span>No. 97, Minerva Building, 2nd Floor, Santhome High Road, Chennai 600028</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-primary shrink-0" />
                <a href="tel:+916380589898" className="hover:text-primary transition-colors">+91-6380589898</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-primary shrink-0" />
                <a href="mailto:customercare@prayaancapital.com" className="hover:text-primary transition-colors">customercare@prayaancapital.com</a>
              </li>
            </ul>
          </div>

          {/* Nav columns — 5 columns on lg, 3 on md, 2 on sm */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 mb-10 md:mb-12">
            <Column title="Company" links={company} />
            <Column title="Products & Tools" links={productsTools} />
            <Column title="Customer Support" links={customerSupport} />
            <Column title="Investor Relations" links={investors} />
            <Column title="Legal & Compliance" links={legal} />
          </div>

          {/* RBI grievance / ombudsman compliance strip */}
          <div className="border-t border-border/40 pt-6 mb-5 space-y-2.5">
            <p className="text-[10px] md:text-[11px] text-muted-foreground font-body leading-relaxed">
              <span className="font-semibold text-foreground">Grievance Redressal:</span> Mr. Harish Kumar E (Grievance Redressal Officer) ·{" "}
              <a href="mailto:gro@prayaancapital.com" className="hover:text-primary transition-colors">gro@prayaancapital.com</a> ·{" "}
              <a href="tel:+919600133756" className="hover:text-primary transition-colors">+91-9600133756</a>.{" "}
              If unresolved within 30 days, escalate to the RBI Ombudsman via{" "}
              <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cms.rbi.org.in</a>{" "}
              or toll-free 14448. Prayaan Capital does not accept public deposits.
            </p>
            <p className="text-[10px] md:text-[11px] text-muted-foreground font-body leading-relaxed">
              <span className="font-semibold text-foreground">Beware of fraud:</span> Prayaan Capital never asks for any advance fee, processing payment, OTP or password to sanction or release a loan. Deal only through our official website and verified numbers, and report suspicious calls to our Grievance Redressal Officer.
            </p>
          </div>

          <div className="border-t border-border/40 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3">
              <p className="text-[10px] md:text-[11px] text-muted-foreground font-body">
                © {new Date().getFullYear()} Prayaan Capital Pvt. Ltd. All rights reserved. CIN: U65900TN2018PTC126232
              </p>
              <p className="text-[10px] md:text-[11px] text-muted-foreground text-center md:text-right font-body">
                NBFC-ICC · Certificate of Registration granted by RBI on 6 June 2019 ·{" "}
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
