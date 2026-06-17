import { useState } from 'react';
import { motion } from 'framer-motion';
import { programs } from '../data/programs';
import ProgramModal from './ProgramModal';
import SafeImage from './SafeImage';

interface ProgramJourneyProps {
  onConsult: () => void;
}

export default function ProgramJourney({ onConsult }: ProgramJourneyProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeProgram = programs.find((p) => p.id === activeId) ?? null;

  return (
    <section id="programs" className="relative py-24 px-5 overflow-hidden">
      <SafeImage
        src="/images/wikasatrian/packages-bg.jpg"
        alt="Suasana program pembelajaran Wikasatrian"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-bg-main/88" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl gold-text mb-4">
            Perjalanan Program
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Pilih perjalanan belajar yang paling sesuai dengan kebutuhan transformasi organisasi
            Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="panel rounded-2xl p-6 flex flex-col"
            >
              <h3 className="font-display text-xl text-text-warm mb-3">{program.title}</h3>
              <p className="text-text-muted text-sm mb-5 flex-1">
                {program.items.slice(0, 2).join(' · ')}
                {program.items.length > 2 ? ' · ...' : ''}
              </p>
              <button
                onClick={() => setActiveId(program.id)}
                className="btn-outline-gold text-sm"
              >
                Detail Program
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <ProgramModal
        program={activeProgram}
        onClose={() => setActiveId(null)}
        onCta={() => {
          setActiveId(null);
          onConsult();
        }}
      />
    </section>
  );
}
