import React from 'react';
import { motion } from 'framer-motion';
import { EMOTIONAL_CONNECT } from '../constants';

export const EmotionalConnect = () => {
  return (
    <section className="py-16 md:py-28 bg-[#0B1120] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-display font-black text-white mb-8 md:mb-12 leading-[1.1] uppercase tracking-tighter"
          >
            {EMOTIONAL_CONNECT.title}
          </motion.h2>

          <p className="text-base md:text-xl text-gray-400 mb-10 md:mb-16 font-light leading-relaxed max-w-3xl mx-auto px-2">
            {EMOTIONAL_CONNECT.subtitle}
          </p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-14 glass-card border-brand-primary/30 bg-brand-primary/[0.03] shadow-glow-primary relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-brand-primary/5 blur-3xl group-hover:bg-brand-primary/10 transition-colors" />
            <p className="text-xl md:text-3xl font-display font-black text-white leading-tight uppercase tracking-tight relative z-10">
              {EMOTIONAL_CONNECT.pivot}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
