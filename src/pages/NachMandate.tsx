import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Repeat, Check, Phone, Mail } from "lucide-react";
import AIFloatingElements from "@/components/AIFloatingElements";
import HeroIllustration from "@/components/HeroIllustration";

const benefits = [
  "No need for PDCs while availing of loan facilities.",
  "Simple and hassle-free process for collecting recurring payments.",
  "Enhanced user experience as a result of error-free registration and payment automation.",
  "Avoidance of late fees and penalties due to timely auto-debit of the transaction amount.",
];

const steps = [
  "Connect with the Customer Support team on +91-6380589898, or raise a request through email at customercare@prayaancapital.com.",
  "The Customer Support team will share the eNACH registration link.",
  "Once you click on the link, you will be taken to the E-NACH registration page which shows the details of the loan and the mandate.",
  "Proceed by selecting your bank with either a Debit Card, Net Banking, or Aadhaar mandate to register the mandate.",
  "Once you select the option, your bank page will open up where you will need to enter the details required.",
  "The bank may require you to enter an OTP to complete the registration.",
  "Once you have completed the required steps, your bank will show a confirmation page on successfully registering the mandate.",
  "You will be redirected to the E-NACH portal showing the confirmation page for successful registration.",
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const NachMandate = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-10 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
                  <Repeat size={12} /> Customer Education
                </span>
                <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">NACH Mandate Instructions</h1>
                <p className="text-xs md:text-sm text-muted-foreground max-w-xl">
                  How E-NACH works, its benefits, the registration process, and how to cancel your mandate.
                </p>
              </motion.div>
            </div>
            <HeroIllustration variant="payments" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            {/* E-NACH */}
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">E-NACH</h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
                With E-NACH payment service, you can now easily pay your loan EMIs from your bank account, without the need for paper-based mandates.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                All you need to do is complete a one-time authentication for registration of the mandate with your Net Banking details or debit card, after which all subsequent payments will not require your intervention.
              </p>
            </motion.div>

            {/* Benefits */}
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 md:mt-16">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-5">Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-accent/12 flex items-center justify-center shrink-0 mt-1">
                      <Check size={13} className="text-accent" strokeWidth={3} />
                    </span>
                    <span className="text-sm md:text-base text-muted-foreground leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Registration process — timeline */}
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 md:mt-16">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">Registration process</h2>
              <ol className="relative ml-3 border-l border-border/60 space-y-4">
                {steps.map((s, i) => (
                  <li key={i} className="relative pl-7">
                    <span className="absolute -left-[15px] -top-0.5 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-display font-bold flex items-center justify-center ring-4 ring-background">
                      {i + 1}
                    </span>
                    <p className="text-sm md:text-base text-muted-foreground leading-snug">{s}</p>
                  </li>
                ))}
              </ol>
            </motion.div>

            {/* Cancellation */}
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 md:mt-16">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Loan NACH mandate cancellation</h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                To initiate the deactivation process for your NACH, we kindly request you to reach out to your source bank. Alternatively, you can connect with us during our service hours through:
              </p>
              <div className="mt-5 clay-surface p-5 md:p-6 flex flex-col sm:flex-row gap-5 sm:gap-10">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-accent/12 flex items-center justify-center shrink-0">
                    <Phone size={17} className="text-accent" />
                  </span>
                  <div>
                    <span className="block text-[10px] text-muted-foreground uppercase tracking-wider font-body">Call</span>
                    <a href="tel:+916380589898" className="block text-sm font-display font-bold text-foreground hover:text-primary transition-colors">+91-6380589898</a>
                    <span className="block text-[11px] text-muted-foreground font-body mt-0.5">Mon–Fri · 9:30 AM – 6:30 PM</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-10 h-10 rounded-xl bg-primary/12 flex items-center justify-center shrink-0">
                    <Mail size={17} className="text-[hsl(38_100%_30%)]" />
                  </span>
                  <div className="min-w-0">
                    <span className="block text-[10px] text-muted-foreground uppercase tracking-wider font-body">Email</span>
                    <a href="mailto:customercare@prayaancapital.com" className="block text-sm font-display font-bold text-foreground hover:text-primary transition-colors truncate">customercare@prayaancapital.com</a>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NachMandate;
