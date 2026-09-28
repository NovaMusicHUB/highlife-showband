import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import EventTypes from "./components/EventTypes";
import Experience from "./components/Experience";
import Reels from "./components/Reels";
import Packages from "./components/Packages";
import Repertoire from "./components/Repertoire";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import NewRelease from "./components/NewRelease";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AvailabilityPopup from "./components/AvailabilityPopup";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <EventTypes />
        <Experience />
        <Reels />
        <Packages />
        <Repertoire />
        <Gallery />
        <Testimonials />
        <NewRelease />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <AvailabilityPopup />
    </>
  );
}
