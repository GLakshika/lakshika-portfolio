import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FiSun, FiMoon } from "react-icons/fi";

function Navbar({darkMode, toggleTheme}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        Lakshika Gobinath
      </a>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#education" onClick={closeMenu}>Education</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle dark and light theme"
        >
        {darkMode ? <FiSun /> : <FiMoon />}
      </button>
    </nav>
  );
}

export default Navbar;