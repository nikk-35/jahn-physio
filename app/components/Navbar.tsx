"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/#start", label: "Start" },
    { href: "/#leistungen", label: "Leistungen" },
    { href: "/#ueber-uns", label: "Über uns" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-dark/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/assets/jahn-logo.png" alt="Jahn Logo" width={44} height={44} className="object-contain" />
          <span className="text-white font-inter font-semibold tracking-[0.2em] text-sm uppercase">
            JAHN PHYSIOTHERAPIE
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-white font-inter text-sm tracking-wide transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:064032225"
            className="ml-4 px-5 py-2 bg-accent text-white font-inter text-sm font-semibold rounded-full hover:bg-secondary transition-colors duration-200 tracking-wide"
          >
            ☎ 06403 2225
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-dark/95 backdrop-blur-md px-6 pb-6"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block text-white/80 hover:text-white py-3 font-inter text-sm border-b border-white/10"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:064032225"
            className="block mt-4 text-center px-5 py-3 bg-accent text-white font-inter text-sm font-semibold rounded-full"
          >
            ☎ 06403 2225
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
