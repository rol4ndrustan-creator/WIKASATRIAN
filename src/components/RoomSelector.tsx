import type { Room } from '../data/rooms';

interface RoomSelectorProps {
  rooms: Room[];
  activeId: string;
  onSelect: (id: string) => void;
}

export default function RoomSelector({ rooms, activeId, onSelect }: RoomSelectorProps) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 snap-x">
      {rooms.map((room) => {
        const isActive = room.id === activeId;
        return (
          <button
            key={room.id}
            onClick={() => onSelect(room.id)}
            className={`shrink-0 snap-start whitespace-nowrap rounded-full px-5 py-2.5 text-sm transition-colors border ${
              isActive
                ? 'bg-gold/20 border-gold-soft gold-text'
                : 'border-gold/25 text-text-muted hover:text-text-warm'
            }`}
          >
            {room.title}
          </button>
        );
      })}
    </div>
  );
}
