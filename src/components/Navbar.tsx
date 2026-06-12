import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Why Prayaan", href: "/why-prayaan" },
  {
    label: "Company",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "Technology", href: "/technology" },
      { label: "Careers", href: "/careers" },
      { label: "News", href: "/news" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Check Eligibility", href: "/eligibility" },
      { label: "Calculators", href: "/customer/calculators" },
      { label: "Fair Practice Code", href: "/fair-practice-code" },
    ],
  },
  { label: "Customer", href: "/customer" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between h-14 md:h-16 px-5">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-2xl bg-gradient-coral shadow-clay-sm flex items-center justify-center">
            <span className="text-white font-display font-bold text-base">P</span>
          </div>
          <span className="font-display font-bold text-lg text-foreground tracking-tight">
            Prayaan Capital
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
                <button className="flex items-center gap-1 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-md font-body">
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
                      className="absolute top-full left-0 mt-2 w-48 clay-surface-sm py-2 overflow-hidden"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className={`block px-3.5 py-2 text-[13px] font-body transition-colors ${
                            isActive(child.href)
                              ? "text-foreground bg-muted"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={`text-[13px] font-medium px-3 py-2 rounded-md transition-colors font-body ${
                  isActive(link.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link to="/contact">
            <Button size="sm" className="ml-4 rounded-full text-xs px-5 font-body">
              Apply Now
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden text-foreground p-1"
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
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-0.5">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      className="flex items-center justify-between w-full text-[13px] font-medium text-muted-foreground py-2.5 px-3 rounded-lg hover:bg-muted transition-colors font-body"
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
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.href}
                              className="block text-[13px] text-muted-foreground hover:text-foreground py-2 px-3 rounded-lg hover:bg-muted transition-colors font-body"
                              onClick={() => setIsOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-[13px] font-medium text-muted-foreground hover:text-foreground py-2.5 px-3 rounded-lg hover:bg-muted transition-colors font-body"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button size="sm" className="w-full mt-3 rounded-full text-xs font-body">
                  Apply Now
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
