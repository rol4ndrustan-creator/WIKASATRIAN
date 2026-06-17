import type { Room } from '../data/rooms';
import RoomIcon from './RoomIcon';

interface RoomBottomNavProps {
  rooms: Room[];
  activeId: string;
  onSelect: (id: string) => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function RoomBottomNav({ rooms, activeId, onSelect, onPrev, onNext }: RoomBottomNavProps) {
  return (
    <div className="fixed md:absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 z-20 w-full max-w-2xl px-4">
      <div
        className="flex items-center gap-1.5 rounded-full px-2 py-1.5 border border-gold/25 shadow-xl"
        style={{ backgroundColor: 'rgba(8, 6, 4, 0.78)', backdropFilter: 'blur(12px)' }}
      >
        <button
          onClick={onPrev}
          aria-label="Ruang sebelumnya"
          className="shrink-0 w-7 h-7 rounded-full border border-gold/25 text-text-warm/80 hover:gold-text hover:border-gold-soft transition-colors flex items-center justify-center text-sm"
        >
          ‹
        </button>

        <div className="flex gap-1 overflow-x-auto scrollbar-hide snap-x px-0.5">
          {rooms.map((room) => {
            const isActive = room.id === activeId;
            return (
              <button
                key={room.id}
                onClick={() => onSelect(room.id)}
                className={`shrink-0 snap-start flex flex-col items-center gap-0.5 whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] transition-all ${
                  isActive
                    ? 'gold-text shadow-[0_0_12px_rgba(201,164,92,0.5)] bg-gold/15'
                    : 'text-text-muted hover:text-text-warm'
                }`}
              >
                <RoomIcon
                  name={room.functions[0]}
                  className={`w-3.5 h-3.5 ${isActive ? 'text-gold-soft' : 'text-text-muted'}`}
                />
                {room.shortTitle}
              </button>
            );
          })}
        </div>

        <button
          onClick={onNext}
          aria-label="Ruang berikutnya"
          className="shrink-0 w-7 h-7 rounded-full border border-gold/25 text-text-warm/80 hover:gold-text hover:border-gold-soft transition-colors flex items-center justify-center text-sm"
        >
          ›
        </button>
      </div>
    </div>
  );
}
