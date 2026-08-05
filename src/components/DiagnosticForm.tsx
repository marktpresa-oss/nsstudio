import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, Check, ShieldCheck, MessageCircle, Sparkles } from 'lucide-react';

interface DiagnosticFormProps {
  preselectedService?: string;
}

export const DiagnosticForm: React.FC<DiagnosticFormProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    telefone: '',
    email: '',
    cidade: '',
    segmento: '',
    faturamento: 'R$ 50k - R$ 200k/mês',
    servicos: preselectedService ? [preselectedService] : ['Branding', 'Website'],
    mensagem: '',
    lgpd: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const availableServices = [
    'Branding',
    'Website',
    'Marketing',
    'Design',
    'Audiovisual',
    'Consultoria'
  ];

  const handleCheckboxChange = (service: string) => {
    setFormData((prev) => {
      const exists = prev.servicos.includes(service);
      if (exists) {
        return { ...prev, servicos: prev.servicos.filter((s) => s !== service) };
      } else {
        return { ...prev, servicos: [...prev.servicos, service] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.lgpd) {
      alert('Por favor, aceite os termos de privacidade LGPD para prosseguir.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger Golden Confetti Explosion
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#FFF2B3', '#AA771C', '#FFFFFF']
        });
      } catch (err) {
        console.log('Confetti error:', err);
      }
    }, 1000);
  };

  const generateWhatsAppLink = () => {
    const text = `*SOLICITAÇÃO DE DIAGNÓSTICO DE MARCA - NS STUDIO*%0A%0A` +
      `*Nome:* ${encodeURIComponent(formData.nome)}%0A` +
      `*Empresa:* ${encodeURIComponent(formData.empresa)}%0A` +
      `*Email:* ${encodeURIComponent(formData.email)}%0A` +
      `*Telefone:* ${encodeURIComponent(formData.telefone)}%0A` +
      `*Cidade:* ${encodeURIComponent(formData.cidade)}%0A` +
      `*Segmento:* ${encodeURIComponent(formData.segmento)}%0A` +
      `*Faturamento:* ${encodeURIComponent(formData.faturamento)}%0A` +
      `*Serviços Desejados:* ${encodeURIComponent(formData.servicos.join(', '))}%0A` +
      `*Mensagem:* ${encodeURIComponent(formData.mensagem)}`;

    return `https://wa.me/5511999999999?text=${text}`;
  };

  if (submitted) {
    return (
      <div className="glass-card p-8 sm:p-12 rounded-3xl border border-amber-500/50 text-center space-y-6 bg-gradient-to-br from-[#181818] via-[#121212] to-[#0a0a0a]">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mx-auto text-black shadow-[0_0_30px_rgba(212,175,55,0.4)]">
          <Check className="w-8 h-8 stroke-[3]" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-white">
          Proposta Solicitada com Sucesso!
        </h3>

        <p className="text-neutral-300 text-sm max-w-md mx-auto font-light leading-relaxed">
          Recebemos os dados da sua empresa. Um dos nossos diretores estratégicos entrará em contato em até 2 horas úteis.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Acelerar Atendimento via WhatsApp</span>
          </a>

          <button
            onClick={() => setSubmitted(false)}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Enviar Nova Mensagem
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Grid for Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-2">
            Seu Nome Completo *
          </label>
          <input
            type="text"
            required
            placeholder="Ex: Carlos Eduardo"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            className="w-full px-4 py-3.5 rounded-xl bg-[#141414] border border-white/10 focus:border-amber-400 text-white text-sm outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-2">
            Nome da Sua Empresa *
          </label>
          <input
            type="text"
            required
            placeholder="Ex: Vanguard Group"
            value={formData.empresa}
            onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
            className="w-full px-4 py-3.5 rounded-xl bg-[#141414] border border-white/10 focus:border-amber-400 text-white text-sm outline-none transition-colors"
          />
        </div>
      </div>

      {/* Grid for Phone & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-2">
            Telefone / WhatsApp *
          </label>
          <input
            type="tel"
            required
            placeholder="(11) 99999-9999"
            value={formData.telefone}
            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
            className="w-full px-4 py-3.5 rounded-xl bg-[#141414] border border-white/10 focus:border-amber-400 text-white text-sm outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-2">
            E-mail Corporativo *
          </label>
          <input
            type="email"
            required
            placeholder="carlos@empresa.com.br"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3.5 rounded-xl bg-[#141414] border border-white/10 focus:border-amber-400 text-white text-sm outline-none transition-colors"
          />
        </div>
      </div>

      {/* Grid for City & Segment */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-2">
            Cidade / Estado
          </label>
          <input
            type="text"
            placeholder="Ex: São Paulo / SP"
            value={formData.cidade}
            onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
            className="w-full px-4 py-3.5 rounded-xl bg-[#141414] border border-white/10 focus:border-amber-400 text-white text-sm outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-2">
            Segmento de Atuação
          </label>
          <input
            type="text"
            placeholder="Ex: Imobiliário / Mercado Financeiro / B2B"
            value={formData.segmento}
            onChange={(e) => setFormData({ ...formData, segmento: e.target.value })}
            className="w-full px-4 py-3.5 rounded-xl bg-[#141414] border border-white/10 focus:border-amber-400 text-white text-sm outline-none transition-colors"
          />
        </div>
      </div>

      {/* Revenue Selector */}
      <div>
        <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-2">
          Faturamento Mensal da Empresa
        </label>
        <select
          value={formData.faturamento}
          onChange={(e) => setFormData({ ...formData, faturamento: e.target.value })}
          className="w-full px-4 py-3.5 rounded-xl bg-[#141414] border border-white/10 focus:border-amber-400 text-white text-sm outline-none transition-colors cursor-pointer"
        >
          <option value="Até R$ 50k/mês">Até R$ 50.000 / mês</option>
          <option value="R$ 50k - R$ 200k/mês">R$ 50.000 a R$ 200.000 / mês</option>
          <option value="R$ 200k - R$ 1M/mês">R$ 200.000 a R$ 1.000.000 / mês</option>
          <option value="Acima de R$ 1M/mês">Acima de R$ 1.000.000 / mês</option>
        </select>
      </div>

      {/* Desired Services Checkboxes */}
      <div>
        <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-3">
          Qual serviço sua empresa procura?
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {availableServices.map((service) => {
            const isChecked = formData.servicos.includes(service);
            return (
              <label
                key={service}
                onClick={() => handleCheckboxChange(service)}
                className={`p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all flex items-center justify-between ${
                  isChecked
                    ? 'bg-amber-500/20 border-amber-400 text-amber-200 shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                    : 'bg-[#141414] border-white/5 text-neutral-400 hover:text-white'
                }`}
              >
                <span>{service}</span>
                <div className={`w-4 h-4 rounded flex items-center justify-center border ${isChecked ? 'bg-amber-400 border-amber-400 text-black' : 'border-neutral-600'}`}>
                  {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* Message Textarea */}
      <div>
        <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-2">
          Conte brevemente sobre o seu momento ou objetivos
        </label>
        <textarea
          rows={3}
          placeholder="Ex: Estamos lançando um novo empreendimento e precisamos de branding e website de alto padrão..."
          value={formData.mensagem}
          onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
          className="w-full px-4 py-3.5 rounded-xl bg-[#141414] border border-white/10 focus:border-amber-400 text-white text-sm outline-none transition-colors resize-none"
        />
      </div>

      {/* LGPD Checkbox */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="lgpd"
          checked={formData.lgpd}
          onChange={(e) => setFormData({ ...formData, lgpd: e.target.checked })}
          className="w-4 h-4 rounded accent-amber-400 cursor-pointer"
        />
        <label htmlFor="lgpd" className="text-xs text-neutral-400 leading-tight cursor-pointer">
          Concordo com os termos e política de privacidade LGPD do Grupo NS. Seus dados estão 100% seguros.
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="btn-gold w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-[0_10px_30px_rgba(212,175,55,0.3)]"
      >
        {loading ? (
          <span className="animate-pulse">Processando Solicitação...</span>
        ) : (
          <>
            <span>Solicitar Proposta Comercial</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
};
