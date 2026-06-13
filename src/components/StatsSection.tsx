import { motion } from "framer-motion";

const stats = [
  { value: "₹500Cr+", label: "Loans Disbursed", color: "from-[hsl(24_85%_52%)] to-[hsl(36_90%_58%)]" },
  { value: "10,000+", label: "Families Funded", color: "from-[hsl(170_50%_42%)] to-[hsl(200_55%_50%)]" },
  { value: "48 Hrs", label: "Avg. Decision", color: "from-[hsl(260_40%_55%)] to-[hsl(280_45%_65%)]" },
  { value: "99.2%", label: "Satisfaction", color: "from-[hsl(12_80%_55%)] to-[hsl(24_85%_52%)]" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.95 } as const,
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const StatsSection = () => {
  return (
    <section className="py-14 md:py-20 border-b border-border/60">
      <div className="container mx-auto px-5">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="text-center"
            >
              <div className={`font-mono text-3xl md:text-5xl font-bold mb-1 tracking-tight bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground font-body">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
