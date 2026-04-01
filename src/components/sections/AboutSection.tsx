import { motion } from 'framer-motion';
import GlassPanel from '../ui/GlassPanel';
import StatusLed from '../ui/StatusLed';


const skillCategories = [
  {
    title: 'LANGUAGES',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C++', 'C']
  },
  {
    title: 'FRONTEND',
    skills: ['React', 'Next.js', 'TailwindCSS', 'HTML/CSS']
  },
  {
    title: 'BACKEND',
    skills: ['Node.js', 'Express.js', 'Flask', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Prisma']
  },
  {
    title: 'TOOLS & INFRA',
    skills: ['Git', 'Docker', 'AWS', 'Azure', 'Insomnia', 'Vitest', 'Linux', 'Bash']
  }
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function AboutSection() {
  return (
    <div className="w-full h-full overflow-y-auto p-6 space-y-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="max-w-4xl mx-auto space-y-6"
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-2">
          <StatusLed color="cyan" size="md" />
          <h2 className="font-display text-sm tracking-[0.2em] text-aero-text">
            Profile
          </h2>
        </motion.div>

        {/* Bio + Skills grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bio */}
          <motion.div variants={fadeUp}>
            <GlassPanel title="BIO">
              <div className="flex flex-col sm:flex-row gap-5 mb-4 items-start">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl shrink-0 overflow-hidden shadow-glass border border-white/40" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <img src="https://avatars.githubusercontent.com/u/106711277?v=4" alt="Operator Profile" className="w-full h-full object-cover" />
                  <div className="gel-surface absolute inset-0 pointer-events-none z-10 opacity-40" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-aero-text/85 leading-relaxed mb-4">
                    I'm currently a Computer Science student at the University of Minnesota and a full-stack developer. While my professional experience is primarily in web development, my academic focus is on Operating Systems, Computer Architecture, and Networking.
                  </p>
                  <p className="text-sm text-aero-text/85 leading-relaxed">
                    I’m actively seeking Software Engineering opportunities and open to collaborating on interesting projects. Outside of coding, I enjoy Brazilian Jiu-Jitsu, hiking, rock climbing, reading, and learning Portuguese.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/30 grid grid-cols-2 gap-3">
                <div>
                  <span className="font-mono block mb-1">LOCATION</span>
                  <span className="text-sm font-semibold text-aero-text">Minneapolis, MN</span>
                </div>
                <div>
                  <span className="font-mono block mb-1">EXPERIENCE</span>
                  <span className="text-sm font-semibold text-aero-text">1 Year</span>
                </div>
                <div>
                  <span className="font-mono block mb-1">FOCUS</span>
                  <span className="text-sm font-semibold text-aero-text">Full-Stack / Systems</span>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
          {/* Tech categories */}
          <div className="space-y-4">
            {skillCategories.map((cat, catIdx) => (
              <motion.div key={cat.title} variants={fadeUp}>
                <GlassPanel>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 shadow-[0_0_4px_rgba(34,211,238,0.5)]" />
                    <span className="font-display text-[0.55rem] tracking-[0.2em] text-aero-text-dim uppercase">
                      {cat.title}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + (catIdx * 0.1) + (i * 0.03) }}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: 'inset 0 0 10px rgba(255,255,255,0.5)',
                        }}
                        className="font-mono text-[0.5rem] px-3 py-1.5 rounded-full border-2 cursor-default transition-colors"
                        style={{
                          background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(224,242,254,0.3))',
                          borderTopColor: 'rgba(255,255,255,0.7)',
                          borderLeftColor: 'rgba(255,255,255,0.7)',
                          borderBottomColor: 'rgba(0,0,0,0.08)',
                          borderRightColor: 'rgba(0,0,0,0.08)',
                          color: '#0E7490',
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </GlassPanel>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
