import AboutMe from "./components/AboutMe/AboutMe";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Reveal from "./components/shared/Reveal";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Banner />
        <Reveal>
          <AboutMe />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}

export default App;
