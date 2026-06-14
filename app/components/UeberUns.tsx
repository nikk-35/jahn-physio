"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

function AnimatedCounter({ value, suffix }: { value: string; suffix: string }) {
  const [displayed, setDisplayed] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const numericPart = parseFloat(value);
    const isFloat = value.includes(".");
    let start = 0;
    const duration = 1800;
    const steps = 60;
    const increment = numericPart / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      start += increment;
      if (step >= steps) {
        setDisplayed(value);
        clearInterval(timer);
      } else {
        setDisplayed(isFloat ? start.toFixed(1) : Math.floor(start).toString());
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center p-4 bg-background rounded-xl">
      <p className="font-playfair text-2xl md:text-3xl font-bold text-primary">
        {displayed}{suffix}
      </p>
    </div>
  );
}

const stats = [
  { value: "20", suffix: "+ Jahre", label: "Erfahrung" },
  { value: "4.8", suffix: "★", label: "Google Bewertung" },
  { value: "1000", suffix: "+ Patienten", label: "Vertrauen uns" },
];

export default function UeberUns() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ueber-uns" ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/thomas-jahn.png"
                alt="Thomas Jahn – Physiotherapeut"
                width={600}
                height={700}
                className="w-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-primary rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-white">
                <span className="font-playfair text-white text-2xl font-bold">20+</span>
                <span className="font-inter text-white/80 text-xs text-center leading-tight">Jahre<br/>Erfahrung</span>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-accent font-inter text-xs tracking-[0.4em] uppercase mb-4">ÜBER UNS</p>
            <h2 className="font-playfair text-4xl md:text-5xl text-primary font-bold mb-6 leading-tight">
              Ein Familienunternehmen mit Herz
            </h2>
            <p className="text-primary/70 font-inter text-lg leading-relaxed mb-4">
              Seit über 20 Jahren steht Thomas Jahn und sein Team für professionelle Physiotherapie in Langgöns. Als Familienunternehmen legen wir besonderen Wert auf eine persönliche und individuelle Betreuung unserer Patienten.
            </p>
            <p className="text-primary/70 font-inter leading-relaxed mb-10">
              Unser ganzheitlicher Ansatz verbindet modernste Therapiemethoden mit bewährten Heilverfahren. Wir behandeln nicht nur Symptome, sondern suchen nach den Ursachen und begleiten Sie auf dem Weg zu langfristiger Gesundheit.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="font-inter text-xs text-primary/60 mt-1 text-center">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
