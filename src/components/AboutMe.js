import React from 'react';
import '../styles/AboutMe.css';
import cvFile from '../assets/Deshani Rajapaksha Resume.pdf'; // ✅ import CV

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="section-title">
        <h2>About Me</h2>
      </div>
      
      <div className="about-content">
        <div className="about-image">
          <div className="image-frame">
            <div className="image-placeholder"></div>
            <div className="frame-corner top-left"></div>
            <div className="frame-corner top-right"></div>
            <div className="frame-corner bottom-left"></div>
            <div className="frame-corner bottom-right"></div>
          </div>
        </div>
        
        <div className="about-text">
          <h3>Deshani Rajapaksha</h3>
          <p className="subtitle">Computer Science Student & Full-Stack Developer</p>
          
          <p className="description">
            I am a motivated Computer Science undergraduate currently studying at the University of Westminster 
            (Informatics Institute of Technology). With a passion for creating innovative web applications and 
            solving complex problems, I'm constantly expanding my knowledge and skills in various technologies.
          </p>
          
          <p className="description">
            I'm seeking opportunities to gain practical experience and contribute to impactful projects. 
            My commitment is to learn, grow, and make meaningful contributions in a professional environment.
          </p>
          
          <div className="personal-info">
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">deshanidureksha123@gmail.com</span>
            </div>
            <div className="info-item">
              <span className="info-label">Phone:</span>
              <span className="info-value">+94 (71) 190 9744</span>
            </div>
            <div className="info-item">
              <span className="info-label">Address:</span>
              <span className="info-value">No. 56, Vivekananda Rd, Colombo 06</span>
            </div>
          </div>
          
          <div className="cta">
            <a href="#contact" className="btn btn-primary">Contact Me</a>
            <a href={cvFile} className="btn btn-outline resume-btn" download target="_blank" rel="noreferrer">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
