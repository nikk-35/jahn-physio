"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const leistungen = [
  { title: "Krankengymnastik", desc: "Gezielte Übungen zur Verbesserung von Beweglichkeit, Kraft und Koordination.", icon: "🏃" },
  { title: "Manuelle Therapie", desc: "Behandlung von Gelenk- und Muskelfunktionsstörungen durch spezielle Handgriffe.", icon: "🤲" },
  { title: "Manuelle Lymphdrainage", desc: "Sanfte Massage zur Förderung des Lymphabflusses und Entstauung.", icon: "💧" },
  { title: "PNF-Therapie", desc: "Propriozeptive neuromuskuläre Fazilitation zur Verbesserung motorischer Funktionen.", icon: "⚡" },
  { title: "CMD-Behandlung", desc: "Behandlung von Kiefergelenks- und Kaumuskelstörungen.", icon: "😮" },
  { title: "Klassische Massage", desc: "Entspannende und heilende Massage zur Linderung von Muskelverspannungen.", icon: "✋" },
  { title: "Wärmetherapie", desc: "Wärmebehandlung zur Entspannung und Förderung der Durchblutung.", icon: "🔥" },
  { title: "Kältetherapie", desc: "Kältebehandlung zur Schmerzlinderung und Entzündungshemmung.", icon: "❄️" },
  { title: "Fußreflexzonenmassage", desc: "Stimulation von Reflexzonen am Fuß zur Förderung der Selbstheilung.", icon: "🦶" },
  { title: "Fußpflege", desc: "Professionelle medizinische Fußpflege für gesunde Füße.", icon: "💅" },
  { title: "Kosmetik", desc: "Professionelle Kosmetikbehandlungen für Ihr Wohlbefinden.", icon: "✨" },
  { title: "Sonnenstudio", desc: "Entspannung und Wohlbefinden unter professioneller UV-Bestrahlung.", icon: "☀️" },
];

export default function Leistungen() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leistungen" ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-inter text-xs tracking-[0.4em] uppercase mb-4">LEISTUNGEN</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-primary font-bold">
            Unser Behandlungsangebot
          </h2>
          <p className="mt-4 text-primary/60 font-inter max-w-2xl mx-auto">
            Wir bieten ein umfassendes Spektrum an physiotherapeutischen Leistungen für Ihre Gesundheit und Ihr Wohlbefinden.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {leistungen.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              whileHover={{ scale: 1.04, boxShadow: "0 20px 40px rgba(27,58,92,0.15)" }}
              className="bg-white rounded-2xl p-6 shadow-md cursor-default transition-shadow duration-300 group"
            >
              <div className="w-14 h-14 bg-background rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-accent/10 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="font-playfair text-lg font-semibold text-primary mb-2">{item.title}</h3>
              <p className="font-inter text-sm text-primary/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
