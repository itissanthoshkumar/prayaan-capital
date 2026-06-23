import LegalPageTemplate from "@/components/templates/LegalPageTemplate";
import { TrendingUp } from "lucide-react";

const InvestorRelations = () => (
  <LegalPageTemplate
    eyebrow="Investor Relations"
    icon={TrendingUp}
    title="Investor Relations"
    subtitle="Annual reports, financial results and disclosures"
    sections={[
      { title: "Financial highlights – FY25", content: "AUM ₹100 Cr • Disbursements ₹120 Cr • PAT ₹6 Cr • CRAR 24.6% • GNPA 1.8%" },
      { title: "Annual reports", content: <ul className="list-disc pl-5 space-y-1"><li><a className="text-primary hover:underline" href="#">Annual Report FY25 (PDF)</a></li><li><a className="text-primary hover:underline" href="#">Annual Report FY24 (PDF)</a></li><li><a className="text-primary hover:underline" href="#">Annual Report FY23 (PDF)</a></li></ul> },
      { title: "Quarterly results", content: <ul className="list-disc pl-5 space-y-1"><li><a className="text-primary hover:underline" href="#">Q4 FY25 results</a></li><li><a className="text-primary hover:underline" href="#">Q3 FY25 results</a></li><li><a className="text-primary hover:underline" href="#">Q2 FY25 results</a></li></ul> },
      { title: "Credit ratings", content: "Long-term: A- (Stable) by CRISIL • Short-term: A2+ • Reaffirmed FY25" },
      { title: "Investor contact", content: "ir@prayaancapital.com | +91 22 6789 0145" },
    ]}
  />
);
export default InvestorRelations;
