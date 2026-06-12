import { motion } from "framer-motion";
import { Brain, TrendingUp, ShieldCheck, Clock, Eye, Fingerprint, Zap } from "lucide-react";

const features = [
  { icon: Brain, title: "Smart Underwriting", desc: "ML models analyse 200+ data points — GST filings, bank statements, bureau scores — to assess risk in minutes.", tint: "bg-gradient-coral", stat: "200+", statLabel: "Data points" },
  { icon: TrendingUp, title: "Dynamic Pricing", desc: "AI-driven rates tailored to your business health. Better financials mean better rates — transparent and fair.", tint: "bg-gradient-mint", stat: "Real-time", statLabel: "Optimization" },
  { icon: ShieldCheck, title: "Fraud Detection", desc: "Real-time anomaly detection powered by deep learning protects every transaction and document submission.", tint: "bg-gradient-lavender", stat: "99.9%", statLabel: "Accuracy" },
  { icon: Clock, title: "Instant Decisioning", desc: "Automated workflows cut processing from weeks to hours. Get your sanction letter the same day.", tint: "bg-gradient-sunset", stat: "<24h", statLabel: "Decision time" },
  { icon: Eye, title: "Document Intelligence", desc: "OCR and NLP-powered processing extracts and verifies KYC, financials, and property documents automatically.", tint: "bg-gradient-mint", stat: "Auto", statLabel: "Extraction" },
  { icon: Fingerprint, title: "Digital KYC", desc: "Aadhaar e-KYC, Video KYC, and PAN verification — complete identity verification without visiting a branch.", tint: "bg-gradient-coral", stat: "Zero", statLabel: "Branch visits" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const AISection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden bg-section">
      {/* Soft pastel ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-coral opacity-20 blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-mint opacity-20 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] rounded-full bg-gradient-lavender opacity-15 blur-[120px]" />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-5">
            <Zap size={12} /> AI-Native Platform
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold text-foreground tracking-tight leading-[1.1] mb-4">
            Every Decision,
            <br />
            <span className="text-gradient-coral">Powered by AI</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto font-body leading-relaxed">
            Every layer of Prayaan Capital is infused with intelligence — from onboarding to disbursement.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={cardAnim}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group relative clay-surface p-6 md:p-7 clay-press overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-2xl ${f.tint} shadow-clay-sm flex items-center justify-center`}>
                  <f.icon size={22} className="text-white" strokeWidth={1.8} />
                </div>
                <div className="text-right">
                  <div className="text-lg font-display font-bold text-foreground leading-none">{f.stat}</div>
                  <div className="text-[10px] text-muted-foreground font-body uppercase tracking-wider mt-1">{f.statLabel}</div>
                </div>
              </div>

              <h3 className="font-display text-base md:text-lg font-bold text-foreground mb-2 tracking-tight">
                {f.title}
              </h3>
              <p className="text-xs md:text-[13px] text-muted-foreground leading-relaxed font-body">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AISection;
