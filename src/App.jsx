import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
  setDarkMode((prev) => !prev);
  };

  return (
  <div className={darkMode ? "app dark-theme" : "app light-theme"}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme}/>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
