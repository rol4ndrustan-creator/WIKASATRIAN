interface RoomSidebarProps {
  activeRoomTitle?: string;
  isLobby: boolean;
  onLobby: () => void;
}

export default function RoomSidebar({ activeRoomTitle, isLobby, onLobby }: RoomSidebarProps) {
  return (
    <>
      {/* Desktop vertical sidebar */}
      <div className="hidden md:flex absolute left-0 top-0 bottom-0 z-20 w-[180px] lg:w-[210px] flex-col justify-between bg-bg-main/70 backdrop-blur-sm border-r border-gold/30 px-5 py-7">
        <div>
          <p className="font-display text-xl gold-text leading-tight">WIKASATRIAN</p>
          <button
            onClick={onLobby}
            className={`mt-8 text-left text-sm transition-colors ${
              isLobby ? 'gold-text' : 'text-text-muted hover:text-text-warm'
            }`}
          >
            ⌂ Lobi
          </button>
          <p className="text-text-muted/70 text-[11px] uppercase tracking-[0.2em] mt-6">
            Jelajahi Wikasatrian
          </p>
        </div>

        <div>
          {!isLobby && activeRoomTitle && (
            <p className="text-text-warm text-sm mb-4 leading-snug">{activeRoomTitle}</p>
          )}
          <button
            onClick={onLobby}
            className="text-xs border border-gold/40 rounded-full px-3 py-2 text-text-muted hover:gold-text hover:border-gold-soft transition-colors w-full text-center"
          >
            Kembali ke Lobi Utama
          </button>
        </div>
      </div>

      {/* Mobile top bar */}
      <div className="md:hidden absolute top-0 left-0 right-0 z-20 flex items-center justify-between bg-bg-main/75 backdrop-blur-sm border-b border-gold/30 px-4 py-3">
        <p className="font-display text-lg gold-text">WIKASATRIAN</p>
        <button
          onClick={onLobby}
          className="text-xs border border-gold/40 rounded-full px-3 py-1.5 text-text-muted hover:gold-text transition-colors"
        >
          {isLobby ? 'Lobi Utama' : 'Kembali ke Lobi'}
        </button>
      </div>
    </>
  );
}
