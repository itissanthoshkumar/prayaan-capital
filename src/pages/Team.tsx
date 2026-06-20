import HeroIllustration from "@/components/HeroIllustration";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Linkedin, Brain, Sparkles } from "lucide-react";
import AIFloatingElements, { AIPulse } from "@/components/AIFloatingElements";

const leadership = [
  {
    name: "Rangarajan Krishnan",
    role: "Promoter & Managing Director",
    bio: "Finance professional with over 20 years of experience across Five Star Business Finance (Joint MD & CEO), Standard Chartered Bank, HDFC Bank, International Finance Corporation and Spark Capital. Expertise spans business, collections, technology, operations, credit and legal, across corporate banking, mid-market and investment banking.",
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
    bio: "21+ years in MSME markets across Credit Policy, Underwriting, Collections, Fraud Control, Operations, Sales and P&L. Helped set up the MSME vertical at RBL Bank and built the Business Correspondent model at Swadhaar Finserve. Earlier at Fullerton India, Sahayata Microfinance and Vistaar Financial Services.",
    linkedin: "#",
    tint: "bg-gradient-lavender",
  },
  {
    name: "Ravi Shankar Venkataraman Ganapathy Agraharam (Mr. GV)",
    role: "Nominee Director",
    bio: "Advisor to Peak XV Partners on technology and non-technology investments, and a board member across Alaan, Huspy, Lean, Eruditus, Finova, HomeLane, K12, Rebel Foods, Rupeek and Plum. Formerly with McKinsey & Company and Wipro. Recipient of the Economic Times Midas Touch award (2020) and IIM Ahmedabad Young Alumni Achiever (2019-20). MBA (IIM Ahmedabad), BE Computer Science (NIT Trichy).",
    linkedin: "#",
    tint: "bg-gradient-sunset",
  },
  {
    name: "Sathya Ganesh T",
    role: "Chief Executive Officer",
    bio: "28+ years in BFSI, including 23+ in banking and NBFCs, scaling businesses and driving digital innovation. Deep expertise in Housing Finance, Loan Against Property and Affordable Housing. Former Chief Business Officer at Five Star Business Finance; earlier with ICICI Bank, Cholamandalam, Equitas and Shriram Housing. Postgraduate in Commerce (University of Madras) and MBA in Banking & Finance (Symbiosis, Pune).",
    linkedin: "#",
    tint: "bg-gradient-coral",
  },
  {
    name: "Apparswamy Subramanian",
    role: "Chief Financial Officer",
    bio: "Co-founder with 25+ years in corporate banking, treasury and capital markets. Former Group Treasury head at Sanmar Group, managing a USD 1.5B borrowing book. Earlier with Deutsche Bank, HSBC, RBL Bank and HDFC Bank. A Chartered Accountant focused on capital markets and structured finance.",
    linkedin: "#",
    tint: "bg-gradient-mint",
  },
  {
    name: "Ramprashanth Ganesan",
    role: "Chief Operating Officer",
    bio: "Co-founder with 16+ years in investment banking, fintech and financial services. Former Chief Strategy Officer at IppoPay, and a director at Spark Capital for over a decade leading Fintech & Financial Services investment banking, raising USD 1.5B+ in growth equity. A Chartered Accountant passionate about lending, technology and AI in finance.",
    linkedin: "#",
    tint: "bg-gradient-lavender",
  },
  {
    name: "Akash S. Chelvam",
    role: "Chief Human Resource Officer",
    bio: "Co-founder with 21+ years in Banking and Insurance and deep HR and Learning & Development expertise. At RBL Bank, led Talent Acquisition, Business Partnering and the Small Business Banking setup, and served as Head - HR at RBL Finserve. At Prayaan, leads HR, L&D, Administration, Operations, Telecalling and IT Infrastructure.",
    linkedin: "#",
    tint: "bg-gradient-sunset",
  },
  {
    name: "M. B. Srinivasa Rao",
    role: "Chief Strategy Officer",
    bio: "22+ years in investment banking and corporate finance, building client relationships and executing complex transactions. Former Executive Director - Investment Banking at Spark Capital Advisors; earlier Director - Corporate & Institutional Banking at Standard Chartered Bank, and with HDFC Bank. An MBA Finance gold medalist.",
    linkedin: "#",
    tint: "bg-gradient-coral",
  },
  {
    name: "Venkatesh B",
    role: "Deputy CFO",
    bio: "Chartered Accountant with 13+ years in the NBFC sector across financial reporting, treasury, regulatory compliance and due diligence. Former head of Treasury and Financial Reporting at Five Star Business Finance, supporting its IPO. Earlier with Equitas and PwC Deals. CA and Company Secretary; INSEAD Blue Ocean Strategy alumnus.",
    linkedin: "#",
    tint: "bg-gradient-mint",
  },
  {
    name: "Harish R",
    role: "Chief Technology Officer",
    bio: "Technology leader with deep banking, lending and insurance expertise, driving digital transformation and core-platform modernization through scalable, secure, API-first architectures. Skilled across core banking, lending platforms, open banking, AI/ML and enterprise integration, with a focus on customer experience and governance.",
    linkedin: "#",
    tint: "bg-gradient-lavender",
  },
  {
    name: "Atul Prakash",
    role: "Chief Risk Officer",
    bio: "23+ years in retail and commercial lending across banks, NBFCs and fintech, covering credit policy, underwriting, portfolio strategy, analytics and governance. Former Head - Retail Lending at Vastu Housing Finance; earlier with Standard Chartered Bank and ICICI Bank. Founder of Skill Junction and ValuCircles. Postgraduate in management (Chetana's R.K. Institute, Mumbai).",
    linkedin: "#",
    tint: "bg-gradient-sunset",
  },
  {
    name: "R. S. Bharath",
    role: "Head - Legal",
    bio: "Law graduate with 15+ years in banking and NBFC legal, covering business legal, legal strategy, compliance, risk management and recovery frameworks. Experience across Five Star Business Finance, Equitas Small Finance Bank, Axis Bank, HDFC Bank and IndusInd Bank.",
    linkedin: "#",
    tint: "bg-gradient-coral",
  },
];

const advisors = [
  { name: "RBI Registered NBFC", title: "Certificate of Registration granted 6 June 2019" },
  { name: "Headquartered in Chennai", title: "Santhome High Road, Tamil Nadu" },
  { name: "MSME Focus", title: "Secured business loans for small enterprises" },
];

// Official headshots (public/team). People without a genuine photo fall back to initials.
const photos: Record<string, string> = {
  "Rangarajan Krishnan": "/team/rangarajan-krishnan.png",
  "Jayalakshmi Rangarajan": "/team/jayalakshmi-rangarajan.png",
  "G. Madhan Mohan": "/team/madhan-mohan.png",
  "Ravi Shankar Venkataraman Ganapathy Agraharam (Mr. GV)": "/team/gv.png",
  "Sathya Ganesh T": "/team/sathya-ganesh.webp",
  "Ramprashanth Ganesan": "/team/ramprashanth-ganesan.webp",
  "Akash S. Chelvam": "/team/akash-chelvam.png",
  "M. B. Srinivasa Rao": "/team/srinivasa-rao.webp",
  "Venkatesh B": "/team/venkatesh-b.webp",
  "Harish R": "/team/harish-r.webp",
  "R. S. Bharath": "/team/rs-bharath.webp",
};

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
              Board & <span className="text-gradient-coral">Leadership</span>
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

      {/* quick facts */}
      <section className="py-6 md:py-8 bg-section">
        <div className="container mx-auto px-5">
          <div className="clay-surface max-w-3xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center">
            <span className="font-body text-xs md:text-sm font-semibold text-foreground">Est. 2018</span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="font-body text-xs md:text-sm font-semibold text-foreground">RBI-registered NBFC</span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="font-body text-xs md:text-sm font-semibold text-foreground">Chennai HQ</span>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 md:mb-14">
            <h2 className="font-display text-xl md:text-3xl font-bold text-foreground">Board of Directors & Management</h2>
          </motion.div>
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {leadership.map((person) => (
              <motion.div
                key={person.name}
                variants={cardAnim}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="group relative clay-surface p-6 md:p-7 clay-press"
              >
                {photos[person.name] ? (
                  <img
                    src={photos[person.name]}
                    alt={person.name}
                    loading="lazy"
                    className="w-16 h-16 rounded-2xl object-cover shadow-clay-sm mb-5"
                  />
                ) : (
                  <div className={`w-16 h-16 rounded-2xl ${person.tint} shadow-clay-sm flex items-center justify-center mb-5`}>
                    <span className="font-display font-bold text-lg text-white">
                      {person.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                )}
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
