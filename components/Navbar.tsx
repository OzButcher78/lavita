import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Language, LocalizedContent } from '../types';

interface NavbarProps {
  lang: Language;
  toggleLanguage: () => void;
  content: LocalizedContent['nav'];
  onNavigate: (id: string) => void;
  onBook: () => void; // kannst du später aus dem Typ entfernen, wenn du das Modal ganz rausnimmst
}

const Navbar: React.FC<NavbarProps> = ({ lang, toggleLanguage, content, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { label: content.home, id: 'home' },
    { label: content.about, id: 'about' },
    { label: content.gallery, id: 'gallery' },
    { label: content.location, id: 'location' },
  ];

  const mailtoHref =
    "mailto:lavita@pdr.hr?subject=La%20Vita%20Accommodation%20Inquiry";

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="cursor-pointer z-50"
          onClick={() => onNavigate('home')}
        >
          <h1 className={`font-serif text-2xl md:text-3xl font-bold tracking-tight ${isScrolled ? 'text-brand-dark' : 'text-brand-dark md:text-white'}`}>
            La Vita
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`text-sm font-medium transition-colors hover:text-brand-accent ${
                isScrolled ? 'text-brand-dark' : 'text-white/90'
              }`}
            >
              {link.label}
            </button>
          ))}
          
          <div className="h-4 w-px bg-current opacity-30 mx-2" />

          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1 text-sm font-medium uppercase tracking-wider ${
              isScrolled ? 'text-brand-dark' : 'text-white'
            }`}
          >
            <Globe size={16} />
            {lang}
          </button>

          {/* Desktop Book Button now as mailto link */}
          <a
            href={mailtoHref}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              isScrolled 
                ? 'bg-brand-dark text-white hover:bg-brand-accent' 
                : 'bg-white text-brand-dark hover:bg-brand-light'
            }`}
          >
            {content.book}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden z-50">
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider ${
              isMobileMenuOpen ? 'text-brand-dark' : (isScrolled ? 'text-brand-dark' : 'text-brand-dark')
            }`}
          >
            {lang}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${isMobileMenuOpen ? 'text-brand-dark' : (isScrolled ? 'text-brand-dark' : 'text-brand-dark')}`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8"
            >
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-2xl font-serif text-brand-dark hover:text-brand-accent"
                >
                  {link.label}
                </button>
              ))}

              {/* Mobile Book Button now as mailto link */}
              <a
                href={mailtoHref}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 px-8 py-3 bg-brand-dark text-white rounded-full text-lg font-medium"
              >
                {content.book}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;