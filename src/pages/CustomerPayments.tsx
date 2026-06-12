import HeroIllustration from "@/components/HeroIllustration";
import Layout from "@/components/Layout";
import AIFloatingElements from "@/components/AIFloatingElements";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CreditCard, Banknote, RefreshCw, Phone, Mail, Sparkles, ArrowRight } from "lucide-react";

const methods = [
  {
    icon: CreditCard,
    title: "Online Payment Portal",
    desc: "Pay securely using debit/credit card, UPI, or net banking on our customer portal.",
    tint: "bg-gradient-coral",
    cta: { label: "Pay Now", href: "/customer-login" },
  },
  {
    icon: Banknote,
    title: "NEFT / RTGS",
    desc: "Transfer directly from your bank to Prayaan Capital using the account details below.",
    tint: "bg-gradient-mint",
    cta: null,
  },
  {
    icon: RefreshCw,
    title: "Auto-Debit (NACH)",
    desc: "Set up a NACH mandate for automatic EMI deduction on your due date — never miss a payment.",
    tint: "bg-gradient-lavender",
    cta: { label: "NACH Instructions", href: "/nach-instructions" },
  },
];

const bankDetails = [
  { label: "Beneficiary Name", value: "Prayaan Capital Private Limited" },
  { label: "Bank Name", value: "HDFC Bank" },
  { label: "Account Type", value: "Current Account" },
  { label: "Account Number", value: "XXXXXXXXXXXXXXXX (contact us for account details)" },
  { label: "IFSC Code", value: "Contact customercare@prayaancapital.com" },
  { label: "Reference", value: "Your Loan Account Number" },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const CustomerPayments = () => {
  return (
    <Layout>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
            <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
              <Sparkles size={12} /> Payments
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-5 leading-tight">
              Pay your <span className="text-gradient-coral">EMI</span> your way
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Multiple convenient options to repay your loan — online, bank transfer, or automatic debit.
            </p>
          </motion.div>
            </div>
            <HeroIllustration variant="payments" />
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
            className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12"
          >
            {methods.map((m) => (
              <motion.div key={m.title} variants={cardAnim} className="clay-surface p-6 md:p-8 flex flex-col">
                <div className={`w-12 h-12 rounded-2xl ${m.tint} shadow-clay-sm flex items-center justify-center mb-5`}>
                  <m.icon size={22} className="text-white" />
                </div>
                <h3 className="font-display text-sm md:text-base font-bold text-foreground mb-2">{m.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed flex-1">{m.desc}</p>
                {m.cta && (
                  <Link to={m.cta.href} className="mt-5">
                    <Button size="sm" variant="secondary" className="w-full rounded-full text-xs font-body">
                      {m.cta.label} <ArrowRight size={12} />
                    </Button>
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto clay-surface p-6 md:p-10"
          >
            <h2 className="font-display text-lg md:text-2xl font-bold text-foreground mb-6">
              Bank Transfer Details
            </h2>
            <div className="space-y-3">
              {bankDetails.map((row) => (
                <div key={row.label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-2 border-b border-border last:border-0">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide w-40 shrink-0 font-body">{row.label}</span>
                  <span className="text-xs md:text-sm text-foreground font-body">{row.value}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-5 font-body">
              Always quote your loan account number in the payment reference to ensure correct allocation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto mt-6 clay-surface p-5 md:p-7"
          >
            <h3 className="font-display text-sm font-bold text-foreground mb-3">Need payment support?</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+916380589898" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
                <Phone size={14} className="text-primary" /> +91-6380589898
              </a>
              <a href="mailto:customercare@prayaancapital.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
                <Mail size={14} className="text-primary" /> customercare@prayaancapital.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CustomerPayments;
