"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-accent font-inter text-xs tracking-[0.4em] uppercase mb-4"
        >
          JETZT STARTEN
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-playfair text-4xl md:text-5xl text-white font-bold mb-6"
        >
          Bereit für Ihre Behandlung?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white/60 font-inter text-lg mb-10"
        >
          Vereinbaren Sie noch heute Ihren Termin und starten Sie Ihren Weg zu mehr Gesundheit und Wohlbefinden.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="tel:064032225"
            className="relative px-10 py-4 rounded-full font-inter font-bold text-white text-lg overflow-hidden group"
          >
            <span className="absolute inset-0 shimmer rounded-full" />
            <span className="relative z-10">☎ Jetzt anrufen: 06403 2225</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
