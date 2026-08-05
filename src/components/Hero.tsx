import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, MessageCircle, Sparkles, Shield, Play, ChevronRight } from 'lucide-react';
import { LogoNS } from './LogoNS';

interface HeroProps {
  onOpenDiagnostic: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDiagnostic }) => {
  const [activeMockup, setActiveMockup] = useState<'all' | 'brandbook' | 'website' | 'mobile'>('all');

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#070707]">
      {/* Background Ambient Spotlights & Video Simulation */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Golden Spotlights */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[140px]" />

        {/* Ambient Dark Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Brand & Copy */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-8">
          {/* Top Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border border-amber-500/30 shadow-[0_0_20px_rgba(212,175,55,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-200">
              GRUPO NS • ESTÚDIO ESTRATÉGICO
            </span>
          </motion.div>

          {/* Giant Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]"
          >
            Transformamos empresas em{' '}
            <span className="text-gold-gradient relative inline-block">
              marcas memoráveis.
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-600 rounded-full opacity-80" />
            </span>
          </motion.h1>

          {/* Subheadline Pill List & Intro Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4 max-w-2xl"
          >
            {/* Core Pillars */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-300">
              {['Estratégia', 'Branding', 'Marketing', 'Design', 'Performance'].map((pillar, idx) => (
                <React.Fragment key={pillar}>
                  <span className="px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-200">
                    {pillar}
                  </span>
                  {idx < 4 && <span className="text-neutral-600">•</span>}
                </React.Fragment>
              ))}
            </div>

            <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed">
              Criamos negócios preparados para crescer e dominar seus mercados com autoridade, design de elite e inteligência de conversão.
            </p>
          </motion.div>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2"
          >
            <button
              onClick={onOpenDiagnostic}
              className="btn-gold px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-3 shadow-[0_10px_35px_rgba(212,175,55,0.3)] cursor-pointer"
            >
              <span>Solicitar Diagnóstico</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>

            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Vim%20pelo%20site%20do%20NS%20Studio%20e%20gostaria%20de%20falar%20com%20um%20especialista."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl glass-panel border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-3 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Falar no WhatsApp</span>
            </a>
          </motion.div>

          {/* Trust Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-4 flex items-center gap-6 text-xs text-neutral-400 font-medium border-t border-white/10 w-full"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-400" />
              <span>Projetos 100% Exclusivos</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Padrão Internacional</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive 3D Floating Mockups Stage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* Floating Stage Container */}
          <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
            {/* Background Golden Halo Ring */}
            <div className="absolute inset-0 rounded-full border border-amber-500/20 bg-gradient-to-tr from-amber-500/5 via-transparent to-amber-300/10 animate-spin-slow" />

            {/* Central Macbook Mockup Card */}
            <motion.div
              whileHover={{ scale: 1.03, rotateY: 5 }}
              className="absolute z-20 w-[88%] bg-[#121212] rounded-2xl border border-amber-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden p-3 transition-all"
            >
              {/* Macbook Header */}
              <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-white/10 px-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-[10px] text-neutral-500 ml-auto font-mono">nsstudio.com.br</span>
              </div>

              {/* Screen Preview */}
              <div className="relative rounded-lg overflow-hidden aspect-[16/10] bg-[#080808] border border-white/5 group">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="NS Studio Website Mockup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 flex flex-col justify-end p-4">
                  <div className="text-[10px] font-semibold text-amber-300 uppercase tracking-widest">
                    Websites & Portais
                  </div>
                  <div className="text-sm font-bold text-white">
                    Vanguard Holdings • High Performance
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating iPhone Mockup (Top Right) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="absolute -top-4 -right-2 z-30 w-[42%] bg-[#181818] rounded-3xl border border-amber-400/40 p-2 shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            >
              <div className="relative aspect-[9/18] rounded-2xl overflow-hidden bg-black border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80"
                  alt="Mobile Brand Book App"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-2 bg-black/80 backdrop-blur-md">
                  <div className="text-[9px] font-bold text-amber-200">Mobile UI & App</div>
                  <div className="text-[8px] text-neutral-400">Padrão Apple Design</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Brand Book 3D Card (Bottom Left) */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-4 z-30 w-[48%] glass-card rounded-2xl p-4 border border-amber-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center font-bold text-black text-xs">
                  NS
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Brand Book 3D</div>
                  <div className="text-[10px] text-amber-300/90">Manual de Marca & DNA</div>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-white/10 flex justify-between items-center text-[9px] text-neutral-400">
                <span>Identidade Visual</span>
                <span className="text-amber-400 font-semibold">100% Autoral</span>
              </div>
            </motion.div>

            {/* Motion Graphics Badge (Top Left) */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-8 -left-6 z-30 glass-panel px-3.5 py-2 rounded-xl border border-amber-400/40 flex items-center gap-2 shadow-lg"
            >
              <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-white">Motion Graphics 4K</div>
                <div className="text-[8px] text-amber-300">Vídeos Institucionais</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
