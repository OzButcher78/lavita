import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTENT, Language } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('hr');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const content = CONTENT[lang];

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'hr' ? 'en' : 'hr'));
  };

  return (
    <div className="relative min-h-screen bg-stone-50 overflow-x-hidden font-sans">
      <Navbar 
        lang={lang} 
        toggleLanguage={toggleLanguage} 
        content={content.nav}
        onNavigate={scrollToSection}
        onBook={() => setIsContactOpen(true)}
      />

      <main>
        <div id="home">
          <Hero 
            content={content.hero} 
            onAction={() => scrollToSection('about')} 
          />
        </div>

        <div id="about">
          <About content={content.about} />
        </div>

        <div id="gallery">
          <Gallery content={content.gallery} />
        </div>

        <div id="location">
          <Location content={content.location} />
        </div>
      </main>

      <Footer content={content.footer} onContact={() => setIsContactOpen(true)} />

      <AnimatePresence>
        {isContactOpen && (
          <ContactModal 
            isOpen={isContactOpen} 
            onClose={() => setIsContactOpen(false)} 
            lang={lang}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;