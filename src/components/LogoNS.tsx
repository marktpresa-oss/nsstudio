import React from 'react';
import logoImg from '../../assets/logo.png';

interface LogoNSProps {
  variant?: 'full' | 'compact' | 'symbol-only' | 'horizontal';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const LogoNS: React.FC<LogoNSProps> = ({
  variant = 'full',
  className = '',
  size = 'md'
}) => {
  // Responsive height sizing
  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-18',
    xl: 'h-20 sm:h-28'
  };

  const imageSrc = logoImg || '/assets/logo.png';

  // If symbol-only requested, display symbol emblem wrapper
  if (variant === 'symbol-only') {
    return (
      <div className={`relative inline-flex items-center justify-center flex-shrink-0 ${className}`}>
        <div className={`aspect-square overflow-hidden rounded-full ${heightClasses[size]} border border-amber-500/30 p-1 bg-black/60 shadow-[0_0_20px_rgba(212,175,55,0.25)] flex items-center justify-center`}>
          <img
            src={imageSrc}
            alt="NS Studio Emblem"
            className="h-full w-auto max-w-none object-cover object-left mix-blend-screen"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center relative flex-shrink-0 ${className}`}>
      <img
        src={imageSrc}
        alt="NS STUDIO • ESTRATÉGIA • MARCAS • RESULTADOS • GRUPO NS"
        className={`${heightClasses[size]} w-auto object-contain mix-blend-screen drop-shadow-[0_4px_20px_rgba(212,175,55,0.3)] transition-all duration-300 hover:brightness-110`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
