import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, Users, Briefcase, TrendingUp } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

import face1 from "@/assets/pexels-ravikant-5807481.jpg";
import face2 from "@/assets/pexels-himanshu817-14707127.jpg";
import face3 from "@/assets/pexels-saman-films-703617-6060893.jpg";
import face4 from "@/assets/pexels-henry-benjamin-2149128840-30443336.jpg";

// Generic customer faces for the "1,000+ MSMEs" collage — distinct from the testimonial photos
const trustFaces = [face1, face2, face3, face4];

const testimonials = [
  {
    name: "Perumal",
    business: "Sri Vaari Auto Spares",
    location: "Salem, Tamil Nadu",
    product: "Secured Business Loan",
    quote: "I am happy with the response from Prayaan Capital. The loan helped me in expanding my shop & increasing business.",
    rating: 5,
    growth: "Expanded his shop",
    image: "/testimonials/perumal.jpg",
  },
  {
    name: "Kannan",
    business: "Powerloom weaving",
    location: "KR Thoppu, Salem",
    product: "Secured Business Loan",
    quote: "Our family has been into weaving business for the last 22 years & we were running with 5 powerlooms. With the help of Prayaan we added one more loom. We thank them for their effort to help us with our livelihood.",
    rating: 5,
    growth: "Added a powerloom",
    image: "/testimonials/kannan.jpg",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0, scale: 0.95 }),
  };

  return (
    <section className="py-16 md:py-24 bg-section relative overflow-hidden">
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
            <Users size={12} /> Customer Stories
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold text-foreground tracking-tight leading-[1.1] mb-4">
            Businesses we helped
            <br />
            <span className="text-gradient-coral">grow</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto font-body leading-relaxed">
            Real entrepreneurs, real outcomes — secured business loans built for India's MSMEs.
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
                          loading="lazy"
                        />
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
                  <div className="md:w-52 shrink-0 flex md:flex-col gap-3 md:justify-center">
                    <div className="flex-1 md:flex-none flex items-center gap-3 rounded-2xl bg-secondary/60 p-3.5">
                      <span className="w-9 h-9 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                        <Briefcase size={16} className="text-accent" />
                      </span>
                      <div className="min-w-0 text-left">
                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-body">Product</div>
                        <div className="text-[13px] font-display font-bold text-foreground leading-tight">{t.product}</div>
                      </div>
                    </div>
                    <div className="flex-1 md:flex-none flex items-center gap-3 rounded-2xl bg-secondary/60 p-3.5">
                      <span className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                        <TrendingUp size={16} className="text-[hsl(38_100%_30%)]" />
                      </span>
                      <div className="min-w-0 text-left">
                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-body">Impact</div>
                        <div className="text-[13px] font-display font-bold text-foreground leading-tight">{t.growth}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
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
        </div>

        {/* Floating customer faces collage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex items-center justify-center gap-3"
        >
          <div className="flex -space-x-3">
            {trustFaces.map((src, i) => (
              <motion.div
                key={i}
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-background shadow-md"
                whileHover={{ scale: 1.2, zIndex: 10 }}
              >
                <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
            ))}
          </div>
          <div className="ml-2">
            <p className="text-xs font-display font-bold text-foreground">1,000+ MSMEs</p>
            <p className="text-[10px] text-muted-foreground font-body">trust Prayaan Capital</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
