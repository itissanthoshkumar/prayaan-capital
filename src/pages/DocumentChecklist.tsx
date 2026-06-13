import LegalPageTemplate from "@/components/templates/LegalPageTemplate";
import { FileText } from "lucide-react";

const Section = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 list-disc pl-5">{items.map((i) => <li key={i}>{i}</li>)}</ul>
);

const DocumentChecklist = () => (
  <LegalPageTemplate
    eyebrow="Documents"
    title="Document Checklist"
    subtitle="Keep these ready for a smooth, paperless application"
    icon={FileText}
    sections={[
      { title: "KYC documents", content: <Section items={["PAN card of proprietor / directors / partners", "Aadhaar card linked to active mobile", "Passport-size photographs", "Address proof (utility bill / passport / voter ID)"]} /> },
      { title: "Income proof", content: <Section items={["Salary slips (last 3 months)", "Bank statements (6 months)", "ITR & computation (2 years)", "GST / business proof if self-employed"]} /> },
      { title: "Financial documents", content: <Section items={["Bank statements – last 12 months", "Income Tax Returns – last 2 years with computation", "Audited financials – last 2 years", "GST returns – last 12 months"]} /> },
      { title: "Collateral / property documents", content: <Section items={["Original title deed & chain of title", "Approved sanctioned plan", "Latest property tax receipt", "Encumbrance certificate (last 13 years)", "OEM quotation for machinery loans"]} /> },
    ]}
  />
);
export default DocumentChecklist;
