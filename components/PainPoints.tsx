import React from 'react';
import { TrendingDown, AlertCircle, XCircle } from 'lucide-react';

export const PainPoints: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Você já percebeu que, mesmo parado, seu carro continua gerando despesas?
          </h2>
          <p className="text-xl text-gray-600">
            IPVA, seguro, revisão, desvalorização… tudo isso sem você usar o carro de verdade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left: The Problem */}
          <div className="bg-red-50 p-8 rounded-2xl border border-red-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-red-100 rounded-full blur-2xl opacity-50"></div>
            <h3 className="text-2xl font-bold text-red-700 mb-6 flex items-center gap-2">
              <TrendingDown className="w-6 h-6" />
              O Custo do Carro Parado
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-700">
                <XCircle className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                <span>Dinheiro saindo do bolso todo mês com manutenção e impostos.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <XCircle className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                <span>Desvalorização anual comendo o valor do seu bem.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <XCircle className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                <span>Carro ocupando espaço na garagem sem utilidade.</span>
              </li>
            </ul>
          </div>

          {/* Right: The Opportunity */}
          <div className="relative">
            <div className="bg-gray-900 p-8 rounded-2xl text-white shadow-xl transform md:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2">
                <AlertCircle className="w-6 h-6" />
                A Oportunidade Real
              </h3>
              <p className="mb-6 text-gray-300 leading-relaxed">
                Enquanto isso, <strong>milhares de motoristas de aplicativo</strong> estão todos os dias procurando carros pra alugar. Eles estão cansados das grandes locadoras por causa de taxas altas e burocracia.
              </p>
              <div className="bg-green-600/20 border border-green-500/30 p-4 rounded-lg">
                <p className="font-semibold text-green-100">
                  É aí que você entra: com o <span className="text-white font-bold">Método LI Express</span>, seu carro começa a te dar retorno em vez de prejuízo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};