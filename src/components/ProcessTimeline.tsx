import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data/landingData';
import { Sparkles, CheckCircle2, Clock, ArrowDown, ChevronRight } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="processo" className="relative py-28 bg-[#070707] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold tracking-[0.2em] uppercase text-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>METODOLOGIA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            <span className="text-gold-gradient">Cronograma.</span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            Nada acontece por acaso. Seguimos uma jornada estruturada em 6 etapas para garantir previsibilidade, prazo e excelência absoluta em cada entrega.
          </p>
        </div>

        {/* Timeline Grid: Step Selectors & Detailed Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Timeline Step Buttons List */}
          <div className="lg:col-span-5 flex flex-col gap-4 relative">
            {/* Vertical Line Connector */}
            <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-gradient-to-b from-amber-500/40 via-amber-400/20 to-transparent pointer-events-none hidden sm:block" />

            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`relative z-10 p-5 rounded-2xl text-left transition-all duration-300 flex items-center justify-between group cursor-pointer border ${
                    isActive
                      ? 'bg-amber-500/10 border-amber-500/60 shadow-[0_0_30px_rgba(212,175,55,0.2)]'
                      : 'bg-[#111111] border-white/5 hover:border-amber-500/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Step Number Circle */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm transition-all ${
                        isActive
                          ? 'bg-gradient-to-br from-amber-300 to-amber-600 text-black shadow-lg scale-110'
                          : 'bg-neutral-800 text-neutral-400 group-hover:text-amber-300'
                      }`}
                    >
                      {step.number}
                    </div>

                    <div>
                      <div className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                        {step.subtitle}
                      </div>
                      <div className="text-base font-bold text-white group-hover:text-amber-200 transition-colors">
                        {step.title}
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      isActive ? 'translate-x-1 text-amber-400' : 'text-neutral-600 group-hover:text-amber-300'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase Card */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 md:p-12 rounded-3xl border border-amber-500/40 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-gradient-to-br from-[#161616] via-[#101010] to-[#080808]"
            >
              {/* Header Badge & Duration */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-mono font-black text-gold-gradient">
                    {PROCESS_STEPS[activeStep].number}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {PROCESS_STEPS[activeStep].title}
                    </h3>
                    <p className="text-xs font-mono text-amber-300 uppercase tracking-widest">
                      {PROCESS_STEPS[activeStep].subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{PROCESS_STEPS[activeStep].duration}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed mb-8">
                {PROCESS_STEPS[activeStep].description}
              </p>

              {/* Key Deliverables */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  Entregáveis Principais desta Etapa:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PROCESS_STEPS[activeStep].deliverables.map((del, delIdx) => (
                    <div
                      key={delIdx}
                      className="p-3.5 rounded-xl glass-panel border border-amber-500/20 flex items-center gap-3 text-xs text-neutral-200 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
