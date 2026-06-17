interface RoomSidebarProps {
  activeRoomTitle?: string;
  isLobby: boolean;
  onLobby: () => void;
}

export default function RoomSidebar({ activeRoomTitle, isLobby, onLobby }: RoomSidebarProps) {
  return (
    <>
      {/* Desktop slim vertical sidebar */}
      <div className="hidden md:flex absolute left-0 top-0 bottom-0 z-20 w-[120px] lg:w-[140px] flex-col items-center justify-between bg-black/45 backdrop-blur-md border-r border-gold/20 py-6">
        <div className="flex flex-col items-center gap-5">
          <span className="font-display text-base gold-text">W</span>
          <div className="w-6 h-px bg-gold/25" />
          <button
            onClick={onLobby}
            className={`text-[11px] tracking-wide transition-colors rounded-full px-2 py-1 ${
              isLobby ? 'gold-text' : 'text-text-muted hover:text-text-warm'
            }`}
          >
            Lobi
          </button>
        </div>

        <p
          className="text-text-muted/60 text-[10px] uppercase tracking-[0.3em]"
          style={{ writingMode: 'vertical-rl' }}
        >
          Jelajahi Wikasatrian
        </p>

        <div className="flex flex-col items-center gap-3 px-2 text-center">
          {!isLobby && activeRoomTitle && (
            <p className="text-text-warm/80 text-[11px] leading-tight">{activeRoomTitle}</p>
          )}
          <button
            onClick={onLobby}
            className="text-[10px] border border-gold/30 rounded-full px-2.5 py-1.5 text-text-muted hover:gold-text hover:border-gold-soft transition-colors"
          >
            Kembali ke Lobi
          </button>
        </div>
      </div>

      {/* Mobile compact top bar */}
      <div className="md:hidden absolute top-0 left-0 right-0 z-20 flex items-center justify-between bg-black/50 backdrop-blur-md border-b border-gold/20 px-4 py-2.5">
        <p className="font-display text-sm gold-text tracking-wide">WIKASATRIAN</p>
        <button
          onClick={onLobby}
          className="text-[11px] border border-gold/30 rounded-full px-3 py-1 text-text-muted hover:gold-text transition-colors"
        >
          {isLobby ? 'Lobi Utama' : 'Kembali ke Lobi'}
        </button>
      </div>
    </>
  );
}
