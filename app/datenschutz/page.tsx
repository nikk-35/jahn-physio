import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";

export default function DatenschutzPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-playfair text-5xl font-bold text-primary mb-12">Datenschutzerklärung</h1>

          <div className="font-inter text-primary/80 space-y-10">
            <section>
              <h2 className="font-playfair text-2xl font-bold text-primary mb-4">1. Verantwortlicher</h2>
              <p className="leading-relaxed">Verantwortlicher für die Datenverarbeitung auf dieser Website ist:<br /><br />
              Thomas Jahn<br />
              Amthausstraße 10<br />
              35428 Langgöns<br />
              Telefon: 06403 2225<br />
              E-Mail: info@jahn-physiotherapie.de</p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-primary mb-4">2. Datenerhebung auf dieser Website</h2>
              <p className="leading-relaxed">Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.<br /><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.<br /><br />
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).</p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-primary mb-4">3. Kontaktformular</h2>
              <p className="leading-relaxed">Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.<br /><br />
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.</p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-primary mb-4">4. Ihre Rechte</h2>
              <p className="leading-relaxed">Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen.<br /><br />
              Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-bold text-primary mb-4">5. Google Maps</h2>
              <p className="leading-relaxed">Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.<br /><br />
              Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.<br /><br />
              Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
