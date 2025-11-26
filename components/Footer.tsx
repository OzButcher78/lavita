import React from 'react';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';
import { LocalizedContent } from '../types';

interface FooterProps {
  content: LocalizedContent['footer'];
  onContact: () => void;
}

const Footer: React.FC<FooterProps> = ({ content, onContact }) => {
  return (
    <footer className="bg-brand-dark text-stone-300 py-20 border-t border-brand-accent/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-4xl font-serif text-white">La Vita</h3>
            <p className="text-base font-light opacity-80 max-w-sm leading-relaxed text-stone-400">
              {content.slogan}
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-brand-accent font-bold uppercase tracking-widest text-xs">{content.contact_title}</h4>
            <div className="flex flex-col gap-4 font-light">
              <a href="tel:+385910000000" className="flex items-center gap-3 hover:text-brand-accent transition-colors group">
                <span className="p-2 bg-white/5 rounded-full group-hover:bg-brand-accent group-hover:text-white transition-colors">
                  <Phone size={16} />
                </span>
                <span>+385 91 000 0000</span>
              </a>
              <button onClick={onContact} className="flex items-center gap-3 hover:text-brand-accent transition-colors group text-left">
                <span className="p-2 bg-white/5 rounded-full group-hover:bg-brand-accent group-hover:text-white transition-colors">
                  <Mail size={16} />
                </span>
                <span>info@lavita-apartments.hr</span>
              </button>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-6">
            <h4 className="text-brand-accent font-bold uppercase tracking-widest text-xs">{content.follow_title}</h4>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-brand-accent hover:text-white transition-all transform hover:-translate-y-1">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-brand-accent hover:text-white transition-all transform hover:-translate-y-1">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs font-light text-stone-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Apartman La Vita. {content.rights}</p>
          <div className="flex items-center gap-6">
            <span>Prigorje Brdovečko, Croatia</span>
            <span className="hidden md:block w-1 h-1 bg-stone-700 rounded-full"></span>
            <span>Design by La Vita</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;