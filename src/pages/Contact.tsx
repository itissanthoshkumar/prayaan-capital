import HeroIllustration from "@/components/HeroIllustration";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, Clock, MessageSquare,
  Users, ArrowRight, CheckCircle, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AIFloatingElements from "@/components/AIFloatingElements";

/* ─── Shared animation variants (matches About / WhyPrayaan) ─── */
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

/* ─── Clay input style ─── */
const input =
  "w-full px-4 py-3 rounded-2xl bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition-all shadow-clay-inset border-0 font-body";

/* ─── Channel cards data ─── */
const channels = [
  {
    icon: CheckCircle,
    tint: "bg-gradient-coral",
    label: "Apply for a Loan",
    body: "Loan Against Property and housing loans from ₹10L to ₹1Cr, underwritten by AI. Decisions typically within 48 hours of complete documentation.",
    ctaLabel: "Check Eligibility",
    ctaTo: "/eligibility",
    ctaHref: undefined as string | undefined,
    secondary: undefined as { label: string; href: string } | undefined,
  },
  {
    icon: Phone,
    tint: "bg-gradient-mint",
    label: "Talk to Us",
    body: "Reach our customer care team for queries on products, accounts and repayments. Monday – Friday, 9:30 AM – 6:30 PM.",
    ctaLabel: "+91-6380589898",
    ctaTo: undefined as string | undefined,
    ctaHref: "tel:+916380589898",
    secondary: {
      label: "customercare@prayaancapital.com",
      href: "mailto:customercare@prayaancapital.com",
    },
  },
  {
    icon: Users,
    tint: "bg-gradient-lavender",
    label: "Raise a Complaint",
    body: "Every grievance is resolved fairly and on time, per the RBI Fair Practice Code. Four-level escalation path available.",
    ctaLabel: "View Escalation Path",
    ctaTo: "/grievance-redressal",
    ctaHref: undefined as string | undefined,
    secondary: undefined as { label: string; href: string } | undefined,
  },
];

/* ─── Office detail rows ─── */
const officeDetails = [
  {
    icon: MapPin,
    tint: "bg-gradient-lavender",
    label: "Corporate Office",
    primary: "No. 40/97, Minerva Building, 2nd Floor",
    secondary: "Santhome High Road, Chennai – 600028",
    action: {
      label: "Get directions →",
      href: "https://maps.google.com/?q=Minerva+Building,+Santhome+High+Road,+Chennai+600028",
      external: true,
    },
  },
  {
    icon: Mail,
    tint: "bg-gradient-coral",
    label: "Email",
    primary: "customercare@prayaancapital.com",
    secondary: "info@prayaancapital.com",
    action: {
      label: "Send email →",
      href: "mailto:customercare@prayaancapital.com",
      external: false,
    },
  },
  {
    icon: Clock,
    tint: "bg-gradient-sunset",
    label: "Office Hours",
    primary: "Monday – Friday",
    secondary: "9:30 AM – 6:30 PM IST",
    action: undefined as { label: string; href: string; external: boolean } | undefined,
  },
];

const Contact = () => (
  <Layout>

    {/* ────────── HERO ────────── */}
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-hero relative overflow-hidden">
      <AIFloatingElements />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
          <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
            <MessageSquare size={12} /> Get in Touch
          </span>
          <h1 className="font-display text-3xl md:text-6xl font-bold text-foreground mt-3 mb-5 leading-tight">
            Let's{" "}
            <span className="text-gradient-coral">talk</span>
          </h1>
          <p className="font-body text-sm md:text-lg text-muted-foreground leading-relaxed">
            Looking to borrow against your property? Question about your loan?
            Want to partner with us? Choose how we can help below.
          </p>
        </motion.div>
          </div>
          <HeroIllustration variant="contact" />
        </div>
      </div>
    </section>

    {/* ────────── THREE CHANNELS ────────── */}
    <section className="py-16 md:py-24 bg-section">
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto"
        >
          {channels.map((ch, i) => (
            <motion.div
              key={ch.label}
              variants={cardAnim}
              whileHover={{ y: -4, transition: { duration: 0.22 } }}
              className="group relative clay-surface p-6 md:p-8 clay-press flex flex-col"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl ${ch.tint} shadow-clay-sm flex items-center justify-center mb-5`}>
                <ch.icon size={22} className="text-white" />
              </div>

              {/* Text */}
              <h2 className="font-display text-lg md:text-xl font-bold text-foreground mb-2">
                {ch.label}
              </h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                {ch.body}
              </p>

              {/* Primary CTA */}
              <div className="space-y-2">
                {ch.ctaTo ? (
                  <Button
                    variant={i === 0 ? "default" : "secondary"}
                    size="sm"
                    className="w-full font-body"
                    asChild
                  >
                    <Link to={ch.ctaTo}>
                      {ch.ctaLabel} <ArrowRight size={13} />
                    </Link>
                  </Button>
                ) : ch.ctaHref ? (
                  <Button variant="secondary" size="sm" className="w-full font-body" asChild>
                    <a href={ch.ctaHref}>{ch.ctaLabel}</a>
                  </Button>
                ) : null}

                {/* Secondary link (email under phone) */}
                {ch.secondary && (
                  <a
                    href={ch.secondary.href}
                    className="block text-center font-body text-xs text-muted-foreground hover:text-primary transition-colors truncate px-2 py-1"
                  >
                    {ch.secondary.label}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ────────── FORM + LOCATION ────────── */}
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <AIFloatingElements />
      <div className="container mx-auto px-4 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
<Mail size={12} /> Send a Message
          </span>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">
            Or write to us directly
          </h2>
          <p className="font-body text-sm text-muted-foreground mt-3 max-w-md mx-auto">
            For partnerships, investor enquiries, media or anything else — we respond within one business day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">

          {/* Left — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative clay-surface p-6 md:p-10"
          >
            {/* Loan nudge */}
            <Link
              to="/eligibility"
              className="flex items-center gap-3 p-3 rounded-2xl bg-muted hover:bg-primary/8 transition-colors mb-6 group/nudge"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-coral shadow-clay-sm flex items-center justify-center shrink-0">
                <CheckCircle size={14} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-body text-xs font-semibold text-foreground">
                  Looking for a property loan?
                </p>
                <p className="font-body text-[11px] text-muted-foreground">
                  Use our eligibility check — get a decision faster
                </p>
              </div>
              <ChevronRight
                size={14}
                className="text-primary shrink-0 group-hover/nudge:translate-x-0.5 transition-transform"
              />
            </Link>

            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-xs font-medium text-foreground mb-1.5 block">
                    Full Name
                  </label>
                  <input type="text" className={input} placeholder="Your name" />
                </div>
                <div>
                  <label className="font-body text-xs font-medium text-foreground mb-1.5 block">
                    Phone Number
                  </label>
                  <input type="tel" className={input} placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>

              <div>
                <label className="font-body text-xs font-medium text-foreground mb-1.5 block">
                  Reason for Contact
                </label>
                <select className={input}>
                  <option value="">Select a topic</option>
                  <option>Partnership / Co-lending</option>
                  <option>Investor Enquiry</option>
                  <option>General Question</option>
                  <option>Media / Press</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="font-body text-xs font-medium text-foreground mb-1.5 block">
                  Message
                </label>
                <textarea
                  rows={5}
                  className={`${input} resize-none`}
                  placeholder="Tell us what you'd like to discuss..."
                />
              </div>

              {/* DPDP Act 2023 — explicit, purpose-specific consent */}
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-border accent-primary"
                />
                <span className="font-body text-[11px] text-muted-foreground leading-relaxed">
                  I consent to Prayaan Capital collecting and processing the personal details I've shared
                  to respond to my enquiry, in line with its{" "}
                  <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>{" "}
                  and the Digital Personal Data Protection Act, 2023.
                </span>
              </label>

              <Button variant="default" size="lg" className="w-full font-body">
                Send Message
              </Button>

              <p className="font-body text-[11px] text-muted-foreground text-center">
                100% confidential · RBI-registered NBFC · No spam, ever
              </p>
            </form>
          </motion.div>

          {/* Right — Map + details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="space-y-5"
          >
            {/* Google Maps */}
            <div className="clay-surface p-2">
              <div className="rounded-[1.25rem] overflow-hidden">
                <iframe
                  title="Prayaan Capital — Minerva Building, Santhome High Road, Chennai"
                  src="https://maps.google.com/maps?q=Minerva+Building,+Santhome+High+Road,+Chennai+600028,+Tamil+Nadu,+India&output=embed&z=16"
                  width="100%"
                  height="270"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Office details */}
            <div className="group relative clay-surface p-6 md:p-7">
              <div className="space-y-5">
                {officeDetails.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div
                      className={`w-12 h-12 rounded-2xl ${item.tint} shadow-clay-sm flex items-center justify-center shrink-0 mt-0.5`}
                    >
                      <item.icon size={18} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-body text-[11px] font-medium text-muted-foreground mb-0.5">
                        {item.label}
                      </p>
                      <p className="font-body text-sm font-semibold text-foreground">
                        {item.primary}
                      </p>
                      <p className="font-body text-xs text-muted-foreground break-all">
                        {item.secondary}
                      </p>
                      {item.action && (
                        <a
                          href={item.action.href}
                          {...(item.action.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="font-body text-xs font-semibold text-primary hover:underline mt-1 inline-block"
                        >
                          {item.action.label}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-border/40 mt-5 pt-5">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-lavender shadow-clay-sm flex items-center justify-center shrink-0">
                    <Users size={18} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-[11px] font-medium text-muted-foreground mb-0.5">
                      Grievance Redressal Officer
                    </p>
                    <p className="font-body text-sm font-semibold text-foreground">
                      Mr. Harish Kumar E, AVP – HR
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-0.5 mt-1">
                      <a
                        href="mailto:gro@prayaancapital.com"
                        className="font-body text-xs text-primary hover:underline"
                      >
                        gro@prayaancapital.com
                      </a>
                      <a
                        href="tel:+919600133756"
                        className="font-body text-xs text-primary hover:underline"
                      >
                        +91-9600133756
                      </a>
                    </div>
                    <Link
                      to="/grievance-redressal"
                      className="inline-flex items-center gap-1 mt-2 font-body text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      Full escalation path <ChevronRight size={11} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>

  </Layout>
);

export default Contact;
