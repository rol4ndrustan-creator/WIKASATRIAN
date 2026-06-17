import { motion } from 'framer-motion';
import SafeImage from './SafeImage';

interface HubCard {
  icon: string;
  title: string;
  description: string;
  target: string;
}

const cards: HubCard[] = [
  {
    icon: '☉',
    title: 'Filosofi Wikasatrian',
    description: 'Pahami nilai-nilai yang menjadi landasan setiap ruang dan program.',
    target: 'philosophy',
  },
  {
    icon: '⛩',
    title: 'Jelajahi Ruang',
    description: 'Telusuri ruang-ruang pembelajaran dan fasilitas Wikasatrian.',
    target: 'rooms',
  },
  {
    icon: '✦',
    title: 'Program Pembelajaran',
    description: 'Temukan perjalanan belajar yang sesuai kebutuhan organisasi Anda.',
    target: 'programs',
  },
  {
    icon: '◈',
    title: 'Why Wikasatrian',
    description: 'Ketahui alasan organisasi memilih Wikasatrian sebagai mitra transformasi.',
    target: 'why',
  },
  {
    icon: '✉',
    title: 'Konsultasi Program',
    description: 'Mulai diskusi kebutuhan kepemimpinan organisasi Anda bersama kami.',
    target: 'consultation',
  },
];

interface PendopoHubProps {
  onNavigate: (sectionId: string) => void;
}

export default function PendopoHub({ onNavigate }: PendopoHubProps) {
  return (
    <section id="lobby" className="relative py-24 px-5 overflow-hidden">
      <SafeImage
        src="/images/wikasatrian/lobby.jpg"
        alt="Pendopo Wikasatrian"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-bg-main/85" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl gold-text mb-4"
        >
          Pilih Perjalanan Anda
        </motion.h2>
        <p className="text-text-muted max-w-2xl mx-auto mb-14">
          Masuki pengalaman digital Wikasatrian dan pilih ruang, nilai, atau program yang ingin
          Anda jelajahi.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.button
              key={card.target}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => onNavigate(card.target)}
              className="panel rounded-2xl p-7 text-left hover:border-gold-soft transition-colors group"
            >
              <span className="text-3xl gold-text">{card.icon}</span>
              <h3 className="font-display text-xl mt-4 mb-2 text-text-warm group-hover:gold-text transition-colors">
                {card.title}
              </h3>
              <p className="text-text-muted text-sm">{card.description}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
