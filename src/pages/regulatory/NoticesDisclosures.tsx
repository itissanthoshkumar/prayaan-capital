import LegalPageTemplate from "@/components/templates/LegalPageTemplate";
const Page = () => (
  <LegalPageTemplate title="Notices & Disclosures" subtitle="Statutory disclosures, board composition and shareholding" sections={[
    { title: "Board of Directors", content: "Composition, profiles and committee memberships are published in the latest Annual Report." },
    { title: "Shareholding pattern", content: "Updated quarterly. Latest pattern available under Investor Relations." },
    { title: "Capital adequacy", content: "CRAR maintained well above the regulatory minimum of 15%." },
    { title: "Auditors", content: "Statutory auditors appointed in line with RBI guidelines on rotation." },
    { title: "Public notices", content: "All SARFAESI, possession and auction notices are published in leading newspapers." },
  ]} />
);
export default Page;
