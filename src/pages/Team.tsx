import HeroIllustration from "@/components/HeroIllustration";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Linkedin, Brain, Sparkles } from "lucide-react";
import AIFloatingElements, { AIPulse } from "@/components/AIFloatingElements";

const leadership = [
  {
    name: "Rangarajan Krishnan",
    role: "Promoter & Managing Director",
    bio: "Finance professional with over 20 years of experience across Five Star Business Finance (Joint MD & CEO), Standard Chartered Bank, HDFC Bank, International Finance Corporation and Spark Capital. Expertise spans business, collections, technology, operations, credit and legal — having managed portfolios across corporate banking, mid-market, South-East Asia infrastructure financing and investment banking.",
    linkedin: "#",
    tint: "bg-gradient-coral",
  },
  {
    name: "Jayalakshmi Rangarajan",
    role: "Director",
    bio: "Technology professional with wide-ranging experience across software development and consultancy, including Wipro Technologies and Ahaguru Education Technology. Brings key insights into technology models that enhance productivity and build robust systems.",
    linkedin: "#",
    tint: "bg-gradient-mint",
  },
  {
    name: "G. Madhan Mohan",
    role: "Chief Credit Officer",
    bio: "21+ years of work in MSME markets across Credit Policy, Underwriting, Collections, Fraud Control, Operations, Sales and Strategy. Helped set up the MSME vertical at RBL Bank and built the Business Correspondent model at Swadhaar Finserve. Earlier at Fullerton India, Sahayata Microfinance and Vistaar Financial Services.",
    linkedin: "#",
    tint: "bg-gradient-lavender",
  },
  {
    name: "Akash S. Chelvam",
    role: "Chief Human Resources Officer",
    bio: "Co-founder and core team member at Prayaan Capital, leading the human resources function and helping shape the company's culture as it scales across India.",
    linkedin: "#",
    tint: "bg-gradient-sunset",
  },
];

const advisors = [
  { name: "RBI Registered NBFC", title: "Certificate of Registration granted 6 June 2019" },
  { name: "Headquartered in Chennai", title: "Santhome High Road, Tamil Nadu" },
  { name: "Mortgage Focus", title: "Loan Against Property & Housing" },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const Team = () => {
  return (
    <Layout>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
            <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
              <Brain size={12} /> Our Team
            </span>
            <h1 className="font-display text-3xl md:text-6xl font-bold text-foreground mt-3 mb-5 leading-tight">
              Board of <span className="text-gradient-coral">Directors</span>
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Decades of NBFC, banking and technology leadership — co-travelling with India's small businesses on their journey.
            </p>
          </motion.div>
            </div>
            <HeroIllustration variant="team" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 md:mb-14">
            <h2 className="font-display text-xl md:text-3xl font-bold text-foreground">Leadership</h2>
          </motion.div>
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {leadership.map((person) => (
              <motion.div
                key={person.name}
                variants={cardAnim}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="group relative clay-surface p-6 md:p-7 clay-press"
              >
                <div className={`w-16 h-16 rounded-2xl ${person.tint} shadow-clay-sm flex items-center justify-center mb-5`}>
                  <span className="font-display font-bold text-lg text-white">
                    {person.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-display text-base md:text-lg font-semibold text-foreground">{person.name}</h3>
                <p className="text-xs font-medium text-primary mb-3">{person.role}</p>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">{person.bio}</p>
                <a href={person.linkedin} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={14} /> LinkedIn
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-section relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-accent-foreground uppercase tracking-[0.12em] font-body mb-5">
              <Sparkles size={12} /> At a Glance
            </span>
            <h2 className="font-display text-xl md:text-3xl font-bold text-foreground">Why Prayaan</h2>
          </motion.div>
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-center gap-x-12 gap-y-6 max-w-3xl mx-auto">
            {advisors.map((advisor) => (
              <motion.div key={advisor.name} variants={cardAnim} className="flex items-center gap-3.5">
                <span className="w-11 h-11 rounded-2xl bg-gradient-mint shadow-clay-sm flex items-center justify-center shrink-0">
                  <AIPulse />
                </span>
                <div className="text-left">
                  <h3 className="font-display text-sm font-semibold text-foreground leading-tight">{advisor.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{advisor.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
