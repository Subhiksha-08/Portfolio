import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Research from "@/sections/Research";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Interactive floating particles background */}
      <Background />

      {/* Floating navigation bar */}
      <Navbar />

      {/* Main content page flow */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Research />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
