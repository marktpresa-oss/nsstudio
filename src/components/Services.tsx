import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA, ServiceCategory } from '../data/landingData';
import {
  Crown,
  Palette,
  Layout,
  TrendingUp,
  MessageSquare,
  Video,
  FileText,
  Compass,
  CheckCircle,
  ArrowUpRight,
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crown': return Crown;
      case 'Palette': return Palette;
      case 'Layout': return Layout;
      case 'TrendingUp': return TrendingUp;
      case 'MessageSquare': return MessageSquare;
      case 'Video': return Video;
      case 'FileText': return FileText;
      case 'Compass': return Compass;
      default: return Sparkles;
    }
  };

  const categoriesFilter = [
    { id: 'all', label: 'Todos os Serviços' },
    { id: 'branding', label: 'Branding & Identidade' },
    { id: 'websites', label: 'Websites & Digital' },
    { id: 'marketing', label: 'Marketing & Performance' },
    { id: 'audiovisual', label: 'Audiovisual & Motion' }
  ];

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'branding') return s.id === 'branding' || s.id === 'identidade-visual';
    if (filterCategory === 'websites') return s.id === 'websites';
    if (filterCategory === 'marketing') return s.id === 'marketing' || s.id === 'conteudo';
    if (filterCategory === 'audiovisual') return s.id === 'audiovisual';
    return true;
  });

  return (
    <section id="servicos" className="relative py-28 bg-[#090909] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold tracking-[0.2em] uppercase text-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>SOLUÇÕES INTEGRADAS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Nossos <span className="text-gold-gradient">Serviços e Soluções.</span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            Desenvolvemos o ecossistema completo de comunicação, design e marketing necessário para posicionar sua empresa entre as líderes do setor.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categoriesFilter.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  filterCategory === cat.id
                    ? 'bg-amber-400 text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                    : 'bg-[#151515] text-neutral-400 border border-white/5 hover:text-white hover:border-amber-500/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {filteredServices.map((service, idx) => {
            const Icon = getServiceIcon(service.iconName);
            const isExpanded = expandedCard === service.id;

            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-card rounded-3xl p-8 border border-amber-500/20 relative flex flex-col justify-between group hover:border-amber-500/50"
              >
                {/* Featured Tag */}
                {service.featuredTag && (
                  <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-[10px] font-mono text-amber-300 uppercase tracking-widest">
                    {service.featuredTag}
                  </div>
                )}

                <div>
                  {/* Icon Box */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400/20 via-amber-500/10 to-transparent border border-amber-500/30 flex items-center justify-center text-amber-300 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Titles */}
                  <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-1">
                    {service.subtitle}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverable Items List */}
                  <div className="space-y-2 mb-6 border-t border-white/10 pt-4">
                    {service.items.slice(0, isExpanded ? service.items.length : 5).map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center gap-2.5 text-xs text-neutral-300">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expand Toggle if list has more than 5 */}
                  {service.items.length > 5 && (
                    <button
                      onClick={() => setExpandedCard(isExpanded ? null : service.id)}
                      className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 mb-6 cursor-pointer"
                    >
                      <span>{isExpanded ? 'Ver Menos' : `Ver Mais (${service.items.length - 5} itens)`}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  )}
                </div>

                {/* Card Footer Action */}
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-3 px-4 rounded-xl glass-panel border border-amber-500/30 hover:border-amber-400 text-xs font-bold uppercase tracking-wider text-amber-300 hover:text-white hover:bg-amber-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer mt-auto"
                >
                  <span>Solicitar Cotação</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
