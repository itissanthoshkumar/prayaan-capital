import TeamGrowthArt from "@/components/TeamGrowthArt";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles, Landmark, Users2, TrendingUp, Banknote, ShieldCheck } from "lucide-react";
import AIFloatingElements from "@/components/AIFloatingElements";

type Person = { name: string; role: string; bio: string; photo?: string };

const board: Person[] = [
  {
    name: "Rangarajan Krishnan",
    role: "Managing Director",
    photo: "/team/rangarajan-krishnan.png",
    bio: "Rangarajan Krishnan is a finance professional with over 20 years of experience spanning reputed large corporates such as Five Star Business Finance, Standard Chartered Bank, HDFC Bank, International Finance Corporation and Spark Capital. His last assignment was in Five Star Business Finance as their joint Managing Director and CEO. His expertise spans across core operations of the non-bank financial institution including business, collections, technology, operations, credit and legal. Over his years of experience, he has managed portfolios across Corporate Banking, mid-market segment, South East Asia Infrastructure Financing and as an Investment Banker for a variety of deals across fund raising, mergers & acquisitions.",
  },
  {
    name: "Jayalakshmi Rangarajan",
    role: "Director",
    photo: "/team/jayalakshmi-rangarajan.png",
    bio: "Jayalakshmi Rangarajan is a Technology professional with a wide range of experience across software development and consultancy. She brings in key insights into various technology models to enhance productivity and build robust systems. Her experience spans across various companies including Wipro Technologies and Ahaguru Education Technology where she has been instrumental in delivering a variety of global software development projects successfully.",
  },
  {
    name: "G. Madhan Mohan",
    role: "Chief Credit Officer",
    photo: "/team/madhan-mohan.png",
    bio: "Madhan Mohan has over 21 years of extensive work in the MSME markets, having ably managed various roles in Credit Policy, Credit Under-Writing, Collections, Fraud Control, Operations, Sales, P&L, Strategy and invitee member on boards. His true passion lies in lending to improve the lives of individuals and businesses by providing the financial support required at the right time. He has been part of the set up, and built the MSME vertical for RBL Bank. He created the success at Swadhaar Finserve Pvt. Ltd. having driven both business and extensive expansion to build the company as a bench mark model of dedicated Business Correspondent. He has always been at the heart of the Indian MSME market with NBFCs and Banks like Fullerton India Credit Company Ltd., Sahayata Microfinance Pvt. Ltd., Vistaar Financial Services Pvt. Ltd., and successfully transformed businesses to meet new market demand & sustain a profitable trajectory.",
  },
  {
    name: "Ravi Shankar Venkataraman Ganapathy Agraharam (GV)",
    role: "Nominee Director representing Peak XV Partners Investments VIII",
    photo: "/team/gv.png",
    bio: "At Peak XV, GV advises on technology and non-technology investments. He's deeply interested in technology's role in helping drive efficiencies, reduce costs, and improve access in consumer and healthcare markets. He currently serves on the boards of portfolio companies such as Alaan, Huspy, Lean Technologies, Eruditus Learning, Finova Capital, HomeLane, K12 Techno Services, Rebel Foods, Rupeek and Plum Benefits. He has also served as board member/observer of companies like Equitas (NSE: EQUITAS), Indigo Paints (NSE: INDIGOPNTS), India Shelter Finance Corporation (NSE: INDIASHLTR), Manappuram (NSE: MANAPPURAM), Prataap Snacks (NSE: DIAMONDYD), and Via (sold to NASDAQ: EBIX). GV also worked at McKinsey & Company, where he advised senior management of top Indian companies on a variety of issues including business building, channel management and leadership development. He also had a prior stint with Wipro Technologies in their Embedded and Internet Access division.\n\nGV is the recipient of the Midas Touch award by Economic Times Startup Awards 2020 and IIM Ahmedabad's Young Alumni Achiever's Award, 2019-20 in the Corporate Leadership category. He has an MBA from IIM A and holds a BE in Computer Science and Engineering from NIT Trichy.",
  },
];

const management: Person[] = [
  {
    name: "Sathya Ganesh T",
    role: "Chief Executive Officer",
    photo: "/team/sathya-ganesh.webp",
    bio: "Sathya Ganesh T (Sathya) is a dynamic and visionary leader with over 23 years of experience in the BFSI sector and an overall experience of 28 yrs, having led transformational initiatives across banking and NBFCs. He has a proven track record of scaling businesses, driving digital innovation, enhancing profitability, managing large field forces, and consistently delivering strong ROA and ROE performance.\n\nHe possesses deep expertise in Housing Finance, Loan Against Property (LAP), and Affordable Housing, with hands-on experience across key functions including Operations, Credit, Audit, Business Development, and Collections.\n\nPrior to joining Prayaan Capital, Sathya served as the Chief Business Officer at Five Star Business Finance for a decade, where he played a pivotal role in scaling the organization's business and strengthening its market position. Over the course of his career, he has been associated with leading financial institutions such as ICICI Bank, Cholamandalam Finance, Equitas, and Shriram Housing Finance.\n\nHe holds a Postgraduate degree in Commerce from the University of Madras and an MBA in Banking & Finance from Symbiosis, Pune.",
  },
  {
    name: "Apparswamy Subramanian",
    role: "Chief Financial Officer",
    photo: "/team/apparswamy-subramanian.webp",
    bio: "Apparswamy Subramanian (Appar) is the Co-Founder and Chief Financial Officer of Prayaan Capital, bringing over 25 years of diverse experience across corporate banking, treasury, and capital markets. Prior to his current role, he headed the Group Treasury function at the Sanmar Group, a large diversified conglomerate, where he managed a borrowing book of approximately USD 1.5 billion and led strategic initiatives across fundraising, cross-border financing, and private credit, in addition to executing debt capital market transactions.\n\nAppar began his career in corporate banking and went on to hold senior leadership roles at global and domestic financial institutions including Deutsche Bank, HSBC, RBL Bank and HDFC Bank, where he built and scaled corporate banking franchises, led high-impact deal origination and executed several marquee financing transactions. He has also been an entrepreneur and independent financial advisor, working closely with promoters and management teams across sectors, serving in advisory and board roles. A Chartered Accountant by qualification, Appar is deeply passionate about capital markets and structured finance, with a strong track record in building long-term institutional relationships and delivering innovative financing solutions. Outside of work, he is an avid motorcycle enthusiast and actively follows emerging areas such as digital assets and financial technologies.",
  },
  {
    name: "Ramprashanth Ganesan",
    role: "Chief Operating Officer",
    photo: "/team/ramprashanth-ganesan.webp",
    bio: "Ramprashanth Ganesan (Ram) is the Co-Founder and Chief Operating Officer of Prayaan Capital, bringing over 16 years of diverse experience across investment banking, fintech, and financial services. Prior to his current role, he was the Chief Strategy Officer at IppoPay, a venture-backed fintech focused on providing payments and lending solutions to small businesses, where he was responsible for building a high-velocity, high-quality lending book through the Loan Service Provider (LSP) model, designing the lending product construct, onboarding NBFC partners, and scaling distribution across the merchant base.\n\nRam began his career in financial research and went on to spend over a decade at Spark Capital, where he served as Director leading the Fintech and Financial Services investment banking practice. In this role, he was instrumental in raising over USD 1.5 billion of growth equity across financial services, fintech, and other sectors, working with founders and institutional investors through IPOs, pre-IPO rounds, and growth-stage capital transactions. A Chartered Accountant by qualification, Ram is deeply passionate about lending, technology, and the application of AI in financial services, with a strong track record in building institutional businesses and bridging strategy with execution. Outside of work, he is an avid reader of history and philosophy.",
  },
  {
    name: "Akash S Chelvam",
    role: "Chief Human Resource Officer",
    photo: "/team/akash-chelvam.png",
    bio: "Akash Chelvam has an extensive experience of over 21 years in the Banking and Insurance space with a domain expertise in Human Resources and Learning & Development. He has been part of the core teams to setup new geographies and business lines. In his last assignment with RBL Bank he was initially responsible for the Talent Acquisition & Business Partnering for the Agri & Inclusive Banking, taking care of Pan India hiring strategy and execution, also setup Small Business Banking vertical. He has also worked in the Organization Development team, primarily heading the Future Leadership Hiring initiatives for the Bank, along with various other projects spanning Pan India, post which he was seconded to RBL Finserve (erstwhile Swadhaar Finserve) as Head - Human Resources to grow the organization and to develop a robust structure in terms of governance. Having a comprehensive and strategic understanding of Human Resources, business requirements and organizational change he devised and implement coherent HR strategies along with improving internal process & procedures within a demanding environment. For Prayaan, Akash is leading Human Resources, Learning & Development, Administration, Operations, Tele calling and IT Infrastructure.",
  },
  {
    name: "Atul Prakash",
    role: "Chief Risk Officer",
    photo: "/team/atul-prakash.webp",
    bio: "Atul is the Chief Risk Officer of the Company. He is responsible for overall risk management, including credit policy, underwriting, portfolio strategy, risk analytics, and governance. He has 23+ years of experience across retail and commercial lending in banks, NBFCs, and fintech ventures. He holds a post-graduate degree in management from Chetana's R.K. Institute of Management & Research, Mumbai. Previously, he was associated with Vastu Housing Finance as Head of Retail Lending and Digital & Alternate Channels. Earlier, he worked with Standard Chartered Bank and ICICI Bank, and founded Skill Junction and ValuCircles, India's first mortgage marketplace.",
  },
  {
    name: "Harish R",
    role: "Chief Technology Officer",
    photo: "/team/harish-r.webp",
    bio: "Harish R is a seasoned technology leader with extensive experience across banking, lending, and insurance ecosystems. He specializes in driving large-scale digital transformation, modernizing core platforms, and building scalable, secure, and API-first technology architectures that support business growth and operational resilience. He has led modernization initiatives across core systems, digital channels, and enterprise platforms, with a consistent focus on measurable business outcomes.\n\nWith deep expertise in core banking, lending platforms, open banking, AI/ML adoption, and enterprise integration, Harish has successfully delivered initiatives that enhance customer experience, streamline operations, reduce technology debt, and enable data-driven innovation. He is known for aligning technology strategy with business objectives, regulatory requirements, and long-term scalability.\n\nA strong advocate of engineering excellence and governance, Harish has built and led high-performing teams while delivering practical, sustainable technology roadmaps. At Prayaan Capital, he leads the technology vision with a focus on innovation, execution, governance, and sustainable growth.",
  },
  {
    name: "M B Srinivasa Rao",
    role: "Chief Strategy Officer",
    photo: "/team/srinivasa-rao.webp",
    bio: "M. B. Srinivasa Rao is a seasoned investment banking and corporate finance professional with over 22 years of experience across leading financial institutions. He has a strong track record in managing client relationships, executing complex financial transactions, and driving strategic growth initiatives. Prior to joining PCPL, he served as Executive Director - Investment Banking at Spark Capital Advisors, India. In the past he has been associated with prominent institutions such as Standard Chartered Bank (Director - Corporate & Institutional Banking) and HDFC Bank Limited. Srinivasa Rao is a gold medalist and batch topper in MBA (Finance), reflecting his strong academic foundation in the field.",
  },
  {
    name: "Venkatesh B",
    role: "Deputy CFO",
    photo: "/team/venkatesh-b.webp",
    bio: "CA Venkatesh Badrinarayanan is a seasoned strategic finance leader with over 13 years of experience in the NBFC sector, with deep expertise in Financial Reporting, Treasury, Regulatory Compliance, and Due Diligence.\n\nHe previously served as Head of Treasury at Five Star Business Finance Ltd., where he led debt fundraising, liquidity management, and regulatory compliance. Prior to this, he headed the Financial Reporting function for over six years, playing a pivotal role in managing regulatory audits, multiple private equity diligences, building high-performing teams, and establishing robust processes and systems, significantly contributing to its IPO journey. Earlier in his career, he was part of the Treasury team at Equitas and worked in the Deals (Due Diligence) practice at PricewaterhouseCoopers.\n\nA qualified Chartered Accountant and Company Secretary, and an alumnus of INSEAD's Blue Ocean Strategy program, Venkatesh is recognized for his strategic acumen, execution excellence, and ability to build and lead high-performing teams.",
  },
  {
    name: "R.S.Bharath",
    role: "Head Legal",
    photo: "/team/rs-bharath.webp",
    bio: "Bharath is a law graduate and accomplished banking professional with over 15 years of extensive experience across the banking and NBFC sector, specializing in Business Legal, legal strategy, compliance, risk management, and recovery frameworks. Prior to joining Prayaan, he held key leadership roles with reputed institutions including Five Star Business Finance, Equitas Small Finance Bank, Axis Bank, HDFC Bank, and IndusInd Bank.",
  },
];

const facts = [
  { icon: ShieldCheck, label: "RBI-registered NBFC", sub: "CoR granted 6 June 2019" },
  { icon: Banknote, label: "Incorporated 2018", sub: "Chennai, Tamil Nadu" },
  { icon: TrendingUp, label: "₹110 Cr Series A", sub: "Led by Peak XV Partners" },
];

/* Consistent brand accent on every card (kept in sync: same bar + ring) */
const ACCENT = "bg-primary/25";
const initials = (name: string) =>
  name.replace(/\(.*\)/, "").trim().split(/\s+/).map((n) => n[0]).slice(0, 2).join("");

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };
const cardAnim = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const LeaderCard = ({ p, compact }: { p: Person; compact?: boolean }) => {
  const [open, setOpen] = useState(false);
  const avatar = compact ? "w-14 h-14" : "w-[72px] h-[72px]";
  return (
    <motion.div
      variants={cardAnim}
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
      className="group relative clay-surface p-6 md:p-7 clay-press flex flex-col h-full overflow-hidden"
    >
      <div className={`absolute top-0 left-6 right-6 h-[3px] rounded-full ${ACCENT}`} />
      <div className="flex items-center gap-4 mb-4">
        <div className={`shrink-0 rounded-full p-[2.5px] ${ACCENT} shadow-clay-sm`}>
          {p.photo ? (
            <img src={p.photo} alt={p.name} loading="lazy" className={`${avatar} rounded-full object-cover ring-2 ring-card`} />
          ) : (
            <div className={`${avatar} rounded-full bg-card flex items-center justify-center`}>
              <span className="font-display font-bold text-base text-foreground">{initials(p.name)}</span>
            </div>
          )}
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-base md:text-lg font-bold text-foreground leading-snug">{p.name}</h3>
          <span className="inline-block text-[11px] font-semibold text-secondary-foreground bg-secondary px-2.5 py-0.5 rounded-full mt-1.5 leading-tight">
            {p.role}
          </span>
        </div>
      </div>
      <p className={`text-sm text-muted-foreground leading-relaxed whitespace-pre-line ${open ? "" : compact ? "line-clamp-3" : "line-clamp-4"}`}>
        {p.bio}
      </p>
      <button onClick={() => setOpen((o) => !o)} className="self-start mt-3 text-xs font-bold text-primary hover:underline underline-offset-2">
        {open ? "Show less ↑" : "Read more →"}
      </button>
    </motion.div>
  );
};

const founders: { name: string; role: string; photo: string; note: string }[] = [
  {
    name: "Rangarajan Krishnan",
    role: "Promoter & Managing Director",
    photo: "/team/rangarajan-krishnan.png",
    note: "20+ years across leading NBFCs and financial institutions, with deep expertise in scaling lenders to profitability.",
  },
  {
    name: "G. Madhan Mohan",
    role: "Founder",
    photo: "/team/madhan-mohan.png",
    note: "21+ years in the MSME market across credit policy, underwriting, collections and operations.",
  },
  {
    name: "Akash S Chelvam",
    role: "Founder",
    photo: "/team/akash-chelvam.png",
    note: "21+ years across banking and insurance — building teams, geographies and HR institutions.",
  },
];

const FounderCard = ({ f }: { f: (typeof founders)[number] }) => (
  <motion.div
    variants={cardAnim}
    whileHover={{ y: -5, transition: { duration: 0.25 } }}
    className="clay-surface p-7 clay-press flex flex-col items-center text-center h-full"
  >
    <div className={`rounded-full p-[3px] ${ACCENT} shadow-clay-sm mb-4`}>
      <img src={f.photo} alt={f.name} loading="lazy" className="w-24 h-24 rounded-full object-cover ring-2 ring-card" />
    </div>
    <h3 className="font-display text-lg font-bold text-foreground leading-snug">{f.name}</h3>
    <span className="inline-block text-[11px] font-semibold text-primary-foreground bg-primary px-3 py-0.5 rounded-full mt-2 leading-tight">
      {f.role}
    </span>
    <p className="text-sm text-muted-foreground leading-relaxed mt-3">{f.note}</p>
  </motion.div>
);

const About = () => {
  return (
    <Layout>
      {/* Hero — about, story & founders in one section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 lg:gap-12 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
                <Sparkles size={12} /> About Prayaan Capital
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6 leading-tight">
                The people behind the <span className="text-gold-deep">journey</span>
              </h1>
              <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  The word <em>Prayaan</em> meaning Journey was conceptualised by the founders intending to service the complete business needs of its customers and thereby co-travelling with them on their entrepreneurial &ldquo;Journey&rdquo;. The Company is engaged in the business of extending credit to micro and small enterprises, typically the self-employed businesses.
                </p>
                <p>
                  Prayaan Capital Private Limited was incorporated on December 10th 2018, and was granted the NBFC Certificate of Registration on 6th June 2019 for conducting business as a non-deposit taking NBFC with their Registered and Corporate Office in Chennai, Tamil Nadu.
                </p>
              </div>
            </motion.div>
            <TeamGrowthArt />
          </div>

          {/* The people who built Prayaan — within the story */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-8 md:mt-10 mb-7 md:mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body">
              <Users2 size={12} /> The people who built Prayaan
            </span>
          </motion.div>
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-3 gap-5 md:gap-6 max-w-4xl mx-auto">
            {founders.map((f) => (
              <FounderCard key={f.name} f={f} />
            ))}
          </motion.div>

          {/* leadership transition note */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto mt-10 md:mt-12 text-sm md:text-base text-muted-foreground leading-relaxed">
            <p>
              The Company has now transitioned into a high potential institution with <span className="font-semibold text-foreground">Mr. Rangarajan Krishnan</span> taking up the leadership role as the Promoter and Managing Director of the Company, with the existing founders, <span className="font-semibold text-foreground">Madhan Mohan</span> and <span className="font-semibold text-foreground">Akash Chelvam</span> continuing to work as part of the core team. Mr. Rangarajan brings with him a rich experience of leading NBFCs and other Financial Institutions to scale and profitability. This transition brings with it both infusion of capital and fresh expertise that will see the Company through to new heights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-14 md:py-20 bg-background relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
              <Landmark size={12} /> Governance
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">Board of Directors</h2>
          </motion.div>
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
            {board.map((p) => (
              <LeaderCard key={p.name} p={p} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-14 md:py-20 bg-section relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-accent-foreground uppercase tracking-[0.12em] font-body mb-4">
              <Users2 size={12} /> Leadership
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">Management Team</h2>
          </motion.div>
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
            {management.map((p) => (
              <LeaderCard key={p.name} p={p} compact />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Backed by + company facts (interesting items) */}
      <section className="py-14 md:py-20 bg-background relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
              <Sparkles size={12} /> Backed By
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">
              Backed by a <span className="text-gold-deep">mission-aligned</span> partner
            </h2>
          </motion.div>

          {/* Lead investor — Peak XV Partners (standout) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-2xl mx-auto clay-surface p-8 md:p-12 text-center overflow-hidden mb-8"
          >
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-sunset" />
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-coral opacity-10 blur-3xl pointer-events-none" />
            <p className="font-body text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-5">Lead Investor</p>
            <img
              src="/peak-xv-logo.jpg"
              alt="Peak XV Partners"
              className="h-14 md:h-20 w-auto mx-auto"
            />
            <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold font-body">Series A · ₹110 Cr</span>
              <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold">2026</span>
            </div>
          </motion.div>

          {/* Company facts strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="clay-surface max-w-4xl mx-auto px-6 md:px-10 py-6 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 sm:divide-x divide-border/50"
          >
            {facts.map((f) => (
              <div key={f.label} className="flex items-center gap-3 justify-center sm:px-4">
                <span className="w-10 h-10 rounded-xl bg-gradient-coral shadow-clay-sm flex items-center justify-center shrink-0">
                  <f.icon size={18} className="text-white" />
                </span>
                <div>
                  <p className="font-body text-sm font-bold text-foreground leading-tight">{f.label}</p>
                  <p className="font-body text-xs text-muted-foreground">{f.sub}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
