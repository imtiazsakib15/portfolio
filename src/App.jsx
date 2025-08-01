import { Toaster } from "react-hot-toast";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import ClickSpark from "./components/blocks/Animations/ClickSpark/ClickSpark";

function App() {
  return (
    <div className="bg-[#003566ff] text-white relative">
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={500}
      >
        <Navbar />
        <Banner />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <Toaster position="top-center" reverseOrder={false} />
      </ClickSpark>
    </div>
  );
}

export default App;
