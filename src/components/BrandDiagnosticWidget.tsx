import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, CheckCircle2, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';

interface BrandDiagnosticWidgetProps {
  onCompleteDiagnostic: () => void;
}

export const BrandDiagnosticWidget: React.FC<BrandDiagnosticWidgetProps> = ({ onCompleteDiagnostic }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCalculated, setIsCalculated] = useState(false);

  const questions = [
    {
      title: '1. Sua marca transmite um posicionamento claro de mercado?',
      options: [
        { label: 'Não, competimos por preço e temos comunicação genérica.', points: 10 },
        { label: 'Razoável, mas nos parecemos com outros concorrentes do setor.', points: 25 },
        { label: 'Sim, somos reconhecidos como autoridade de alto nível no segmento.', points: 40 }
      ]
    },
    {
      title: '2. Qual a situação atual do seu website e presença digital?',
      options: [
        { label: 'Não temos site ou ele é antigo, lento e desatualizado.', points: 10 },
        { label: 'Temos um site institucional básico, porém gera poucos leads.', points: 25 },
        { label: 'Temos plataforma moderna, rápida e focada em alta conversão.', points: 30 }
      ]
    },
    {
      title: '3. Como sua empresa executa estratégias de atração e mídia (Google/Meta Ads)?',
      options: [
        { label: 'Não investimos em mídia paga estrategicamente.', points: 5 },
        { label: 'Investimos pontualmente sem acompanhar o retorno sobre o investimento (ROI).', points: 15 },
        { label: 'Temos campanhas contínuas e mensuradas com foco em tração e escala.', points: 30 }
      ]
    }
  ];

  const handleSelectOption = (points: number) => {
    const updatedAnswers = [...answers, points];
    setAnswers(updatedAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCalculated(true);
    }
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);

  const getScoreFeedback = () => {
    if (totalScore >= 80) {
      return {
        level: 'Nível Avançado - Marca de Alta Autoridade',
        statusColor: 'text-emerald-400',
        borderColor: 'border-emerald-500/40',
        summary: 'Sua empresa possui boa maturidade digital e visual. O NS Studio pode acelerar sua escala internacional e otimizar verticais de alta rentabilidade.'
      };
    } else if (totalScore >= 45) {
      return {
        level: 'Nível Intermediário - Potencial Não Lapidado',
        statusColor: 'text-amber-300',
        borderColor: 'border-amber-500/40',
        summary: 'Sua marca já possui tração, porém está deixando dinheiro na mesa por falta de um reposicionamento visual premium e funis de conversão estruturados.'
      };
    } else {
      return {
        level: 'Nível Inicial - Vulnerável a Concorrentes',
        statusColor: 'text-rose-400',
        borderColor: 'border-rose-500/40',
        summary: 'Sua empresa corre o risco de ser commoditiesada e perder clientes para concorrentes mais bem posicionados. Um projeto de branding e site novo é urgente.'
      };
    }
  };

  const resetWidget = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsCalculated(false);
  };

  return (
    <section className="py-16 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-amber-500/30 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center border border-amber-500/30">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-amber-300 uppercase tracking-widest">
                Ferramenta Interativa • 60 Segundos
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Calculadora de Maturidade de Marca
              </h3>
            </div>
          </div>

          {!isCalculated ? (
            <div>
              {/* Progress Indicator */}
              <div className="flex items-center justify-between text-xs text-neutral-400 mb-2 font-mono">
                <span>Pergunta {currentStep + 1} de {questions.length}</span>
                <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% concluído</span>
              </div>
              <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden mb-8">
                <div
                  className="h-full bg-amber-400 transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Question */}
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-6">
                {questions[currentStep].title}
              </h4>

              {/* Options */}
              <div className="space-y-3">
                {questions[currentStep].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.points)}
                    className="w-full p-4 rounded-xl glass-panel border border-white/10 hover:border-amber-400/50 text-left text-sm text-neutral-200 hover:text-white transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-amber-400 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result Feedback Screen */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-2xl bg-[#121212] border border-amber-500/30 text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-xs font-semibold text-amber-300 uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Resultado da Auditoria</span>
                </div>

                <div className="text-4xl sm:text-5xl font-black text-gold-gradient">
                  {totalScore} <span className="text-xl text-neutral-400">/ 100 pts</span>
                </div>

                <div className={`text-lg font-bold ${getScoreFeedback().statusColor}`}>
                  {getScoreFeedback().level}
                </div>

                <p className="text-sm text-neutral-300 max-w-lg mx-auto font-light leading-relaxed">
                  {getScoreFeedback().summary}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                <button
                  onClick={resetWidget}
                  className="text-xs text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Refazer Teste</span>
                </button>

                <button
                  onClick={onCompleteDiagnostic}
                  className="btn-gold px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 w-full sm:w-auto justify-center cursor-pointer"
                >
                  <span>Solicitar Diagnóstico Completo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
