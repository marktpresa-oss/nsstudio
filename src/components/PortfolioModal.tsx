import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PortfolioItem } from '../data/landingData';
import { X, CheckCircle, ArrowUpRight, Award, Shield, Calendar, Building } from 'lucide-react';

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onOpenDiagnostic: () => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({ item, onClose, onOpenDiagnostic }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/90 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border border-amber-500/40 bg-[#0d0d0d] text-white p-6 sm:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.95)]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer z-10"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Image / Mockup Banner */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-8 border border-white/10">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-black/30 flex flex-col justify-end p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-amber-500/30 border border-amber-400/50 text-xs font-bold text-amber-200 uppercase tracking-widest">
                  {item.category}
                </span>
                <span className="text-xs text-neutral-300 font-mono">
                  {item.year}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                {item.title}
              </h2>
            </div>
          </div>

          {/* Client & Year Info */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[#141414] border border-white/5 mb-8 text-xs font-mono">
            <div>
              <div className="text-neutral-500 uppercase">Cliente</div>
              <div className="font-bold text-amber-300 mt-1">{item.client}</div>
            </div>
            <div>
              <div className="text-neutral-500 uppercase">Ano</div>
              <div className="font-bold text-white mt-1">{item.year}</div>
            </div>
            <div>
              <div className="text-neutral-500 uppercase">Categoria</div>
              <div className="font-bold text-white mt-1">{item.category}</div>
            </div>
            <div>
              <div className="text-neutral-500 uppercase">Mockup 3D</div>
              <div className="font-bold text-amber-300 mt-1">{item.mockupType}</div>
            </div>
          </div>

          {/* Impact Metrics Banner */}
          <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-amber-500/15 via-amber-600/10 to-transparent border border-amber-500/30">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-300 mb-4 flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Resultados Alcançados com o NS Studio</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {item.impactMetrics.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-3xl font-black text-gold-gradient">{metric.value}</div>
                  <div className="text-xs text-neutral-300 font-medium">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Case Content: Challenge & Solution */}
          <div className="space-y-6 text-sm text-neutral-300 font-light leading-relaxed mb-8">
            <div>
              <h3 className="text-base font-bold text-white mb-2 uppercase tracking-wider font-mono text-amber-400">
                Desafio
              </h3>
              <p>{item.challenge}</p>
            </div>

            <div>
              <h3 className="text-base font-bold text-white mb-2 uppercase tracking-wider font-mono text-amber-400">
                Solução Estratégica
              </h3>
              <p>{item.solution}</p>
            </div>
          </div>

          {/* Deliverables List */}
          <div className="mb-8 pt-6 border-t border-white/10">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
              Entregáveis do Projeto:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {item.deliverables.map((del, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-neutral-200 p-3 rounded-lg bg-[#141414] border border-white/5">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-400">
              Quer resultados semelhantes para o seu segmento?
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenDiagnostic();
              }}
              className="btn-gold px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
            >
              <span>Quero um Projeto Assim</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
