import { motion } from "framer-motion";
import {
  Check, Sparkles, Scale, Phone, Building2, Users, Briefcase, Home,
  IndianRupee, Wallet, Cpu, Newspaper, Quote, User, LucideIcon,
} from "lucide-react";

export type IllustrationVariant =
  | "faq" | "partner" | "apply" | "grievance" | "why"
  | "legal" | "contact" | "about" | "team" | "careers" | "products"
  | "calculator" | "customer" | "payments" | "tech" | "news" | "stories";

/**
 * Clay-style hero illustration: a tilted sheet with themed content,
 * a floating main badge bobbing above it, and two mini accents.
 * Same visual family as the Branch Locator map + pin.
 */

const Sheet = ({ children }: { children: React.ReactNode }) => (
  <div
    className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 w-[290px] h-[180px]"
    style={{ perspective: "900px" }}
  >
    <div
      className="absolute inset-0 rounded-3xl bg-card shadow-clay-lg overflow-hidden"
      style={{ transform: "rotateX(52deg) rotateZ(-10deg)" }}
    >
      {children}
    </div>
  </div>
);

const FloatingBadge = ({ children }: { children: React.ReactNode }) => (
  <>
    {/* shadow on the sheet */}
    <motion.div
      className="absolute left-1/2 top-[60%] -translate-x-1/2 w-14 h-4 rounded-full bg-foreground/25 blur-md"
      animate={{ scale: [1, 0.72, 1], opacity: [0.35, 0.18, 0.35] }}
      transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute left-1/2 top-1 -translate-x-1/2"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="relative drop-shadow-xl">{children}</div>
    </motion.div>
  </>
);

const MiniAccent = ({
  className,
  tint,
  delay,
  shape = "drop",
}: {
  className: string;
  tint: string;
  delay: number;
  shape?: "drop" | "dot";
}) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{ y: [0, -6, 0] }}
    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay }}
  >
    <div
      className={`w-5 h-5 ${tint} shadow-clay-sm`}
      style={
        shape === "drop"
          ? { borderRadius: "50% 50% 50% 0", transform: "rotate(-45deg)" }
          : { borderRadius: "50%" }
      }
    />
  </motion.div>
);

/* Rows of soft bars — used for list/ledger style sheets */
const SheetRows = ({ tints }: { tints: string[] }) => (
  <>
    {tints.map((t, i) => (
      <div key={i} className="absolute left-5 right-5 flex items-center gap-2" style={{ top: 22 + i * 38 }}>
        <span className={`w-3.5 h-3.5 rounded-full ${t} opacity-70 shrink-0`} />
        <span
          className="h-2.5 rounded-full bg-foreground/[0.07]"
          style={{ width: `${72 - i * 14}%` }}
        />
      </div>
    ))}
  </>
);

/* Generic round/square icon badge for the simpler variants */
const IconBadge = ({ Icon, square = false }: { Icon: LucideIcon; square?: boolean }) => (
  <div
    className={`w-[68px] h-[68px] ${square ? "rounded-[1.5rem]" : "rounded-full"} bg-gradient-coral border-4 border-white flex items-center justify-center`}
  >
    <Icon size={28} className="text-white" strokeWidth={2.5} />
  </div>
);

/* Patchwork sheet — soft colour blocks with crossing lanes */
const PatchSheet = () => (
  <>
    <div className="absolute top-4 left-5 w-16 h-11 rounded-xl bg-gradient-mint opacity-50" />
    <div className="absolute top-6 right-6 w-20 h-14 rounded-xl bg-gradient-lavender opacity-40" />
    <div className="absolute bottom-4 left-8 w-14 h-10 rounded-xl bg-gradient-sunset opacity-40" />
    <div className="absolute bottom-6 right-9 w-16 h-11 rounded-xl bg-gradient-coral opacity-30" />
    <div className="absolute inset-x-0 top-1/2 h-3.5 bg-background/95" />
    <div className="absolute inset-y-0 left-1/3 w-3.5 bg-background/95" />
  </>
);

/* Calculator sheet — display bar + keypad */
const KeypadSheet = () => (
  <>
    <div className="absolute top-4 left-5 right-5 h-9 rounded-xl bg-foreground/[0.06] flex items-center justify-end pr-3">
      <span className="font-display text-sm font-bold text-foreground/35">₹ 24,318</span>
    </div>
    <div className="absolute top-[64px] left-5 right-5 bottom-4 grid grid-cols-4 gap-2">
      {Array.from({ length: 8 }).map((_, i) => (
        <span
          key={i}
          className={`rounded-lg ${i === 3 ? "bg-gradient-coral opacity-80" : i === 7 ? "bg-gradient-mint opacity-60" : "bg-foreground/[0.07]"}`}
        />
      ))}
    </div>
  </>
);

const defaultRows = ["bg-gradient-coral", "bg-gradient-mint", "bg-gradient-lavender", "bg-gradient-sunset"];

const variants: Record<IllustrationVariant, { sheet: React.ReactNode; badge: React.ReactNode }> = {
  legal: { sheet: <SheetRows tints={defaultRows} />, badge: <IconBadge Icon={Scale} square /> },
  contact: { sheet: <SheetRows tints={defaultRows} />, badge: <IconBadge Icon={Phone} /> },
  about: { sheet: <PatchSheet />, badge: <IconBadge Icon={Building2} square /> },
  team: { sheet: <SheetRows tints={defaultRows} />, badge: <IconBadge Icon={Users} /> },
  careers: { sheet: <SheetRows tints={defaultRows} />, badge: <IconBadge Icon={Briefcase} square /> },
  products: { sheet: <PatchSheet />, badge: <IconBadge Icon={Home} /> },
  calculator: { sheet: <KeypadSheet />, badge: <IconBadge Icon={IndianRupee} square /> },
  customer: { sheet: <SheetRows tints={defaultRows} />, badge: <IconBadge Icon={User} /> },
  payments: { sheet: <SheetRows tints={defaultRows} />, badge: <IconBadge Icon={Wallet} /> },
  tech: { sheet: <PatchSheet />, badge: <IconBadge Icon={Cpu} square /> },
  news: { sheet: <SheetRows tints={defaultRows} />, badge: <IconBadge Icon={Newspaper} square /> },
  stories: { sheet: <SheetRows tints={defaultRows} />, badge: <IconBadge Icon={Quote} /> },
  /* FAQ — accordion sheet + chat bubble with "?" */
  faq: {
    sheet: <SheetRows tints={["bg-gradient-coral", "bg-gradient-mint", "bg-gradient-lavender", "bg-gradient-sunset"]} />,
    badge: (
      <div className="relative">
        <div className="w-[68px] h-[68px] rounded-[1.5rem] bg-gradient-coral border-4 border-white flex items-center justify-center">
          <span className="font-display text-3xl font-black text-white">?</span>
        </div>
        <div className="absolute -bottom-1.5 left-5 w-4 h-4 bg-gradient-coral rotate-45 rounded-[3px]" />
      </div>
    ),
  },

  /* Partner — ledger sheet with growth bars + ₹ coin */
  partner: {
    sheet: (
      <>
        <SheetRows tints={["bg-gradient-coral", "bg-gradient-mint"]} />
        <div className="absolute bottom-5 right-6 flex items-end gap-1.5">
          <span className="w-3 h-6 rounded-md bg-gradient-mint opacity-60" />
          <span className="w-3 h-10 rounded-md bg-gradient-mint opacity-75" />
          <span className="w-3 h-14 rounded-md bg-gradient-coral opacity-80" />
        </div>
      </>
    ),
    badge: (
      <div className="w-[68px] h-[68px] rounded-full bg-gradient-coral border-4 border-white flex items-center justify-center">
        <div className="absolute inset-2.5 rounded-full border border-dashed border-white/50" />
        <span className="font-display text-2xl font-black text-white">₹</span>
      </div>
    ),
  },

  /* How to apply — form sheet + check badge */
  apply: {
    sheet: (
      <>
        {[0, 1, 2].map((i) => (
          <div key={i} className="absolute left-5 right-5 flex items-center gap-2" style={{ top: 24 + i * 38 }}>
            <span className="w-4 h-4 rounded-md bg-gradient-mint opacity-70 shrink-0 flex items-center justify-center">
              <Check size={9} className="text-white" strokeWidth={4} />
            </span>
            <span className="h-2.5 rounded-full bg-foreground/[0.07]" style={{ width: `${68 - i * 12}%` }} />
          </div>
        ))}
        <div className="absolute bottom-4 left-5 w-20 h-7 rounded-xl bg-gradient-coral opacity-80" />
      </>
    ),
    badge: (
      <div className="w-[68px] h-[68px] rounded-full bg-gradient-coral border-4 border-white flex items-center justify-center">
        <Check size={30} className="text-white" strokeWidth={3.5} />
      </div>
    ),
  },

  /* Grievance — escalation sheet + shield */
  grievance: {
    sheet: <SheetRows tints={["bg-gradient-coral", "bg-gradient-mint", "bg-gradient-lavender", "bg-gradient-sunset"]} />,
    badge: (
      <div className="relative w-[72px] h-[80px]">
        <svg width="72" height="80" viewBox="0 0 100 112" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 4 88 18v32c0 28-22 48-38 56C34 98 12 78 12 50V18L50 4z"
            fill="hsl(var(--primary))"
            stroke="white"
            strokeWidth="6"
          />
        </svg>
        <Check size={26} strokeWidth={3.5} className="absolute top-[24px] left-1/2 -translate-x-1/2 text-white" />
      </div>
    ),
  },

  /* Why Prayaan — patchwork sheet + sparkle badge */
  why: {
    sheet: (
      <>
        <div className="absolute top-4 left-5 w-16 h-11 rounded-xl bg-gradient-mint opacity-50" />
        <div className="absolute top-6 right-6 w-20 h-14 rounded-xl bg-gradient-lavender opacity-40" />
        <div className="absolute bottom-4 left-8 w-14 h-10 rounded-xl bg-gradient-sunset opacity-40" />
        <div className="absolute bottom-6 right-9 w-16 h-11 rounded-xl bg-gradient-coral opacity-30" />
        <div className="absolute inset-x-0 top-1/2 h-3.5 bg-background/95" />
        <div className="absolute inset-y-0 left-1/3 w-3.5 bg-background/95" />
      </>
    ),
    badge: (
      <div className="w-[68px] h-[68px] rounded-[1.5rem] bg-gradient-coral border-4 border-white flex items-center justify-center">
        <Sparkles size={28} className="text-white" />
      </div>
    ),
  },
};

const HeroIllustration = ({ variant }: { variant: IllustrationVariant }) => {
  const v = variants[variant];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.25 }}
      className="hidden lg:block relative h-[220px]"
      aria-hidden
    >
      <Sheet>{v.sheet}</Sheet>
      <FloatingBadge>{v.badge}</FloatingBadge>
      <MiniAccent className="left-[13%] top-[46%]" tint="bg-gradient-mint" delay={0.4} />
      <MiniAccent className="right-[10%] top-[34%]" tint="bg-gradient-lavender" delay={0.8} />
    </motion.div>
  );
};

export default HeroIllustration;
