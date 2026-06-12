import Layout from "@/components/Layout";
import AIFloatingElements from "@/components/AIFloatingElements";
import HeroIllustration from "@/components/HeroIllustration";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, CheckCircle, FileCheck, Banknote, Phone, ArrowRight } from "lucide-react";
import ProcessSteps from "@/components/ProcessSteps";
import type { ProcessStep } from "@/components/ProcessSteps";

const steps: ProcessStep[] = [
  {
    icon: FileText,
    title: "Share Your Details",
    desc: "Fill our digital form with KYC, property information and bank statements. No branch visit required — takes under 15 minutes.",
    badge: "15 Min",
    num: "01",
    accent: "from-primary to-[hsl(36_90%_58%)]",
  },
  {
    icon: CheckCircle,
    title: "AI Evaluation",
    desc: "Our underwriting model evaluates 200+ data points — property value, bank flow, GST filings — and issues a sanction letter, often same day.",
    badge: "Same Day",
    num: "02",
    accent: "from-accent to-[hsl(200_55%_50%)]",
  },
  {
    icon: FileCheck,
    title: "Property Verification",
    desc: "Submit your title deed and property documents. Our field team handles legal and technical valuation within 24–48 hours.",
    badge: "Day 1–2",
    num: "03",
    accent: "from-[hsl(var(--color-lavender))] to-[hsl(var(--color-indigo))]",
  },
  {
    icon: Banknote,
    title: "Get Your Loan",
    desc: "Sign digitally via Aadhaar e-sign. Funds are credited directly to your bank account. Own. Unlock. Grow.",
    badge: "Day 2",
    num: "04",
    accent: "from-[hsl(var(--color-coral))] to-primary",
  },
];

const HowToApply = () => (
  <Layout>
    {/* Hero */}
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-hero relative overflow-hidden">
      <AIFloatingElements />
      <div className="container mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
              ⚡ 48-Hour Process
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mt-3 mb-4 leading-tight max-w-2xl">
              How to Apply for a{" "}
              <span className="text-gradient-coral">Mortgage Loan</span>
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground max-w-xl font-body leading-relaxed mb-8">
              From first click to funded account — our 4-step process is designed to be fast, digital, and doorstep-friendly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="default" size="lg" asChild>
                <Link to="/eligibility">
                  Start My Application <ArrowRight size={15} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+916380589898">
                  <Phone size={15} /> Call Us First
                </a>
              </Button>
            </div>
          </motion.div>

          <HeroIllustration variant="apply" />
        </div>
      </div>
    </section>

    {/* Step Flow */}
    <ProcessSteps
      steps={steps}
      bg="bg-background"
    />

    {/* What you need section */}
    <section className="py-12 md:py-20 bg-section">
      <div className="container mx-auto px-5 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
            📋 Documents Needed
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground">
            Keep these ready before you start
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {[
            ["KYC", ["PAN & Aadhaar of owner / directors", "Address proof"]],
            ["Property", ["Original title deed & chain documents", "Property tax receipt & approved plan", "Encumbrance certificate"]],
            ["Financial", ["Bank statements – last 12 months", "ITR & financials – last 2 years"]],
            ["Business", ["GST or Udyam registration", "Business proof (Shop Act / licence)"]],
          ].map(([category, items]) => (
            <motion.div
              key={category as string}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="clay-surface p-5"
            >
              <p className="font-body text-[11px] font-bold text-primary uppercase tracking-[0.14em] mb-3">
                {category as string}
              </p>
              <ul className="space-y-2">
                {(items as string[]).map((item) => (
                  <li key={item} className="flex items-start gap-2 font-body text-sm text-foreground">
                    <CheckCircle size={14} className="text-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-10"
        >
          <Button variant="default" size="lg" asChild>
            <Link to="/eligibility">
              Check My Eligibility <ArrowRight size={15} />
            </Link>
          </Button>
          <p className="font-body text-xs text-muted-foreground mt-3">
            Takes 2 minutes · No credit score impact · 100% confidential
          </p>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default HowToApply;
