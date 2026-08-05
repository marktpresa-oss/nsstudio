import React from 'react';
import { LogoNS } from './LogoNS';
import { Instagram, Linkedin, Facebook, Youtube, MessageCircle, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] text-white pt-20 pb-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <LogoNS variant="full" size="md" />

            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm">
              Estúdio de branding, engenharia web e marketing de alta performance pertencente ao <strong className="text-amber-300 font-bold">Grupo NS</strong>. Desenvolvemos estratégias de mercado para empresas que buscam liderança absoluta.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
                { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
                { icon: MessageCircle, href: 'https://wa.me/5511999999999', label: 'WhatsApp' }
              ].map((soc) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={soc.label}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={soc.label}
                    className="w-9 h-9 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-amber-300 hover:border-amber-400/50 hover:bg-neutral-800 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-300 mb-4">
              Mapa do Site
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              {['Quem Somos', 'Serviços', 'Processo', 'Diferenciais', 'Depoimentos', 'FAQ'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                    className="hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services List Quick Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-300 mb-4">
              Especialidades
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              <li>Branding & Posicionamento</li>
              <li>Websites Awwwards Level</li>
              <li>Mídia Paga & Performance</li>
              <li>Audiovisual Cinema 4K</li>
              <li>Design Editorial & Pitch Decks</li>
              <li>Consultoria BI & Expansão</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-300 mb-4">
              Sede & Contato
            </h4>
            <ul className="space-y-3 text-xs text-neutral-400 font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Av. Faria Lima, 3477 - Itaim Bibi, São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>contato@nsstudio.com.br</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>+55 (11) 3090-8800</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <div>
            © {new Date().getFullYear()} <strong className="text-neutral-300">NS STUDIO</strong> • Pertencente ao <strong className="text-amber-400">GRUPO NS</strong>. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-300 cursor-pointer">Termos LGPD</span>
            <span className="hover:text-neutral-300 cursor-pointer">Política de Privacidade</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-neutral-900 border border-white/10 hover:border-amber-400 text-neutral-400 hover:text-amber-300 transition-all cursor-pointer"
              title="Voltar ao Topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
