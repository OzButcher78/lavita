import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { LocalizedContent } from '../types';

// Updated to 41 as per user request
const TOTAL_IMAGES = 41;
// Removed leading slash so path is relative (works with base: '/lavita/')
const GALLERY_IMAGES = Array.from({ length: TOTAL_IMAGES }, (_, i) => ({
  id: i,
  src: `images/${i + 1}.jpg`,
  alt: `Apartman La Vita Photo ${i + 1}`
}));

interface GalleryProps {
  content: LocalizedContent['gallery'];
}

const Gallery: React.FC<GalleryProps> = ({ content }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

  const displayedImages = GALLERY_IMAGES.slice(0, visibleCount);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedId === null) return;
    const nextId = (selectedId + 1) % GALLERY_IMAGES.length;
    setSelectedId(nextId);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedId === null) return;
    const prevId = (selectedId - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    setSelectedId(prevId);
  };

  return (
    <section className="py-24 bg-stone-100" id="gallery-section">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
             <div className="flex items-center gap-4 mb-4">
              <span className="h-px w-12 bg-brand-accent"></span>
              <span className="text-brand-accent font-medium uppercase tracking-widest text-xs">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark">{content.title}</h2>
          </div>
          <div className="hidden md:block text-right">
            <span className="text-brand-dark/50 font-mono text-sm">
              {Math.min(visibleCount, TOTAL_IMAGES)} / {TOTAL_IMAGES}
            </span>
          </div>
        </div>

        {/* Masonry Grid Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {displayedImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="relative group break-inside-avoid cursor-zoom-in overflow-hidden rounded-sm shadow-md bg-stone-200"
              onClick={() => setSelectedId(index)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 p-3 rounded-full backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="text-brand-dark" size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < GALLERY_IMAGES.length && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setVisibleCount(prev => Math.min(prev + 12, GALLERY_IMAGES.length))}
              className="group inline-flex items-center gap-2 px-8 py-3 border border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white transition-all uppercase tracking-widest text-xs font-bold rounded-full"
            >
              {content.viewAll}
              <Plus size={16} className="group-hover:rotate-90 transition-transform duration-300"/>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-dark/95 flex items-center justify-center backdrop-blur-md"
            onClick={() => setSelectedId(null)}
          >
            <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-50">
              <span className="text-white/60 font-mono text-sm ml-4">
                {selectedId + 1} / {GALLERY_IMAGES.length}
              </span>
              <button 
                className="text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
                onClick={() => setSelectedId(null)}
              >
                <X size={24} />
              </button>
            </div>

            <button
              className="absolute left-2 md:left-8 text-white/50 hover:text-white transition-colors p-4 hover:bg-white/5 rounded-full z-50"
              onClick={handlePrev}
            >
              <ChevronLeft size={40} />
            </button>

            <motion.div
              key={selectedId}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full flex items-center justify-center p-4 md:p-12"
            >
              <img
                src={GALLERY_IMAGES[selectedId].src}
                alt={GALLERY_IMAGES[selectedId].alt}
                className="max-h-full max-w-full object-contain shadow-2xl rounded-sm"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>

            <button
              className="absolute right-2 md:right-8 text-white/50 hover:text-white transition-colors p-4 hover:bg-white/5 rounded-full z-50"
              onClick={handleNext}
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;