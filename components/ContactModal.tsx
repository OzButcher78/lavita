import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Language } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  const labels = {
    hr: {
      title: "Rezervirajte svoj boravak",
      subtitle: "Pošaljite nam upit i odgovorit ćemo vam u najkraćem mogućem roku.",
      name: "Ime i Prezime",
      email: "Email adresa",
      dates: "Željeni datumi",
      message: "Poruka",
      send: "Pošalji Upit"
    },
    en: {
      title: "Book Your Stay",
      subtitle: "Send us an inquiry and we will get back to you as soon as possible.",
      name: "Full Name",
      email: "Email Address",
      dates: "Preferred Dates",
      message: "Message",
      send: "Send Inquiry"
    }
  }[lang];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl p-8 md:p-10 z-10"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-brand-dark transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-serif text-brand-dark mb-2">{labels.title}</h2>
          <p className="text-stone-500 text-sm">{labels.subtitle}</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">{labels.name}</label>
            <input 
              type="text" 
              className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all"
            />
          </div>
          
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">{labels.email}</label>
            <input 
              type="email" 
              className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">{labels.dates}</label>
            <input 
              type="text" 
              placeholder="e.g. 15.07.2024 - 20.07.2024"
              className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">{labels.message}</label>
            <textarea 
              rows={4}
              className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all resize-none"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-brand-dark text-white font-medium py-3.5 rounded-lg hover:bg-brand-accent transition-colors shadow-lg mt-2"
          >
            {labels.send}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactModal;