import About from "./components/About";
import Hero from "./components/Hero";
import React, { useState, useEffect } from "react";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  const [posicion, setPosicion] = useState({ x: 0, y: 0 });

  const actualizarPosicion = (event) => {
    setPosicion({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", actualizarPosicion);

    return () => {
      document.removeEventListener("mousemove", actualizarPosicion);
    };
  }, []);

  return (
    <>
      <div
        className="luz-cursor"
        style={{ left: `${posicion.x}px`, top: `${posicion.y}px` }}
      ></div>
      <header>
        
        <Hero />
      </header>
      <main>
        <About />
        <Projects />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default App;
