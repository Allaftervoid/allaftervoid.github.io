import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hourglass, ChevronDown, X, MessageSquareText, Send, Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'glass' : 'bg-transparent'}`}
    >
      <div className="flex items-center gap-2">
        <Hourglass className="text-gold" />
        <span className="serif text-xl font-bold tracking-widest uppercase">TimeTravel</span>
      </div>
      <nav className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-medium">
        {['The Fleet', 'Destinations', 'Safety', 'Concierge'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-gold transition-colors duration-300">
            {item}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <button className="gold-border px-8 py-2 text-[10px] uppercase tracking-[0.2em] hover:bg-gold hover:text-black transition-colors duration-500">
          Book Era
        </button>
        <Menu className="md:hidden w-6 h-6" />
      </div>
    </motion.header>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-50"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-gold-particles-moving-in-the-air-2521-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 to-obsidian" />
      </div>

      <div className="relative z-10 grid md:grid-cols-2 items-center w-full max-w-7xl px-12">
        <div className="text-left">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[0.5em] text-gold mb-4 text-[10px]"
          >
            Experience the Unreachable
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="serif text-5xl md:text-6xl mb-6 leading-tight"
          >
            History is no longer <br />
            <span className="gold-gradient italic">a memory.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-muted text-sm leading-relaxed max-w-md mb-10"
          >
            Ultra-luxury temporal transit for the world's most discerning travelers. 
            Your private window to the past awaits in total isolation and comfort.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row gap-6"
          >
            <a href="#destinations" className="bg-gold text-black px-8 py-3 font-bold uppercase text-[9px] tracking-widest hover:bg-white transition-colors duration-300">
              Explore Destinations
            </a>
            <button className="glass border border-white/20 px-8 py-3 font-bold uppercase text-[9px] tracking-widest hover:bg-white/10 transition-colors duration-300">
              View Methodology
            </button>
          </motion.div>
        </div>

        <div className="hidden md:flex justify-end relative h-[300px]">
          <div className="absolute inset-y-0 right-0 w-[200px] bg-gradient-to-l from-gold/10 to-transparent opacity-30" />
          <div className="v-line self-center">Temporal Anchor Point: 2026.04.12</div>
        </div>
      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
      >
        <ChevronDown className="text-gray-500" />
      </motion.div>
    </section>
  );
};

interface DestinationCardProps {
  title: string;
  era: string;
  description: string;
  image: string;
  delay: number;
  tint: string;
  key?: string;
}

const DestinationCard = ({ title, era, description, image, delay, tint }: DestinationCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="group relative overflow-hidden h-[320px] gold-border cursor-pointer bg-[#111]"
    >
      <div className={`absolute inset-0 ${tint} opacity-40 transition-opacity duration-700 group-hover:opacity-60`} />
      <img 
        src={image} 
        alt={title} 
        loading="lazy"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      <div className="absolute bottom-0 p-6 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500 z-10">
        <p className="text-gold text-[9px] tracking-[0.3em] uppercase mb-1">{era}</p>
        <h3 className="serif text-2xl mb-2">{title}</h3>
        <p className="text-muted text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-xs">
          {description}
        </p>
        <div className="mt-4 text-[9px] uppercase tracking-widest border-b border-gold inline-block pb-1 cursor-pointer hover:text-white transition-colors">
          Inquire
        </div>
      </div>
    </motion.div>
  );
};

const Destinations = () => {
  const collection = [
    {
      title: "Paris 1889",
      era: "Belle Époque",
      description: "Exposition Universelle. The unveiling of the Iron Lady.",
      image: "https://i.imgur.com/yDaOPlq.png",
      delay: 0,
      tint: "bg-[#2A1E16]"
    },
    {
      title: "Crétacé (-65M)",
      era: "Prehistoric Earth",
      description: "Primal silence. Witness the giants of the late Mesozoic.",
      image: "https://i.imgur.com/3lucaVl.png",
      delay: 0.2,
      tint: "bg-[#162a1b]"
    },
    {
      title: "Florence 1504",
      era: "High Renaissance",
      description: "The Studio of Da Vinci. A peak in human intellectual history.",
      image: "https://i.imgur.com/dOWMC5M.png",
      delay: 0.4,
      tint: "bg-[#2a2416]"
    }
  ];

  return (
    <section id="destinations" className="py-24 px-6 md:px-12 bg-obsidian">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="serif text-3xl md:text-3xl mb-0 text-white">Curated Eras</h2>
            <div className="h-[2px] w-12 bg-gold mt-2" />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-widest text-muted"
          >
            2026 Collection / Limited Access
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collection.map((dest) => (
            <DestinationCard 
              key={dest.title}
              title={dest.title}
              era={dest.era}
              description={dest.description}
              image={dest.image}
              delay={dest.delay}
              tint={dest.tint}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="px-12 py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center bg-black">
      <div className="text-[9px] uppercase tracking-widest text-[#555] mb-4 md:mb-0">
        &copy; {new Date().getFullYear()} TimeTravel Agency. ISO-9001 Certified Temporal Transit.
      </div>
      <div className="flex gap-8 text-[9px] uppercase tracking-widest text-muted">
        <span>Paradox Insurance Included</span>
        <span>Timeline Safety Grade: A+</span>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-obsidian min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Destinations />
      </main>
      <Footer />
    </div>
  );
}
