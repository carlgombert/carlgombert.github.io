import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HudButton from '../ui/HudButton';

export default function HomeSection() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex items-center justify-center p-6 relative overflow-hidden">
      
      <AnimatePresence>

        <motion.div
          key="landing"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="max-w-2xl w-full text-center z-10"
        >


          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-[0.15em]"
          >
            <span style={{
              background: 'linear-gradient(to bottom, #22D3EE, #0891B2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>CARL</span>
            <br />
            <span style={{
              background: 'linear-gradient(to bottom, #22D3EE, #0891B2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              GOMBERT
            </span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-3 font-display text-[0.6rem] tracking-[0.3em] text-aero-text-dim"
          >
            Software Developer
          </motion.p>

          <motion.div
            className="w-48 h-[2px] mx-auto my-8 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            style={{ background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.3), transparent)' }}
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
            className="mt-8 flex items-center justify-center gap-4 flex-wrap"
          >
            <HudButton variant="primary" orb onClick={() => navigate('/projects')}>
              View Projects
            </HudButton>
            <HudButton variant="ghost" onClick={() => navigate('/contact')}>
              Contact
            </HudButton>
            <HudButton
              variant="secondary"
              icon={
                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              }
              onClick={() => window.open('https://github.com/carlgombert', '_blank')}
            >
              GitHub
            </HudButton>
          </motion.div>


        </motion.div>

      </AnimatePresence>
    </div>
  );
}
