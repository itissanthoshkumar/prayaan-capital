import { motion } from "framer-motion";

/** Reusable AI-themed floating decoration for page backgrounds */
const AIFloatingElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Neural network nodes */}
      {[
        { top: "8%", left: "5%", delay: 0, size: 6 },
        { top: "15%", right: "8%", delay: 0.5, size: 4 },
        { top: "35%", left: "3%", delay: 1, size: 5 },
        { top: "55%", right: "5%", delay: 1.5, size: 3 },
        { top: "75%", left: "7%", delay: 2, size: 4 },
        { top: "85%", right: "10%", delay: 2.5, size: 5 },
      ].map((node, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/10"
          style={{ top: node.top, left: node.left, right: node.right, width: node.size, height: node.size }}
          animate={{ y: [0, -12, 0], opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: node.delay }}
        />
      ))}

      {/* Connection lines (decorative) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <motion.line
          x1="5%" y1="10%" x2="95%" y2="20%"
          stroke="hsl(var(--primary))" strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.line
          x1="10%" y1="50%" x2="90%" y2="60%"
          stroke="hsl(var(--accent))" strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />
      </svg>

      {/* Ambient glow orbs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[150px]" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-accent/[0.02] rounded-full blur-[120px]" />
    </div>
  );
};

/** Small AI badge for section headers */
export const AIBadge = ({ label = "AI-Powered" }: { label?: string }) => (
  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body">
    <motion.span
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className="inline-block text-[11px]"
    >
      ✦
    </motion.span>
    {label}
  </span>
);

/** Pulsing AI indicator dot */
export const AIPulse = ({ className = "" }: { className?: string }) => (
  <span className={`relative flex h-2 w-2 ${className}`}>
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40" />
    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
  </span>
);

export default AIFloatingElements;
