import { type ReactNode } from 'react';
import Navbar from './Navbar';
import StatusBar from './StatusBar';
import GridBackground from './GridBackground';

interface AppShellProps {
  sections: string[];
  children: ReactNode;
}

export default function AppShell({ sections, children }: AppShellProps) {
  return (
    <div className="w-screen h-screen flex items-center justify-center overflow-hidden p-3 sm:p-5 relative"
      style={{ background: 'linear-gradient(160deg, #E0F2FE 0%, #F0F4F8 35%, #E2E8F0 100%)' }}
    >
      {/* Background grid */}
      <GridBackground />

      {/* Main "machine" frame */}
      <div className="relative z-10 flex flex-col w-full h-full max-w-[1400px] max-h-[900px]">
        {/* Top bezel + nav */}
        <Navbar
          sections={sections}
        />

        {/* Connector lines from nav to content */}
        <div className="flex items-center justify-center h-2 relative">
          <div className="connector-line w-3/4" />
        </div>

        {/* Content viewport — recessed screen */}
        <main className="flex-1 overflow-hidden relative rounded-3xl screen-recess bg-white/20 backdrop-blur-sm">
          {/* Content */}
          <div className="relative z-0 w-full h-full">
            {children}
          </div>
        </main>

        {/* Connector lines from content to status */}
        <div className="flex items-center justify-center h-2 relative">
          <div className="connector-line w-1/2" />
        </div>

        {/* Bottom bezel + status */}
        <StatusBar />
      </div>
    </div>
  );
}
