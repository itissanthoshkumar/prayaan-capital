import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Copy, Sparkles, ShieldCheck, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const eligibilitySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Enter a valid email" })
    .max(255),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, { message: "Enter a valid 10-digit Indian mobile" }),
  businessName: z
    .string()
    .trim()
    .min(2, { message: "Business name is required" })
    .max(120),
  businessType: z.string().min(1, { message: "Select a business type" }),
  vintage: z.string().min(1, { message: "Select business vintage" }),
  monthlyRevenue: z
    .string()
    .trim()
    .regex(/^\d+$/, { message: "Enter a valid amount in ₹" })
    .refine((v) => Number(v) >= 50000, {
      message: "Monthly revenue must be at least ₹50,000",
    }),
  loanAmount: z
    .string()
    .trim()
    .regex(/^\d+$/, { message: "Enter a valid amount in ₹" })
    .refine((v) => Number(v) >= 500000 && Number(v) <= 5000000, {
      message: "Loan amount must be between ₹5L and ₹50L",
    }),
  city: z.string().trim().min(2, { message: "City is required" }).max(80),
});

type FormData = z.infer<typeof eligibilitySchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  fullName: "",
  email: "",
  phone: "",
  businessName: "",
  businessType: "",
  vintage: "",
  monthlyRevenue: "",
  loanAmount: "",
  city: "",
};

const generateApplicationId = () => {
  const ts = Date.now().toString(36).toUpperCase().slice(-5);
  const rand = Math.random().toString(36).toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 5);
  return `PRY-${ts}-${rand}`;
};

const Eligibility = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ id: string; name: string; amount: string } | null>(null);

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = eligibilitySchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: FormErrors = {};
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FormData;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      toast({
        title: "Please fix the errors",
        description: "A few fields need your attention.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      const id = generateApplicationId();
      setResult({
        id,
        name: parsed.data.fullName,
        amount: Number(parsed.data.loanAmount).toLocaleString("en-IN"),
      });
      setSubmitting(false);
    }, 900);
  };

  const handleReset = () => {
    setForm(initialForm);
    setErrors({});
    setResult(null);
  };

  const copyId = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result.id);
    toast({ title: "Copied", description: "Application ID copied to clipboard." });
  };

  return (
    <Layout>
      <section className="relative pt-28 md:pt-32 pb-20 overflow-hidden">
        {/* Floating clay blobs */}
        <div className="pointer-events-none absolute -top-10 -left-10 w-72 h-72 rounded-full bg-clay-peach/40 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -right-10 w-80 h-80 rounded-full bg-clay-lavender/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-clay-mint/40 blur-3xl" />

        <div className="container mx-auto px-5 relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full clay-surface-sm text-xs font-medium text-foreground mb-5 font-body">
              <Sparkles size={14} className="text-primary" />
              AI-powered instant check
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground tracking-tight mb-4">
              Check your loan eligibility
            </h1>
            <p className="font-body text-base md:text-lg text-muted-foreground">
              Tell us a little about your business and we'll generate your application ID instantly. No paperwork, no impact on your credit score.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 clay-surface p-6 md:p-8"
            >
              {!result ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Full Name" error={errors.fullName} htmlFor="fullName">
                      <Input
                        id="fullName"
                        value={form.fullName}
                        onChange={(e) => update("fullName", e.target.value)}
                        placeholder="Rahul Sharma"
                        maxLength={100}
                        className="clay-input"
                      />
                    </Field>
                    <Field label="Email" error={errors.email} htmlFor="email">
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="you@business.com"
                        maxLength={255}
                        className="clay-input"
                      />
                    </Field>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Mobile Number" error={errors.phone} htmlFor="phone">
                      <Input
                        id="phone"
                        inputMode="numeric"
                        value={form.phone}
                        onChange={(e) =>
                          update("phone", e.target.value.replace(/\D/g, "").slice(0, 10))
                        }
                        placeholder="9876543210"
                        className="clay-input"
                      />
                    </Field>
                    <Field label="City" error={errors.city} htmlFor="city">
                      <Input
                        id="city"
                        value={form.city}
                        onChange={(e) => update("city", e.target.value)}
                        placeholder="Salem"
                        maxLength={80}
                        className="clay-input"
                      />
                    </Field>
                  </div>

                  <Field label="Business Name" error={errors.businessName} htmlFor="businessName">
                    <Input
                      id="businessName"
                      value={form.businessName}
                      onChange={(e) => update("businessName", e.target.value)}
                      placeholder="Sharma Trading Co."
                      maxLength={120}
                      className="clay-input"
                    />
                  </Field>

                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Business Type" error={errors.businessType}>
                      <Select
                        value={form.businessType}
                        onValueChange={(v) => update("businessType", v)}
                      >
                        <SelectTrigger className="clay-input">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="proprietorship">Proprietorship</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="llp">LLP</SelectItem>
                          <SelectItem value="pvt-ltd">Private Limited</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </Field>
                    <Field label="Business Vintage" error={errors.vintage}>
                      <Select value={form.vintage} onValueChange={(v) => update("vintage", v)}>
                        <SelectTrigger className="clay-input">
                          <SelectValue placeholder="Years in business" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="<1">Less than 1 year</SelectItem>
                          <SelectItem value="1-3">1 – 3 years</SelectItem>
                          <SelectItem value="3-5">3 – 5 years</SelectItem>
                          <SelectItem value="5+">5+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <Field
                      label="Monthly Revenue (₹)"
                      error={errors.monthlyRevenue}
                      htmlFor="monthlyRevenue"
                    >
                      <Input
                        id="monthlyRevenue"
                        inputMode="numeric"
                        value={form.monthlyRevenue}
                        onChange={(e) =>
                          update("monthlyRevenue", e.target.value.replace(/\D/g, "").slice(0, 10))
                        }
                        placeholder="500000"
                        className="clay-input"
                      />
                    </Field>
                    <Field
                      label="Loan Amount Needed (₹)"
                      error={errors.loanAmount}
                      htmlFor="loanAmount"
                    >
                      <Input
                        id="loanAmount"
                        inputMode="numeric"
                        value={form.loanAmount}
                        onChange={(e) =>
                          update("loanAmount", e.target.value.replace(/\D/g, "").slice(0, 10))
                        }
                        placeholder="1500000"
                        className="clay-input"
                      />
                    </Field>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={submitting}
                      className="flex-1 font-body"
                    >
                      {submitting ? "Checking eligibility…" : "Check Eligibility"}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      onClick={handleReset}
                      className="font-body"
                    >
                      Clear
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground font-body pt-1">
                    By submitting, you agree to our Privacy Policy. This check does not affect your credit score.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-6"
                >
                  <div className="w-20 h-20 mx-auto mb-5 rounded-3xl bg-gradient-mint shadow-clay flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2 tracking-tight">
                    You're pre-eligible, {result.name.split(" ")[0]}!
                  </h2>
                  <p className="font-body text-muted-foreground mb-6">
                    Based on your inputs, you may qualify for a loan up to ₹{result.amount}. Our team will reach out within 24 hours.
                  </p>

                  <div className="clay-surface-sm p-5 max-w-md mx-auto mb-6">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-body mb-2">
                      Your Application ID
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <code className="font-display font-bold text-2xl md:text-3xl text-primary tracking-wide">
                        {result.id}
                      </code>
                      <button
                        onClick={copyId}
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                        aria-label="Copy application ID"
                      >
                        <Copy size={16} className="text-muted-foreground" />
                      </button>
                    </div>
                    <p className="text-[11px] text-muted-foreground font-body mt-3">
                      Save this ID. You'll need it to track your application.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <Button onClick={handleReset} variant="outline" size="lg" className="flex-1 font-body">
                      Check Another
                    </Button>
                    <Button asChild size="lg" className="flex-1 font-body">
                      <a href="/contact">Talk to an Advisor</a>
                    </Button>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <InfoCard
                icon={<Clock className="w-5 h-5 text-white" />}
                iconBg="bg-gradient-coral"
                title="48-Hour Disbursal"
                desc="From application to funds in your account — under two days."
              />
              <InfoCard
                icon={<ShieldCheck className="w-5 h-5 text-white" />}
                iconBg="bg-gradient-mint"
                title="Soft Credit Check"
                desc="Eligibility check is fully soft. Zero impact on your credit score."
              />
              <InfoCard
                icon={<Sparkles className="w-5 h-5 text-white" />}
                iconBg="bg-gradient-lavender"
                title="AI Underwriting"
                desc="Our model uses 200+ signals to give you a fair, fast decision."
              />

              <div className="clay-surface-sm p-5">
                <p className="font-display font-semibold text-foreground mb-3 text-sm tracking-tight">
                  Eligibility basics
                </p>
                <ul className="space-y-2 text-sm font-body text-muted-foreground">
                  <li className="flex gap-2"><span className="text-primary">•</span> Business vintage 1+ years</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Monthly revenue ≥ ₹50,000</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Loan range ₹5L – ₹50L</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Property owner with valid KYC</li>
                </ul>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const Field = ({
  label,
  error,
  htmlFor,
  children,
}: {
  label: string;
  error?: string;
  htmlFor?: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-1.5">
    <Label htmlFor={htmlFor} className="font-body text-sm text-foreground">
      {label}
    </Label>
    {children}
    {error && <p className="text-xs text-destructive font-body">{error}</p>}
  </div>
);

const InfoCard = ({
  icon,
  iconBg,
  title,
  desc,
}: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  desc: string;
}) => (
  <div className="clay-surface-sm p-5">
    <div className={`w-10 h-10 rounded-2xl ${iconBg} shadow-clay-sm flex items-center justify-center mb-3`}>
      {icon}
    </div>
    <p className="font-display font-semibold text-foreground text-sm tracking-tight mb-1">{title}</p>
    <p className="text-xs font-body text-muted-foreground leading-relaxed">{desc}</p>
  </div>
);

export default Eligibility;
