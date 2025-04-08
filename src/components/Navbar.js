import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
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
          <li className="nav-item">
            <button className="theme-toggle" onClick={toggleDarkMode}>
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;