import LegalPageTemplate from "@/components/templates/LegalPageTemplate";
const Page = () => (
  <LegalPageTemplate title="Cookie Policy" sections={[
    { title: "1. What are cookies", content: "Cookies are small text files placed on your device when you visit a website." },
    { title: "2. Categories we use", content: "Strictly necessary, performance/analytics, functional and marketing cookies." },
    { title: "3. Third-party cookies", content: "We may use Google Analytics and similar privacy-respecting tools." },
    { title: "4. Managing cookies", content: "You can disable cookies via your browser settings." },
    { title: "5. Updates", content: "This policy is updated whenever we change the cookies we use." },
  ]} />
);
export default Page;
