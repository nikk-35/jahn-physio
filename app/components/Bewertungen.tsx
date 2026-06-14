"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reviews = [
  {
    name: "Maria S.",
    text: "Sehr professionelles Familienunternehmen. Herr Jahn ist sehr kompetent und einfühlsam. Ich fühle mich hier bestens aufgehoben und kann die Praxis nur wärmstens empfehlen!",
    rating: 5,
  },
  {
    name: "Klaus M.",
    text: "Seit Jahren mein Physiotherapeut des Vertrauens. Die Behandlungen sind sehr effektiv und das Team ist immer freundlich und hilfsbereit.",
    rating: 5,
  },
  {
    name: "Anna L.",
    text: "Tolle Praxis mit herzlichem Empfang. Die Behandlung hat mir wirklich geholfen und ich bin sehr zufrieden mit den Ergebnissen.",
    rating: 5,
  },
];

export default function Bewertungen() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p className="text-accent font-inter text-xs tracking-[0.4em] uppercase mb-4">BEWERTUNGEN</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-primary font-bold mb-3">
            Was unsere Patienten sagen
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4 mb-12">
            <div className="flex text-yellow-400 text-xl">★★★★★</div>
            <span className="font-playfair text-2xl font-bold text-primary">4.8 / 5</span>
            <span className="text-primary/50 font-inter text-sm">· basierend auf Google Rezensionen</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-background rounded-2xl p-8 relative"
            >
              <div className="text-5xl text-accent/20 font-playfair absolute top-4 left-6">"</div>
              <div className="flex text-yellow-400 text-sm mb-4 mt-4">
                {"★".repeat(r.rating)}
              </div>
              <p className="font-inter text-primary/70 leading-relaxed mb-6 italic">"{r.text}"</p>
              <p className="font-inter font-semibold text-primary text-sm">— {r.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
