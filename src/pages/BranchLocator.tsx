import Layout from "@/components/Layout";
import AIFloatingElements from "@/components/AIFloatingElements";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  MapPin, Search, Map as MapIcon, Phone, ChevronRight,
  RotateCcw, Clock, Home, ArrowRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

type Branch = {
  name: string;
  address: string;
  district: string;
  state: string;
  pin: string;
};

const branches: Branch[] = [
  // Tamil Nadu
  { name: "Sivagangai", address: "New No.6, Old No.73, UCO Bank, 2nd Floor, VOC Street", district: "Sivagangai", state: "Tamil Nadu", pin: "630561" },
  { name: "Salem", address: "No.5-F, Sachin Plaza, 2nd Floor, Sri Ram Nagar, Alagapuram", district: "Salem", state: "Tamil Nadu", pin: "636016" },
  { name: "Erode", address: "No.9/15, 2nd Floor, Perundurai Road, Opp. Sudha Hospital", district: "Erode", state: "Tamil Nadu", pin: "638011" },
  { name: "Krishnagiri", address: "Door No.1/375/12, Rajaji Nagar, 1st Cross, Krishnagiri", district: "Krishnagiri", state: "Tamil Nadu", pin: "635001" },
  { name: "Dharmapuri", address: "31C, 1st Floor, South Railway Line Road, Vanniyar Thirumana Mandapam", district: "Dharmapuri", state: "Tamil Nadu", pin: "636701" },
  { name: "Gobichettipalayam", address: "No.4/986, Kayalvizhi Complex, 1st Floor, Erode Main Road, Karattur", district: "Erode", state: "Tamil Nadu", pin: "638476" },
  { name: "Paramakudi", address: "1/161-P5, Apollo Pharmacy, 1st Floor, Mani Nagar, 1st Street", district: "Paramakudi", state: "Tamil Nadu", pin: "623707" },
  { name: "Aruppukottai", address: "1/508-B3, 1st Floor, RK Nagar, J.J Rani Complex, Gandhi Nagar, Aruppukottai", district: "Virudhunagar", state: "Tamil Nadu", pin: "626101" },
  { name: "Kangeyam", address: "No.295-A, 1st Floor, Kovai Main Road, Near Indian Oil Bunk, Kangeyam", district: "Tiruppur", state: "Tamil Nadu", pin: "638701" },
  { name: "Kallakurichi", address: "No.21, 2nd Floor, Opp. Head Post Office, Gandhi Salai, Kallakurichi", district: "Kallakurichi", state: "Tamil Nadu", pin: "606202" },
  { name: "Sivakasi", address: "1/6/726-A, Thangamani Complex, Srivilliputhur Main Road, Near PK Hotel, Satchiyapuram, Sivakasi", district: "Virudhunagar", state: "Tamil Nadu", pin: "626124" },
  { name: "Tirupattur", address: "No.283/A, 2nd Floor, Oli Puram, Asiriyar Nagar, Tirupattur", district: "Tirupattur", state: "Tamil Nadu", pin: "635602" },
  { name: "Arani", address: "No.1162Y, 1st Floor, P K Complex, ACS Garden, EB Nagar, Sevoor, Arani to Vellore Road", district: "Tiruvannamalai", state: "Tamil Nadu", pin: "632316" },
  { name: "Gudiyatham", address: "No.5, 1st Floor, R S Road, Polytechnic Koot Road, Vinayagapuram", district: "Gudiyatham", state: "Tamil Nadu", pin: "632602" },
  { name: "Polur", address: "No.80/1, 1st Floor, CC Road, Near Reliance Petrol Bunk, Polur, Polur Taluk", district: "Tiruvannamalai", state: "Tamil Nadu", pin: "606803" },
  { name: "Dindigul", address: "No.75/1, Ground Floor, Rama Meena Building, Thadicombu Road, Dindigul", district: "Dindigul", state: "Tamil Nadu", pin: "624001" },
  // Andhra Pradesh
  { name: "Ramachandrapuram", address: "D.No.28-2-2, 1st Floor, Vaibhav Complex, Draksharamam Road, Ramachandrapuram", district: "Konaseema", state: "Andhra Pradesh", pin: "533255" },
  { name: "Rajahmundry", address: "E & S Reddy Complex, Tilak Road, Opp. Sai Baba Temple", district: "East Godavari", state: "Andhra Pradesh", pin: "533103" },
  { name: "Kakinada", address: "D.No.3-18/1A, 2nd Floor, Shop No.3, Benda Complex, Sarpavaram Junction, Ramanayyapeta, Kakinada", district: "Kakinada", state: "Andhra Pradesh", pin: "533005" },
  { name: "Srungavarapukota", address: "No.12-177, 1st Floor, Visakha Road, Near Punyagiri Degree College, Srungavarapukota", district: "Vizianagaram", state: "Andhra Pradesh", pin: "535145" },
  { name: "Pendurthi", address: "No.3-64, Revenue Ward 70, Sujatha Nagar Main Road, Near Muntaj Hotel, Pendurthi, Visakhapatnam", district: "Visakhapatnam", state: "Andhra Pradesh", pin: "530051" },
  { name: "Nellore", address: "No.24/6/2/1, Near ACN Office, 4th Floor, SAP Towers, Saraswathi Nagar", district: "Nellore", state: "Andhra Pradesh", pin: "524004" },
  { name: "Anantapur", address: "No.6-378, 1st Floor, Opp. Sunray Hospital, Azad Nagar, Ballary Road", district: "Anantapur", state: "Andhra Pradesh", pin: "515001" },
  { name: "Kurnool", address: "D.No.40/39-3-1A, 4th Floor, Ucon Legend Complex, Bangaru Peta, Ballary Road", district: "Kurnool", state: "Andhra Pradesh", pin: "518001" },
  { name: "Hindupur", address: "D.No.6-4-32, 1st Floor, Opp. ADCC Bank, RS Road, Kolimi Appa Swamy Veedhi, Revenue Ward No.6, Hindupur", district: "Sri Sathya Sai", state: "Andhra Pradesh", pin: "515201" },
  { name: "Kavali", address: "No.19-6-54, 2nd Floor, Ram Nagar, Musunuru Mani Road, J.D. Complex, Kavali", district: "Nellore", state: "Andhra Pradesh", pin: "507306" },
  { name: "Nandyal", address: "D.No.25/419-5B-1, 1st Floor, Padmavathi Nagar Main Road, Saleem Nagar, Nandyal", district: "Nandyal", state: "Andhra Pradesh", pin: "518501" },
  { name: "Dhone", address: "Plot No.3, 1st Floor, BVR Complex, KVS Colony, Beside Mahalakshmi Hospital, Dhone", district: "Nandyal", state: "Andhra Pradesh", pin: "518222" },
  { name: "Guntakal", address: "D.No.20/51 ABC, 1st Floor, Opp. Vijeytha Hospital Main Road, Guntakal", district: "Anantapur", state: "Andhra Pradesh", pin: "515801" },
  // Telangana
  { name: "Peddapalli", address: "No.4-5-122, 1st Floor, Subash Nagar, Peddapalli", district: "Peddapalli", state: "Telangana", pin: "505172" },
  { name: "Jagtial", address: "No.1-5-KA0011, 3rd Floor, Karimnagar Main Road, Near Hero Showroom, Jagtial", district: "Jagtial", state: "Telangana", pin: "505327" },
  { name: "Karimnagar", address: "No.334, 1st Floor, Ganesh Nagar, Karimnagar", district: "Karimnagar", state: "Telangana", pin: "505001" },
  { name: "Kothagudem", address: "D.No.6-8-98, 2nd Floor, Ganesh Basthi, Kothagudem", district: "Bhadradri Kothagudem", state: "Telangana", pin: "507101" },
];

const states = ["Tamil Nadu", "Andhra Pradesh", "Telangana"];

// Soft per-state tints for the dropping-pin tile
const stateStyles: Record<string, { bg: string; text: string; ring: string }> = {
  "Tamil Nadu": {
    bg: "bg-[hsl(var(--primary)/0.12)]",
    text: "text-primary",
    ring: "border-primary",
  },
  "Andhra Pradesh": {
    bg: "bg-[hsl(var(--accent)/0.14)]",
    text: "text-accent",
    ring: "border-accent",
  },
  Telangana: {
    bg: "bg-[hsl(var(--color-lavender)/0.2)]",
    text: "text-[hsl(var(--color-indigo))]",
    ring: "border-[hsl(var(--color-indigo))]",
  },
};

const CUSTOMER_CARE = "+91-6380589898";
const BATCH_SIZE = 8;

const mapsUrl = (b: Branch) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${b.address}, ${b.district}, ${b.state} ${b.pin}`
  )}`;

// Mon–Fri, 9:30 AM – 6:30 PM
const isOpenNow = () => {
  const now = new Date();
  const day = now.getDay();
  const mins = now.getHours() * 60 + now.getMinutes();
  return day >= 1 && day <= 5 && mins >= 570 && mins <= 1110;
};

const BranchCard = ({ b, open }: { b: Branch; open: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    className="clay-surface p-5 md:p-6"
  >
    <div className="flex items-start gap-4">
      <div
        className={`relative w-12 h-12 rounded-2xl ${stateStyles[b.state].bg} flex items-center justify-center shrink-0`}
      >
        <span
          className={`absolute w-8 h-8 rounded-full border-[1.5px] border-dashed ${stateStyles[b.state].ring} animate-surveyor`}
        />
        <MapPin size={15} className={stateStyles[b.state].text} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1.5">
          <h3 className="font-display text-base font-bold text-foreground">{b.name} Branch</h3>
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold font-body ${
              open ? "bg-accent/15 text-accent" : "bg-muted text-muted-foreground"
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${open ? "bg-accent" : "bg-muted-foreground/50"}`} />
            {open ? "Open now" : "Closed now"}
          </span>
        </div>
        <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed mb-3">
          {b.address}, {b.district} District, {b.state} – {b.pin}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm" variant="default" className="rounded-xl font-body text-xs h-8" asChild>
            <a href={mapsUrl(b)} target="_blank" rel="noopener noreferrer">
              <MapIcon size={12} /> Get Directions
            </a>
          </Button>
          <span className="inline-flex items-center gap-1.5 font-body text-[11px] text-muted-foreground ml-auto">
            <Clock size={11} /> Mon–Fri · 9:30 AM – 6:30 PM
          </span>
        </div>
      </div>
    </div>
  </motion.div>
);

const BranchLocator = () => {
  const [stateFilter, setStateFilter] = useState("all");
  const [districtFilter, setDistrictFilter] = useState("all");
  const [q, setQ] = useState("");
  const [visible, setVisible] = useState(BATCH_SIZE);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const open = isOpenNow();

  const districts = useMemo(() => {
    const pool = stateFilter === "all" ? branches : branches.filter((b) => b.state === stateFilter);
    return [...new Set(pool.map((b) => b.district))].sort();
  }, [stateFilter]);

  const filtered = useMemo(() => {
    const query = q.toLowerCase().trim();
    return branches.filter((b) => {
      const inState = stateFilter === "all" || b.state === stateFilter;
      const inDistrict = districtFilter === "all" || b.district === districtFilter;
      const inQuery =
        !query ||
        `${b.name} ${b.district} ${b.state} ${b.pin} ${b.address}`.toLowerCase().includes(query);
      return inState && inDistrict && inQuery;
    });
  }, [stateFilter, districtFilter, q]);

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  // Infinite scroll — load the next batch when the sentinel enters the viewport.
  // Recreated after every batch so re-observing re-checks the current intersection.
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible((v) => Math.min(v + BATCH_SIZE, filtered.length));
        }
      },
      { rootMargin: "240px" }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [filtered.length, visible]);

  const setStateAndReset = (v: string) => {
    setStateFilter(v);
    setDistrictFilter("all");
    setVisible(BATCH_SIZE);
  };

  const reset = () => {
    setStateFilter("all");
    setDistrictFilter("all");
    setQ("");
    setVisible(BATCH_SIZE);
  };

  return (
    <Layout>
      {/* Hero — breadcrumb + headline left, clay map illustration right */}
      <section className="pt-20 pb-5 md:pt-28 md:pb-6 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-5 relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">

            {/* Left — copy */}
            <div>
              {/* Breadcrumb pill */}
              <motion.nav
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                aria-label="Breadcrumb"
                className="inline-flex items-center flex-wrap gap-1.5 px-4 py-2 rounded-full bg-card shadow-clay-sm font-body text-[11px] uppercase tracking-[0.08em] text-muted-foreground mb-4"
              >
                <Link to="/" className="inline-flex items-center gap-1 hover:text-primary transition-colors">
                  <Home size={11} /> Home
                </Link>
                <ChevronRight size={11} />
                <span className={stateFilter === "all" ? "font-bold text-foreground" : ""}>Branches</span>
                {stateFilter !== "all" && (
                  <>
                    <ChevronRight size={11} />
                    <span className={districtFilter === "all" ? "font-bold text-foreground" : ""}>{stateFilter}</span>
                  </>
                )}
                {districtFilter !== "all" && (
                  <>
                    <ChevronRight size={11} />
                    <span className="font-bold text-foreground">{districtFilter}</span>
                  </>
                )}
              </motion.nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h1 className="font-display text-2xl md:text-4xl font-extrabold text-foreground mb-3 leading-tight">
                  Locate a <span className="text-gradient-coral">Branch</span>
                </h1>
                <p className="text-sm md:text-base text-muted-foreground max-w-xl font-body leading-relaxed mb-1.5">
                  Step into your nearest Prayaan Capital branch. Want to skip the branch visit?
                  Apply online and our doorstep team comes to you.
                </p>
                <p className="font-body text-xs text-muted-foreground/70 mb-5">
                  {branches.length} branches · {states.length} states · {new Set(branches.map((b) => b.district)).size} districts
                </p>
                <Button variant="default" className="rounded-2xl font-body" asChild>
                  <Link to="/eligibility">
                    Apply Online <ArrowRight size={15} />
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Right — clay map + pin illustration (desktop only) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="hidden lg:block relative h-[220px]"
              aria-hidden
            >
              {/* Tilted map sheet */}
              <div
                className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 w-[290px] h-[180px]"
                style={{ perspective: "900px" }}
              >
                <div
                  className="absolute inset-0 rounded-3xl bg-card shadow-clay-lg overflow-hidden"
                  style={{ transform: "rotateX(52deg) rotateZ(-10deg)" }}
                >
                  {/* land patches */}
                  <div className="absolute top-4 left-5 w-16 h-11 rounded-xl bg-gradient-mint opacity-50" />
                  <div className="absolute top-6 right-6 w-20 h-14 rounded-xl bg-gradient-lavender opacity-40" />
                  <div className="absolute bottom-4 left-8 w-14 h-10 rounded-xl bg-gradient-sunset opacity-40" />
                  <div className="absolute bottom-6 right-9 w-16 h-11 rounded-xl bg-gradient-mint opacity-30" />
                  {/* roads */}
                  <div className="absolute inset-y-0 left-1/3 w-3.5 bg-background/95" />
                  <div className="absolute inset-y-0 right-1/4 w-3 bg-background/85" />
                  <div className="absolute inset-x-0 top-1/2 h-3.5 bg-background/95" />
                  {/* river */}
                  <div className="absolute -inset-x-3 bottom-[18%] h-5 bg-accent/25 rounded-full blur-[1px] rotate-[-4deg]" />
                </div>
              </div>

              {/* Pin shadow on the map */}
              <motion.div
                className="absolute left-1/2 top-[60%] -translate-x-1/2 w-14 h-4 rounded-full bg-foreground/25 blur-md"
                animate={{ scale: [1, 0.72, 1], opacity: [0.35, 0.18, 0.35] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Big brand pin */}
              <motion.div
                className="absolute left-1/2 top-0 -translate-x-1/2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative drop-shadow-xl">
                  <svg width="74" height="94" viewBox="0 0 100 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M50 2C24 2 4 22.5 4 48c0 34 46 78 46 78s46-44 46-78C96 22.5 76 2 50 2z"
                      fill="hsl(var(--primary))"
                      stroke="white"
                      strokeWidth="5"
                    />
                  </svg>
                  <div className="absolute top-[16px] left-1/2 -translate-x-1/2 w-[38px] h-[38px] rounded-full bg-white shadow-clay-sm flex items-center justify-center">
                    <span className="font-display text-base font-black text-primary">P</span>
                  </div>
                </div>
              </motion.div>

              {/* Mini pins */}
              <motion.div
                className="absolute left-[13%] top-[46%]"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              >
                <div
                  className="w-6 h-6 bg-gradient-mint shadow-clay-sm"
                  style={{ borderRadius: "50% 50% 50% 0", transform: "rotate(-45deg)" }}
                />
              </motion.div>
              <motion.div
                className="absolute right-[10%] top-[34%]"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                <div
                  className="w-5 h-5 bg-gradient-lavender shadow-clay-sm"
                  style={{ borderRadius: "50% 50% 50% 0", transform: "rotate(-45deg)" }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locator body — filters + results */}
      <section className="py-8 md:py-10 bg-background">
        <div className="container mx-auto px-5 max-w-6xl">
          <div className="grid lg:grid-cols-[290px_1fr] gap-8 items-start">

            {/* ── Filter panel ── */}
            <motion.aside
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="clay-surface p-5 md:p-6 lg:sticky lg:top-24"
            >
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-display text-sm font-bold text-foreground">Filter Branches</h2>
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-1 font-body text-[11px] font-semibold text-primary hover:underline"
                >
                  <RotateCcw size={10} /> Reset
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="font-body text-[11px] font-bold text-muted-foreground uppercase tracking-wide block mb-1.5">
                    State
                  </label>
                  <Select value={stateFilter} onValueChange={setStateAndReset}>
                    <SelectTrigger className="rounded-2xl border-0 bg-muted shadow-clay-sm font-body text-sm">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All States</SelectItem>
                      {states.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="font-body text-[11px] font-bold text-muted-foreground uppercase tracking-wide block mb-1.5">
                    District
                  </label>
                  <Select
                    value={districtFilter}
                    onValueChange={(v) => { setDistrictFilter(v); setVisible(BATCH_SIZE); }}
                  >
                    <SelectTrigger className="rounded-2xl border-0 bg-muted shadow-clay-sm font-body text-sm">
                      <SelectValue placeholder="Select district" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Districts</SelectItem>
                      {districts.map((d) => (
                        <SelectItem key={d} value={d}>{d}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

              </div>

              {/* Help strip */}
              <div className="mt-6 pt-5 border-t border-border/60">
                <p className="font-body text-[11px] text-muted-foreground leading-relaxed mb-2">
                  Can't find a branch near you? Our doorstep service covers surrounding districts.
                </p>
                <a
                  href={`tel:${CUSTOMER_CARE.replace(/-/g, "")}`}
                  className="inline-flex items-center gap-1.5 font-body text-xs font-bold text-primary hover:underline"
                >
                  <Phone size={12} /> {CUSTOMER_CARE}
                </a>
              </div>
            </motion.aside>

            {/* ── Results ── */}
            <div className="min-w-0">
              {/* Search bar */}
              <div className="relative mb-4">
                <Search size={17} className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                <Input
                  placeholder="Search branch, district, area or PIN…"
                  value={q}
                  onChange={(e) => { setQ(e.target.value); setVisible(BATCH_SIZE); }}
                  className="pl-12 h-12 rounded-2xl shadow-clay-sm border-0 bg-card font-body text-sm md:text-base"
                />
              </div>

              {/* State quick links */}
              <div className="flex flex-wrap gap-2 mb-4">
                <button
                  onClick={() => setStateAndReset("all")}
                  className={`shrink-0 px-3.5 py-1.5 rounded-full font-body text-xs font-semibold transition-all shadow-clay-sm ${
                    stateFilter === "all"
                      ? "bg-gradient-coral text-white"
                      : "bg-card text-foreground hover:shadow-clay"
                  }`}
                >
                  All States ({branches.length})
                </button>
                {states.map((s) => (
                  <button
                    key={s}
                    onClick={() => setStateAndReset(s)}
                    className={`shrink-0 px-3.5 py-1.5 rounded-full font-body text-xs font-semibold transition-all shadow-clay-sm ${
                      stateFilter === s
                        ? "bg-gradient-coral text-white"
                        : "bg-card text-foreground hover:shadow-clay"
                    }`}
                  >
                    {s} ({branches.filter((b) => b.state === s).length})
                  </button>
                ))}
              </div>

              {/* Result count */}
              <div className="flex items-baseline justify-between mb-4">
                <p className="font-body text-sm text-foreground">
                  <span className="font-bold">{filtered.length}</span>{" "}
                  <span className="text-muted-foreground">
                    {filtered.length === 1 ? "branch" : "branches"} found
                    {stateFilter !== "all" && ` in ${districtFilter !== "all" ? districtFilter + ", " : ""}${stateFilter}`}
                    {q && ` for "${q}"`}
                  </span>
                </p>
                {filtered.length > 0 && (
                  <p className="font-body text-xs text-muted-foreground">
                    Showing {shown.length} of {filtered.length}
                  </p>
                )}
              </div>

              {/* Branch list */}
              <div className="space-y-4" key={`${stateFilter}-${districtFilter}-${q}`}>
                {shown.map((b) => (
                  <BranchCard key={`${b.name}-${b.pin}`} b={b} open={open} />
                ))}

                {filtered.length === 0 && (
                  <div className="clay-surface p-10 text-center">
                    <p className="font-display text-sm font-bold text-foreground mb-1">No branches found</p>
                    <p className="font-body text-xs text-muted-foreground mb-4">
                      Try a different state, district or PIN code.
                    </p>
                    <Button size="sm" variant="outline" className="rounded-xl font-body text-xs" onClick={reset}>
                      <RotateCcw size={12} /> Reset filters
                    </Button>
                  </div>
                )}
              </div>

              {/* Infinite scroll sentinel + end note */}
              {hasMore && <div ref={sentinelRef} className="h-10" aria-hidden />}
              {!hasMore && filtered.length > BATCH_SIZE && (
                <p className="font-body text-xs text-muted-foreground text-center mt-8">
                  That's all {filtered.length} branches
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BranchLocator;
