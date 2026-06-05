"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Globe, Zap, Layers } from "lucide-react";

const features = [
  {
    icon: <Zap className="text-lemon" size={24} />,
    title: "Sub-Millisecond Execution",
    desc: "Every routing optimization uses low-latency pipelines to ensure automated spot actions clear with zero margin slippage."
  },
  {
    icon: <BarChart3 className="text-mint" size={24} />,
    title: "Predictive Capital Flows",
    desc: "Machine intelligence maps structural operational spend patterns to forecast optimal yield distributions."
  },
  {
    icon: <Layers className="text-lemon" size={24} />,
    title: "Omni-Custodial Framework",
    desc: "Consolidate global institutional banking facilities, alternative digital assets, and cash reserves in one single container."
  },
  {
    icon: <Globe className="text-mint" size={24} />,
    title: "Borderless FX Settlement",
    desc: "Instantly liquidate cross-border positions via multi-currency settlement chains without high banking overhead."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-28 relative border-t border-forest-mid/50 bg-[#040e09]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-xs font-bold text-lemon uppercase tracking-widest block mb-3">System Capabilities</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Engineered to outpace legacy setups.
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm md:text-base">
            Ditch complex multi-platform accounting. Our operational architecture runs continuously, giving you deep visibility into every financial move.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, borderColor: "rgba(204,255,0,0.3)" }}
              className="bg-forest-mid/30 border border-forest-mid/60 rounded-2xl p-6 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="p-3 bg-forest-dark rounded-xl inline-block mb-6 border border-forest-mid/40">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-lemon transition-colors">
                  {feat.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
              
              <div className="mt-8 pt-4 border-t border-forest-mid/20 flex items-center justify-between text-xs font-semibold text-gray-500 group-hover:text-lemon transition-colors">
                <span>View Engine Specs</span>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}