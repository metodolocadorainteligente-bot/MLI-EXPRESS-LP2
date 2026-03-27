import React from 'react';
import { Button } from './Button';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  const handleCtaClick = () => {
    window.open('https://payfast.greenn.com.br/148623', '_blank');
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-green-500 relative">
            {/* Badge */}
            <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-bl-xl uppercase tracking-wider">
                Oferta Relâmpago
            </div>

          <div className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Método LI Express</h2>
            <p className="text-gray-500 mb-8">Acesso Vitalício + Bônus</p>

            <div className="flex flex-col items-center justify-center mb-8">
               <span className="text-gray-400 line-through text-lg">De R$ 197,00</span> 
               <div className="flex items-baseline gap-1">
                 <span className="text-2xl font-bold text-gray-700">Por apenas</span>
                 <span className="text-6xl font-black text-green-600">R$ 47</span>
               </div>
               <span className="text-sm text-green-600 font-semibold bg-green-100 px-3 py-1 rounded-full mt-2">Pagamento Único</span>
            </div>

            <ul className="text-left space-y-4 mb-10 max-w-xs mx-auto text-gray-600">
                <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span>Método Completo</span>
                </li>
                <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span>Contratos Editáveis</span>
                </li>
                <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span>Estratégia de Segurança</span>
                </li>
                <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span>Suporte a dúvidas</span>
                </li>
            </ul>

            <Button onClick={handleCtaClick} variant="secondary" fullWidth className="text-xl py-6 animate-pulse">
              Quero acessar agora por só R$ 47
            </Button>
            
            <p className="mt-6 text-xs text-gray-500 italic">
              "Menos do que uma refeição. Mais do que uma renda toda semana."
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
            <img src="https://picsum.photos/seed/payment/200/30" alt="Payment methods" className="h-6 mx-auto opacity-50 grayscale" />
          </div>
        </div>
      </div>
    </section>
  );
};