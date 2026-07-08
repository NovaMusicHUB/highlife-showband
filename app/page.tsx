import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import EventTypes from "./components/EventTypes";
import Experience from "./components/Experience";
import Reels from "./components/Reels";
import Packages from "./components/Packages";
import Repertoire from "./components/Repertoire";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Guarantee from "./components/Guarantee";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
        <Guarantee />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
