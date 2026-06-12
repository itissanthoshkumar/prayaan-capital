import LegalPageTemplate from "@/components/templates/LegalPageTemplate";
const Page = () => (
  <LegalPageTemplate title="Code of Conduct for Recovery Agents" subtitle="As per RBI Fair Practice Code & Outsourcing Guidelines" sections={[
    { title: "1. Identification", content: "Every recovery agent carries a valid identity card and authorisation letter issued by Prayaan Capital." },
    { title: "2. Hours of contact", content: "Borrowers will be contacted only between 8:00 AM and 7:00 PM unless they consent to other timings." },
    { title: "3. Privacy & dignity", content: "Agents shall respect the privacy and dignity of borrowers. No threat or harassment is permitted." },
    { title: "4. Place of contact", content: "Contact will normally be at the borrower's chosen place." },
    { title: "5. Training & certification", content: "All recovery personnel undergo IIBF-certified collection training before deployment." },
    { title: "6. Grievances", content: "Complaints against recovery agents should be sent to gro@prayaancapital.com — investigated within 7 working days." },
  ]} />
);
export default Page;
