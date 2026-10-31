import Background from "./components/Background";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Background />
      <Marquee />
      <Navbar />
      <About />
      <Experience />
      <Projects />
       <Contact />
      <Hero />
      <Skills />
    </>
  );
}