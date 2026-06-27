import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Soft pastel orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-coral opacity-15 blur-[120px]" />
        <div className="absolute top-10 right-10 w-[300px] h-[300px] rounded-full bg-gradient-mint opacity-15 blur-[100px]" />
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-gradient-lavender opacity-15 blur-[100px]" />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="max-w-3xl mx-auto"
        >
          <div className="clay-surface p-8 md:p-14 text-center">
            <h2 className="font-display text-2xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
              Ready to{" "}
              <span className="text-gradient-coral">expand your business</span>?
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground mb-3 font-body">
              Join the businesses that trust Prayaan Capital to power their next move.
            </p>
            <p className="text-xs md:text-sm text-muted-foreground mb-8 md:mb-10 max-w-lg mx-auto font-body">
              Working capital, expansion, machinery or a new outlet — secured business loans from ₹5L to ₹30L, backed by the property you own.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Button size="lg" variant="default" className="text-sm px-8 font-body" asChild>
                <Link to="/contact">Get in Touch <ArrowRight size={15} /></Link>
              </Button>
              <Button variant="secondary" size="lg" className="text-sm px-8 font-body" asChild>
                <Link to="/contact"><Phone size={15} /> Talk to an Advisor</Link>
              </Button>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-[10px] md:text-xs text-muted-foreground mt-6 font-body"
            >
              No credit score impact · 100% digital · RBI registered NBFC
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
