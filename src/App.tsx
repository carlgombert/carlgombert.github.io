import { Routes, Route, useLocation, HashRouter } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import AppShell from './components/shell/AppShell';
import HomeSection from './components/sections/HomeSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import DesignInspirationSection from './components/sections/DesignInspirationSection';

const SECTIONS = ['Home', 'About', 'Projects', 'Contact'];

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="w-full h-full"
      >
        <Routes location={location}>
          <Route path="/" element={<HomeSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/inspiration" element={<DesignInspirationSection />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HashRouter>
      <AppShell sections={SECTIONS}>
        <AnimatedRoutes />
      </AppShell>
    </HashRouter>
  );
}

export default App;
