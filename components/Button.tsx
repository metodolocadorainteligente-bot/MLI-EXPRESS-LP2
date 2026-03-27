import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 transform hover:-translate-y-1 rounded-lg px-6 py-4 text-lg shadow-lg";
  
  const variants = {
    primary: "bg-green-600 hover:bg-green-500 text-white shadow-green-600/30 border-b-4 border-green-800 active:border-b-0 active:translate-y-0",
    secondary: "bg-red-600 hover:bg-red-500 text-white shadow-red-600/30 border-b-4 border-red-800 active:border-b-0 active:translate-y-0",
    outline: "border-2 border-white text-white hover:bg-white/10",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <ArrowRight className="w-5 h-5" />
    </button>
  );
};