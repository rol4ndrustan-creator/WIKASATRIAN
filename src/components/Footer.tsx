interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-bg-secondary border-t border-gold/20 py-10 px-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-2xl gold-text">WIKASATRIAN</p>
          <p className="text-text-muted text-sm mt-1">
            Leadership • Learning • Transformation
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-text-muted">
          <button onClick={() => onNavigate('philosophy')} className="hover:gold-text">
            Filosofi
          </button>
          <button onClick={() => onNavigate('rooms')} className="hover:gold-text">
            Ruang
          </button>
          <button onClick={() => onNavigate('programs')} className="hover:gold-text">
            Program
          </button>
          <button onClick={() => onNavigate('consultation')} className="hover:gold-text">
            Konsultasi
          </button>
        </div>
      </div>

      <p className="text-center text-text-muted/60 text-xs mt-8">
        © {new Date().getFullYear()} Wikasatrian. Sebuah perjalanan kepemimpinan Nusantara.
      </p>
    </footer>
  );
}
