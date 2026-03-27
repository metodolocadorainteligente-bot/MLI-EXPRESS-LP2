import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-gray-400 py-12 text-center text-sm border-t border-gray-800">
      <div className="container mx-auto px-4">
        <p className="mb-4">&copy; {new Date().getFullYear()} Método LI Express. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-4">
            <span>Termos de Uso</span>
            <span>Políticas de Privacidade</span>
        </div>
        <p className="mt-8 text-xs text-gray-600 max-w-md mx-auto">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.
        </p>
      </div>
    </footer>
  );
};