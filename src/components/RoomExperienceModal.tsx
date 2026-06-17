import { AnimatePresence, motion } from 'framer-motion';
import type { Room } from '../data/rooms';
import SafeImage from './SafeImage';

interface RoomExperienceModalProps {
  room: Room | null;
  onClose: () => void;
}

export default function RoomExperienceModal({ room, onClose }: RoomExperienceModalProps) {
  return (
    <AnimatePresence>
      {room && (
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
            className="panel w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-2xl"
          >
            <div className="relative h-56 sm:h-72">
              <SafeImage
                src={room.alternateImage ?? room.image}
                alt={room.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/40 to-transparent" />
              <button
                onClick={onClose}
                aria-label="Tutup pengalaman ruang"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-bg-main/70 border border-gold/40 text-text-warm flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <div className="p-7">
              <h3 className="font-display text-2xl gold-text mb-3">{room.experienceTitle}</h3>
              <p className="text-text-warm/90 leading-relaxed mb-6">{room.experienceDetails}</p>

              <h4 className="text-text-warm font-medium mb-3">Sorotan Utama</h4>
              <ul className="space-y-2 mb-6">
                {room.keyHighlights.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-text-muted text-sm">
                    <span className="gold-text mt-0.5">✦</span>
                    {point}
                  </li>
                ))}
              </ul>

              <h4 className="text-text-warm font-medium mb-2">Paling Sesuai Untuk</h4>
              <p className="text-text-muted text-sm mb-7">{room.bestFor}</p>

              <button onClick={onClose} className="btn-outline-gold w-full sm:w-auto">
                Lanjutkan Eksplorasi
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
