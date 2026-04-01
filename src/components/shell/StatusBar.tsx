import { Link } from 'react-router-dom';

export default function StatusBar() {
  return (
    <div className="h-9 flex items-center justify-between px-5 bezel-frame shrink-0 rounded-b-2xl">
      {/* Left cluster */}
      <div className="flex items-center gap-4">
      </div>

      {/* Right cluster */}
      <div className="flex items-center">
        <Link
          to="/inspiration"
          className="font-mono text-[0.55rem] sm:text-[0.6rem] font-medium text-cyan-950 px-3 py-0.5 rounded-full cursor-pointer hover:scale-105 transition-all flex items-center gap-2 no-underline"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(34,211,238,0.4))',
            borderTop: '1px solid white',
            borderBottom: '1px solid rgba(8,145,178,0.3)',
            boxShadow: '0 2px 10px rgba(34,211,238,0.3), inset 0 1px 2px white'
          }}
        >
          DESIGN INSPIRATION
        </Link>
      </div>
    </div>
  );
}
