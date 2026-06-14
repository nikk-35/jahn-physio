import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark text-white/70 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Desc */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/assets/jahn-logo.png" alt="Jahn Logo" width={40} height={40} className="object-contain" />
              <span className="text-white font-inter font-semibold tracking-[0.2em] text-sm uppercase">JAHN PHYSIOTHERAPIE</span>
            </div>
            <p className="font-inter text-sm leading-relaxed">
              Ihr vertrauensvoller Physiotherapeut in Langgöns. Seit über 20 Jahren für Ihre Gesundheit.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-white font-inter font-semibold text-sm tracking-wider uppercase mb-4">Kontakt</h4>
            <div className="space-y-2 font-inter text-sm">
              <p>📍 Amthausstraße 10, 35428 Langgöns</p>
              <p>☎ <a href="tel:064032225" className="hover:text-white transition-colors">06403 2225</a></p>
              <div className="mt-4">
                <p className="text-white font-medium mb-1">Öffnungszeiten:</p>
                <p>Mo–Fr: 08:00–18:00 Uhr</p>
                <p>Sa: Nach Vereinbarung</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-inter font-semibold text-sm tracking-wider uppercase mb-4">Navigation</h4>
            <div className="space-y-2 font-inter text-sm">
              <Link href="/" className="block hover:text-white transition-colors">Startseite</Link>
              <Link href="/#leistungen" className="block hover:text-white transition-colors">Leistungen</Link>
              <Link href="/#ueber-uns" className="block hover:text-white transition-colors">Über uns</Link>
              <Link href="/kontakt" className="block hover:text-white transition-colors">Kontakt</Link>
              <Link href="/impressum" className="block hover:text-white transition-colors">Impressum</Link>
              <Link href="/datenschutz" className="block hover:text-white transition-colors">Datenschutz</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center font-inter text-xs">
          <p>© {new Date().getFullYear()} Jahn Physiotherapie · Thomas Jahn · Langgöns</p>
        </div>
      </div>
    </footer>
  );
}
