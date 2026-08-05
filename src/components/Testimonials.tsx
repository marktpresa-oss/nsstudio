import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data/landingData';
import { Sparkles, Star, Quote, Award } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="relative py-28 bg-[#090909] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold tracking-[0.2em] uppercase text-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>RECONHECIMENTO DE QUEM CONFIA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Depoimentos de <span className="text-gold-gradient">Líderes de Mercado.</span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            A verdadeira validação do nosso trabalho vem dos resultados financeiros e do ganho de autoridade percebida por nossos clientes.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card p-8 rounded-3xl border border-amber-500/25 relative flex flex-col justify-between group hover:border-amber-500/50 bg-gradient-to-b from-[#141414] to-[#0d0d0d]"
            >
              <div>
                {/* 5 Golden Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-amber-500/20 group-hover:text-amber-500/40 transition-colors" />
                </div>

                {/* Quote Content */}
                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed italic mb-8">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Result Badge & Profile Info */}
              <div className="space-y-4 pt-6 border-t border-white/10">
                {/* Highlight Result */}
                <div className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300 flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>{testimonial.featuredResult}</span>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-amber-400/60 shadow-lg"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-neutral-400">
                      {testimonial.role} • <span className="text-amber-300/80">{testimonial.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
