import { type ReactNode } from 'react';

interface CornerFrameProps {
  children: ReactNode;
  className?: string;
}

export default function CornerFrame({ children, className = '' }: CornerFrameProps) {
  return (
    <div className={`relative p-5 rounded-2xl aero-glass overflow-hidden ${className}`}>
      {/* Gel shine */}
      <div className="gel-surface absolute inset-0 rounded-2xl pointer-events-none z-10" />

      {/* Corner greeble accents */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-aero-cyan/40 rounded-tl-lg pointer-events-none z-20" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-aero-cyan/40 rounded-tr-lg pointer-events-none z-20" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-aero-cyan/40 rounded-bl-lg pointer-events-none z-20" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-aero-cyan/40 rounded-br-lg pointer-events-none z-20" />

      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
}
