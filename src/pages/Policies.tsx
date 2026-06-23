import Layout from "@/components/Layout";
import AIFloatingElements from "@/components/AIFloatingElements";
import HeroIllustration from "@/components/HeroIllustration";
import { motion } from "framer-motion";
import { ScrollText, Recycle, Percent, Scale, Languages, Fingerprint, Users, Megaphone, LucideIcon } from "lucide-react";

const BASE = "https://prayaancapital.com/assets/images/downloads";

const policies: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "E-Waste Management Policy", href: `${BASE}/E-waste%20Management%20policy.pdf`, icon: Recycle },
  { label: "Interest Gradation Policy", href: `${BASE}/Interest%20Rates%20and%20Gradation%20of%20Risk%20Policy%20V4.0.pdf`, icon: Percent },
  { label: "Fair Practice Code - English", href: `${BASE}/Fair%20Practice%20Code_English_v2.pdf`, icon: Scale },
  { label: "Fair Practice Code - Tamil", href: `${BASE}/Fair%20Practice%20Code_V2.0%20Tamil.pdf`, icon: Languages },
  { label: "Fair Practice Code - Telugu", href: `${BASE}/Fair%20Practice%20Code_V2.0%20Telugu.pdf`, icon: Languages },
  { label: "Group KYC & AML Policy", href: `${BASE}/Group%20AML%20&%20KYC%20Policy_V6.0_.pdf`, icon: Fingerprint },
  { label: "POSH Policy", href: `${BASE}/POSH%20Policy_V4.pdf`, icon: Users },
  { label: "Whistle Blower Policy", href: `${BASE}/Whistle%20Blower%20Policy%20V3.0.pdf`, icon: Megaphone },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };
const itemAnim = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const Policies = () => (
  <Layout>
    {/* Hero */}
    <section className="pt-24 pb-10 md:pt-32 md:pb-14 bg-hero relative overflow-hidden">
      <AIFloatingElements />
      <div className="container mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
              <ScrollText size={12} /> Policies
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-3 leading-tight">
              Policies & <span className="text-gold-deep">Disclosures</span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
              Our published policies and codes. Click any item to open the official PDF.
            </p>
          </motion.div>
          <HeroIllustration variant="legal" />
        </div>
      </div>
    </section>

    {/* Policy list */}
    <section className="py-12 md:py-16 bg-background relative">
      <div className="container mx-auto px-5 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto clay-surface p-2 md:p-3 divide-y divide-border/50"
        >
          {policies.map((p) => (
            <motion.a
              key={p.label}
              variants={itemAnim}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-4 md:px-5 py-4 md:py-5 rounded-2xl hover:bg-muted/60 transition-colors"
            >
              <span className="w-10 h-10 rounded-xl bg-gradient-sunset shadow-clay-sm flex items-center justify-center shrink-0">
                <p.icon size={18} className="text-white" />
              </span>
              <span className="flex-1 font-display text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                {p.label}
              </span>
              <span className="text-xs font-bold text-primary uppercase tracking-wide shrink-0">
                View Policy
              </span>
            </motion.a>
          ))}
        </motion.div>
        <p className="text-center text-xs text-muted-foreground mt-6">
          PDFs open in a new tab. Documents are hosted on prayaancapital.com.
        </p>
      </div>
    </section>
  </Layout>
);

export default Policies;
