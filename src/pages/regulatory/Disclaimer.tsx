import LegalPageTemplate from "@/components/templates/LegalPageTemplate";
const Page = () => (
  <LegalPageTemplate title="Disclaimer" sections={[
    { title: "Information accuracy", content: "Information on this site is for general guidance only and does not constitute a binding offer or financial advice." },
    { title: "Loan approval", content: "All loans are at the sole discretion of Prayaan Capital and are subject to credit and underwriting policies." },
    { title: "External links", content: "We are not responsible for the content of third-party sites linked from our website." },
    { title: "Trademarks", content: "All trademarks and logos shown belong to their respective owners." },
  ]} />
);
export default Page;
