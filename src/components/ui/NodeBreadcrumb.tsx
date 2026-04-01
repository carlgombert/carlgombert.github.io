import { Link } from 'react-router-dom';

interface NodeBreadcrumbProps {
  nodes: string[];
  activeIndex: number;
}

export default function NodeBreadcrumb({ nodes, activeIndex }: NodeBreadcrumbProps) {
  return (
    <div className="flex items-center gap-0">
      {nodes.map((label, i) => (
        <div key={label} className="flex items-center">
          {/* Node */}
          <Link
            to={i === 0 ? '/' : `/${label.toLowerCase()}`}
            className="group relative flex flex-col items-center cursor-pointer bg-transparent border-none p-0 no-underline"
            title={label}
            id={`nav-node-${label.toLowerCase()}`}
          >
            <span
              className="w-4 h-4 rounded-full border-2 transition-all duration-300"
              style={
                i === activeIndex
                  ? {
                    background: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.95), #22D3EE 60%, #0891B2)',
                    borderColor: 'rgba(255,255,255,0.7)',
                    boxShadow: '0 0 10px rgba(34,211,238,0.5), 0 0 30px rgba(34,211,238,0.15)',
                  }
                  : i < activeIndex
                    ? {
                      background: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.7), #BAE6FD 60%, #7DD3FC)',
                      borderColor: 'rgba(255,255,255,0.5)',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
                    }
                    : {
                      background: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.6), #E5E7EB 70%, #D1D5DB)',
                      borderColor: 'rgba(255,255,255,0.4)',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                    }
              }
            />
            {/* Label underneath */}
            <span className="font-mono text-[0.4rem] mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {label}
            </span>
          </Link>

          {/* Connector line with pulse */}
          {i < nodes.length - 1 && (
            <div className="w-12 h-[2px] mx-1 relative overflow-hidden rounded-full"
              style={{
                background: i < activeIndex
                  ? 'linear-gradient(90deg, #BAE6FD, #22D3EE)'
                  : '#D1D5DB',
              }}
            >
              {i < activeIndex && (
                <div
                  className="absolute inset-0 animate-pulse-line"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                  }}
                />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
