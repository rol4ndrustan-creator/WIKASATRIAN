import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { rooms } from '../data/rooms';
import RoomSidebar from './RoomSidebar';
import RoomInfoPanel from './RoomInfoPanel';
import RoomBottomNav from './RoomBottomNav';
import RoomExperienceModal from './RoomExperienceModal';
import SafeImage from './SafeImage';

type ViewId = 'lobby' | (typeof rooms)[number]['id'];

const VALID_IDS = new Set<string>(['lobby', ...rooms.map((r) => r.id)]);

function readHash(): ViewId {
  const hash = window.location.hash.replace('#', '');
  return VALID_IDS.has(hash) ? (hash as ViewId) : 'lobby';
}

function transitionMessage(view: ViewId): string {
  if (view === 'lobby') return 'Kembali ke Lobi Utama...';
  const room = rooms.find((r) => r.id === view);
  return room ? `Memasuki ${room.title}...` : 'Berpindah ruang...';
}

interface RoomExplorerProps {
  onConsult: () => void;
}

export default function RoomExplorer({ onConsult }: RoomExplorerProps) {
  const [view, setView] = useState<ViewId>(() => readHash());
  const [transitioning, setTransitioning] = useState(false);
  const [transitionLabel, setTransitionLabel] = useState('');
  const [experienceRoomId, setExperienceRoomId] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => setView(readHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const goTo = (next: ViewId) => {
    if (next === view) return;
    setTransitionLabel(transitionMessage(next));
    setTransitioning(true);
    window.history.replaceState(null, '', `#${next}`);
    setTimeout(() => {
      setView(next);
      setTimeout(() => setTransitioning(false), 80);
    }, 420);
  };

  const activeRoom = view !== 'lobby' ? rooms.find((r) => r.id === view) ?? null : null;
  const experienceRoom = rooms.find((r) => r.id === experienceRoomId) ?? null;

  const activeIndex = activeRoom ? rooms.findIndex((r) => r.id === activeRoom.id) : -1;
  const goPrev = () => {
    if (activeIndex < 0) return;
    const prevIndex = (activeIndex - 1 + rooms.length) % rooms.length;
    goTo(rooms[prevIndex].id);
  };
  const goNext = () => {
    if (activeIndex < 0) return;
    const nextIndex = (activeIndex + 1) % rooms.length;
    goTo(rooms[nextIndex].id);
  };

  return (
    <section id="rooms" className="relative min-h-screen md:h-screen w-full overflow-hidden bg-bg-main">
      {/* Background environment */}
      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <SafeImage
            src={activeRoom ? activeRoom.image : '/images/wikasatrian/lobby.jpg'}
            alt={activeRoom ? activeRoom.title : 'Lobi Utama Wikasatrian'}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/35 to-bg-main/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-main/70 via-transparent to-bg-main/30" />
        </motion.div>
      </AnimatePresence>

      <RoomSidebar
        isLobby={view === 'lobby'}
        activeRoomTitle={activeRoom?.title}
        onLobby={() => goTo('lobby')}
      />

      {/* Lobby content */}
      {view === 'lobby' && (
        <div className="relative z-10 min-h-screen md:h-full flex flex-col items-center justify-center px-5 pt-20 md:pt-0 md:pl-[210px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-10"
          >
            <h2 className="font-display text-4xl md:text-5xl gold-text mb-4">
              Lobi Utama Wikasatrian
            </h2>
            <p className="text-text-warm/90">
              Mulai perjalanan Anda dari lobi utama dan pilih ruang yang ingin Anda jelajahi.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 max-w-3xl w-full">
            {rooms.map((room, i) => (
              <motion.button
                key={room.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                onClick={() => goTo(room.id)}
                className="panel rounded-xl px-4 py-5 text-left hover:border-gold-soft transition-colors"
              >
                <p className="text-xs gold-text uppercase tracking-widest mb-1">Masuk</p>
                <p className="text-text-warm font-medium text-sm md:text-base leading-snug">
                  {room.title.replace('Ruang ', '').replace('Area ', '')}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Room content */}
      {activeRoom && (
        <>
          <div className="relative z-10 md:h-full flex flex-col md:justify-end md:pl-[210px] px-5 md:px-10 pb-6 md:pb-32 pt-20 md:pt-10">
            <motion.div
              key={activeRoom.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="max-w-xl"
            >
              {activeRoom.displayTitle.map((line, i) => (
                <h2
                  key={line}
                  className={`font-display gold-text leading-[1.05] ${
                    i === 0 ? 'text-2xl md:text-3xl' : 'text-4xl md:text-6xl'
                  }`}
                >
                  {line}
                </h2>
              ))}
              <p className="text-text-warm/90 text-base md:text-lg mt-3 mb-4">
                {activeRoom.subtitle}
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-text-muted">
                <span>
                  <span className="text-text-warm font-medium">Kapasitas: </span>
                  {activeRoom.capacity}
                </span>
                <span>
                  <span className="text-text-warm font-medium">Fungsi Utama: </span>
                  {activeRoom.functions.slice(0, 3).join(', ')}
                </span>
              </div>
            </motion.div>
          </div>

          <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-20">
            <RoomInfoPanel
              room={activeRoom}
              onExperience={() => setExperienceRoomId(activeRoom.id)}
              onLobby={() => goTo('lobby')}
            />
          </div>

          {/* Mobile/tablet info panel below title */}
          <div className="lg:hidden relative z-10 px-5 pb-24">
            <RoomInfoPanel
              room={activeRoom}
              onExperience={() => setExperienceRoomId(activeRoom.id)}
              onLobby={() => goTo('lobby')}
            />
          </div>

          <RoomBottomNav
            rooms={rooms}
            activeId={activeRoom.id}
            onSelect={goTo}
            onPrev={goPrev}
            onNext={goNext}
          />
        </>
      )}

      {/* Cinematic transition overlay */}
      <AnimatePresence>
        {transitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-30 bg-bg-main/90 flex items-center justify-center"
          >
            <p className="font-display text-xl md:text-2xl gold-text tracking-wide">
              {transitionLabel}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <RoomExperienceModal
        room={experienceRoom}
        onClose={() => setExperienceRoomId(null)}
        onConsult={() => {
          setExperienceRoomId(null);
          onConsult();
        }}
      />
    </section>
  );
}
