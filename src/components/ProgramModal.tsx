import { AnimatePresence, motion } from 'framer-motion';
import type { Program } from '../data/programs';

interface ProgramModalProps {
  program: Program | null;
  onClose: () => void;
  onCta: () => void;
}

export default function ProgramModal({ program, onClose, onCta }: ProgramModalProps) {
  return (
    <AnimatePresence>
      {program && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/70 px-0 sm:px-5"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
            className="panel w-full sm:max-w-lg max-h-[85vh] overflow-y-auto rounded-t-3xl sm:rounded-2xl p-7"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-display text-2xl gold-text">{program.title}</h3>
              <button
                onClick={onClose}
                aria-label="Tutup detail program"
                className="w-9 h-9 rounded-full bg-bg-main/70 border border-gold/40 text-text-warm flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            {program.narration && (
              <p className="text-text-warm/90 italic mb-5">{program.narration}</p>
            )}

            <ul className="space-y-2 mb-7">
              {program.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-text-muted text-sm">
                  <span className="gold-text mt-0.5">✦</span>
                  {item}
                </li>
              ))}
            </ul>

            <button onClick={onCta} className="btn-gold w-full">
              {program.cta}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
