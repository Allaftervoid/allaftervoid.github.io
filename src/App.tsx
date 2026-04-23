import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Hourglass, ChevronDown, Menu, X, MessageSquareText } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }} animate={{ y: 0 }}
      className={`fixed w-full z-50 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}
    >
      <div className="flex items-center gap-2">
        <Hourglass className="text-[#D4AF37]" />
        <span className="font-serif text-xl font-bold tracking-widest uppercase text-white">TimeTravel</span>
      </div>
      <nav className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-medium text-white">
        {['The Fleet', 'Destinations', 'Safety', 'Concierge'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#D4AF37] transition-colors duration-300">
            {item}
          </a>
        ))}
      </nav>
      <button className="border border-[#D4AF37]/50 text-white px-8 py-2 text-[10px] uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-black transition-colors duration-500">
        Book Era
      </button>
    </motion.header>
  );
};

// ... (Ajoute les autres composants Hero, Destinations, Footer ici en remplaçant les classes .gold par text-[#D4AF37] et .bg-obsidian par bg-[#050505])

export default function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white">
      <Navbar />
      <main>
        {/* Tes sections Hero et Destinations */}
      </main>
      
      {/* Intégration Chatbot Tidio (Script à coller ici si tu n'utilises pas le composant) */}
      <script src="//code.tidio.co/TON_CODE_TIDIO.js" async></script>
    </div>
  );
}
