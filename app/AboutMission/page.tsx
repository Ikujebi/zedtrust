"use client";

import { motion } from "framer-motion";
import { Eye, Target, Award } from "lucide-react";

export default function AboutMission() {
  return (
    <section id="about" className="py-28 relative max-w-7xl mx-auto px-6">
      {/* About Executive Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <span className="text-xs font-bold text-lemon uppercase tracking-widest block mb-3">Who We Are</span>
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tight mb-6">
            Institutional caliber.<br />Fintech velocity.
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
            Founded by quantitative developers and financial compliance experts, ZEDTRUST was created out of frustration with slow bank settlement speeds and messy internal ledgers.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            Today, we power corporate treasuries, asset managers, and scaling firms worldwide. We provide tools that turn financial data from a backward-looking report into a forward-looking strategy.
          </p>
        </div>
        
        <div className="glass-panel p-8 rounded-3xl relative overflow-hidden border border-lemon/10">
          <div className="absolute top-0 right-0 w-48 h-48 bg-lemon/5 rounded-full blur-3xl" />
          <h3 className="text-sm font-bold tracking-wider text-lemon uppercase mb-6">Consolidated Ecosystem Numbers</h3>
          
          <div className="space-y-6">
            {[
              { label: "Quarterly Clearing Volume", val: "$14.8B", percentage: 94 },
              { label: "Client Automated Retainage", val: "$2.1B", percentage: 78 },
              { label: "Liquidity Resilience Ratio", val: "99.99%", percentage: 99 }
            ].map((metric, index) => (
              <div key={index}>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-gray-300">{metric.label}</span>
                  <span className="text-lemon font-mono">{metric.val}</span>
                </div>
                <div className="h-1.5 w-full bg-forest-dark rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${metric.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="h-full bg-gradient-to-r from-forest-mid to-lemon"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategic Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#030b06] border border-forest-mid p-8 rounded-2xl">
          <div className="p-3 bg-lemon/10 text-lemon rounded-xl inline-block mb-6">
            <Target size={22} />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Our Core Mission</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            To strip away legacy financial friction. We give scaling companies clear visibility, lower transactional overhead, and the tools to make high-impact capital decisions with complete confidence.
          </p>
        </div>

        <div className="bg-[#030b06] border border-forest-mid p-8 rounded-2xl">
          <div className="p-3 bg-mint/10 text-mint rounded-xl inline-block mb-6">
            <Eye size={22} />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">The Architectural Vision</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            To build the global standard layout where multi-currency assets, alternative treasury items, and corporate credit channels work together inside a fast, unified dashboard.
          </p>
        </div>

        <div className="bg-[#030b06] border border-forest-mid p-8 rounded-2xl">
          <div className="p-3 bg-lemon/10 text-lemon rounded-xl inline-block mb-6">
            <Award size={22} />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Operational Values</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Total transparency, strict data privacy, and clean developer engineering. We treat code quality with the same seriousness as financial regulatory standards.
          </p>
        </div>
      </div>
    </section>
  );
}