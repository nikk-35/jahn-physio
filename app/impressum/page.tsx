import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";

export default function ImpressumPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-playfair text-5xl font-bold text-primary mb-12">Impressum</h1>

          <div className="prose font-inter text-primary/80 space-y-8">
            <section>
              <h2 className="font-playfair text-2xl font-bold text-primary mb-4">Angaben gemäß § 5 TMG</h2>
              <p>Thomas Jahn<br />
              Amthausstraße 10<br />
              35428 Langgöns</p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-primary mb-4">Kontakt</h2>
              <p>Telefon: 06403 2225<br />
              E-Mail: info@jahn-physiotherapie.de</p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-primary mb-4">Berufsbezeichnung</h2>
              <p>Physiotherapeut<br />
              Zuständige Aufsichtsbehörde: Gesundheitsamt Landkreis Gießen</p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-primary mb-4">Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: Wird auf Anfrage mitgeteilt.</p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-primary mb-4">Haftung für Inhalte</h2>
              <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-primary mb-4">Haftung für Links</h2>
              <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-primary mb-4">Urheberrecht</h2>
              <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
