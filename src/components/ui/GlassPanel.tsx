import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassPanelProps {
  children: ReactNode;
  title?: string;
  metadata?: string;
  className?: string;
  delay?: number;
}

export default function GlassPanel({
  children,
  title,
  metadata,
  className = '',
  delay = 0,
}: GlassPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay, ease: [0.34, 1.56, 0.64, 1] }}
      className={`aero-glass rounded-2xl overflow-hidden ${className}`}
    >
      {/* Gel shine overlay */}
      <div className="gel-surface absolute inset-0 rounded-2xl pointer-events-none z-10" />

      {/* Header bar */}
      {(title || metadata) && (
        <div className="relative z-20 flex items-center justify-between px-4 py-2.5"
          style={{
            borderBottom: '1px solid rgba(255,255,255,0.3)',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.05))',
          }}
        >
          {title && (
            <span className="font-display text-[0.6rem] tracking-[0.2em] text-aero-text">
              {title}
            </span>
          )}
          {metadata && (
            <span className="font-mono">{metadata}</span>
          )}
        </div>
      )}

      {/* Content */}
      <div className="relative z-20 p-4">
        {children}
      </div>
    </motion.div>
  );
}
