import type { Room } from '../data/rooms';

interface RoomBottomNavProps {
  rooms: Room[];
  activeId: string;
  onSelect: (id: string) => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function RoomBottomNav({ rooms, activeId, onSelect, onPrev, onNext }: RoomBottomNavProps) {
  return (
    <div className="fixed md:absolute bottom-4 md:bottom-5 left-1/2 -translate-x-1/2 z-20 w-full max-w-3xl px-4">
      <div className="flex items-center gap-2 bg-bg-main/75 backdrop-blur-sm border border-gold/30 rounded-full px-3 py-2 shadow-lg">
        <button
          onClick={onPrev}
          aria-label="Ruang sebelumnya"
          className="shrink-0 w-8 h-8 rounded-full border border-gold/30 text-text-warm hover:gold-text hover:border-gold-soft transition-colors flex items-center justify-center"
        >
          ‹
        </button>

        <div className="flex gap-1.5 overflow-x-auto scrollbar-hide snap-x px-1">
          {rooms.map((room) => {
            const isActive = room.id === activeId;
            return (
              <button
                key={room.id}
                onClick={() => onSelect(room.id)}
                className={`shrink-0 snap-start whitespace-nowrap rounded-full px-4 py-2 text-xs sm:text-sm transition-all border ${
                  isActive
                    ? 'bg-gold/25 border-gold-soft gold-text shadow-[0_0_14px_rgba(201,164,92,0.45)]'
                    : 'border-transparent text-text-muted hover:text-text-warm'
                }`}
              >
                {room.title.replace('Ruang ', '')}
              </button>
            );
          })}
        </div>

        <button
          onClick={onNext}
          aria-label="Ruang berikutnya"
          className="shrink-0 w-8 h-8 rounded-full border border-gold/30 text-text-warm hover:gold-text hover:border-gold-soft transition-colors flex items-center justify-center"
        >
          ›
        </button>
      </div>
    </div>
  );
}
