import { motion } from 'framer-motion';
import StatusLed from '../ui/StatusLed';

// Import images
import img2advanced2000 from '../../assets/design/2advanced-2000.png';
import img2advanced2003 from '../../assets/design/2advanced-2003.png';
import imgDesignInsites2001 from '../../assets/design/design-insites-2001.png';
import imgMatinee2000 from '../../assets/design/matinee-2000.png';
import imgNjproduction2002 from '../../assets/design/njproduction-2002.png';
import imgSony2002 from '../../assets/design/sony-2002.png';
import imgXbox2004 from '../../assets/design/xbox-2004.jpg';
import imgDouglasArthur2002 from '../../assets/design/douglas-arthur-2002.png';
import imgMicrosoft2007 from '../../assets/design/microsoft-2007.jpg';
import imgWindowsVista2008 from '../../assets/design/windows-vista-2008.jpg';
import imgXerogravity2004 from '../../assets/design/xerogravity-2004.png';

const inspirationItems = [
  {
    id: 'xbox-2004',
    title: 'Xbox (2004)',
    image: imgXbox2004,
    url: 'https://web.archive.org/web/20041110033404/http://www.xbox.com/en-us/default.htm',
  },
  {
    id: 'windows-vista-2008',
    title: 'Windows Vista (2008)',
    image: imgWindowsVista2008,
    url: 'https://web.archive.org/web/20080514190651/http://www.microsoft.com/windows/products/windowsvista/default.aspx',
  },
  {
    id: 'sony-2002',
    title: 'Sony (2002)',
    image: imgSony2002,
    url: 'https://web.archive.org/web/20020826112052/http://www.sony.com/',
  },
  {
    id: '2advanced-2000',
    title: '2Advanced Studios (2000)',
    image: img2advanced2000,
    url: 'https://web.archive.org/web/20000619054906/http://www.2advanced.com:80/',
  },
  {
    id: 'design-insites-2001',
    title: 'Design-Insites (2001)',
    image: imgDesignInsites2001,
    url: 'https://web.archive.org/web/20010707163808/http://designinsites.com/',
  },
  {
    id: 'matinee-2000',
    title: 'Matinee (2000)',
    image: imgMatinee2000,
    url: 'https://www.webdesignmuseum.org/gallery/matinee-sound-vision-2000',
  },
  {
    id: 'njproduction-2002',
    title: 'NJ Production (2002)',
    image: imgNjproduction2002,
    url: 'https://www.webdesignmuseum.org/gallery/njproduction-2002',
  },
  {
    id: 'douglas-arthur-2002',
    title: 'Douglas Arthur (2002)',
    image: imgDouglasArthur2002,
    url: 'https://www.webdesignmuseum.org/gallery/douglas-arthur-2002',
  },
  {
    id: 'microsoft-2007',
    title: 'Microsoft (2007)',
    image: imgMicrosoft2007,
    url: 'https://web.archive.org/web/20070108190409/http://www.microsoft.com/en/us/default.aspx',
  },
  {
    id: 'xerogravity-2004',
    title: 'Xerogravity (2004)',
    image: imgXerogravity2004,
    url: 'https://web.archive.org/web/20040630024455/http://xerogravity.net/v3/',
  },
  {
    id: '2advanced-2003',
    title: '2Advanced Studios (2003)',
    image: img2advanced2003,
    url: 'https://web.archive.org/web/20031003215858/http://www.2advanced.com:80/flashindex.htm',
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function DesignInspirationSection() {
  return (
    <div className="w-full h-full overflow-y-auto p-6 space-y-6 custom-scrollbar">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3"
        >
          <StatusLed color="cyan" size="md" />
          <h2 className="font-display text-sm tracking-[0.2em] text-aero-text">
            Design Inspiration
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12"
        >
          {inspirationItems.map((item) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="group block relative rounded-xl overflow-hidden aero-glass block cursor-pointer border border-white/30"
            >
              <div className="aspect-[4/3] w-full relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover object-top mix-blend-multiply opacity-90 transition-opacity group-hover:opacity-100"
                />
                <div className="gel-surface absolute inset-0 pointer-events-none z-10 opacity-30" />
              </div>
              <div
                className="px-4 py-3 relative z-20"
                style={{
                  background: 'linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.3))',
                  borderTop: '1px solid rgba(255,255,255,0.4)',
                }}
              >
                <div className="flex items-center gap-2">
                  <StatusLed color="cyan" size="sm" />
                  <span className="font-mono text-xs font-semibold text-cyan-950 truncate">
                    {item.title}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
