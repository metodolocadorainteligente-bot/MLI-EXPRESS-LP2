import React from 'react';
import { motion } from 'framer-motion';
import { EXPLANATION } from '../constants';
import { CheckCircle2, XCircle } from 'lucide-react';

export const Explanation = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0B1120] border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-2xl md:text-5xl font-display font-black text-white mb-4 md:mb-6 uppercase tracking-tighter">
              {EXPLANATION.title}
            </h2>
            <p className="text-sm md:text-xl text-brand-primary font-display font-black uppercase tracking-widest">
              {EXPLANATION.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {EXPLANATION.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 md:p-10 text-center group hover:border-brand-primary/40 transition-all duration-500"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 border border-brand-primary/20 group-hover:shadow-glow-primary transition-all">
                  <CheckCircle2 className="w-8 h-8 text-brand-primary" />
                </div>
                <h4 className="text-lg md:text-xl font-display font-black text-white mb-4 uppercase tracking-tight">
                  {item.title}
                </h4>
                <p className="text-gray-400 font-light text-sm uppercase tracking-[0.2em] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
