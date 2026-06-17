import type { Room } from '../data/rooms';
import RoomIcon from './RoomIcon';

interface RoomInfoPanelProps {
  room: Room;
  onExperience: () => void;
  onLobby: () => void;
}

export default function RoomInfoPanel({ room, onExperience, onLobby }: RoomInfoPanelProps) {
  return (
    <div
      className="rounded-[22px] border border-gold/35 shadow-2xl overflow-y-auto scrollbar-hide"
      style={{
        backgroundColor: 'rgba(8, 6, 4, 0.72)',
        backdropFilter: 'blur(14px)',
        maxHeight: '74vh',
      }}
    >
      <div className="p-5 md:p-6">
        <p className="text-[10px] gold-text uppercase tracking-[0.25em] mb-1.5">Tentang Ruang</p>
        <h3 className="font-display text-xl text-text-warm mb-3">{room.shortTitle}</h3>
        <p className="text-text-muted text-[13px] leading-relaxed mb-4">{room.description}</p>

        <p className="text-[10px] gold-text uppercase tracking-[0.25em] mb-2">Fungsi Utama</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {room.functions.map((fn) => (
            <span
              key={fn}
              className="inline-flex items-center gap-1 text-[11px] border border-gold/25 rounded-full px-2.5 py-1 text-text-muted"
            >
              <RoomIcon name={fn} className="w-3 h-3 text-gold-soft" />
              {fn}
            </span>
          ))}
        </div>

        <p className="text-[10px] gold-text uppercase tracking-[0.25em] mb-2">
          Filosofi Desain & Keunggulan
        </p>
        <ul className="space-y-2 mb-5">
          {room.designPhilosophy.map((point) => (
            <li key={point.title} className="text-[12.5px] leading-snug">
              <span className="text-text-warm font-medium">{point.title}.</span>{' '}
              <span className="text-text-muted">{point.description}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-2">
          <button onClick={onExperience} className="btn-gold-sm w-full">
            Rasakan Pengalaman Ruang
          </button>
          <button onClick={onLobby} className="btn-outline-gold-sm w-full">
            Kembali ke Lobi Utama
          </button>
        </div>
      </div>
    </div>
  );
}
