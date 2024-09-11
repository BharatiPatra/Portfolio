import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "./components/About";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />
      <div className="">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
