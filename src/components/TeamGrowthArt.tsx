import { motion } from "framer-motion";

/* About hero illustration — "the journey": an ascending path with milestones,
   a traveller setting out, and a flag at the summit. Gold + navy brand theme. */

const PATH = "M60 198 C 132 198, 110 134, 184 124 S 264 80, 302 52";

const TeamGrowthArt = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.92 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    className="hidden lg:block relative"
    aria-hidden
  >
    <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
      <svg viewBox="0 0 340 240" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        {/* soft glow behind the summit */}
        <circle cx="306" cy="46" r="36" fill="#f0a800" fillOpacity="0.14" />

        {/* the journey path */}
        <path d={PATH} fill="none" stroke="#f0a800" strokeOpacity="0.16" strokeWidth="16" strokeLinecap="round" />
        <path d={PATH} fill="none" stroke="#f0a800" strokeWidth="6" strokeLinecap="round" strokeDasharray="2 16" />

        {/* milestones */}
        <circle cx="133" cy="159" r="7" fill="#fff" stroke="#00549c" strokeWidth="3" />
        <circle cx="225" cy="101" r="7" fill="#fff" stroke="#00549c" strokeWidth="3" />

        {/* summit flag */}
        <g>
          <line x1="302" y1="52" x2="302" y2="18" stroke="#0d2137" strokeWidth="3" strokeLinecap="round" />
          <path d="M302 18 L327 26 L302 34 Z" fill="#f0a800" />
          <circle cx="302" cy="52" r="4.5" fill="#0d2137" />
        </g>

        {/* traveller setting out */}
        <g transform="translate(46,198)">
          <ellipse cx="0" cy="15" rx="17" ry="4" fill="#0d2137" opacity="0.08" />
          <path d="M7 -2 Q19 -6 23 -17" stroke="#00549c" strokeWidth="6" strokeLinecap="round" fill="none" />
          <circle cx="24" cy="-18" r="3.6" fill="#e8b58c" />
          <path d="M-9 13 L-9 -1 Q-9 -13 0 -13 Q9 -13 9 -1 L9 13 Z" fill="#00549c" />
          <circle cx="0" cy="-21" r="8.5" fill="#e8b58c" />
          <path d="M-8.5 -23 Q-10 -34 0 -34 Q10 -34 8.5 -23 Q4 -29 0 -29 Q-4 -29 -8.5 -23 Z" fill="#233b52" />
        </g>

        {/* sparkle accents */}
        <circle cx="250" cy="142" r="3" fill="#f0a800" opacity="0.7" />
        <circle cx="176" cy="70" r="2.4" fill="#00549c" opacity="0.45" />
        <circle cx="320" cy="74" r="2" fill="#f0a800" opacity="0.7" />
      </svg>
    </motion.div>
  </motion.div>
);

export default TeamGrowthArt;
