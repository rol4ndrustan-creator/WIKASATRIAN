import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Immersive Learning Environment',
    description: 'Ruang dan suasana yang dirancang untuk pembelajaran yang mendalam.',
  },
  {
    title: 'Indonesian Cultural Philosophy',
    description: 'Nilai budaya Nusantara yang memperkaya proses kepemimpinan.',
  },
  {
    title: 'Leadership-Focused Experience',
    description: 'Setiap aktivitas dirancang untuk mengembangkan kapasitas memimpin.',
  },
  {
    title: 'Flexible Program Design',
    description: 'Program dapat disesuaikan dengan kebutuhan unik organisasi Anda.',
  },
  {
    title: 'Nature-Based Reflection',
    description: 'Lingkungan alam yang mendukung refleksi dan keseimbangan.',
  },
  {
    title: 'Corporate Transformation Support',
    description: 'Pendampingan menyeluruh untuk perubahan budaya dan kapabilitas.',
  },
];

export default function WhyWikasatrian() {
  return (
    <section id="why" className="relative py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl gold-text mb-4">Why Wikasatrian</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Lingkungan yang mendukung transformasi nyata bagi pemimpin dan organisasi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="panel rounded-2xl p-6"
            >
              <h3 className="font-display text-lg text-text-warm mb-2">{pillar.title}</h3>
              <p className="text-text-muted text-sm">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
