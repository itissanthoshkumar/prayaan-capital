import HeroIllustration from "@/components/HeroIllustration";
import Layout from "@/components/Layout";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, Clock, MessageSquare,
  Users, ArrowRight, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AIFloatingElements from "@/components/AIFloatingElements";

/* ─── Office detail rows ─── */
const officeDetails = [
  {
    icon: MapPin,
    tint: "bg-gradient-lavender",
    label: "Corporate Office",
    primary: "No. 40/97, Minerva Building, 2nd Floor",
    secondary: "Santhome High Road, Chennai – 600028",
    action: {
      label: "Get directions →",
      href: "https://www.google.com/maps/place/Prayaan+Capital+Pvt+Ltd/data=!4m2!3m1!1s0x0:0xae70c3e221dd1501",
      external: true,
    },
  },
  {
    icon: Mail,
    tint: "bg-gradient-coral",
    label: "Email",
    primary: "customercare@prayaancapital.com",
    secondary: "info@prayaancapital.com",
    action: {
      label: "Send email →",
      href: "mailto:customercare@prayaancapital.com",
      external: false,
    },
  },
  {
    icon: Clock,
    tint: "bg-gradient-sunset",
    label: "Office Hours",
    primary: "Monday – Friday",
    secondary: "9:30 AM – 6:30 PM IST",
    action: undefined as { label: string; href: string; external: boolean } | undefined,
  },
];

const GOOGLE_MAP_SRC =
  "https://maps.google.com/maps?q=Prayaan+Capital+Pvt+Ltd,+Minerva+Building,+Santhome+High+Road,+Chennai+600028&output=embed&z=16";
const OSM_MAP_SRC =
  "https://www.openstreetmap.org/export/embed.html?bbox=80.2705%2C13.0240%2C80.2865%2C13.0390&layer=mapnik&marker=13.0316%2C80.2785";

/* Prefer Google Maps; fall back to OpenStreetMap only if Google fails to load. */
const LocationMap = () => {
  const [provider, setProvider] = useState<"google" | "osm">("google");
  const loadedRef = useRef(false);

  useEffect(() => {
    if (provider !== "google") return;
    const t = setTimeout(() => {
      if (!loadedRef.current) setProvider("osm");
    }, 3000);
    return () => clearTimeout(t);
  }, [provider]);

  return (
    <iframe
      key={provider}
      title="Prayaan Capital — Minerva Building, Santhome High Road, Chennai"
      src={provider === "google" ? GOOGLE_MAP_SRC : OSM_MAP_SRC}
      onLoad={() => { loadedRef.current = true; }}
      className="block w-full h-[220px] sm:h-[260px] md:h-[270px]"
      style={{ border: 0 }}
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

const Contact = () => (
  <Layout>

    {/* ────────── HERO ────────── */}
    <section className="pt-24 pb-8 md:pt-32 md:pb-10 bg-hero relative overflow-hidden">
      <AIFloatingElements />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
          <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
            <MessageSquare size={12} /> Get in Touch
          </span>
          <h1 className="font-display text-3xl md:text-6xl font-bold text-foreground mt-3 mb-5 leading-tight">
            Let's{" "}
            <span className="text-gradient-coral">talk</span>
          </h1>
          <p className="font-body text-sm md:text-lg text-muted-foreground leading-relaxed">
            Looking to borrow against your property? Question about your loan?
            Want to partner with us? Choose how we can help below.
          </p>
        </motion.div>
          </div>
          <HeroIllustration variant="contact" />
        </div>
      </div>
    </section>

    {/* ────────── REACH OUT + LOCATION ────────── */}
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <AIFloatingElements />
      <div className="container mx-auto px-4 relative z-10">

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">

          {/* Left — Reach out card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="clay-surface p-8 md:p-10 flex flex-col gap-8"
          >
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">Reach us directly</h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Call or email us — our team responds within one business day. No forms, no wait.
              </p>
            </div>

            {/* Phone */}
            <a href="tel:+916380589898" className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-coral shadow-clay-sm hover:shadow-clay transition-all clay-press">
              <span className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <Phone size={22} className="text-white" />
              </span>
              <div>
                <p className="font-body text-[10px] font-semibold text-white/70 uppercase tracking-wider mb-0.5">Call us</p>
                <p className="font-display text-lg font-bold text-white">+91-6380589898</p>
                <p className="font-body text-xs text-white/70 mt-0.5">Mon–Fri · 9:30 AM – 6:30 PM</p>
              </div>
              <ArrowRight size={16} className="text-white/60 ml-auto group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Email */}
            <a href="mailto:customercare@prayaancapital.com" className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-mint shadow-clay-sm hover:shadow-clay transition-all clay-press">
              <span className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <Mail size={22} className="text-white" />
              </span>
              <div className="min-w-0">
                <p className="font-body text-[10px] font-semibold text-white/70 uppercase tracking-wider mb-0.5">Email us</p>
                <p className="font-display text-base font-bold text-white truncate">customercare@prayaancapital.com</p>
                <p className="font-body text-xs text-white/70 mt-0.5">Reply within 1 business day</p>
              </div>
              <ArrowRight size={16} className="text-white/60 ml-auto shrink-0 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* GRO */}
            <div className="border-t border-border/40 pt-6 flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-lavender shadow-clay-sm flex items-center justify-center shrink-0">
                <Users size={16} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-body text-[11px] font-medium text-muted-foreground mb-0.5">Grievance Redressal Officer</p>
                <p className="font-body text-sm font-semibold text-foreground">Mr. Harish Kumar E, AVP – HR</p>
                <div className="flex flex-wrap gap-x-4 gap-y-0.5 mt-1">
                  <a href="mailto:gro@prayaancapital.com" className="font-body text-xs text-primary hover:underline">gro@prayaancapital.com</a>
                  <a href="tel:+919600133756" className="font-body text-xs text-primary hover:underline">+91-9600133756</a>
                </div>
                <Link to="/grievance-redressal" className="inline-flex items-center gap-1 mt-1.5 font-body text-xs text-muted-foreground hover:text-primary transition-colors">
                  Full escalation path <ChevronRight size={11} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right — Map + office details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="space-y-5"
          >
            {/* Map */}
            <div className="clay-surface p-2">
              <div className="rounded-[1.25rem] overflow-hidden">
                <LocationMap />
              </div>
              <a
                href="https://www.google.com/maps/place/Prayaan+Capital+Pvt+Ltd/data=!4m2!3m1!1s0x0:0xae70c3e221dd1501"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 font-body text-xs font-semibold text-primary hover:underline"
              >
                <MapPin size={13} /> Open in Google Maps
              </a>
            </div>

            {/* Office details */}
            <div className="clay-surface p-6 md:p-7">
              <div className="space-y-5">
                {officeDetails.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className={`w-12 h-12 rounded-2xl ${item.tint} shadow-clay-sm flex items-center justify-center shrink-0 mt-0.5`}>
                      <item.icon size={18} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-body text-[11px] font-medium text-muted-foreground mb-0.5">{item.label}</p>
                      <p className="font-body text-sm font-semibold text-foreground">{item.primary}</p>
                      <p className="font-body text-xs text-muted-foreground break-all">{item.secondary}</p>
                      {item.action && (
                        <a
                          href={item.action.href}
                          {...(item.action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="font-body text-xs font-semibold text-primary hover:underline mt-1 inline-block"
                        >
                          {item.action.label}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>

  </Layout>
);

export default Contact;
