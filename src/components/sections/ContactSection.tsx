import { motion } from 'framer-motion';

const contactLinks = [
  {
    label: 'GitHub',
    url: 'https://github.com/carlgombert',
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/cgombert',
  },
  {
    label: 'Email',
    url: 'mailto:gombe004@umn.edu',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function ContactSection() {

  return (
    <div className="w-full h-full overflow-y-auto p-6 lg:p-12">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto space-y-12"
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <h2 className="font-display text-sm tracking-[0.2em] text-aero-text">
            Contact
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactLinks.map((link) => (
            <motion.div key={link.label} variants={fadeUp}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-48 aero-glass rounded-2xl overflow-hidden p-6 transition-all hover:scale-[1.02]"
              >
                {/* Gel shine overlay */}
                <div className="gel-surface absolute inset-0 rounded-2xl pointer-events-none z-10 opacity-50 group-hover:opacity-80 transition-opacity" />
                
                <div className="relative z-20 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="font-display text-[0.65rem] tracking-[0.2em] text-aero-text-dim group-hover:text-cyan-700 transition-colors">
                      {link.label === 'Email' ? 'DIRECT' : 'SOCIAL'}
                    </span>
                    <span className="text-aero-text-dim group-hover:text-cyan-700 transition-colors text-xl font-light">
                      ↗
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-lg tracking-widest text-aero-text group-hover:text-cyan-800 transition-colors">
                      {link.label}
                    </h3>
                    <div className="connector-line w-12 mt-2 group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
