import React from 'react';
import { motion } from 'framer-motion';
import { SOLUTION } from '../constants';

export const Solution = () => {
  return (
    <section className="py-20 md:py-32 bg-[#070B14] relative overflow-hidden text-center border-y border-white/5">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none" />
       
       <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
             <span className="text-brand-accent font-black tracking-[0.5em] uppercase text-[10px] mb-8 block opacity-80">A SOLUÇÃO DEFINITIVA</span>
             <h2 className="text-3xl md:text-6xl font-display font-black text-white mb-6 md:mb-10 leading-[1.05] uppercase tracking-tighter">
               {SOLUTION.title}
             </h2>
             <p className="text-lg md:text-2xl text-gray-400 font-display font-black max-w-3xl mx-auto leading-relaxed uppercase tracking-tight px-2">
               {SOLUTION.subtitle}
             </p>
          </motion.div>
       </div>
    </section>
  );
};
