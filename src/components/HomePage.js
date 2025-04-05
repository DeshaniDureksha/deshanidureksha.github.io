import React, { useEffect, useRef } from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const typeText = async (element, text, delay = 100) => {
      for (let i = 0; i <= text.length; i++) {
        element.textContent = text.substring(0, i);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    };

    if (titleRef.current) {
      typeText(titleRef.current, "Deshani Rajapaksha");
    }
  }, []);

  // Add this function to handle smooth scrolling
  const handleScrollDown = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <p className="greeting">Hello, I'm</p>
          <h1 ref={titleRef} className="name">Deshani Rajapaksha</h1>
          <div className="title-container">
            <p className="title">
              <span className="title-prefix">A </span>
              <span className="title-words">
                <span>Computer Science Student</span>
                <span>Full-Stack Developer</span>
                <span>Problem Solver</span>
                <span>Tech Enthusiast</span>
              </span>
            </p>
          </div>
          <p className="description">
            I'm a motivated Computer Science undergraduate seeking opportunities to apply my skills 
            and contribute to impactful projects.
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/DeshaniDureksha" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/deshani-dureksha" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="mailto:deshanidureksha123@gmail.com" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>
        <div className="home-image">
          <div className="profile-image-container">
            <div className="profile-image"></div>
            <div className="profile-backdrop"></div>
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <a href="#about" onClick={handleScrollDown}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow">
            <span></span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default HomePage;