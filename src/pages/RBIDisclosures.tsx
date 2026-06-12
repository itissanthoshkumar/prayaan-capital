import LegalPageTemplate from "@/components/templates/LegalPageTemplate";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

const regulatoryLinks = [
  { label: "Interest Rate Policy", href: "/interest-rate-policy" },
  { label: "Fair Practice Code", href: "/fair-practice-code" },
  { label: "Grievance Redressal Policy", href: "/grievance-redressal" },
  { label: "KYC / AML Policy", href: "/kyc-aml-policy" },
  { label: "Code of Conduct for Recovery", href: "/code-of-conduct-recovery" },
  { label: "Whistleblower Policy", href: "/whistleblower-policy" },
  { label: "CSR Policy", href: "/csr-policy" },
  { label: "Citizens Charter", href: "/citizens-charter" },
  { label: "Most Important Terms & Conditions (MITC)", href: "/most-important-terms" },
  { label: "Notices & Disclosures", href: "/notices-disclosures" },
  { label: "Ombudsman Scheme", href: "/ombudsman-scheme" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
];

const RBIDisclosures = () => (
  <LegalPageTemplate
    eyebrow="Regulatory"
    title="RBI Disclosures"
    subtitle="Mandatory disclosures as required under RBI directions for Non-Banking Financial Companies."
    icon={ShieldCheck}
    intro={
      <div className="space-y-2">
        <p><strong>Company:</strong> Prayaan Capital Private Limited</p>
        <p><strong>CIN:</strong> U65900TN2018PTC126232</p>
        <p><strong>RBI Certificate of Registration:</strong> Granted on 6 June 2019 (Non-deposit taking NBFC-ICC)</p>
        <p><strong>Registered & Corporate Office:</strong> No. 40/97, Minerva Building, 2nd Floor, Santhome High Road, Chennai – 600028, Tamil Nadu</p>
        <p className="text-xs text-muted-foreground pt-1">Prayaan Capital is registered with the Reserve Bank of India as a Non-Banking Financial Company – Investment and Credit Company (NBFC-ICC) and is authorised to carry on the business of non-banking financial institution without accepting public deposits.</p>
      </div>
    }
    sections={[
      {
        title: "Certificate of Registration",
        content: (
          <p>
            Prayaan Capital Private Limited holds a valid Certificate of Registration (CoR) issued by the Reserve Bank of India
            under Section 45-IA of the Reserve Bank of India Act, 1934. The CoR was granted on 6 June 2019.
            The company is classified as an NBFC-ICC (Non-deposit taking).
          </p>
        ),
      },
      {
        title: "Policies & Regulatory Documents",
        content: (
          <ul className="space-y-2">
            {regulatoryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-primary hover:underline font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        ),
      },
      {
        title: "Non-Deposit Taking Status",
        content: (
          <p>
            Prayaan Capital Private Limited does not accept public deposits. All lending is funded through equity capital
            and borrowings from regulated financial institutions. The company is not authorised to accept deposits from the
            general public.
          </p>
        ),
      },
      {
        title: "Systemically Important Status",
        content: (
          <p>
            Prayaan Capital Private Limited is not classified as a Systemically Important NBFC (NBFC-SI) under applicable
            RBI guidelines. The company complies with all applicable prudential norms including capital adequacy, provisioning,
            and exposure norms.
          </p>
        ),
      },
      {
        title: "Contact for Regulatory Queries",
        content: (
          <div className="space-y-1">
            <p><strong>Email:</strong> customercare@prayaancapital.com</p>
            <p><strong>Phone:</strong> +91-6380589898</p>
            <p><strong>Address:</strong> No. 40/97, Minerva Building, 2nd Floor, Santhome High Road, Chennai – 600028</p>
            <p><strong>Hours:</strong> Mon – Sat, 9:00 AM – 7:00 PM IST</p>
          </div>
        ),
      },
    ]}
  />
);

export default RBIDisclosures;
