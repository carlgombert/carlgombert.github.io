import { useLocation, Link } from 'react-router-dom';
import NodeBreadcrumb from '../ui/NodeBreadcrumb';

interface NavbarProps {
  sections: string[];
}

export default function Navbar({ sections }: NavbarProps) {
  const location = useLocation();

  // Map path to index
  const pathToIndex: Record<string, number> = {
    '/': 0,
    '/about': 1,
    '/projects': 2,
    '/contact': 3,
    '/inspiration': 4
  };

  const activeIndex = pathToIndex[location.pathname] ?? 0;

  return (
    <nav className="h-14 flex items-center justify-between px-5 bezel-frame shrink-0 rounded-t-2xl relative">
      {/* Logo / Identity */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0 mr-2 min-w-0">
        {/* Orb logo - shrink-0 to prevent squeezing */}
        <div
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full shrink-0"
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

      {/* Node navigation - desktop */}
      <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2">
        <NodeBreadcrumb
          nodes={sections}
          activeIndex={activeIndex}
        />
      </div>

      {/* Mobile nav */}
      <div className="flex sm:hidden items-center gap-1">
        {sections.map((s, i) => {
          const path = i === 0 ? '/' : `/${s.toLowerCase()}`;
          return (
            <Link
              key={s}
              to={path}
              className={`
                font-mono text-[0.4rem] min-[400px]:text-[0.45rem] px-1.5 min-[400px]:px-2.5 py-1 rounded-full border-2 transition-all cursor-pointer no-underline whitespace-nowrap
                ${i === activeIndex
                  ? 'bg-aero-cyan/20 border-white/60 text-aero-text shadow-md'
                  : 'bg-transparent border-transparent text-aero-text-dim hover:text-aero-text hover:border-white/30'
                }
              `}
            >
              {s}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
