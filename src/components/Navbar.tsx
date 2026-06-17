import { useState } from 'react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

const links = [
  { id: 'hero', label: 'Beranda' },
  { id: 'lobby', label: 'Jelajahi' },
  { id: 'philosophy', label: 'Filosofi' },
  { id: 'rooms', label: 'Ruang' },
  { id: 'programs', label: 'Program' },
  { id: 'why', label: 'Mengapa Kami' },
  { id: 'consultation', label: 'Konsultasi' },
];

export default function Navbar({ onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const handleClick = (id: string) => {
    onNavigate(id);
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 panel border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3">
        <button
          onClick={() => handleClick('opening')}
          className="font-display text-2xl gold-text tracking-wide"
        >
          WIKASATRIAN
        </button>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className="text-sm text-text-warm/90 hover:gold-text transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button onClick={() => handleClick('consultation')} className="btn-gold text-sm px-5 py-2">
            Konsultasi
          </button>
        </nav>

        <button
          className="md:hidden text-text-warm"
          onClick={() => setOpen((v) => !v)}
          aria-label="Buka menu navigasi"
        >
          <span className="text-2xl">{open ? '✕' : '☰'}</span>
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-1 px-5 pb-4">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className="text-left text-base py-2 text-text-warm/90 hover:gold-text"
            >
              {link.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
