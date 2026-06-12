import LegalPageTemplate from "@/components/templates/LegalPageTemplate";
const Page = () => (
  <LegalPageTemplate title="CSR Policy" subtitle="As per Section 135 of the Companies Act, 2013" sections={[
    { title: "1. Vision", content: "Empower India's MSMEs and underserved entrepreneurs through financial literacy, skilling and access to credit." },
    { title: "2. Focus areas", content: "Financial literacy for women entrepreneurs, vocational training for MSME workforce, vernacular digital education, disaster relief." },
    { title: "3. CSR Committee", content: "A board-level CSR Committee oversees policy, project approvals and impact reporting." },
    { title: "4. Budget", content: "Minimum 2% of average net profits of the preceding 3 financial years." },
    { title: "5. Implementation", content: "Through registered Section-8 partner organisations and own programmes." },
  ]} />
);
export default Page;
