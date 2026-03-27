import React from 'react';
import { Check, Car, TrendingUp } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  const audience = [
    "Tem um carro parado na garagem?",
    "Usa o carro só de vez em quando?",
    "Tem um segundo carro sem uso?",
    "Quer uma renda extra sem precisar dirigir?"
  ];

  return (
    <section className="py-20 bg-secondary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/2 w-full">
            {/* Recreated Visual of the provided Image: Car + Graph + Logo */}
            <div className="bg-white rounded-3xl shadow-[0_0_40px_rgba(16,185,129,0.2)] border-4 border-slate-700 p-8 md:p-12 relative overflow-hidden flex flex-col items-center justify-center min-h-[350px] group transition-transform duration-500 hover:scale-[1.02]">
              
              {/* Decorative Background Grid */}
              <div className="absolute inset-0 bg-slate-50 opacity-40" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative mb-6">
                   {/* Graph Arrow Background */}
                   <div className="absolute -right-8 -top-12 z-0 animate-pulse">
                      <TrendingUp size={160} className="text-green-500 opacity-20 transform rotate-6" strokeWidth={3} />
                   </div>
                   
                   {/* Main Composition */}
                   <div className="relative z-10">
                      <Car size={140} className="text-[#0f3b57] drop-shadow-xl" strokeWidth={1.5} />
                      
                      {/* Overlay Graph */}
                      <div className="absolute -right-6 -top-6 bg-white rounded-2xl p-2 shadow-lg border border-green-100">
                        <TrendingUp size={80} className="text-green-500" strokeWidth={3} />
                      </div>
                   </div>
                </div>

                {/* Logo Badge */}
                <div className="flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-xl shadow-2xl border-b-4 border-green-500 transform -rotate-1">
                  <div className="bg-green-500 text-white font-black text-xl px-3 py-1 rounded-lg">LI</div>
                  <span className="text-2xl font-bold tracking-tight">Express</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Para quem é o Método LI Express?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Se você respondeu <span className="text-green-400 font-bold">"sim"</span> a pelo menos uma das perguntas abaixo, este método foi desenhado exatamente para sua realidade.
            </p>
            
            <ul className="space-y-4">
              {audience.map((item, index) => (
                <li key={index} className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-green-500/50 transition-colors">
                  <div className="bg-green-500 rounded-full p-1 shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};