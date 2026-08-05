import React from 'react';
import { motion } from 'motion/react';
import { DIFFERENTIALS_DATA } from '../data/landingData';
import {
  UserCheck,
  Sparkles,
  Users,
  Cpu,
  Award,
  BarChart3,
  Target,
  Briefcase,
  Zap,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const DifferentialsGrid: React.FC = () => {
  const getDifferentialIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck': return UserCheck;
      case 'Sparkles': return Sparkles;
      case 'Users': return Users;
      case 'Cpu': return Cpu;
      case 'Award': return Award;
      case 'BarChart3': return BarChart3;
      case 'Target': return Target;
      case 'Briefcase': return Briefcase;
      case 'Zap': return Zap;
      case 'ShieldCheck': return ShieldCheck;
      default: return CheckCircle2;
    }
  };

  return (
    <section id="diferenciais" className="relative py-28 bg-[#090909] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold tracking-[0.2em] uppercase text-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>POR QUE A NS STUDIO?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Nossos <span className="text-gold-gradient">Diferenciais.</span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            Eliminamos a superficialidade do marketing tradicional para entregar valor real de negócios, consistência de marca e ROI garantido.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {DIFFERENTIALS_DATA.map((diff, idx) => {
            const Icon = getDifferentialIcon(diff.iconName);

            return (
              <motion.div
                key={diff.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card p-6 rounded-2xl border border-amber-500/20 relative flex flex-col justify-between group hover:border-amber-500/50 hover:bg-[#151515]"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <h3 className="text-base font-bold text-white group-hover:text-amber-200 transition-colors">
                      {diff.title}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex justify-end">
                  <span className="text-[10px] font-mono text-amber-400/60 uppercase tracking-widest">
                    #0{idx + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
