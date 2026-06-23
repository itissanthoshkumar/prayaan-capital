import LegalPageTemplate from "@/components/templates/LegalPageTemplate";

const sections = [
  { title: "1. Applications for Loans", content: "All loan application forms include necessary information that affects the interest of the borrower. We provide acknowledgement for receipt of all loan applications and indicate expected timeline for disposal." },
  { title: "2. Loan Appraisal and Terms", content: "We convey in writing to the borrower the amount of loan sanctioned along with terms and conditions including annualised rate of interest. The sanction letter clearly states the penal charges (a flat, non-capitalised amount — not penal interest) applicable for late repayment, per RBI's penal-charges directive effective 1 April 2024." },
  { title: "3. Disbursement of Loans", content: "We disburse loans within the timeline mentioned in the sanction letter. All disbursements are made directly to the borrower's bank account. Any changes in terms are communicated before disbursement." },
  { title: "4. Post-Disbursement Supervision", content: "We do not interfere in the affairs of the borrower except for the purposes provided in the loan agreement. We do not engage in any form of harassment for recovery of loans." },
  { title: "5. Interest Rate and Charges", content: "The rate of interest and the approach for gradation of risks is made available on our website. We do not charge interest for periods when the loan amount has not been disbursed." },
  { title: "6. Recovery", content: "We follow fair practices in recovery of loans. We do not resort to undue harassment, intimidation, or unnecessary interference. Recovery agents are trained to follow ethical practices." },
  { title: "7. General Principles", content: "We train staff adequately on Fair Practices Code. We ensure transparency in all dealings with customers and do not discriminate on grounds of religion, caste, gender, or marital status." },
  { title: "8. Technology and Automated Processes", content: "Our bureau-assisted underwriting uses technology to support — not replace — human credit decisions. All credit decisions are subject to review and final approval by an authorised officer. We regularly review our processes for fairness and accuracy." },
  { title: "9. Regulatory Compliance", content: "This Fair Practice Code is in compliance with RBI Master Direction DNBR.PD.008/03.10.119/2016-17 and all subsequent amendments." },
];

const FairPracticeCode = () => (
  <LegalPageTemplate
    title="Fair Practice Code"
    subtitle="As per RBI Master Direction – NBFC Fair Practices Code Directions"
    sections={sections}
  />
);

export default FairPracticeCode;
