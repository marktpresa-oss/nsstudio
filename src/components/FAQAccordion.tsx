import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_DATA } from '../data/landingData';
import { Sparkles, ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-28 bg-[#070707] overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold tracking-[0.2em] uppercase text-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>TRANSPARÊNCIA TOTAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Perguntas <span className="text-gold-gradient">Frequentes.</span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            Esclareça suas dúvidas sobre a metodologia de trabalho, prazos, entregáveis e processo contratual do NS Studio.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-amber-500/50 bg-[#141414]' : 'border-white/5 bg-[#0f0f0f] hover:border-amber-500/30'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors ${isOpen ? 'text-amber-400' : 'text-neutral-500'}`} />
                    <span className="text-base font-bold text-white tracking-wide">
                      {faq.question}
                    </span>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-amber-500/20 text-amber-300' : 'bg-neutral-800 text-neutral-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-2 text-sm text-neutral-300 font-light leading-relaxed border-t border-white/5"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* FAQ Direct Contact Option */}
        <div className="mt-12 text-center p-6 rounded-2xl glass-panel border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-neutral-300">
            Ainda tem alguma dúvida específica sobre o seu projeto?
          </div>
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20os%20servi%C3%A7os%20do%20NS%20Studio."
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-2 tracking-wider uppercase"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com Especialista via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
