import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <a href="#home">DR<span>.</span></a>
        </div>
        
        <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="hamburger"></div>
        </div>
        
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item"><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li className="nav-item"><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li className="nav-item"><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li className="nav-item"><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
          <li className="nav-item"><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li className="nav-item"><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;