import HeroIllustration from "@/components/HeroIllustration";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import AIFloatingElements from "@/components/AIFloatingElements";

const steps = [
  { title: "1. Mandate Registration", content: "Customers are required to register an E-NACH (electronic National Automated Clearing House) mandate with their bank to authorise Prayaan Capital to debit EMIs on the due date each month." },
  { title: "2. Bank Account Details", content: "Provide accurate bank account number, IFSC, account type and account holder name. Mismatch in any of these may lead to mandate rejection by the sponsor bank." },
  { title: "3. Maximum Amount", content: "The mandate amount should be equal to or higher than your monthly EMI. The buffer protects you against bounce charges in case of any future restructuring of the EMI." },
  { title: "4. Mandate Validity", content: "The validity of the mandate must cover the entire loan tenure including a margin of 30 days post the scheduled last EMI date." },
  { title: "5. Sufficient Balance", content: "Customers must ensure adequate balance is maintained in the bank account at least 1 working day before the EMI due date to avoid dishonour and applicable charges." },
  { title: "6. Cancellation", content: "NACH mandates can only be cancelled with prior written approval from Prayaan Capital, after the loan account is fully closed and a No-Dues Certificate is issued." },
  { title: "7. Dishonour Charges", content: "In case the NACH presentation is returned by your bank for any reason (insufficient funds, signature mismatch, account closed, etc.), bounce charges as per the rate-card will be applicable in addition to applicable penal charges (a flat, non-capitalised amount)." },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };
const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const NACHInstructions = () => {
  return (
    <Layout>
      <Seo title="NACH Instructions" description="Instructions for setting up and managing NACH mandates for your Prayaan Capital loan repayments." path="/nach-instructions" />
      <section className="pt-24 pb-8 md:pt-32 md:pb-10 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
            <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
              <FileText size={12} /> Customer Education
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">NACH Instructions</h1>
            <p className="text-xs md:text-sm text-muted-foreground">Guidelines for setting up and managing your E-NACH mandate with Prayaan Capital.</p>
          </motion.div>
            </div>
            <HeroIllustration variant="payments" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-3xl mx-auto space-y-6">
            {steps.map((s) => (
              <motion.div key={s.title} variants={itemAnim} className="clay-surface p-6 md:p-8">
                <h2 className="font-display text-base md:text-xl font-semibold text-foreground mb-3">{s.title}</h2>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{s.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NACHInstructions;
