import React from 'react';
import { Mail } from 'lucide-react';
import { LocalizedContent } from '../types';

interface FooterProps {
  content: LocalizedContent['footer'];
  onContact: () => void; // no longer used, but kept for compatibility
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  const mailtoHref =
    "mailto:lavita@pdr.hr?subject=La%20Vita%20Accommodation%20Inquiry";

  return (
    <footer className="bg-brand-dark text-stone-300 py-20 border-t border-brand-accent/20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-4xl font-serif text-white">La Vita</h3>
            <p className="text-base font-light opacity-80 max-w-sm leading-relaxed text-stone-400">
              {content.slogan}
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-brand-accent font-bold uppercase tracking-widest text-xs">
              {content.contact_title}
            </h4>
            <div className="flex flex-col gap-4 font-light">
              <a 
                href={mailtoHref}
                className="flex items-center gap-3 hover:text-brand-accent transition-colors group text-left"
              >
                <span className="p-2 bg-white/5 rounded-full group-hover:bg-brand-accent group-hover:text-white transition-colors">
                  <Mail size={16} />
                </span>
                <span>lavita@pdr.hr</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs font-light text-stone-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Apartman La Vita. {content.rights}</p>
          <div className="flex items-center gap-6">
            <span>Prigorje Brdovečko, Croatia</span>
            <span className="hidden md:block w-1 h-1 bg-stone-700 rounded-full"></span>
            <span>Design by Balmer Designs</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;