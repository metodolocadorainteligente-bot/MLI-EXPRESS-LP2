import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-slate-900 rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <div className="shrink-0">
            <ShieldCheck className="w-24 h-24 text-green-400" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Garantia Blindada de 7 Dias</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Você tem 7 dias para explorar o método. Se achar que não é pra você, ou se não gostar da minha voz, é só pedir o reembolso. Devolvemos 100% do seu dinheiro. Sem perguntas.
            </p>
            <div className="flex items-center gap-4 text-sm font-semibold text-green-400">
               <span>🚫 Risco Zero</span>
               <span>🚀 Chance Gigante</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};