import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900 group-hover:text-green-600 transition-colors">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      {isOpen && (
        <div className="pb-5 text-gray-600 leading-relaxed animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqData = [
    {
      question: "Preciso de CNPJ?",
      answer: "Não. O método foi desenvolvido para que pessoas físicas possam alugar seus carros com total segurança e amparo legal."
    },
    {
      question: "É seguro alugar meu carro?",
      answer: "Sim. O método inclui estratégias de blindagem, uso de seguro específico e instalação de rastreador para que você tenha controle total."
    },
    {
      question: "E se acontecer um acidente?",
      answer: "No contrato que disponibilizamos, fica estipulado que o seguro cobre o sinistro e a responsabilidade da franquia é do motorista locatário."
    },
    {
      question: "Tenho só 1 carro. Funciona?",
      answer: "Sim! A grande maioria dos nossos alunos começa com apenas um carro que estava parado ou sendo subutilizado."
    },
    {
      question: "Quanto tempo leva pra começar a ganhar?",
      answer: "A maioria dos alunos consegue colocar o carro para rodar entre 48 e 72 horas após aplicar o passo a passo do método."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Perguntas Frequentes
        </h2>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-6 md:p-8">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};