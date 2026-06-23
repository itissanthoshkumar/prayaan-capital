import HeroIllustration from "@/components/HeroIllustration";
import Layout from "@/components/Layout";
import AIFloatingElements, { AIPulse } from "@/components/AIFloatingElements";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CreditCard, MessageCircle, Calculator, ClipboardList, Phone, HelpCircle, Sparkles, GraduationCap, FileText, BookOpen, Languages } from "lucide-react";

const services = [
  {
    icon: CreditCard,
    title: "Payments",
    desc: "Pay your EMI online, via NEFT/RTGS, or set up auto-debit for hassle-free repayment.",
    href: "/customer/payments",
    tint: "bg-gradient-coral",
  },
  {
    icon: MessageCircle,
    title: "Grievance Redressal",
    desc: "Submit a complaint, track its status, and escalate if needed. We resolve in 30 days.",
    href: "/grievance-redressal",
    tint: "bg-gradient-mint",
  },
  {
    icon: Calculator,
    title: "Calculators",
    desc: "Estimate your EMI, check eligibility, or calculate foreclosure amounts before you call.",
    href: "/calculators/emi",
    tint: "bg-gradient-lavender",
  },
  {
    icon: ClipboardList,
    title: "Apply Now",
    desc: "Start a new loan application in minutes. AI pre-qualification with no credit score impact.",
    href: "/eligibility",
    tint: "bg-gradient-sunset",
  },
];

const quickLinks = [
  { label: "FAQ", href: "/faqs", icon: HelpCircle },
  { label: "Contact Support", href: "/contact", icon: Phone },
  { label: "Policies", href: "/policies", icon: ClipboardList },
  { label: "NACH Instructions", href: "/nach-instructions", icon: CreditCard },
];

const education = [
  { label: "Procedure for return of property documents", href: "https://prayaancapital.com/assets/images/downloads/Procedure-for-release-of-Property-Documents-in-case-of-Demise-of-Borrower.pdf", icon: FileText },
  { label: "Customer Education Literature - SMA-NPA Classification - English", href: "https://prayaancapital.com/assets/images/downloads/customer-education-literature-sma-npa-classification-english.pdf", icon: BookOpen },
  { label: "Customer Education Literature - SMA-NPA Classification - Tamil", href: "https://prayaancapital.com/assets/images/downloads/Customer%20Education%20Literature%20-%20SMA-NPA%20Classification%20Tamil.pdf", icon: Languages },
  { label: "Customer Education Literature - SMA-NPA Classification - Telugu", href: "https://prayaancapital.com/assets/images/downloads/Customer%20Education%20Literature%20-%20SMA-NPA%20Classification%20Telugu.pdf", icon: Languages },
];

const videos = [
  { title: "CKYC Identifier", src: "https://prayaancapital.com/assets/images/CentralKYCRecordsRegistryCustomerAwarenessVideo.webm", type: "video/webm" },
  { title: "Registration Process and Modes of Registration in CKYCRR", src: "https://www.ckycindia.in/ckyc/assets/images/CKYCvideoforReportingEntities.mp4", type: "video/mp4" },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const Customer = () => {
  return (
    <Layout>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
            <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
              <Sparkles size={12} /> Customer Support
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-5 leading-tight">
              How can we <span className="text-gradient-coral">help you</span> today?
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Everything you need to manage your loan, make payments, or get support — all in one place.
            </p>
          </motion.div>
            </div>
            <HeroIllustration variant="customer" />
          </div>
        </div>
      </section>

      {/* quick facts */}
      <section className="py-6 md:py-8 bg-section">
        <div className="container mx-auto px-5">
          <div className="clay-surface max-w-3xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center">
            <span className="font-body text-xs md:text-sm font-semibold text-foreground">Reply in 1 business day</span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="font-body text-xs md:text-sm font-semibold text-foreground">Toll-free 14448</span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="font-body text-xs md:text-sm font-semibold text-foreground">Doorstep service</span>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {services.map((s) => (
              <motion.div key={s.title} variants={cardAnim}>
                <Link to={s.href} className="group block clay-surface p-7 md:p-10 clay-press h-full">
                  <div className={`w-12 h-12 rounded-2xl ${s.tint} shadow-clay-sm flex items-center justify-center mb-5`}>
                    <s.icon size={22} className="text-white" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <AIPulse />
                    <h2 className="font-display text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors">{s.title}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-4xl mx-auto mt-8 clay-surface p-5 md:p-7"
          >
            <h3 className="font-display text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Quick links</h3>
            <div className="flex flex-wrap gap-3">
              {quickLinks.map((q) => (
                <Link
                  key={q.label}
                  to={q.href}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-muted text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors font-body"
                >
                  <q.icon size={12} />
                  {q.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Customer Education & Awareness */}
      <section className="py-16 md:py-24 bg-section relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
              <GraduationCap size={12} /> Awareness
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">Customer Education &amp; Awareness</h2>
          </motion.div>

          {/* Documents */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto clay-surface p-2 md:p-3 divide-y divide-border/50 mb-10"
          >
            {education.map((d) => (
              <motion.a
                key={d.label}
                variants={cardAnim}
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 px-4 md:px-5 py-4 rounded-2xl hover:bg-muted/60 transition-colors"
              >
                <span className="w-10 h-10 rounded-xl bg-gradient-sunset shadow-clay-sm flex items-center justify-center shrink-0">
                  <d.icon size={18} className="text-white" />
                </span>
                <span className="flex-1 font-display text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors">{d.label}</span>
                <span className="text-xs font-bold text-primary uppercase tracking-wide shrink-0">View</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Videos — controls only, never autoplay (load on demand) */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {videos.map((v) => (
              <div key={v.title} className="clay-surface p-4">
                <video controls preload="none" playsInline className="w-full aspect-video rounded-xl bg-black">
                  <source src={v.src} type={v.type} />
                  Your browser does not support the video tag.
                </video>
                <p className="font-display text-sm font-semibold text-foreground mt-3 leading-snug">{v.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Customer;
