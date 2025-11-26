import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { LocalizedContent } from '../types';

interface HeroProps {
  content: LocalizedContent['hero'];
  onAction: () => void;
}

const Hero: React.FC<HeroProps> = ({ content, onAction }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="relative h-[95vh] w-full overflow-hidden flex items-center justify-center bg-brand-dark">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <img 
          src="images/1.jpg"
          onError={(e) => {
            // Fallback if image doesn't exist yet
            e.currentTarget.src = "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=2000&auto=format&fit=crop";
          }}
          alt="Apartman La Vita" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-stone-900/90" />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm text-white/90 text-xs md:text-sm tracking-[0.2em] uppercase font-sans mb-8">
            Prigorje Brdovečko
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-8 font-medium tracking-tight">
            La Vita
          </h1>

          <p className="text-lg md:text-2xl text-stone-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg">
            {content.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16"
        >
          <button 
            onClick={onAction}
            className="group relative inline-flex items-center gap-3 text-white px-8 py-4 overflow-hidden rounded-full transition-all duration-300 hover:bg-white/10 border border-white/30 backdrop-blur-sm"
          >
            <span className="uppercase tracking-widest text-xs font-semibold">{content.cta}</span>
            <ChevronDown className="group-hover:translate-y-1 transition-transform" size={16} />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;