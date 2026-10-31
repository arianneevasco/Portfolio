import Background from "./components/Background";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
export default function App() {
  return (
    <>
      <Background />
      <Marquee />
      <Navbar />
      <About />
      <Hero />
      <Skills />
    </>
  );
}