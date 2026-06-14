import { motion } from "framer-motion";
import { FileText, CheckCircle, FileCheck, Banknote, Zap } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Provide Details",
    desc: "Share business info, KYC & financials through our digital form. No branch visits needed.",
    time: "15 Min",
    accent: "from-primary to-[hsl(36_90%_58%)]",
    num: "01",
  },
  {
    icon: CheckCircle,
    title: "Get Approval",
    desc: "AI underwriting evaluates 200+ data points and delivers a sanction letter — often same day.",
    time: "Same Day",
    accent: "from-accent to-[hsl(200_55%_50%)]",
    num: "02",
  },
  {
    icon: FileCheck,
    title: "Submit Collateral",
    desc: "Provide property or asset documents. We handle valuation & legal verification swiftly.",
    time: "Day 1–2",
    accent: "from-[hsl(var(--color-lavender))] to-[hsl(var(--color-indigo))]",
    num: "03",
  },
  {
    icon: Banknote,
    title: "Get Your Loan",
    desc: "Funds disbursed directly to your bank account. Own. Unlock. Grow.",
    time: "Day 2",
    accent: "from-[hsl(var(--color-coral))] to-primary",
    num: "04",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const stepAnim = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const ICON_SIZE = 112; // px — keep in sync with w-28 h-28

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-coral opacity-[0.07] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-mint opacity-[0.07] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-5 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-6">
<Zap size={12} /> 48-Hour Process
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold text-foreground tracking-tight leading-[1.1] mb-5">
            Application to Disbursal
            <br />
            <span className="text-gradient-coral">in Just 2 Days</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto font-body leading-relaxed">
            A streamlined 4-step journey powered by AI — no weeks of waiting, no endless paperwork.
          </p>
        </motion.div>

        {/* ── Desktop: horizontal timeline ── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="hidden md:block"
        >
          <div className="relative max-w-5xl mx-auto">

            {/* Connector line — sits at the vertical center of the icon boxes */}
            <div
              className="absolute left-[calc(12.5%+14px)] right-[calc(12.5%+14px)] bg-gradient-to-r from-primary/25 via-accent/25 to-[hsl(var(--color-lavender)/0.25)]"
              style={{ top: ICON_SIZE / 2, height: 2 }}
            />

            <div className="grid grid-cols-4 gap-4">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  variants={stepAnim}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon box */}
                  <div className="relative mb-6 z-10">
                    <div
                      className={`w-28 h-28 rounded-[2rem] bg-gradient-to-br ${step.accent} shadow-clay flex items-center justify-center`}
                    >
                      <step.icon size={34} className="text-white" strokeWidth={1.6} />
                    </div>
                    {/* Time badge — below icon, centred */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-card shadow-clay-sm whitespace-nowrap">
                      <span className="font-body text-[10px] font-black text-foreground uppercase tracking-[0.12em]">
                        {step.time}
                      </span>
                    </div>
                  </div>

                  {/* Arrow — between icon and next (absolutely positioned) */}
                  {i < steps.length - 1 && (
                    <div
                      className="absolute hidden lg:flex items-center justify-center"
                      style={{
                        top: ICON_SIZE / 2 - 8,
                        left: `calc(${(i + 1) * 25}% - 8px)`,
                        width: 16,
                        height: 16,
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M2 8h10M8 4l4 4-4 4"
                          stroke="hsl(var(--muted-foreground))"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          opacity="0.35"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Labels */}
                  <div className="mt-3">
                    <span className="font-body text-[11px] font-bold text-muted-foreground/50 tracking-[0.2em] uppercase block mb-2">
                      Step {step.num}
                    </span>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="font-body text-[13px] text-muted-foreground leading-relaxed max-w-[190px] mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Mobile: vertical timeline ── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          aria-hidden="true"
          className="md:hidden relative"
        >
          <div className="absolute left-[1.75rem] top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary/25 via-accent/25 to-[hsl(var(--color-lavender)/0.25)]" />

          <div className="space-y-5">
            {steps.map((step) => (
              <motion.div
                key={step.title}
                variants={stepAnim}
                className="relative flex gap-4 items-start"
              >
                {/* Icon */}
                <div className="shrink-0 relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.accent} shadow-clay-sm flex items-center justify-center`}>
                    <step.icon size={22} className="text-white" strokeWidth={1.6} />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 clay-surface-sm p-4">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div>
                      <span className="font-body text-[10px] font-bold text-muted-foreground/60 tracking-[0.18em] uppercase block mb-0.5">
                        Step {step.num}
                      </span>
                      <h3 className="font-display text-sm font-bold text-foreground">{step.title}</h3>
                    </div>
                    <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-card shadow-clay-sm font-body text-[9px] font-black text-foreground uppercase tracking-wide">
                      {step.time}
                    </span>
                  </div>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;
