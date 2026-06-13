import { FileText } from "lucide-react";
import LegalPageTemplate from "@/components/templates/LegalPageTemplate";

const sections = [
  { title: "1. Acceptance of Terms", content: "By accessing or using the services of Prayaan Capital Pvt. Ltd. (\"Company\", \"we\", \"us\"), you agree to be bound by these Terms of Service. If you do not agree, please do not use our services. These terms constitute a legally binding agreement between you and Prayaan Capital." },
  { title: "2. Eligibility", content: "To use our services, you must be: an Indian resident aged 21 years or above, owning property in India to be offered as security, legally competent to enter into a binding contract, and not disqualified from applying for credit by any regulatory authority." },
  { title: "3. Services Offered", content: "Prayaan Capital provides property-secured loans including Loan Against Property, Housing Loans, Construction Loans, and Balance Transfer & Top-up. All lending activities are conducted as per RBI Master Directions for Non-Banking Financial Companies." },
  { title: "4. Loan Application Process", content: "Loan applications are subject to our credit assessment process which includes AI-powered underwriting, KYC verification, collateral evaluation, and human review. Submission of an application does not guarantee loan approval." },
  { title: "5. Interest Rates and Fees", content: "Interest rates are determined based on AI-driven risk assessment and may vary between applicants. All applicable fees, charges, and the Annual Percentage Rate (APR) will be disclosed in the sanction letter before loan disbursal." },
  { title: "6. Repayment", content: "Loan repayment shall be through EMIs via NACH/e-NACH mandate or post-dated cheques. Late payments may attract penal charges as specified in the loan agreement." },
  { title: "7. Data and Privacy", content: "Your personal and business data is collected and processed in accordance with our Privacy Policy and applicable data protection laws." },
  { title: "8. Intellectual Property", content: "All content, software, algorithms, machine learning models, and technology used in our platform are the intellectual property of Prayaan Capital." },
  { title: "9. Limitation of Liability", content: "Prayaan Capital shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services." },
  { title: "10. Governing Law", content: "These terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Chennai, Tamil Nadu." },
];

const Terms = () => (
  <LegalPageTemplate
    eyebrow="Legal"
    icon={FileText}
    title="Terms of Service"
    subtitle="Last updated: March 1, 2026"
    sections={sections}
  />
);

export default Terms;
