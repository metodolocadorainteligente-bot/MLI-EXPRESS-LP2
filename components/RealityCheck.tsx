import React from 'react';
import { motion } from 'framer-motion';
import { REALITY_CHECK } from '../constants';
import { AlertCircle, XCircle } from 'lucide-react';

export const RealityCheck = () => {
  return (
    <section className="py-16 md:py-24 bg-[#060B16] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl text-center relative z-10">
        <h2 className="text-2xl md:text-5xl font-display font-black text-white mb-8 md:mb-12 uppercase tracking-tighter">
          {REALITY_CHECK.title}
        </h2>
        
        <p className="text-lg md:text-2xl font-display font-black text-red-500 uppercase tracking-tight mb-10 md:mb-16 max-w-4xl mx-auto leading-tight">
          {REALITY_CHECK.warning}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-14 md:mb-20 text-left">
          {REALITY_CHECK.consequences.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 md:p-10 border-white/5 hover:border-red-500/30 transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-8 border border-red-500/20 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all">
                <XCircle className="w-7 h-7 text-red-500" />
              </div>
              <h4 className="text-lg md:text-xl font-display font-black text-white mb-3 uppercase tracking-tight">
                {item.title}
              </h4>
              <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="inline-block px-8 py-5 md:px-12 md:py-8 glass-card border-brand-accent/40 bg-brand-accent/[0.03] shadow-glow-accent text-brand-accent font-display font-black text-xl md:text-3xl uppercase tracking-tighter"
        >
          {REALITY_CHECK.result}
        </motion.div>
      </div>
    </section>
  );
};
