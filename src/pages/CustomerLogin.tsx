import Layout from "@/components/Layout";
import AIFloatingElements, { AIBadge } from "@/components/AIFloatingElements";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, CreditCard } from "lucide-react";

const CustomerLogin = () => (
  <Layout>
    <section className="pt-24 pb-8 md:pt-32 md:pb-10 bg-hero relative overflow-hidden">
      <AIFloatingElements />
      <div className="container mx-auto px-5 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <AIBadge label="Customer Portal" />
          <h1 className="font-display text-3xl md:text-6xl font-bold text-foreground mt-4 mb-3">Customer Login</h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl">Manage EMIs, download statements and raise service requests.</p>
        </motion.div>
      </div>
    </section>
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-5 max-w-4xl grid md:grid-cols-2 gap-6">
        <div className="clay-surface p-6 md:p-8 relative">
          <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-primary to-accent opacity-40 rounded-full" />
          <div className="flex items-center gap-2 mb-4"><Lock className="text-primary" size={16} /><h2 className="font-display text-lg font-bold">Sign in</h2></div>
          <div className="space-y-4">
            <Input placeholder="Loan account number" />
            <Input placeholder="Registered mobile" />
            <Button className="w-full rounded-full">Send OTP</Button>
          </div>
        </div>
        <div className="clay-surface p-6 md:p-8 relative">
          <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-accent to-[hsl(var(--color-coral))] opacity-40 rounded-full" />
          <div className="flex items-center gap-2 mb-4"><CreditCard className="text-accent" size={16} /><h2 className="font-display text-lg font-bold">Quick Pay</h2></div>
          <p className="text-xs md:text-sm text-muted-foreground mb-4">Pay an EMI without logging in.</p>
          <div className="space-y-4">
            <Input placeholder="Loan account number" />
            <Input placeholder="Amount (₹)" />
            <Button variant="outline" className="w-full rounded-full">Pay Now</Button>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
export default CustomerLogin;
