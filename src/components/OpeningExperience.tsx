import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface OpeningExperienceProps {
  onEnter: () => void;
}

export default function OpeningExperience({ onEnter }: OpeningExperienceProps) {
  const [closing, setClosing] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  const handleEnter = () => {
    setClosing(true);
    setTimeout(onEnter, 700);
  };

  return (
    <AnimatePresence>
      {!closing && (
        <motion.section
          id="opening"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="relative h-screen w-full flex flex-col items-center justify-center bg-bg-main overflow-hidden"
        >
          <div className="absolute inset-0 bg-fallback opacity-90" />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 50% 60%, rgba(184,137,58,0.12), transparent 60%)',
            }}
          />

          <button
            onClick={() => setSoundOn((v) => !v)}
            className="absolute top-6 right-6 text-xs text-text-muted border border-gold/30 rounded-full px-3 py-1.5 hover:gold-text transition-colors"
            aria-label="Aktifkan atau matikan suara ambient"
          >
            {soundOn ? '♪ Suara: Aktif' : '♪ Suara: Nonaktif'}
          </button>

          <div className="relative z-10 text-center px-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-text-muted text-sm md:text-base tracking-[0.25em] uppercase mb-6"
            >
              Every Great Leader Has A Journey
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.7 }}
              className="font-display text-5xl md:text-7xl gold-text tracking-wide mb-6"
            >
              WIKASATRIAN
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="text-text-warm/90 text-base md:text-lg mb-12"
            >
              Leadership begins with a journey.
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              onClick={handleEnter}
              className="btn-gold"
            >
              ENTER EXPERIENCE
            </motion.button>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
