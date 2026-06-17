import type { Room } from '../data/rooms';

interface RoomInfoPanelProps {
  room: Room;
  onExperience: () => void;
  onLobby: () => void;
}

export default function RoomInfoPanel({ room, onExperience, onLobby }: RoomInfoPanelProps) {
  return (
    <div className="panel rounded-2xl p-6 md:p-7 w-full md:max-w-[400px]">
      <p className="text-xs gold-text uppercase tracking-widest mb-2">Tentang Ruang</p>
      <h3 className="font-display text-2xl text-text-warm mb-3">{room.title}</h3>
      <p className="text-text-muted text-sm leading-relaxed mb-4">{room.shortDescription}</p>

      <p className="text-text-warm text-sm font-medium mb-2">Fungsi Utama</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {room.functions.map((fn) => (
          <span
            key={fn}
            className="text-xs border border-gold/30 rounded-full px-3 py-1 text-text-muted"
          >
            {fn}
          </span>
        ))}
      </div>

      <p className="text-text-warm text-sm font-medium mb-1.5">Filosofi Desain</p>
      <p className="text-text-muted text-sm leading-relaxed mb-6">{room.designPhilosophy}</p>

      <div className="flex flex-col gap-3">
        <button onClick={onExperience} className="btn-gold text-sm">
          Rasakan Pengalaman Ruang
        </button>
        <button onClick={onLobby} className="btn-outline-gold text-sm">
          Kembali ke Lobi Utama
        </button>
      </div>
    </div>
  );
}
