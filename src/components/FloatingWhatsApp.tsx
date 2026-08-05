import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto">
      {/* Expandable Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25 }}
            className="mb-4 w-80 sm:w-88 glass-card rounded-2xl border border-emerald-500/40 bg-[#0e0e0e] text-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0e0e0e]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">NS Studio WhatsApp</div>
                  <div className="text-[10px] text-emerald-400 font-mono">Atendimento Online</div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Simulated Chat Message Bubble */}
            <div className="p-3.5 rounded-xl bg-[#181818] border border-white/5 text-xs text-neutral-200 font-light leading-relaxed mb-4">
              <p>
                👋 Olá! Seja bem-vindo ao <strong className="text-amber-300 font-bold">NS Studio (Grupo NS)</strong>.
              </p>
              <p className="mt-2">
                Como podemos acelerar o posicionamento e o crescimento da sua marca hoje?
              </p>
              <span className="text-[9px] text-neutral-500 block text-right mt-1 font-mono">Agora</span>
            </div>

            {/* WhatsApp Action Button */}
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Estou%20no%20site%20do%20NS%20Studio%20e%20gostaria%20de%20falar%20com%20um%20especialista."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Iniciar Conversa Direta</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-4 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 text-black font-bold shadow-[0_10px_30px_rgba(16,185,129,0.4)] hover:scale-110 transition-transform duration-300 cursor-pointer group"
        aria-label="Abrir WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-[#070707] animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-[#070707]" />

        <MessageCircle className="w-7 h-7 fill-current" />
      </button>
    </div>
  );
};
