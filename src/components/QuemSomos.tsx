import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Compass, Target, Sparkles, Award, Globe, ArrowRight } from 'lucide-react';
import { LogoNS } from './LogoNS';

export const QuemSomos: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'posicionamento' | 'branding' | 'performance' | 'internacional'>('posicionamento');

  const tabsContent = {
    posicionamento: {
      title: 'Posicionamento & Inteligência Estratégica',
      description: 'Grandes empresas não cobram caro por acaso: elas possuem autoridade percebida indiscutível. Construímos estratégias de posicionamento que retiram sua marca da guerra de preços e a elevam para o topo do seu segmento.',
      bullets: [
        'Diagnóstico profundo de vantagem competitiva',
        'Criação de diferenciais únicos e difíceis de copiar',
        'Estratégia de precificação e valor percebido',
        'Alinhamento entre mensagem da marca e expectativa do cliente'
      ]
    },
    branding: {
      title: 'Branding & Identidade Exclusiva',
      description: 'Inspirados na sofisticação de estúdios globais como Pentagram, Interbrand e Framer, criamos universos visuais marcantes com sistemas de design coerentes, tipografias proprietárias e símbolos 3D tridimensionais.',
      bullets: [
        'Logo 3D & Vetorial com rigor geométrico',
        'Brandbook completo com regras de aplicação',
        'Design de embalagens e materiais impressos corporativos',
        'Diretrizes de arquitetura de marca para holding e subsidiárias'
      ]
    },
    performance: {
      title: 'Marketing Orientado a Resultados & Escala',
      description: 'Design bonito sem conversão é apenas arte. No NS Studio, combinamos estética Awwwards com funis de aquisição em tráfego pago, SEO e inteligência comercial para gerar retorno sobre investimento contínuo.',
      bullets: [
        'Campanhas Omnichannel em Google Ads & Meta Ads',
        'Websites com velocidade extrema e SEO avançado',
        'Funis de vendas para captação de clientes B2B e B2C',
        'Relatórios transparentes baseados em ROI'
      ]
    },
    internacional: {
      title: 'Padrão Internacional do Grupo NS',
      description: 'Como braço de branding e estratégia do Grupo NS, aplicamos metodologias de alto desempenho utilizadas pelas maiores marcas globais para garantir que sua empresa concorra de igual para igual no mercado mundial.',
      bullets: [
        'Atendimento multidisciplinar e focado em negócios',
        'Entregáveis 100% autorais e proprietários',
        'Tecnologia de ponta em engenharia web',
        'Segurança jurídica e conformidade LGPD'
      ]
    }
  };

  return (
    <section id="quem-somos" className="relative py-28 bg-[#070707] overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold tracking-[0.2em] uppercase text-amber-300 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>QUEM SOMOS • GRUPO NS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Especialistas em criar o{' '}
              <span className="text-gold-gradient">futuro das marcas.</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            O NS Studio nasceu da necessidade de entregar para empresas brasileiras o mesmo nível de sofisticação, estratégia e execução gráfica praticado pelas maiores agências e estúdios de branding de Nova York, Londres e Tóquio.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Tab Selector */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {[
              { id: 'posicionamento', label: 'Posicionamento & Estratégia', icon: Target },
              { id: 'branding', label: 'Branding & Identidade', icon: Award },
              { id: 'performance', label: 'Marketing & Performance', icon: Compass },
              { id: 'internacional', label: 'Grupo NS & Padrão Global', icon: Globe }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`p-5 rounded-2xl text-left transition-all duration-300 flex items-center justify-between group cursor-pointer border ${
                    isActive
                      ? 'bg-amber-500/10 border-amber-500/50 text-white shadow-[0_0_25px_rgba(212,175,55,0.15)]'
                      : 'bg-[#121212] border-white/5 text-neutral-400 hover:border-amber-500/30 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-gradient-to-br from-amber-400 to-amber-600 text-black font-bold'
                          : 'bg-neutral-800 text-neutral-400 group-hover:text-amber-300'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm tracking-wide">{tab.label}</span>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'translate-x-1 text-amber-400' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </button>
              );
            })}

            {/* Logo Badge Card */}
            <div className="mt-4 glass-card p-6 rounded-2xl flex items-center justify-between border border-amber-500/20">
              <LogoNS variant="full" size="md" />
              <div className="text-right">
                <div className="text-xs font-mono text-amber-300">ESTRATÉGIA</div>
                <div className="text-[10px] text-neutral-500 uppercase">MARCAS • RESULTADOS</div>
              </div>
            </div>
          </div>

          {/* Right Column: Tab Detailed Card Display */}
          <div className="lg:col-span-7 glass-card p-8 md:p-10 rounded-3xl border border-amber-500/30 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-[#141414] via-[#0d0d0d] to-[#080808]">
            <div className="relative z-10 space-y-6">
              <div className="inline-block text-xs font-mono text-amber-400 uppercase tracking-widest px-3 py-1 bg-amber-500/10 rounded-md border border-amber-500/20">
                Pilar Estratégico
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {tabsContent[activeTab].title}
              </h3>

              <p className="text-neutral-300 font-light text-base leading-relaxed">
                {tabsContent[activeTab].description}
              </p>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                  Diferenciais Competitivos
                </div>
                {tabsContent[activeTab].bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                    <span className="text-sm text-neutral-200 font-medium">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subtle Metallic Background Stamp */}
            <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
              <LogoNS variant="symbol-only" size="xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
