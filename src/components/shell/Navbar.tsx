import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import NodeBreadcrumb from '../ui/NodeBreadcrumb';

interface NavbarProps {
  sections: string[];
}

export default function Navbar({ sections }: NavbarProps) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Map path to index
  const pathToIndex: Record<string, number> = {
    '/': 0,
    '/about': 1,
    '/projects': 2,
    '/contact': 3,
    '/inspiration': 4
  };

  const activeIndex = pathToIndex[location.pathname] ?? 0;

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="h-20 flex flex-col items-center justify-end px-5 shrink-0 relative z-50">
      {/* SVG Curved Bezel */}
      <div className="absolute inset-0 pointer-events-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
        <svg
          viewBox="0 0 1407 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            {/* Main Metal Gradient matching StatusBar */}
            <linearGradient id="bezelMetal" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E5E7EB" />
              <stop offset="50%" stopColor="#C4C8CF" />
              <stop offset="100%" stopColor="#B0B4BD" />
            </linearGradient>

            {/* Rim Highlight Gradient (Top Edge Lighting) */}
            <linearGradient id="rimHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,1)" />
              <stop offset="15%" stopColor="rgba(255,255,255,0.4)" />
              <stop offset="30%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>

          {/* Core Shape Path with better industrial curves */}
          <path
            d="M 0 120 C 21 18 13 -2 110 1 C 363 -4 430 27 575 48 C 1085 48 577 48 1087 48 C 1237 31 1394 -52 1407 120"
            fill="url(#bezelMetal)"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="0.5"
          />

          {/* Rim Lighting (Highlights Curve) */}
          <path
            d="M 0 120 C 21 18 13 -2 110 1 C 363 -4 430 27 575 48 C 1085 48 577 48 1087 48 C 1237 31 1394 -52 1407 120"
            fill="none"
            stroke="url(#rimHighlight)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Bottom Contrast Line */}
          <line x1="0" y1="119.5" x2="1400" y2="119.5" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
        </svg>
      </div>

      {/* Identity & Nav Container (Center Row) */}
      <div className="relative z-10 w-full mb-3 flex items-center justify-between">
        {/* Logo / Identity */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 mr-2 min-w-0">
          <div className="flex flex-col truncate drop-shadow-md">
            <span className="font-display text-[0.55rem] sm:text-[0.65rem] text-aero-text tracking-[0.1em] sm:tracking-[0.2em] truncate">
              CARL GOMBERT
            </span>
            <span className="font-mono text-[0.35rem] sm:text-[0.4rem] text-aero-text-pixel">PORTFOLIO</span>
          </div>
        </div>

        {/* Global Navigation - Desktop */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 translate-y-2.5 items-center justify-center">
          <NodeBreadcrumb
            nodes={sections}
            activeIndex={activeIndex}
          />
        </div>

        {/* Mobile nav trigger */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full orb-button flex items-center justify-center text-white scale-90"
            style={{ width: '42px', height: '42px' }}
          >
            {isMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 mt-2 mx-5 p-2 aero-glass rounded-2xl shadow-glass flex flex-col gap-1 sm:hidden z-[100]"
          >
            <div className="gel-surface absolute inset-0 rounded-2xl pointer-events-none" />
            {sections.map((s, i) => {
              const path = i === 0 ? '/' : `/${s.toLowerCase()}`;
              const active = i === activeIndex;
              return (
                <Link
                  key={s}
                  to={path}
                  className={`
                    flex items-center justify-between px-4 py-3 rounded-xl font-mono text-[0.6rem] tracking-[0.1em] transition-all no-underline
                    ${active
                      ? 'bg-aero-cyan/20 text-aero-text border border-white/40 shadow-inner'
                      : 'text-aero-text-dim hover:bg-white/30 hover:text-aero-text'
                    }
                  `}
                >
                  <span>{s.toUpperCase()}</span>
                  {active && (
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                  )}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
