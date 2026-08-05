import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { STATS_NUMBERS } from '../data/landingData';
import { Briefcase, Target, Award, ShieldCheck } from 'lucide-react';

export const StatsCounter: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const icons = [Briefcase, Target, Award, ShieldCheck];

  return (
    <section ref={sectionRef} className="relative z-10 py-16 bg-[#0c0c0c] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {STATS_NUMBERS.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden group border border-amber-500/15"
              >
                {/* Background Glow */}
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-500/20 transition-all duration-500" />

                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-amber-300/80 uppercase">
                    Métrica #{idx + 1}
                  </span>
                </div>

                {/* Animated Number */}
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-gold-gradient tracking-tight">
                  <CounterValue
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    trigger={hasAnimated}
                  />
                </div>

                <div className="mt-2 text-sm sm:text-base font-bold text-white tracking-wide">
                  {stat.label}
                </div>

                <div className="mt-1 text-xs text-neutral-400 font-light">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface CounterValueProps {
  value: number;
  prefix?: string;
  suffix?: string;
  trigger: boolean;
}

const CounterValue: React.FC<CounterValueProps> = ({ value, prefix = '', suffix = '', trigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const duration = 2000; // ms
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // easeOutExpo
      const currentCount = Math.round(value * (1 - Math.pow(2, -10 * progress)));
      setCount(currentCount);

      if (frame >= totalFrames) {
        setCount(value);
        clearInterval(timer);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [value, trigger]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};
