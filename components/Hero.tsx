import React from 'react';
import { motion } from 'framer-motion';
import { HERO_CONTENT, CONFIG } from '../constants';
import { ChevronRight, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-mesh">
      {/* Dynamic Radial Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-primary/10 blur-[150px] rounded-full animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-accent/5 blur-[150px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-3 px-5 py-2 mb-12 text-[10px] font-black tracking-[0.4em] text-brand-accent uppercase bg-white/5 border border-white/10 rounded-full">
            <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse shadow-glow-accent" />
            VAGAS VIP • ACESSO IMEDIATO
          </span>
          
          <h1 className="text-2xl md:text-6xl font-display font-black mb-8 md:mb-12 leading-[1.1] text-white uppercase max-w-6xl mx-auto tracking-tighter">
            VOCÊ TRABALHA <br />
            O DIA INTEIRO E AINDA <br />
            <span className="text-gradient">DEPENDE SÓ DE VOCÊ</span> <br />
            PARA GANHAR DINHEIRO?
          </h1>
          
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 md:mb-20 leading-relaxed font-light tracking-wide px-2">
            {HERO_CONTENT.subHeadline}
          </p>

          <div className="flex flex-col items-center gap-8 md:gap-12">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(59, 130, 246, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = CONFIG.checkoutLink}
              className="pill-button bg-brand-primary text-white text-sm md:text-xl px-10 py-6 md:px-16 md:py-8 shadow-glow-primary flex items-center gap-4 uppercase tracking-[0.1em] group"
            >
              {HERO_CONTENT.cta}
              <ChevronRight className="w-5 h-5 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform" />
            </motion.button>
            
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 text-[10px] md:text-[11px] font-black text-gray-500 uppercase tracking-[0.3em]">
               <div className="flex items-center gap-3">
                 <Zap className="w-4 h-4 text-brand-accent" />
                 Acesso Vitalício
               </div>
               <div className="w-px h-6 bg-white/10" />
               <div className="flex items-center gap-3">
                 <Zap className="w-4 h-4 text-brand-accent" />
                 Garantia Blindada
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};