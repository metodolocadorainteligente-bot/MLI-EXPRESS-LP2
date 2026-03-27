import React from 'react';
import { BookOpen, FileText, Shield, Smartphone } from 'lucide-react';

export const Modules: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 uppercase tracking-tighter">
            Conteúdo que Gera <span className="text-brand-orange">Resultado:</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 font-light italic">Tudo com linguagem simples, sem enrolação, direto ao ponto.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { icon: BookOpen, title: "6 Módulos Práticos", desc: "Passo a passo completo, do zero ao primeiro aluguel recebido." },
            { icon: FileText, title: "Modelos Prontos", desc: "Copie e cole: Contratos validados, anúncios atrativos e checklists de vistoria." },
            { icon: Shield, title: "Estratégia Blindada", desc: "Segredos para rodar com segurança total desde o primeiro dia." },
            { icon: Smartphone, title: "Gestão Mobile", desc: "Aprenda a gerenciar seus recebimentos e o motorista pelo celular." }
          ].map((item, i) => (
            <div key={i} className="bg-white/[0.02] p-10 border border-white/5 hover:border-brand-orange/30 transition-all group">
              <item.icon className="w-12 h-12 text-brand-orange mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase tracking-tight">{item.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};