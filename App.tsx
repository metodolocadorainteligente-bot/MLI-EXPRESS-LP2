import React from 'react';
import { Hero } from './components/Hero';
import { EmotionalConnect } from './components/EmotionalConnect';
import { Explanation } from './components/Explanation';
import { RealityCheck } from './components/RealityCheck';
import { Solution } from './components/Solution';
import { AccessContent } from './components/AccessContent';
import { BonusSection } from './components/BonusSection';
import { ClosingStrong } from './components/ClosingStrong';

function App() {
  return (
    <div className="min-h-screen font-sans bg-brand-dark text-white selection:bg-brand-primary selection:text-white scroll-smooth transition-colors duration-500">
      {/* Premium Navbar - Lovable Style */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-brand-dark/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 h-28 flex items-center justify-between">
          <div className="font-display font-black text-3xl tracking-tighter text-white uppercase group cursor-pointer">
            MLI <span className="text-brand-primary group-hover:text-brand-accent transition-colors">EXPRESS</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-12">
             <div className="flex flex-col items-end px-4 border-r border-white/10">
                <span className="text-[9px] text-gray-500 font-bold uppercase tracking-[0.4em] mb-1">Status da Oferta</span>
                <span className="text-xs text-brand-accent font-black uppercase tracking-widest flex items-center gap-2">
                   <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse shadow-glow-accent" />
                   Ativo • VIP
                </span>
             </div>
             
             <button 
               onClick={() => {
                 const el = document.getElementById('pricing');
                 el?.scrollIntoView({ behavior: 'smooth' });
               }}
               className="bg-white text-brand-dark px-10 py-4 rounded-full text-xs font-black tracking-[0.1em] hover:bg-brand-primary hover:text-white transition-all duration-300 uppercase shadow-2xl"
             >
               GARANTIR ACESSO VIP
             </button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <div className="relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none" />
          <EmotionalConnect />
        </div>
        <RealityCheck />
        <Explanation />
        <Solution />
        <AccessContent />
        <BonusSection />
        <div id="pricing" className="relative group">
           <div className="absolute inset-0 bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
           <ClosingStrong />
        </div>
      </main>

      <footer className="py-24 bg-[#060B16] text-center border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="mb-16">
             <h4 className="font-display font-black text-3xl mb-8 tracking-tighter text-white uppercase">MLI <span className="text-brand-primary">EXPRESS</span></h4>
             <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed font-light tracking-wide">
               "Transformando veículos em ativos geradores de renda com segurança absoluta e estratégia de alto nível."
             </p>
          </div>
          <div className="flex flex-col items-center gap-8">
             <div className="flex justify-center gap-12 text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">
                <a href="#" className="hover:text-brand-accent transition-colors">Segurança</a>
                <a href="#" className="hover:text-brand-accent transition-colors">Políticas</a>
                <a href="#" className="hover:text-brand-accent transition-colors">Suporte VIP</a>
             </div>
             <p className="text-gray-700 text-[9px] font-black uppercase tracking-[0.4em]">
               © {new Date().getFullYear()} • MÉTODO LOCADORA INTELIGENTE EXPRESS
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;