import React from 'react';
import { motion } from 'framer-motion';
import { CLOSING_STRONG, CONFIG } from '../constants';
import { ShieldCheck } from 'lucide-react';

export const ClosingStrong = () => {
  return (
    <section className="py-20 md:py-32 bg-[#070B14] text-center border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <h2 className="text-2xl md:text-6xl font-display font-black text-white mb-6 md:mb-10 leading-[1.05] uppercase tracking-tighter">
          {CLOSING_STRONG.title}
        </h2>
        <p className="text-lg md:text-3xl text-gradient font-display font-black mb-10 md:mb-16 uppercase tracking-tight max-w-4xl mx-auto px-2">
          {CLOSING_STRONG.subtitle}
        </p>
        
        <div className="flex flex-col items-center gap-8 md:gap-14">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(59, 130, 246, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = CONFIG.checkoutLink}
              className="pill-button bg-brand-primary text-white text-sm md:text-xl px-10 py-6 md:px-16 md:py-8 shadow-glow-primary uppercase tracking-[0.1em] font-black"
            >
              ATIVAR MEU ACESSO VIP AGORA
            </motion.button>
            
            <p className="text-gray-500 font-light max-w-2xl mx-auto text-sm md:text-base leading-relaxed tracking-wide px-2">
              Não deixe seu carro ser apenas uma despesa. Transforme-o em um ativo gerador de lucro semanal em tempo recorde.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 cursor-default">
               <span className="text-[11px] font-black uppercase tracking-[0.5em] text-white">VISA</span>
               <span className="text-[11px] font-black uppercase tracking-[0.5em] text-white">MASTERCARD</span>
               <span className="text-[11px] font-black uppercase tracking-[0.5em] text-white">PIX</span>
               <div className="w-px h-6 bg-white/20" />
               <div className="flex items-center gap-2 text-[10px] uppercase font-black tracking-widest text-brand-accent">
                  <ShieldCheck className="w-4 h-4" />
                  Blindado
               </div>
            </div>
        </div>
      </div>
    </section>
  );
};
