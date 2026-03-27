import React, { useEffect, useState } from 'react';
import { Button } from './Button';

export const StickyCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 500px)
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCtaClick = () => {
    window.open('https://payfast.greenn.com.br/148623', '_blank');
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden animate-fade-in-up">
      <Button onClick={handleCtaClick} variant="primary" fullWidth className="py-3 text-base">
        Quero lucrar com meu carro
      </Button>
    </div>
  );
};