import ThemeSync from "./components/ThemeSync";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechMarquee from "./components/TechMarquee";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <ThemeSync />
      <Loader />
      <div className="relative min-h-screen bg-canvas text-ink antialiased selection:bg-accent selection:text-accent-contrast">
        {/* Ambient background accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed top-0 left-1/2 -z-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed bottom-0 right-0 -z-0 h-[500px] w-[500px] bg-accent/5 blur-[140px]"
        />

        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <TechMarquee />
            <About />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
