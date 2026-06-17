import type { Room } from '../data/rooms';

interface RoomDetailPanelProps {
  room: Room;
  onExperience: () => void;
}

export default function RoomDetailPanel({ room, onExperience }: RoomDetailPanelProps) {
  return (
    <div className="panel rounded-2xl p-7 md:p-9">
      <p className="text-sm gold-text uppercase tracking-widest mb-2">{room.subtitle}</p>
      <h3 className="font-display text-3xl text-text-warm mb-4">{room.title}</h3>

      <div className="flex flex-wrap gap-2 mb-5">
        {room.functions.map((fn) => (
          <span
            key={fn}
            className="text-xs border border-gold/30 rounded-full px-3 py-1 text-text-muted"
          >
            {fn}
          </span>
        ))}
      </div>

      <p className="text-text-muted text-sm mb-2">
        <span className="text-text-warm font-medium">Kapasitas: </span>
        {room.capacity}
      </p>

      <p className="text-text-warm/90 mb-6 leading-relaxed">{room.shortDescription}</p>

      <button onClick={onExperience} className="btn-gold">
        Rasakan Pengalaman Ruang
      </button>
    </div>
  );
}
