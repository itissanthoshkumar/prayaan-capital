import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BrandLogo from "@/components/BrandLogo";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Company",
    children: [
      { label: "About Us", href: "/why-prayaan" },
      { label: "Our Team", href: "/team" },
      { label: "Our Presence", href: "/branch-locator" },
    ],
  },
  {
    label: "Customer",
    children: [
      { label: "Support & Awareness", href: "/customer" },
      { label: "Loan Calculator", href: "/calculators/emi" },
      { label: "Grievance Redressal", href: "/grievance-redressal" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;
  const isChildActive = (children: { href: string }[]) => children.some((c) => location.pathname === c.href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const NAV_BG = "hsl(208 100% 24%)";
  const NAV_BG_DARK = "hsl(208 100% 18%)";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
      style={{
        background: NAV_BG,
        boxShadow: scrolled ? "0 2px 16px hsl(208 100% 10% / 0.35)" : "none",
      }}
    >
      <div className="container mx-auto flex items-center justify-between h-14 md:h-16 px-5">
        {/* Logo in white pill so blue mark + wordmark stay legible */}
        <Link to="/" className="flex items-center">
          <span className="bg-white/95 rounded-xl px-3 py-1 inline-flex items-center shadow-sm">
            <BrandLogo size={30} />
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 text-[15px] font-medium transition-colors px-3 py-2 rounded-md font-body ${
                    isChildActive(link.children)
                      ? "text-white underline underline-offset-4 decoration-[hsl(42,100%,60%)] decoration-2"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  <ChevronDown size={12} className={`transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.12 }}
                      className="absolute top-full left-0 mt-2 w-52 rounded-2xl p-1.5 overflow-hidden bg-white ring-1 ring-black/5 shadow-[0_12px_32px_rgba(13,33,55,0.22)]"
                    >
                      {link.children.map((child) =>
                        child.href.startsWith("http") ? (
                          <a
                            key={child.label}
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-3 py-2 rounded-xl text-[13px] font-medium font-body transition-colors text-foreground/75 hover:text-primary hover:bg-primary/5"
                          >
                            {child.label}
                          </a>
                        ) : (
                          <Link
                            key={child.label}
                            to={child.href}
                            className={`block px-3 py-2 rounded-xl text-[13px] font-medium font-body transition-colors ${
                              isActive(child.href)
                                ? "text-primary bg-primary/10"
                                : "text-foreground/75 hover:text-primary hover:bg-primary/5"
                            }`}
                          >
                            {child.label}
                          </Link>
                        )
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={`text-[15px] font-medium px-3 py-2 rounded-md transition-colors font-body ${
                  isActive(link.href) ? "text-white" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Button asChild size="sm" variant="hero" className="ml-4 rounded-full text-sm px-5 font-body animate-cta-glow">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>

        <button
          className="md:hidden text-white/90 p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-white/10"
            style={{ background: NAV_BG_DARK }}
          >
            <div className="px-5 py-4 flex flex-col gap-0.5">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      className="flex items-center justify-between w-full text-[13px] font-medium text-white/75 py-2.5 px-3 rounded-lg hover:bg-white/10 hover:text-white transition-colors font-body"
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    >
                      {link.label}
                      <ChevronDown size={12} className={`transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-3 overflow-hidden"
                        >
                          {link.children.map((child) =>
                            child.href.startsWith("http") ? (
                              <a
                                key={child.label}
                                href={child.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-[13px] text-white/65 hover:text-white py-2 px-3 rounded-lg hover:bg-white/10 transition-colors font-body"
                                onClick={() => setIsOpen(false)}
                              >
                                {child.label}
                              </a>
                            ) : (
                              <Link
                                key={child.label}
                                to={child.href}
                                className="block text-[13px] text-white/65 hover:text-white py-2 px-3 rounded-lg hover:bg-white/10 transition-colors font-body"
                                onClick={() => setIsOpen(false)}
                              >
                                {child.label}
                              </Link>
                            )
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-[13px] font-medium text-white/75 hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/10 transition-colors font-body"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Button asChild size="sm" variant="hero" className="w-full mt-3 rounded-full text-xs font-body">
                <Link to="/contact" onClick={() => setIsOpen(false)}>Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
