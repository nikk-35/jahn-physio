"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";

export default function KontaktPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-24 min-h-screen bg-background">
        {/* Header */}
        <section className="py-20 bg-dark text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent blur-3xl" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent font-inter text-xs tracking-[0.4em] uppercase mb-4"
            >
              KONTAKT
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-playfair text-5xl md:text-6xl font-bold"
            >
              Sprechen Sie mit uns.
            </motion.h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-playfair text-3xl font-bold text-primary mb-8">Kontaktinformationen</h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-xl flex-shrink-0">📍</div>
                  <div>
                    <p className="font-inter font-semibold text-primary">Adresse</p>
                    <p className="font-inter text-primary/70">Amthausstraße 10<br/>35428 Langgöns</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-xl flex-shrink-0">☎</div>
                  <div>
                    <p className="font-inter font-semibold text-primary">Telefon</p>
                    <a href="tel:064032225" className="font-inter text-accent hover:text-primary transition-colors">06403 2225</a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-xl flex-shrink-0">🕐</div>
                  <div>
                    <p className="font-inter font-semibold text-primary">Öffnungszeiten</p>
                    <p className="font-inter text-primary/70">Mo–Fr: 08:00–18:00 Uhr<br/>Sa: Nach Vereinbarung</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {sent ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="font-playfair text-2xl text-primary font-bold mb-2">Nachricht gesendet!</h3>
                  <p className="font-inter text-primary/70">Wir melden uns so schnell wie möglich bei Ihnen.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
                  <h2 className="font-playfair text-2xl font-bold text-primary">Nachricht senden</h2>
                  {[
                    { name: "name", label: "Name", type: "text", placeholder: "Ihr vollständiger Name" },
                    { name: "email", label: "E-Mail", type: "email", placeholder: "ihre@email.de" },
                    { name: "phone", label: "Telefon", type: "tel", placeholder: "Ihre Telefonnummer" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block font-inter text-sm font-medium text-primary mb-2">{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-primary/20 font-inter text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block font-inter text-sm font-medium text-primary mb-2">Nachricht</label>
                    <textarea
                      placeholder="Wie können wir Ihnen helfen?"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-primary/20 font-inter text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-white font-inter font-semibold rounded-xl hover:bg-secondary transition-colors duration-300"
                  >
                    Nachricht senden
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
