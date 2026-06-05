// src/components/Hero.tsx
"use client";
import { motion } from "framer-motion";
import { Button } from "antd";
import { ArrowUpRight, ShieldCheck, TrendingUp, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Decorative Green Glow Blurs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lemon/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-glow/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="text-center max-w-4xl z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-mid border border-lemon/20 text-lemon text-xs font-semibold mb-6 tracking-wide uppercase"
        >
          <Zap size={14} /> Next-Gen AI Financial Architecture
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
        >
          Master your money with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lemon to-mint">
            Absolute Precision.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A world-class ecosystem engineered to automate budgeting, track multi-currency assets, and scale corporate liquidity under impenetrable security.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button type="primary" size="large" className="h-14 px-8 text-base bg-lemon text-black border-none font-bold shadow-lg shadow-lemon/20 flex items-center gap-2">
            Launch System <ArrowUpRight size={18} />
          </Button>
          <Button size="large" className="h-14 px-8 text-base border-gray-700 text-white hover:border-lemon hover:text-lemon transition-colors">
            Book Demo
          </Button>
        </motion.div>
      </div>

      {/* Quick Stats Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 z-10 px-4"
      >
        {[
          { icon: <TrendingUp className="text-lemon" />, label: "Assets Under Management", val: "$4.2B+" },
          { icon: <ShieldCheck className="text-mint" />, label: "Security Compliances", val: "SOC2 Type II" },
          { icon: <Zap className="text-lemon" />, label: "Transaction Latency", val: "< 12ms" },
        ].map((stat, idx) => (
          <div key={idx} className="glass-panel p-6 rounded-2xl flex items-center gap-4">
            <div className="p-3 rounded-xl bg-forest-mid">{stat.icon}</div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{stat.label}</p>
              <h3 className="text-2xl font-bold text-white mt-1">{stat.val}</h3>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}