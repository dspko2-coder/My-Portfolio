import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeSync from "./components/ThemeSync";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechMarquee from "./components/TechMarquee";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home = () => (
  <>
    <Hero />
    <TechMarquee />
    <About />
    <Projects />
    <Contact />
  </>
);

const repoPath = "/My-Portfolio";
const isRepoPath =
  typeof window !== "undefined" &&
  window.location.pathname.toLowerCase().startsWith(repoPath.toLowerCase());
const basename = isRepoPath ? repoPath : import.meta.env.BASE_URL || "/";

const App = () => {
  return (
    <BrowserRouter basename={basename}>
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
            <Routes>
              {/* Primary Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />

              {/* GitHub Pages subpath fallback routes */}
              <Route path="/My-Portfolio" element={<Home />} />
              <Route path="/My-Portfolio/home" element={<Home />} />
              <Route path="/My-Portfolio/about" element={<About />} />
              <Route path="/My-Portfolio/projects" element={<Projects />} />
              <Route path="/My-Portfolio/contact" element={<Contact />} />

              {/* Catch-all fallback route */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
