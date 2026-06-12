import LegalPageTemplate from "@/components/templates/LegalPageTemplate";
import { Download } from "lucide-react";

const docs = [
  ["Loan Application Form", "PDF, 220 KB"],
  ["KYC Declaration Form", "PDF, 110 KB"],
  ["Statement of Account Request", "PDF, 90 KB"],
  ["NOC Request Form", "PDF, 85 KB"],
  ["Foreclosure Request Form", "PDF, 95 KB"],
  ["Most Important Terms & Conditions (MITC)", "PDF, 180 KB"],
  ["Sample Sanction Letter", "PDF, 140 KB"],
];

const Downloads = () => (
  <LegalPageTemplate
    eyebrow="Downloads"
    title="Download Center"
    subtitle="Forms, policies and customer templates"
    icon={Download}
    sections={docs.map(([name, meta]) => ({
      title: name,
      content: (
        <div className="flex items-center justify-between gap-4">
          <span>{meta}</span>
          <a href="#" className="text-primary text-sm font-semibold hover:underline shrink-0">Download ↓</a>
        </div>
      ),
    }))}
  />
);
export default Downloads;
