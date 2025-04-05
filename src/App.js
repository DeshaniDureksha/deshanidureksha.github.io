import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import useScrollFadeIn from './components/useScrollFadeIn'; // ✅ from components folder
import './styles/globals.css';

function App() {
  const [loading, setLoading] = useState(true);

  useScrollFadeIn(); // ✅ run scroll animation setup

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    document.body.classList.add('dark-mode'); // ✅ only dark

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <div className="app dark-theme">
      <Navbar />
      <main>
        <section id="home" className="fade-in-section"><HomePage /></section>
        <section id="about" className="fade-in-section"><AboutMe /></section>
        <section id="skills" className="fade-in-section"><Skills /></section>
        <section id="education" className="fade-in-section"><Education /></section>
        <section id="projects" className="fade-in-section"><Projects /></section>
        <section id="contact" className="fade-in-section"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
