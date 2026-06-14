import Layout from "@/components/Layout";
import AIFloatingElements from "@/components/AIFloatingElements";
import HeroIllustration from "@/components/HeroIllustration";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Handshake, IndianRupee, Zap, Shield, LayoutDashboard, ArrowRight } from "lucide-react";

const stats = [
  { num: "500+", label: "Active Partners", tint: "bg-gradient-coral" },
  { num: "₹500Cr+", label: "Total Disbursed", tint: "bg-gradient-mint" },
  { num: "1.5%", label: "Commission Rate", tint: "bg-gradient-lavender" },
  { num: "48hr", label: "Payout Cycle", tint: "bg-gradient-sunset" },
];

const benefits = [
  {
    icon: IndianRupee,
    tint: "bg-gradient-coral",
    title: "Industry-best payouts",
    desc: "Earn up to 1.5% commission on every disbursed loan amount — paid within 48 hours of disbursal.",
  },
  {
    icon: LayoutDashboard,
    tint: "bg-gradient-mint",
    title: "Real-time partner portal",
    desc: "Track every lead, sanction and payout live. Full transparency, no chasing your RM for updates.",
  },
  {
    icon: Shield,
    tint: "bg-gradient-lavender",
    title: "RBI-registered NBFC",
    desc: "A regulated, trusted brand your customers can verify — builds confidence at the first meeting.",
  },
  {
    icon: Handshake,
    tint: "bg-gradient-sunset",
    title: "Dedicated Relationship Manager",
    desc: "A personal RM who handles your escalations, product queries and payout questions.",
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const PartnerWithUs = () => (
  <Layout>
    {/* Hero */}
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-hero relative overflow-hidden">
      <AIFloatingElements />
      <div className="container mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
              <Handshake size={12} /> DSA / Channel Partner
            </span>
            <h1 className="font-display text-3xl md:text-6xl font-extrabold text-foreground mt-3 mb-4 leading-tight">
              Partner with <span className="text-gradient-coral">Prayaan Capital</span>
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground max-w-xl font-body leading-relaxed">
              Join 500+ DSAs, connectors and fintech partners who earn with us every month — backed by the fastest-paying NBFC on the block.
            </p>
          </motion.div>

          <HeroIllustration variant="partner" />
        </div>
      </div>
    </section>

    {/* Partner stats strip */}
    <section className="py-6 bg-foreground">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="bg-foreground px-6 py-5 text-center">
              <p className="font-mono text-2xl md:text-3xl font-bold text-white mb-0.5">{s.num}</p>
              <p className="font-body text-xs text-white/50 uppercase tracking-[0.12em]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Benefits + Form */}
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-5 max-w-6xl">
        <div className="grid lg:grid-cols-[1fr_420px] gap-10 items-start">

          {/* Benefits grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div variants={fadeUp} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
<Handshake size={12} /> Why Partner with Us
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
                Everything you need to <span className="text-gradient-coral">close deals faster</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <motion.div key={b.title} variants={fadeUp} className="clay-surface p-5 flex gap-4">
                  <div className={`w-12 h-12 rounded-2xl ${b.tint} shadow-clay-sm flex items-center justify-center shrink-0`}>
                    <b.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-foreground mb-1">{b.title}</p>
                    <p className="font-body text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote strip */}
            <motion.div
              variants={fadeUp}
              className="mt-6 p-5 rounded-2xl bg-primary/5 border border-primary/15 flex gap-4 items-start"
            >
              <span className="text-3xl leading-none font-display font-black text-primary/30">"</span>
              <div>
                <p className="font-body text-sm text-foreground leading-relaxed italic">
                  I referred my first LAP client in week 2 and my commission hit my account the same week of disbursal. No delays, no follow-ups.
                </p>
                <p className="font-body text-xs font-semibold text-primary mt-2">— DSA Partner, Coimbatore</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Application form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="clay-surface p-6 md:p-8 sticky top-24"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-coral shadow-clay-sm flex items-center justify-center">
                <Zap size={18} className="text-white" />
              </div>
              <div>
                <p className="font-body text-[10px] text-muted-foreground uppercase tracking-wide">Get started</p>
                <h2 className="font-display text-base font-bold text-foreground">Apply to partner</h2>
              </div>
            </div>

            <div className="space-y-3">
              <Input placeholder="Full name" className="rounded-2xl" />
              <Input placeholder="Mobile number" className="rounded-2xl" />
              <Input placeholder="City" className="rounded-2xl" />
              <Input placeholder="Firm name (optional)" className="rounded-2xl" />
              <Textarea placeholder="Tell us about your channel — DSA, connector, fintech, broker..." rows={3} className="rounded-2xl resize-none" />
              <Button className="w-full rounded-2xl font-body" size="lg">
                Submit Application <ArrowRight size={15} />
              </Button>
            </div>

            <p className="font-body text-[11px] text-muted-foreground text-center mt-4">
              We review all applications within 1–2 business days
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  </Layout>
);

export default PartnerWithUs;
