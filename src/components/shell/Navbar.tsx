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
    <nav className="h-14 flex items-center justify-between px-5 bezel-frame shrink-0 rounded-t-2xl relative z-50">
      {/* Logo / Identity */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0 mr-2 min-w-0">
        {/* Orb logo*/}
        <div
          className="hidden md:flex w-7 h-7 sm:w-8 sm:h-8 rounded-full shrink-0"
          style={{
            background: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.95), #22D3EE 50%, #0891B2 100%)',
            boxShadow: '0 2px 10px rgba(34,211,238,0.4), inset 0 -2px 4px rgba(0,0,0,0.1)',
            border: '2px solid rgba(255,255,255,0.6)',
          }}
        />
        <div className="flex flex-col truncate">
          <span className="font-display text-[0.55rem] sm:text-[0.65rem] text-aero-text tracking-[0.1em] sm:tracking-[0.2em] truncate">
            CARL GOMBERT
          </span>
          <span className="font-mono text-[0.35rem] sm:text-[0.4rem]">PORTFOLIO</span>
        </div>
      </div>

      {/* Node navigation - desktop content */}
      <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2">
        <NodeBreadcrumb
          nodes={sections}
          activeIndex={activeIndex}
        />
      </div>

      {/* Mobile nav trigger */}
      <div className="flex sm:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-xl orb-button flex items-center justify-center text-white"
          style={{ width: '36px', height: '36px' }}
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
