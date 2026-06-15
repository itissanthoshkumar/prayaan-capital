import HeroIllustration from "@/components/HeroIllustration";
import Layout from "@/components/Layout";
import AIFloatingElements, { AIPulse } from "@/components/AIFloatingElements";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CreditCard, MessageCircle, Calculator, ClipboardList, Phone, HelpCircle, Sparkles } from "lucide-react";

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
  { label: "Downloads", href: "/downloads", icon: ClipboardList },
  { label: "NACH Instructions", href: "/nach-instructions", icon: CreditCard },
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
    </Layout>
  );
};

export default Customer;
