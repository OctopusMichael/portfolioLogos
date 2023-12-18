import About from "./components/About";
import Hero from "./components/Hero";

import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
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
