import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ArrowLeft, ArrowRight, Brain, Sparkles } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

import testimonialRajesh from "@/assets/testimonial-rajesh.jpg";
import testimonialMeera from "@/assets/testimonial-meera.jpg";
import testimonialAmit from "@/assets/testimonial-amit.jpg";

const testimonials = [
  {
    name: "Perumal",
    business: "Sri Vaari Auto Spares",
    location: "Salem, Tamil Nadu",
    amount: "Secured Loan",
    product: "Business Loan",
    quote: "I am happy with the response from Prayaan Capital. The loan helped me in expanding my shop and increasing business.",
    rating: 5,
    accent: "from-primary to-[hsl(36_90%_58%)]",
    borderAccent: "border-l-primary",
    growth: "Shop expansion",
    image: testimonialRajesh,
  },
  {
    name: "Kannan",
    business: "K R Thoppu",
    location: "Salem, Tamil Nadu",
    amount: "Machinery",
    product: "Machinery Loan",
    quote: "Our family has been into the weaving business for the last 22 years and we were running with 5 powerlooms. With the help of Prayaan we added one more loom. We thank them for their effort to help us with our livelihood.",
    rating: 5,
    accent: "from-accent to-[hsl(200_55%_50%)]",
    borderAccent: "border-l-accent",
    growth: "+1 powerloom",
    image: testimonialAmit,
  },
  {
    name: "Meera Krishnan",
    business: "Spice Route Traders",
    location: "Kochi, Kerala",
    amount: "Working Capital",
    product: "Business Loan",
    quote: "Seasonal demand spikes used to disrupt our cash flow. Prayaan understood our business cycle and structured the right repayment plan with door-step service.",
    rating: 5,
    accent: "from-[hsl(var(--color-lavender))] to-[hsl(var(--color-indigo))]",
    borderAccent: "border-l-[hsl(var(--color-lavender))]",
    growth: "Stable cash flow",
    image: testimonialMeera,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0, scale: 0.95 }),
  };

  return (
    <section className="py-20 md:py-32 bg-section relative overflow-hidden">
      {/* Soft pastel blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-gradient-coral opacity-15 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-gradient-mint opacity-15 rounded-full blur-[100px]" />
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
            <Brain size={12} /> AI-Powered Success Stories
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold text-foreground tracking-tight leading-[1.1] mb-4">
            MSMEs Growing with
            <br />
            <span className="text-gradient-coral">Prayaan Capital</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto font-body leading-relaxed">
            Real businesses, real growth — powered by Prayaan Capital's AI-driven lending.
          </p>
        </motion.div>

        {/* Main testimonial card */}
        <div className="max-w-5xl mx-auto">
          <div className="relative min-h-[380px] md:min-h-[300px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group relative clay-surface p-6 md:p-10"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                  {/* Photo + Info */}
                  <div className="flex gap-4 md:gap-6 flex-1">
                    {/* Avatar photo */}
                    <div className="shrink-0">
                      <div className={`w-20 h-20 md:w-28 md:h-28 rounded-3xl overflow-hidden shadow-clay relative`}>
                        <img
                          src={t.image}
                          alt={`${t.name} - ${t.business}, Prayaan Capital customer`}
                          className="w-full h-full object-cover"
                        />
                        {/* AI verified badge */}
                        <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-gradient-coral shadow-clay-sm flex items-center justify-center">
                          <Sparkles size={11} className="text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      {/* Quote */}
                      <Quote size={28} className="text-primary/30 mb-3" />
                      <p className="text-sm md:text-base text-foreground leading-relaxed font-body mb-4 italic">
                        "{t.quote}"
                      </p>

                      {/* Stars */}
                      <div className="flex gap-1 mb-3">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} size={14} className="text-primary fill-primary" />
                        ))}
                      </div>

                      <div>
                        <h4 className="font-display text-base font-bold text-foreground">{t.name}</h4>
                        <p className="text-xs text-muted-foreground font-body">{t.business} • {t.location}</p>
                      </div>
                    </div>
                  </div>

                  {/* Stats sidebar */}
                  <div className="md:w-48 shrink-0 flex md:flex-col gap-3">
                    <div className="flex-1 bg-gradient-coral shadow-clay-sm rounded-2xl p-4 text-center">
                      <div className="text-2xl font-display font-bold text-white">{t.amount}</div>
                      <div className="text-[10px] text-white/85 uppercase tracking-wider font-body mt-1">Loan Amount</div>
                    </div>
                    <div className="flex-1 bg-gradient-mint shadow-clay-sm rounded-2xl p-4 text-center">
                      <div className="text-xs font-display font-bold text-white">{t.product}</div>
                      <div className="text-[10px] text-white/85 uppercase tracking-wider font-body mt-1">Product</div>
                    </div>
                    <div className="flex-1 bg-gradient-lavender shadow-clay-sm rounded-2xl p-4 text-center">
                      <div className="text-xs font-display font-bold text-white">{t.growth}</div>
                      <div className="text-[10px] text-white/85 uppercase tracking-wider font-body mt-1">Impact</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-2xl clay-surface-sm clay-press flex items-center justify-center"
              aria-label="Previous"
            >
              <ArrowLeft size={16} className="text-foreground" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-gradient-coral shadow-clay-sm" : "w-2 bg-muted hover:bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-2xl clay-surface-sm clay-press flex items-center justify-center"
              aria-label="Next"
            >
              <ArrowRight size={16} className="text-foreground" />
            </button>
          </div>
        </div>

        {/* Floating MSME faces collage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex items-center justify-center gap-3"
        >
          <div className="flex -space-x-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-background shadow-md"
                whileHover={{ scale: 1.2, zIndex: 10 }}
              >
                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
          <div className="ml-2">
            <p className="text-xs font-display font-bold text-foreground">10,000+ MSMEs</p>
            <p className="text-[10px] text-muted-foreground font-body">trust Prayaan Capital</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
