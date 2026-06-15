import { Link } from "react-router-dom";
import { Sparkles, Mail, Phone, MapPin } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

type FooterLink = { label: string; href: string };

const company: FooterLink[] = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Branch Locator", href: "/branch-locator" },
  { label: "Work @ Prayaan", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const customerInfo: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "NACH Instructions", href: "/nach-instructions" },
  { label: "Customer Grievance Redressal", href: "/grievance-redressal" },
];

const policiesGuidelines: FooterLink[] = [
  { label: "Fair Practice Code", href: "/fair-practice-code" },
  { label: "Interest Rate Policy", href: "/interest-rate-policy" },
  { label: "KYC & AML Policy", href: "/kyc-aml-policy" },
  { label: "Code of Conduct – Recovery", href: "/code-of-conduct-recovery" },
  { label: "Whistleblower Policy", href: "/whistleblower-policy" },
  { label: "CSR Policy", href: "/csr-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

const compliances: FooterLink[] = [
  { label: "RBI Disclosures", href: "/rbi-disclosures" },
  { label: "Citizens Charter", href: "/citizens-charter" },
  { label: "Most Important Terms & Conditions", href: "/most-important-terms" },
  { label: "Notices & Disclosures", href: "/notices-disclosures" },
  { label: "Ombudsman Scheme", href: "/ombudsman-scheme" },
  { label: "Interest Rates & Charges", href: "/interest-rates-and-charges" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Terms of Service", href: "/terms" },
];

const customerEducation: FooterLink[] = [
  { label: "How to Apply", href: "/how-to-apply" },
  { label: "Document Checklist", href: "/document-checklist" },
  { label: "FAQs", href: "/faqs" },
  { label: "EMI Calculator", href: "/calculators/emi" },
  { label: "Eligibility Calculator", href: "/calculators/eligibility" },
  { label: "Foreclosure Calculator", href: "/calculators/foreclosure" },
  { label: "Downloads", href: "/downloads" },
  { label: "Sitemap", href: "/sitemap" },
];

const Column = ({ title, links }: { title: string; links: FooterLink[] }) => (
  <div>
    <h4 className="font-display font-semibold text-xs text-foreground uppercase tracking-[0.1em] mb-4">{title}</h4>
    <ul className="space-y-2.5">
      {links.map((link) => (
        <li key={link.href}>
          <Link to={link.href} className="text-xs text-muted-foreground hover:text-primary transition-colors font-body">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-section pt-16 md:pt-24 pb-8 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-coral opacity-10 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-gradient-mint opacity-10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-5 relative z-10">
        <div className="clay-surface p-8 md:p-12">
          {/* Brand strip */}
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 md:gap-10 mb-10 pb-10 border-b border-border/40">
            <div>
              <Link to="/" className="inline-flex items-center mb-4">
                <BrandLogo size={36} />
              </Link>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-md font-body">
                Prayaan Capital Private Limited is a non-deposit taking NBFC, providing affordable Loan Against Property and housing finance to property owners across India.
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card shadow-clay-sm">
                <Sparkles size={10} className="text-primary" />
                <span className="text-[10px] font-semibold text-primary uppercase tracking-wider">RBI Registered NBFC</span>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-muted-foreground font-body">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
                <span>No. 40/97, Minerva Building, 2nd Floor, Santhome High Road, Chennai 600028</span>
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 mb-10 md:mb-12">
            <Column title="Company" links={company} />
            <Column title="Customer Info" links={customerInfo} />
            <Column title="Policies & Guidelines" links={policiesGuidelines} />
            <Column title="Compliances" links={compliances} />
            <Column title="Customer Education" links={customerEducation} />
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
                <a href="/credits.txt" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline-offset-2 hover:underline">Image credits</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
