import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Castle, Train, Heart, Sprout, GlassWater } from 'lucide-react';
import { LocalizedContent } from '../types';

interface LocationProps {
  content: LocalizedContent['location'];
}

const LocationItem: React.FC<{ icon: React.ReactNode; text: string; delay: number }> = ({ icon, text, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="flex items-start gap-4 p-4 rounded-lg hover:bg-stone-50 transition-colors"
  >
    <div className="text-brand-accent mt-1 shrink-0">{icon}</div>
    <p className="text-stone-700 leading-relaxed font-light">{text}</p>
  </motion.div>
);

const Location: React.FC<LocationProps> = ({ content }) => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Info Column */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-10">{content.title}</h2>
          
          <div className="space-y-2">
            <LocationItem 
              delay={0.1} 
              icon={<Heart size={22} />} 
              text={content.points.wedding} 
            />
            <LocationItem 
              delay={0.2} 
              icon={<Castle size={22} />} 
              text={content.points.castles} 
            />
            <LocationItem 
              delay={0.3} 
              icon={<GlassWater size={22} />} 
              text={content.points.wellness} 
            />
             <LocationItem 
              delay={0.4} 
              icon={<Sprout size={22} />} 
              text={content.points.golf} 
            />
             <LocationItem 
              delay={0.5} 
              icon={<Train size={22} />} 
              text={content.points.train} 
            />
          </div>
        </div>

        {/* Map Placeholder */}
        <motion.div 
          className="order-1 lg:order-2 h-[400px] lg:h-auto bg-stone-100 rounded-2xl overflow-hidden relative shadow-inner"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Use a static map image or an iframe here. Using a placeholder for styling. */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88825.96200277873!2d15.7000!3d45.8700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDUyJzEyLjAiTiAxNcKwNDInMDAuMCJF!5e0!3m2!1sen!2shr!4v1620000000000!5m2!1sen!2shr" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(0.3) contrast(0.9)' }} 
            allowFullScreen={false} 
            loading="lazy"
            title="Map location"
          ></iframe>
          
          <div className="absolute bottom-6 right-6 bg-white py-2 px-4 rounded-lg shadow-lg flex items-center gap-2">
            <MapPin size={16} className="text-brand-accent" />
            <span className="text-sm font-semibold text-brand-dark">Prigorje Brdovečko</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Location;