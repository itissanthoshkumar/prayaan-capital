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
      { title: "Collateral / property documents", content: <Section items={["Original title deed & chain of title", "Approved sanctioned plan", "Latest property tax receipt", "Encumbrance certificate (last 13 years)"]} /> },
    ]}
  />
);
export default DocumentChecklist;
