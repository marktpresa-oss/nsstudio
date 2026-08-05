import React from 'react';
import { motion } from 'motion/react';
import { DiagnosticForm } from './DiagnosticForm';
import { MessageCircle, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { LogoNS } from './LogoNS';

interface FinalCTAProps {
  preselectedService?: string;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ preselectedService }) => {
  return (
    <section id="contato" className="relative py-28 bg-[#070707] overflow-hidden border-t border-white/10">
      {/* Background Ambient Spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: High Impact Copy & Branding */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold tracking-[0.2em] uppercase text-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>DISCUSSÃO DE PROJETO</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              Sua empresa transmite o{' '}
              <span className="text-gold-gradient">valor que realmente possui?</span>
            </h2>

            <div className="space-y-4 text-neutral-300 font-light text-base sm:text-lg leading-relaxed">
              <p>
                Grandes empresas não crescem por acaso. Elas possuem <strong className="text-amber-200 font-bold">posicionamento</strong>. <strong className="text-amber-200 font-bold">Estratégia</strong>. <strong className="text-amber-200 font-bold">Marca</strong>. <strong className="text-amber-200 font-bold">Comunicação</strong>.
              </p>
              <p>
                Nós construímos tudo isso sob medida para o seu negócio alcançar o topo.
              </p>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-6 rounded-2xl glass-card border border-emerald-500/30 space-y-3">
              <div className="flex items-center gap-3 text-emerald-400 font-bold text-sm uppercase tracking-wider">
                <MessageCircle className="w-5 h-5" />
                <span>Atendimento Imediato via WhatsApp</span>
              </div>
              <p className="text-xs text-neutral-300 font-light">
                Prefere conversar diretamente com um dos nossos sócios diretores?
              </p>
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20diagn%C3%B3stico%20de%20marca%20para%20minha%20empresa."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 uppercase tracking-widest pt-1 transition-colors"
              >
                <span>Iniciar Conversa no WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Brand Stamp */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-4">
              <LogoNS variant="full" size="md" />
            </div>
          </div>

          {/* Right Column: Diagnostic Form */}
          <div className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-amber-500/40 relative bg-gradient-to-br from-[#121212] via-[#0e0e0e] to-[#080808] shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
            <div className="mb-6 pb-4 border-b border-white/10">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Solicitar Diagnóstico Estratégico
              </h3>
              <p className="text-xs text-neutral-400 mt-1 font-light">
                Preencha o formulário abaixo e receba um estudo preliminar do seu posicionamento.
              </p>
            </div>

            <DiagnosticForm preselectedService={preselectedService} />
          </div>
        </div>
      </div>
    </section>
  );
};
