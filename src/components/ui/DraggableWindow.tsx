import { type ReactNode, useRef } from 'react';
import { motion, useDragControls } from 'framer-motion';

interface DraggableWindowProps {
  children: ReactNode;
  title: string;
  metadata?: string;
  className?: string;
  initialX?: number;
  initialY?: number;
  onClose?: () => void;
}

export default function DraggableWindow({
  children,
  title,
  metadata,
  className = '',
  initialX = 0,
  initialY = 0,
  onClose,
}: DraggableWindowProps) {
  const dragControls = useDragControls();
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={constraintsRef} className="absolute inset-0 pointer-events-none" />

      <motion.div
        drag
        dragControls={dragControls}
        dragConstraints={constraintsRef}
        dragMomentum={false}
        initial={{ x: initialX, y: initialY, opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
        className={`aero-glass rounded-2xl overflow-hidden absolute cursor-default ${className}`}
        style={{ touchAction: 'none' }}
      >
        {/* Gel shine */}
        <div className="gel-surface absolute inset-0 rounded-2xl pointer-events-none z-10" />

        {/* Title bar — glossy */}
        <div
          className="relative z-20 flex items-center justify-between px-4 py-2 cursor-grab active:cursor-grabbing"
          onPointerDown={(e) => dragControls.start(e)}
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,0.1))',
            borderBottom: '1px solid rgba(255,255,255,0.3)',
          }}
        >
          <div className="flex items-center gap-2">
            {/* Window orbs */}
            <div className="flex gap-1.5">
              {onClose ? (
                <button
                  onClick={onClose}
                  className="w-3 h-3 rounded-full cursor-pointer border border-white/50"
                  style={{ background: 'radial-gradient(circle at 35% 30%, #FCA5A5, #FB7185, #E11D48)' }}
                />
              ) : (
                <span className="w-3 h-3 rounded-full border border-white/30"
                  style={{ background: 'radial-gradient(circle at 35% 30%, #FCA5A5, #FB7185)' }}
                />
              )}
              <span className="w-3 h-3 rounded-full border border-white/30"
                style={{ background: 'radial-gradient(circle at 35% 30%, #FDE68A, #F59E0B)' }}
              />
              <span className="w-3 h-3 rounded-full border border-white/30"
                style={{ background: 'radial-gradient(circle at 35% 30%, #6EE7B7, #34D399)' }}
              />
            </div>
            <span className="font-display text-[0.55rem] tracking-[0.2em] text-aero-text ml-2">
              {title}
            </span>
          </div>
          {metadata && <span className="font-mono">{metadata}</span>}
        </div>

        {/* Content */}
        <div className="relative z-20 p-4">{children}</div>
      </motion.div>
    </>
  );
}
