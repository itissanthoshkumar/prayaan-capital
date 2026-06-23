import Layout from "@/components/Layout";
import AIFloatingElements from "@/components/AIFloatingElements";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Phone, Mail } from "lucide-react";

const steps = [
  { step: "01", title: "Application review", desc: "Our team reviews your submission within 2 business hours." },
  { step: "02", title: "Relationship manager call", desc: "A dedicated manager calls to collect remaining documents and clarify any details." },
  { step: "03", title: "Disbursal", desc: "On approval, funds are credited directly to your bank account within 48 hours." },
];

const ThankYou = () => {
  const [params] = useSearchParams();
  const appId = params.get("id");

  return (
    <Layout>
      <section className="pt-24 pb-8 md:pt-32 md:pb-10 bg-hero relative overflow-hidden min-h-[60vh] flex items-center">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-mint shadow-clay flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={32} className="text-white" />
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Your application is <span className="text-gradient-coral">submitted!</span>
            </h1>
            {appId && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-clay-sm mb-4">
                <span className="text-xs text-muted-foreground font-body">Application ID:</span>
                <span className="text-xs font-bold text-primary font-body">{appId}</span>
              </div>
            )}
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-body">
              Thank you for applying with Prayaan Capital. We'll be in touch shortly.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-display text-xl md:text-3xl font-bold text-foreground text-center mb-10">
              What happens <span className="text-gradient-coral">next</span>
            </h2>
            <div className="space-y-4">
              {steps.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="clay-surface p-5 md:p-7 flex gap-5 items-start"
                >
                  <span className="font-display text-3xl font-black text-primary/20 leading-none shrink-0">{s.step}</span>
                  <div>
                    <h3 className="font-display text-sm md:text-base font-bold text-foreground mb-1">{s.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground font-body">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="clay-surface p-6 md:p-8 mt-8"
            >
              <h3 className="font-display text-sm font-bold text-foreground mb-4">Need help?</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+916380589898" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
                  <Phone size={14} className="text-primary" /> +91-6380589898
                </a>
                <a href="mailto:customercare@prayaancapital.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
                  <Mail size={14} className="text-primary" /> customercare@prayaancapital.com
                </a>
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Link to="/">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto rounded-full font-body">
                  Back to Home
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto rounded-full font-body">
                  Contact Us <ArrowRight size={15} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ThankYou;
