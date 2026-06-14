import Preloader from "./components/Preloader";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UeberUns from "./components/UeberUns";
import Leistungen from "./components/Leistungen";
import Bewertungen from "./components/Bewertungen";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <UeberUns />
        <Leistungen />
        <Bewertungen />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
