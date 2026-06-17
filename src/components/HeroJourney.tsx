import { motion } from 'framer-motion';
import SafeImage from './SafeImage';

interface HeroJourneyProps {
  onPrimary: () => void;
  onSecondary: () => void;
}

export default function HeroJourney({ onPrimary, onSecondary }: HeroJourneyProps) {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <SafeImage
        src="/images/wikasatrian/hero-forest.jpg"
        alt="Hutan pagi di kawasan Wikasatrian"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-main/70 via-bg-main/50 to-bg-main" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        <h1 className="font-display text-5xl md:text-7xl gold-text mb-4">WIKASATRIAN</h1>
        <p className="text-text-warm text-base md:text-lg tracking-widest uppercase mb-6">
          Leadership • Learning • Transformation
        </p>
        <p className="text-text-muted text-base md:text-lg mb-10">
          Experience Indonesia's Leadership Journey Through an Immersive Digital Environment
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={onPrimary} className="btn-gold w-full sm:w-auto">
            Jelajahi Wikasatrian
          </button>
          <button onClick={onSecondary} className="btn-outline-gold w-full sm:w-auto">
            Lihat Ruang Pembelajaran
          </button>
        </div>
      </motion.div>
    </section>
  );
}
