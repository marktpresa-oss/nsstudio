import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA, PortfolioItem } from '../data/landingData';
import { PortfolioModal } from './PortfolioModal';
import { Sparkles, Eye, ArrowUpRight, Layers } from 'lucide-react';

interface PortfolioProps {
  onOpenDiagnostic: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenDiagnostic }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const categories = ['Todos', 'Branding', 'Websites', 'Audiovisual', 'Marketing', 'Apresentações'];

  const filteredItems = PORTFOLIO_DATA.filter((item) => {
    if (selectedCategory === 'Todos') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="portfolio" className="relative py-28 bg-[#070707] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold tracking-[0.2em] uppercase text-amber-300 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>CASOS DE SUCESSO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Portfólio de <span className="text-gold-gradient">Impacto Real.</span>
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                    : 'bg-[#141414] text-neutral-400 border border-white/5 hover:text-white hover:border-amber-500/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setActiveModalItem(item)}
              className="glass-card rounded-3xl overflow-hidden border border-amber-500/20 group cursor-pointer relative flex flex-col justify-between"
            >
              {/* Image Showcase */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/30 opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-amber-500/40 text-[10px] font-mono text-amber-300 uppercase tracking-widest">
                  {item.category}
                </div>

                {/* Hover Quick View Trigger */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-xs">
                  <span className="btn-gold px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>Ver Case Completo</span>
                  </span>
                </div>
              </div>

              {/* Card Text Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-1">
                    {item.client} • {item.year}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light line-clamp-2 leading-relaxed mb-4">
                    {item.shortDescription}
                  </p>
                </div>

                {/* Metrics Highlight */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="text-xs font-mono font-bold text-amber-300">
                    {item.impactMetrics[0].label}: <span className="text-white font-black">{item.impactMetrics[0].value}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <PortfolioModal
        item={activeModalItem}
        onClose={() => setActiveModalItem(null)}
        onOpenDiagnostic={onOpenDiagnostic}
      />
    </section>
  );
};
