import React from 'react';
import { motion } from 'framer-motion';
import { ACCESS_CONTENT, CONFIG } from '../constants';
import { ShieldCheck, ChevronRight } from 'lucide-react';

export const AccessContent = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0B1120] relative border-t border-white/5">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-24">
          <h2 className="text-2xl md:text-5xl font-display font-black text-white mb-6 md:mb-8 uppercase tracking-tighter">
            O QUE VOCÊ VAI <span className="text-gradient">RECEBER:</span>
          </h2>
        </div>

        <div className="grid gap-4 md:gap-6 mb-16 md:mb-24">
          {ACCESS_CONTENT.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-5 md:p-8 flex items-start md:items-center gap-4 md:gap-8 group hover:border-brand-primary/40 transition-all duration-300"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-brand-primary/10 flex items-center justify-center shrink-0 border border-brand-primary/20 group-hover:shadow-glow-primary transition-all mt-1 md:mt-0">
                 <ShieldCheck className="w-5 h-5 md:w-7 md:h-7 text-brand-primary" />
              </div>
              <div className="text-left">
                <h4 className="text-base md:text-xl font-display font-black text-white mb-1 uppercase tracking-tight">
                  {item.title}
                </h4>
                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Card Premium - Lovable Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-6 bg-brand-primary/20 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity rounded-[50px]" />
          
          <div className="relative p-8 md:p-16 text-center bg-[#0F172A] rounded-[24px] md:rounded-[40px] border border-white/10 shadow-2xl overflow-hidden">
             {/* Abstract Glows */}
             <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full" />
             <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-brand-accent/5 blur-[120px] rounded-full" />

             <h3 className="text-sm font-black uppercase tracking-[0.5em] mb-8 text-brand-accent">Investimento Premium VIP</h3>
             
             <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-10 md:mb-14">
               <span className="text-2xl font-light line-through text-gray-600 font-display">R$ 497</span>
               <div className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter leading-none">
                 R$ {CONFIG.price}
               </div>
             </div>
             
             <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               onClick={() => window.location.href = CONFIG.checkoutLink}
               className="pill-button bg-white text-brand-dark px-10 py-6 md:px-16 md:py-8 text-base md:text-xl font-black shadow-2xl mb-8 md:mb-10 w-full md:w-auto uppercase tracking-widest hover:bg-brand-primary hover:text-white transition-all duration-300"
             >
               QUERO O MÉTODO COMPLETO
             </motion.button>
             
             <div className="flex flex-wrap justify-center gap-10 text-[11px] font-black text-gray-500 uppercase tracking-[0.3em]">
                <span className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-brand-accent" /> Acesso Vitalício</span>
                <span className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-brand-accent" /> Suporte VIP</span>
                <span className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-brand-accent" /> 7 Dias de Garantia</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
