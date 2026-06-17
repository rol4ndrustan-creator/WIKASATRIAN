import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SafeImage from './SafeImage';

interface VirtualTourSectionProps {
  onConsult: () => void;
}

export default function VirtualTourSection({ onConsult }: VirtualTourSectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-24 px-5 overflow-hidden">
      <SafeImage
        src="/images/wikasatrian/tour-360.jpg"
        alt="Pratinjau tur digital Wikasatrian"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-bg-main/80" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl gold-text mb-4">
          Rasakan Pengalaman Digital Wikasatrian
        </h2>
        <p className="text-text-muted mb-10">
          Jelajahi suasana ruang dan lingkungan Wikasatrian secara visual sebelum menentukan
          program yang paling sesuai.
        </p>
        <button onClick={() => setOpen(true)} className="btn-gold">
          Mulai Preview Digital
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/70 px-0 sm:px-5"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="panel w-full sm:max-w-lg rounded-t-3xl sm:rounded-2xl p-7"
            >
              <div className="flex items-start justify-between mb-5">
                <h3 className="font-display text-2xl gold-text">Preview Digital</h3>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Tutup preview digital"
                  className="w-9 h-9 rounded-full bg-bg-main/70 border border-gold/40 text-text-warm flex items-center justify-center"
                >
                  ✕
                </button>
              </div>

              <ul className="space-y-3 mb-7 text-text-muted text-sm">
                <li className="flex items-start gap-2">
                  <span className="gold-text mt-0.5">✦</span>
                  Jelajahi ruang secara visual
                </li>
                <li className="flex items-start gap-2">
                  <span className="gold-text mt-0.5">✦</span>
                  Pilih ruangan sesuai kebutuhan program
                </li>
                <li className="flex items-start gap-2">
                  <span className="gold-text mt-0.5">✦</span>
                  Rasakan suasana Wikasatrian sebelum berkonsultasi
                </li>
                <li className="flex items-start gap-2">
                  <span className="gold-text mt-0.5">✦</span>
                  Hubungi tim untuk tur langsung atau konsultasi program
                </li>
              </ul>

              <button
                onClick={() => {
                  setOpen(false);
                  onConsult();
                }}
                className="btn-gold w-full"
              >
                Hubungi Tim Kami
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
