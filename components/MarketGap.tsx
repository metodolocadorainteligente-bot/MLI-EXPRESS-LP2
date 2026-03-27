import React from 'react';

export const MarketGap: React.FC = () => {
  return (
    <section className="py-20 bg-indigo-900 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Por que os motoristas vão implorar pelo seu carro?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-red-300 mb-4 border-b border-white/10 pb-4">
                Nas Locadoras Tradicionais
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-red-400 font-bold">✕</span> Cauções Altíssimas
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-red-400 font-bold">✕</span> Contratos Complicados
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-red-400 font-bold">✕</span> Demora na liberação
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="text-red-400 font-bold">✕</span> Taxas Escondidas
                </li>
              </ul>
            </div>

            <div className="bg-green-600 p-8 rounded-2xl shadow-xl transform md:-translate-y-4">
              <h3 className="text-xl font-bold text-white mb-4 border-b border-white/20 pb-4">
                Com Você (LI Express)
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 font-medium">
                  <span className="bg-white text-green-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">✓</span>
                  Alternativa Ágil
                </li>
                <li className="flex items-center gap-3 font-medium">
                  <span className="bg-white text-green-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">✓</span>
                  Acessível e Humana
                </li>
                <li className="flex items-center gap-3 font-medium">
                  <span className="bg-white text-green-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">✓</span>
                  Seguro para ambos
                </li>
                <li className="flex items-center gap-3 font-medium">
                  <span className="bg-white text-green-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">✓</span>
                  Transformação de despesa em renda
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};