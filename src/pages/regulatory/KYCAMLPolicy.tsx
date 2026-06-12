import LegalPageTemplate from "@/components/templates/LegalPageTemplate";
const Page = () => (
  <LegalPageTemplate title="KYC & AML Policy" subtitle="Aligned with RBI Master Direction on KYC, 2016" sections={[
    { title: "1. Customer Acceptance Policy", content: "Prayaan Capital does not open accounts in anonymous or fictitious names. Identity is verified through OVDs as defined under the PMLA, 2002." },
    { title: "2. Customer Identification Procedure", content: "We use Aadhaar e-KYC, Digi-Locker, OKYC and video-based CIP for individuals; CIN, GSTIN and beneficial-owner KYC for entities." },
    { title: "3. Risk categorisation", content: "Each customer is classified Low / Medium / High risk based on profile, geography and product." },
    { title: "4. Monitoring of transactions", content: "All transactions are monitored against AML scenarios. STRs and CTRs are filed with FIU-IND as required." },
    { title: "5. Designated Director & Principal Officer", content: "A Designated Director and Principal Officer have been appointed for PMLA reporting." },
    { title: "6. Record retention", content: "All KYC records are preserved for at least 5 years from the closure of the account." },
  ]} />
);
export default Page;
