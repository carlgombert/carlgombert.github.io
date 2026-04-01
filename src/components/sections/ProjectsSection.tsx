import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, type Project } from '../../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from '../ui/ProjectModal';
import StatusLed from '../ui/StatusLed';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="relative w-full h-full">
      <div className="w-full h-full overflow-y-auto p-6 custom-scrollbar">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3"
          >
            <StatusLed color="cyan" size="md" />
            <h2 className="font-display text-sm tracking-[0.2em] text-aero-text">
              Projects
            </h2>
          </motion.div>

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} onClick={() => setSelectedProject(project)} />
            ))}
          </div>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
