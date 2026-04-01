import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../../data/projects';
import StatusLed from './StatusLed';
import HudButton from './HudButton';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 pointer-events-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-full overflow-hidden rounded-2xl aero-glass flex flex-col"
          >
            {/* Gel shine */}
            <div className="gel-surface absolute inset-0 pointer-events-none z-0" />

            {/* Header / Title Bar */}
            <div
              className="relative z-20 flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 gap-4"
              style={{
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), rgba(255,255,255,0.2))',
                borderBottom: '1px solid rgba(255,255,255,0.3)',
              }}
            >
              <div className="flex items-center gap-4">
                <div>
                  <h2 className="font-display text-sm tracking-[0.15em] text-aero-text">
                    {project.title}
                  </h2>
                </div>
              </div>
            </div>

            {/* Scrollable Content Area */}
            <div className="relative z-20 p-6 sm:p-8 overflow-y-auto flex-1 min-h-0 custom-scrollbar">

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Column: Image & Links */}
                <div className="lg:col-span-1 space-y-6">
                  {/* Image Frame */}
                  <div className="rounded-xl overflow-hidden border border-white/40 shadow-lg relative aspect-video lg:aspect-square flex items-center justify-center bg-white/10"
                    style={{
                      background: project.imageUrl
                        ? `url(${project.imageUrl}) center/cover no-repeat`
                        : 'linear-gradient(135deg, rgba(224,242,254,0.5) 0%, rgba(186,230,253,0.3) 40%, rgba(34,211,238,0.1) 100%)',
                    }}
                  >
                    {!project.imageUrl && (
                      <span className="font-display text-4xl tracking-[0.3em] text-cyan-900/20">
                        {project.id.split('-').map(w => w[0]).join('').toUpperCase()}
                      </span>
                    )}
                  </div>

                  {/* Tech Stack Pills */}
                  <div>
                    <h3 className="font-pixel text-[0.6rem] text-aero-text-dim mb-3">TECHNOLOGY STACK</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map(tech => (
                        <span
                          key={tech}
                          className="font-mono text-[0.55rem] px-2.5 py-1 rounded-full border text-aero-text-dim"
                          style={{
                            background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), rgba(224,242,254,0.3))',
                            borderColor: 'rgba(255,255,255,0.6)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-3 pt-4 border-t border-white/30">
                    {project.liveUrl && (
                      <HudButton variant="primary" onClick={() => window.open(project.liveUrl, '_blank')} className="w-full">
                        <StatusLed color="cyan" size="sm" />
                        VISIT LIVE SITE
                      </HudButton>
                    )}
                    {project.repoUrl && (
                      <HudButton variant="ghost" onClick={() => window.open(project.repoUrl, '_blank')} className="w-full border-white/50 hover:bg-white/20">
                        VIEW SOURCE CODE
                      </HudButton>
                    )}
                  </div>
                </div>

                {/* Right Column: Long Description */}
                <div className="lg:col-span-2">
                  <h3 className="font-display text-xs tracking-[0.2em] text-aero-text mb-4">ABOUT</h3>

                  <div className="prose prose-sm prose-slate max-w-none text-aero-text/90">
                    {/* Split by double newline for paragraphs, naive but works for the data we have */}
                    {project.longDescription.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="mb-4 leading-relaxed whitespace-pre-wrap">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
