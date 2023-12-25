import { Toaster } from "react-hot-toast";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
