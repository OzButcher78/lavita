import React from 'react';
import { motion } from 'framer-motion';
import { BedDouble, Utensils, Armchair, Sun, Key, Trees } from 'lucide-react';
import { LocalizedContent } from '../types';

interface AboutProps {
  content: LocalizedContent['about'];
}

const FeatureIcon: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="flex flex-col items-center gap-3 p-6 rounded-xl bg-stone-50 hover:bg-white hover:shadow-lg transition-all duration-300 text-center border border-transparent hover:border-stone-100"
  >
    <div className="w-12 h-12 rounded-full bg-brand-dark/5 flex items-center justify-center text-brand-accent">
      {icon}
    </div>
    <span className="text-sm font-medium text-brand-dark/80">{label}</span>
  </motion.div>
);

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section className="py-24 md:py-32 px-6 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-50/50 -skew-x-12 translate-x-32 -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-brand-accent"></span>
              <span className="text-brand-accent font-medium uppercase tracking-widest text-xs">Apartment La Vita</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-dark mb-10 leading-tight">
              {content.title}
            </h2>
            <div className="space-y-6 text-lg text-stone-600 font-light leading-relaxed">
              {content.description.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? "text-xl text-brand-dark/80" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-brand-light border-l-4 border-brand-accent rounded-r-lg">
                <p className="text-brand-dark font-serif italic text-lg">"La Vita – jer život je lijep"</p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             <div className="grid grid-cols-2 gap-4">
              <FeatureIcon icon={<BedDouble size={24} />} label={content.features.bedroom} />
              <FeatureIcon icon={<Utensils size={24} />} label={content.features.kitchen} />
              <FeatureIcon icon={<Armchair size={24} />} label={content.features.living} />
              <FeatureIcon icon={<Sun size={24} />} label={content.features.terrace} />
              <FeatureIcon icon={<Key size={24} />} label={content.features.privacy} />
              <FeatureIcon icon={<Trees size={24} />} label={content.features.nature} />
            </div>
            
            <div className="mt-8 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
               {/* Secondary image placeholder */}
               <img 
                 src="images/2.jpg" 
                 onError={(e) => {e.currentTarget.src = "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop"}}
                 alt="Interior detail" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
               />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;