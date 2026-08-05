import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LogoNS } from './LogoNS';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 700);
          }, 300);
          return 100;
        }
        const diff = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + diff, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070707] text-white overflow-hidden"
        >
          {/* Subtle Ambient Gold Spotlights */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

          {/* Logo Reveal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex flex-col items-center gap-6"
          >
            <LogoNS size="xl" variant="full" />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-light text-center"
            >
              Exclusividade • Inteligência • Performance
            </motion.p>

            {/* Progress Bar Container */}
            <div className="w-64 h-[2px] bg-neutral-800 rounded-full overflow-hidden mt-6 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-500"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            {/* Percentage Display */}
            <div className="text-xs font-mono tracking-widest text-amber-200/80">
              {progress}%
            </div>
          </motion.div>

          {/* Footer Watermark */}
          <div className="absolute bottom-8 text-[10px] uppercase tracking-[0.4em] text-neutral-600">
            GRUPO NS © 2026
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
