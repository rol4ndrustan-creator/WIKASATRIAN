import { useState } from 'react';
import { motion } from 'framer-motion';
import SafeImage from './SafeImage';
import { philosophyValues } from '../data/philosophy';

export default function PhilosophySection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="philosophy" className="relative py-24 px-5 overflow-hidden">
      <SafeImage
        src="/images/wikasatrian/philosophy-bg.jpg"
        alt="Suasana filosofis Wikasatrian"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-bg-main/88" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl gold-text mb-4"
        >
          Nilai Wikasatrian
        </motion.h2>
        <p className="text-text-muted max-w-2xl mx-auto mb-14">
          Setiap ruang dan program di Wikasatrian merepresentasikan nilai kepemimpinan yang hidup.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {philosophyValues.map((value, i) => {
            const isActive = active === value.id;
            return (
              <motion.button
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setActive(isActive ? null : value.id)}
                className="panel rounded-2xl p-6 text-left cursor-pointer"
              >
                <h3 className="font-display text-xl gold-text mb-3">{value.title}</h3>
                <p
                  className={`text-text-muted text-sm overflow-hidden transition-all duration-300 ${
                    isActive ? 'max-h-40' : 'max-h-0 sm:max-h-40'
                  }`}
                >
                  {value.description}
                </p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
