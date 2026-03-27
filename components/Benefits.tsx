import React from 'react';
import { CheckCircle2, Lock, Clock, DollarSign, Smartphone, FileCheck } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: "Segurança Total",
      description: "Alugue com segurança usando contratos blindados e rastreadores, mesmo como pessoa física."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: "Renda Previsível",
      description: "Receba de R$ 550 a R$ 750 toda semana via PIX. Uma renda extra constante."
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: "Rápido de Começar",
      description: "Ative sua renda em até 72 horas, mesmo sem experiência prévia."
    },
    {
      icon: <FileCheck className="w-8 h-8 text-green-500" />,
      title: "Sem Burocracia",
      description: "Esqueça a complexidade das grandes locadoras. Processo simples e direto."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-green-500" />,
      title: "Tudo pelo Celular",
      description: "Gerencie tudo sem sair de casa, usando apenas seu smartphone."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-green-500" />,
      title: "Motoristas Verificados",
      description: "Aprenda a encontrar motoristas confiáveis e prontos para rodar."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que você vai desbloquear
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforme seu veículo em um ativo financeiro com o Método LI Express.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};