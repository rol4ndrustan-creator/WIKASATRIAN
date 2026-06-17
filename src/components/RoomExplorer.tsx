import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { rooms } from '../data/rooms';
import RoomSelector from './RoomSelector';
import RoomDetailPanel from './RoomDetailPanel';
import RoomExperienceModal from './RoomExperienceModal';
import SafeImage from './SafeImage';

export default function RoomExplorer() {
  const [activeId, setActiveId] = useState(rooms[0].id);
  const [experienceRoomId, setExperienceRoomId] = useState<string | null>(null);

  const activeRoom = rooms.find((r) => r.id === activeId) ?? rooms[0];
  const experienceRoom = rooms.find((r) => r.id === experienceRoomId) ?? null;

  return (
    <section id="rooms" className="relative py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl gold-text mb-4">Jelajahi Ruang</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Setiap ruang di Wikasatrian dirancang untuk mendukung jenis pembelajaran dan
            kepemimpinan yang berbeda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-72 sm:h-96 lg:h-[28rem] rounded-2xl overflow-hidden border border-gold/25">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRoom.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <SafeImage
                  src={activeRoom.image}
                  alt={activeRoom.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-main/80 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>

          <RoomDetailPanel room={activeRoom} onExperience={() => setExperienceRoomId(activeRoom.id)} />
        </div>

        <div className="mt-10">
          <RoomSelector rooms={rooms} activeId={activeId} onSelect={setActiveId} />
        </div>
      </div>

      <RoomExperienceModal room={experienceRoom} onClose={() => setExperienceRoomId(null)} />
    </section>
  );
}
