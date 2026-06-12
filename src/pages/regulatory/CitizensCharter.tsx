import LegalPageTemplate from "@/components/templates/LegalPageTemplate";
const Page = () => (
  <LegalPageTemplate title="Citizen's Charter" subtitle="Our service commitments to customers" sections={[
    { title: "1. Acknowledgement of application", content: "Within 1 working day of receipt." },
    { title: "2. Sanction / decline communication", content: "Within 7 working days of complete documentation." },
    { title: "3. Disbursal", content: "Within 2 working days of signed loan agreement." },
    { title: "4. Statement of account", content: "On request, within 3 working days." },
    { title: "5. NOC after closure", content: "Within 7 working days of full repayment." },
    { title: "6. Grievance acknowledgement", content: "Within 24 hours; resolution within 30 days." },
    { title: "7. Customer rights", content: "Right to fair treatment, transparency, suitability, privacy and grievance redressal as per RBI Charter." },
  ]} />
);
export default Page;
