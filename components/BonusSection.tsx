import React from 'react';
import { motion } from 'framer-motion';
import { BONUS } from '../constants';
import { Sparkles } from 'lucide-react';

export const BonusSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#070B14] relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 md:p-14 glass-card border-brand-primary/30 bg-brand-primary/[0.03] shadow-glow-primary relative text-center group overflow-hidden"
        >
          <div className="absolute inset-0 bg-brand-primary/5 blur-3xl group-hover:bg-brand-primary/10 transition-colors" />
          
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-3 md:px-10 md:py-4 bg-brand-primary text-white font-black text-[10px] md:text-xs flex items-center gap-2 md:gap-4 uppercase tracking-[0.3em] md:tracking-[0.4em] rounded-full shadow-glow-primary">
            <Sparkles className="w-4 h-4 text-white animate-pulse" />
            PRESENTE EXCLUSIVO VIP
          </div>
          
          <div className="pt-12 relative z-10">
            <p className="text-brand-accent font-display font-black tracking-[0.4em] mb-8 uppercase text-[10px]">{BONUS.title}</p>
            <h3 className="text-2xl md:text-5xl font-display font-black text-white mb-8 md:mb-10 leading-[1.1] uppercase tracking-tighter">
              {BONUS.name}
            </h3>
            
            <div className="flex flex-col items-center gap-8">
              <span className="text-2xl text-gray-600 line-through uppercase tracking-[0.2em] font-black">R$ 47,00</span>
              <span className="text-xl md:text-3xl text-brand-primary font-display font-black px-8 py-4 md:px-12 md:py-5 bg-brand-primary/10 border border-brand-primary/30 uppercase tracking-tighter rounded-xl md:rounded-2xl shadow-glow-primary">
                CUSTO ZERO HOJE
              </span>
            </div>
            
            <p className="mt-10 md:mt-14 text-gray-400 text-sm md:text-base font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
              Este guia foi criado para blindar seu investimento e garantir que você já comece lucrando na primeira semana com estratégia absoluta.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
