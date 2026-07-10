import HeroIllustration from "@/components/HeroIllustration";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import AIFloatingElements, { AIPulse } from "@/components/AIFloatingElements";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CreditCard, MessageCircle, Calculator, ClipboardList, Phone, HelpCircle, Sparkles, GraduationCap, FileText, BookOpen, Languages } from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "Grievance Redressal",
    desc: "Submit a complaint, track its status, and escalate if needed. We resolve in 30 days.",
    href: "/grievance-redressal",
    tint: "bg-accent",
  },
  {
    icon: Calculator,
    title: "Calculators",
    desc: "Estimate your EMI, check eligibility, or calculate foreclosure amounts before you call.",
    href: "/calculators/emi",
    tint: "bg-accent",
  },
  {
    icon: ClipboardList,
    title: "Get in Touch",
    desc: "Speak to our team about a new loan or existing account. We're here Monday–Friday, 9:30 AM – 6:30 PM.",
    href: "/contact",
    tint: "bg-accent",
  },
];

const quickLinks = [
  { label: "Contact Support", href: "/contact", icon: Phone },
  { label: "Policies", href: "/policies", icon: ClipboardList },
  { label: "NACH Instructions", href: "/nach-instructions", icon: CreditCard },
];

const education = [
  { label: "Procedure for return of property documents", href: "/assets/images/downloads/Procedure-for-release-of-Property-Documents-in-case-of-Demise-of-Borrower.pdf", icon: FileText },
  { label: "Customer Education Literature - SMA-NPA Classification - English", href: "/assets/images/downloads/customer-education-literature-sma-npa-classification-english.pdf", icon: BookOpen },
  { label: "Customer Education Literature - SMA-NPA Classification - Tamil", href: "/assets/images/downloads/Customer%20Education%20Literature%20-%20SMA-NPA%20Classification%20Tamil.pdf", icon: Languages },
  { label: "Customer Education Literature - SMA-NPA Classification - Telugu", href: "/assets/images/downloads/Customer%20Education%20Literature%20-%20SMA-NPA%20Classification%20Telugu.pdf", icon: Languages },
];

const videos = [
  { title: "CKYC Identifier", src: "/assets/images/CentralKYCRecordsRegistryCustomerAwarenessVideo.webm", type: "video/webm" },
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
      <Seo title="Customer Support" description="Everything existing Prayaan Capital customers need — EMI calculators, NACH instructions, grievance redressal and support contacts." path="/customer" />
      <section className="pt-24 pb-8 md:pt-32 md:pb-10 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
            <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
              <Sparkles size={12} /> For Our Customers
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-5 leading-tight">
              Welcome to your <span className="text-gradient-coral">customer hub</span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Manage your loan, raise a request, get support, or learn how it all works — everything for Prayaan customers, in one place.
            </p>
          </motion.div>
            </div>
            <HeroIllustration variant="customer" />
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
            className="grid sm:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto mb-10"
          >
            {education.map((d) => (
              <motion.a
                key={d.label}
                variants={cardAnim}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative clay-surface p-6 clay-press flex items-start gap-4 overflow-hidden"
              >
                <div className="absolute top-0 left-6 right-6 h-[3px] rounded-full bg-gradient-sunset opacity-80" />
                <span className="w-12 h-12 rounded-2xl bg-gradient-sunset shadow-clay-sm flex items-center justify-center shrink-0">
                  <d.icon size={22} className="text-white" />
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">{d.label}</h3>
                  <span className="inline-block text-xs font-bold text-primary uppercase tracking-wide mt-2">View</span>
                </div>
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
