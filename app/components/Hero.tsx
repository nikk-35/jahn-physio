"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  duration: Math.random() * 10 + 8,
  delay: Math.random() * 5,
}));

const words = ["Ihre", "Gesundheit.", "Unsere", "Leidenschaft."];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="start" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/60 to-dark/80" />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-accent/30"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -40, -15, 0],
              x: [0, 15, -10, 0],
              opacity: [0.2, 0.6, 0.3, 0.2],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 w-full"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.6 }}
          className="text-accent font-inter text-xs tracking-[0.4em] uppercase mb-6"
        >
          SEIT ÜBER 20 JAHREN · LANGGÖNS
        </motion.p>

        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-8">
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8 + i * 0.15, duration: 0.7, ease: "easeOut" }}
              className="inline-block mr-4"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.6 }}
          className="text-white/70 font-inter text-lg md:text-xl max-w-xl mb-10"
        >
          Professionelle Physiotherapie für Ihre Gesundheit und Ihr Wohlbefinden – in Langgöns und Umgebung.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.7, duration: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/kontakt"
            className="px-8 py-4 bg-accent text-white font-inter font-semibold rounded-full hover:bg-secondary transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Termin vereinbaren
          </Link>
          <Link
            href="/#leistungen"
            className="px-8 py-4 border-2 border-white/40 text-white font-inter font-semibold rounded-full hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            Unsere Leistungen
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 font-inter text-xs tracking-[0.3em] uppercase">SCROLLEN</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-0.5 h-10 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
