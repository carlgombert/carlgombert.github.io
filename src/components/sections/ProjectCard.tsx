import { motion } from 'framer-motion';
import type { Project } from '../../data/projects';
import StatusLed from '../ui/StatusLed';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {

  return (
    <motion.article
      onClick={onClick}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      whileHover={{
        y: -4,
        scale: 1.02,
        boxShadow: 'inset 0 0 15px rgba(255,255,255,0.4), 0 8px 32px rgba(34,211,238,0.15)',
      }}
      className="aero-glass rounded-2xl overflow-hidden group cursor-default relative"
    >
      {/* Gel overlay */}
      <div className="gel-surface absolute inset-0 rounded-2xl pointer-events-none z-10" />

      {/* Image area */}
      <div className="h-36 relative overflow-hidden z-20"
        style={{
          background: project.imageUrl
            ? `url(${project.imageUrl}) top/cover no-repeat`
            : 'linear-gradient(135deg, rgba(224,242,254,0.5) 0%, rgba(186,230,253,0.3) 40%, rgba(34,211,238,0.1) 100%)',
        }}
      >
        {/* Grid greeble */}
        <div className="absolute inset-0 grid-overlay opacity-60" />



        {/* Center monogram — orb style (hide if Image exists) */}
        {!project.imageUrl && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-display text-2xl tracking-[0.3em] group-hover:scale-110 transition-transform duration-300"
              style={{
                background: 'linear-gradient(to bottom, rgba(34,211,238,0.25), rgba(34,211,238,0.1))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {project.id.split('-').map(w => w[0]).join('').toUpperCase()}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3 relative z-20">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-[0.6rem] tracking-[0.15em] text-aero-text group-hover:text-cyan-700 transition-colors">
            {project.title}
          </h3>
        </div>

        <p className="text-xs text-aero-text-dim leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech tags — pill style */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="font-mono text-[0.4rem] px-2 py-0.5 rounded-full border text-aero-text-dim"
              style={{
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(224,242,254,0.2))',
                borderColor: 'rgba(255,255,255,0.5)',
              }}
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="font-mono text-[0.4rem] px-2 py-0.5 text-aero-text-dim">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-2 border-t border-white/30">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.45rem] text-cyan-700 hover:text-cyan-900 transition-colors flex items-center gap-1"
            >
              <StatusLed color="cyan" size="sm" />
              LIVE DEMO
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.45rem] text-aero-text-dim hover:text-aero-text transition-colors flex items-center gap-1"
            >
              <span className="w-1 h-1 rounded-full bg-aero-silver-dark" />
              SOURCE
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
