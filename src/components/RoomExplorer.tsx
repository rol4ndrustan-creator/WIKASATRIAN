import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { rooms } from '../data/rooms';
import RoomSidebar from './RoomSidebar';
import RoomInfoPanel from './RoomInfoPanel';
import RoomBottomNav from './RoomBottomNav';
import RoomExperienceModal from './RoomExperienceModal';
import SafeImage from './SafeImage';

type ViewId = 'lobby' | (typeof rooms)[number]['id'];

const VALID_IDS = new Set<string>(['lobby', ...rooms.map((r) => r.id)]);
const EASE = [0.22, 1, 0.36, 1] as const;

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
  const sectionRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });
  const parallaxX = useTransform(smoothX, [-0.5, 0.5], [10, -10]);
  const parallaxY = useTransform(smoothY, [-0.5, 0.5], [6, -6]);

  useEffect(() => {
    const handleHashChange = () => setView(readHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const goTo = (next: ViewId) => {
    if (next === view) return;
    setTransitionLabel(transitionMessage(next));
    setTransitioning(true);
    window.history.replaceState(null, '', `#${next}`);
    setTimeout(() => {
      setView(next);
      setTimeout(() => setTransitioning(false), 120);
    }, 520);
  };

  const activeRoom = view !== 'lobby' ? rooms.find((r) => r.id === view) ?? null : null;
  const experienceRoom = rooms.find((r) => r.id === experienceRoomId) ?? null;
  const roomKind = activeRoom?.title.startsWith('Area') ? 'AREA' : 'RUANG';

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
    <section
      id="rooms"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen md:h-screen w-full overflow-hidden bg-bg-main"
    >
      {/* Background environment */}
      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(4px)' }}
          transition={{ duration: 0.9, ease: EASE }}
          className="absolute inset-0 overflow-hidden"
        >
          <motion.div
            initial={{ scale: 1.03 }}
            animate={{ scale: 1.09 }}
            transition={{ duration: 26, ease: 'easeInOut' }}
            style={{ x: parallaxX, y: parallaxY }}
            className="absolute inset-0"
          >
            <SafeImage
              src={activeRoom ? activeRoom.image : '/images/wikasatrian/lobby.jpg'}
              alt={activeRoom ? activeRoom.title : 'Lobi Utama Wikasatrian'}
              className="w-full h-full object-cover object-center cinematic-image"
            />
          </motion.div>

          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(5,4,3,0.86), rgba(5,4,3,0.22) 45%, rgba(5,4,3,0.7))',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(5,4,3,0.92), transparent 58%)',
            }}
          />
          <div className="absolute inset-0 cinematic-vignette" />
        </motion.div>
      </AnimatePresence>

      <RoomSidebar
        isLobby={view === 'lobby'}
        activeRoomTitle={activeRoom?.shortTitle}
        onLobby={() => goTo('lobby')}
      />

      {/* Lobby content */}
      {view === 'lobby' && (
        <div className="relative z-10 min-h-screen md:h-full flex flex-col items-center justify-center px-5 pt-16 md:pt-0 md:pl-[140px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="max-w-xl mb-8"
          >
            <p className="text-[11px] gold-text uppercase tracking-[0.3em] mb-2">Wikasatrian</p>
            <h2 className="font-display text-3xl md:text-4xl text-text-warm mb-3">
              Lobi Utama Wikasatrian
            </h2>
            <p className="text-text-muted text-sm">
              Mulai perjalanan Anda dari lobi utama dan pilih ruang yang ingin Anda jelajahi.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-w-2xl w-full">
            {rooms.map((room, i) => (
              <motion.button
                key={room.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                onClick={() => goTo(room.id)}
                className="rounded-xl border border-gold/25 bg-black/40 backdrop-blur-sm px-3 py-3.5 text-left hover:border-gold-soft hover:bg-black/55 transition-colors"
              >
                <p className="text-[9px] gold-text uppercase tracking-[0.2em] mb-1">Masuk</p>
                <p className="text-text-warm text-[13px] font-medium leading-snug">
                  {room.shortTitle}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Room content */}
      {activeRoom && (
        <>
          <div className="relative z-10 md:h-full flex flex-col md:justify-end md:pl-[140px] px-5 md:px-9 pb-4 md:pb-28 pt-16 md:pt-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRoom.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
                className="max-w-lg"
              >
                <p className="text-xs gold-text uppercase tracking-[0.35em] mb-1.5">{roomKind}</p>
                {activeRoom.displayTitle.map((line) => (
                  <h2
                    key={line}
                    className="font-display text-4xl md:text-5xl text-text-warm leading-[1.05]"
                  >
                    {line}
                  </h2>
                ))}
                <p className="text-text-muted text-sm md:text-[15px] mt-2.5 mb-3">
                  {activeRoom.subtitle}
                </p>

                <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-text-muted">
                  <span>
                    <span className="text-text-warm/90 font-medium">Kapasitas </span>
                    {activeRoom.capacity}
                  </span>
                  <span>
                    <span className="text-text-warm/90 font-medium">Fungsi </span>
                    {activeRoom.functions.slice(0, 3).join(' · ')}
                  </span>
                  <span className="hidden sm:inline">
                    <span className="text-text-warm/90 font-medium">Cocok untuk </span>
                    {activeRoom.bestFor.split(',')[0]}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 z-20 w-full max-w-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRoom.id}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <RoomInfoPanel
                  room={activeRoom}
                  onExperience={() => setExperienceRoomId(activeRoom.id)}
                  onLobby={() => goTo('lobby')}
                />
              </motion.div>
            </AnimatePresence>
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
            transition={{ duration: 0.35, ease: EASE }}
            className="absolute inset-0 z-30 flex items-center justify-center"
            style={{ backgroundColor: 'rgba(8, 6, 4, 0.88)', backdropFilter: 'blur(6px)' }}
          >
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
              className="font-display text-lg md:text-xl gold-text tracking-wide"
            >
              {transitionLabel}
            </motion.p>
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
