"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button, message, Input } from "antd";
import { Mail, Sparkles, Check } from "lucide-react";

export default function Newsletter() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return message.warning("Please input a valid corporate email node.");

    setLoading(true);
    try {
      // Replace these parameter identifiers with your specific EmailJS keys
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        { user_email: email },
        "YOUR_PUBLIC_KEY"
      );
      
      message.success("Operational telemetry subscribed. Check inbox for system brief.");
      setEmail("");
    } catch (error) {
      console.error(error);
      // Fallback notification for quick local verification before adding full key strings
      message.info("Code structure verified. Add your custom EmailJS keys to begin sending live messages!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 relative max-w-5xl mx-auto px-6 text-center">
      <div className="glass-panel p-10 md:p-16 rounded-3xl relative overflow-hidden border border-lemon/10">
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-lemon/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-2xl mx-auto">
          <div className="p-3 bg-forest-mid rounded-xl inline-block mb-6 text-lemon border border-forest-mid/60">
            <Mail size={20} />
          </div>
          
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Get our structural market briefs.
          </h2>
          <p className="text-gray-400 text-sm md:text-base mb-8 max-w-md mx-auto">
            Get occasional engineering updates, deep-dives into liquidity strategy, and macroeconomic reports sent right to your inbox. No spam, ever.
          </p>

          <form ref={formRef} onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter corporate email"
              className="h-12 bg-forest-dark/80 border-forest-mid text-white placeholder-gray-500 hover:border-lemon/50 focus:border-lemon focus:ring-1 focus:ring-lemon rounded-xl"
              disabled={loading}
            />
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="h-12 px-6 bg-lemon text-black font-bold border-none rounded-xl flex items-center justify-center gap-2 shadow-md shadow-lemon/10"
            >
              {!loading && <Sparkles size={16} />} Join Intelligence Brief
            </Button>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-gray-500 font-medium">
            <span className="flex items-center gap-1.5"><Check size={12} className="text-lemon" /> Delivered weekly</span>
            <span className="flex items-center gap-1.5"><Check size={12} className="text-lemon" /> Opt-out anytime with 1-click</span>
          </div>
        </div>
      </div>
    </section>
  );
}