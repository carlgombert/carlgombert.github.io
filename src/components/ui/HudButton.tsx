import { type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface HudButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  orb?: boolean;
}

export default function HudButton({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  orb = false,
  className = '',
  ...props
}: HudButtonProps) {
  if (orb) {
    return (
      <motion.button
        whileHover={{ scale: 1.08, boxShadow: '0 6px 24px rgba(34,211,238,0.35), inset 0 0 15px rgba(255,255,255,0.6)' }}
        whileTap={{ scale: 0.95 }}
        className={`orb-button rounded-full font-display text-[0.65rem] tracking-[0.15em] uppercase font-bold text-cyan-950 cursor-pointer ${
          size === 'sm' ? 'px-4 py-2' : size === 'lg' ? 'px-8 py-3.5' : 'px-6 py-2.5'
        } ${className}`}
        {...props}
      >
        {icon && <span className="mr-1.5">{icon}</span>}
        {children}
      </motion.button>
    );
  }

  const sizeClasses = {
    sm: 'px-4 py-1.5 text-[0.55rem]',
    md: 'px-6 py-2 text-[0.6rem]',
    lg: 'px-8 py-2.5 text-[0.65rem]',
  };

  const variantStyles = {
    primary: {
      background: 'linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, rgba(34,211,238,0.3) 40%, rgba(34,211,238,0.4) 100%)',
      borderTopColor: 'rgba(255,255,255,0.8)',
      borderLeftColor: 'rgba(255,255,255,0.8)',
      borderBottomColor: 'rgba(8,145,178,0.4)',
      borderRightColor: 'rgba(8,145,178,0.4)',
      color: '#0E7490',
    },
    secondary: {
      background: 'linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, rgba(245,158,11,0.2) 40%, rgba(245,158,11,0.3) 100%)',
      borderTopColor: 'rgba(255,255,255,0.8)',
      borderLeftColor: 'rgba(255,255,255,0.8)',
      borderBottomColor: 'rgba(180,83,9,0.3)',
      borderRightColor: 'rgba(180,83,9,0.3)',
      color: '#92400E',
    },
    ghost: {
      background: 'linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)',
      borderTopColor: 'rgba(255,255,255,0.6)',
      borderLeftColor: 'rgba(255,255,255,0.6)',
      borderBottomColor: 'rgba(0,0,0,0.1)',
      borderRightColor: 'rgba(0,0,0,0.1)',
      color: '#475569',
    },
  };

  const style = variantStyles[variant];

  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: 'inset 0 0 15px rgba(255,255,255,0.5), 0 4px 16px rgba(34,211,238,0.2)',
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className={`
        relative inline-flex items-center justify-center gap-2
        font-display tracking-[0.15em] uppercase cursor-pointer
        rounded-full border-2 shadow-md
        transition-all duration-200
        ${sizeClasses[size]} ${className}
      `}
      style={{
        background: style.background,
        borderTopColor: style.borderTopColor,
        borderLeftColor: style.borderLeftColor,
        borderBottomColor: style.borderBottomColor,
        borderRightColor: style.borderRightColor,
        color: style.color,
      }}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  );
}
