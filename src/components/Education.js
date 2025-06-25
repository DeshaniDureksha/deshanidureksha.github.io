import React, { useEffect, useRef } from 'react';
import '../styles/Education.css';

const Education = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all animatable elements
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const education = [
    {
      id: 1,
      institution: 'University of Westminster (Informatics Institute of Technology)',
      degree: 'BSc (Hons) Computer Science',
      period: 'Sep 2023 - Present',
      details: [
        'Year 1 Modules (Completed): Mathematics for Computer Science, Computer Systems Fundamentals, Software Development I, Software Development II, Web Design and Development, Trends in Computer Science',
        'Year 2 Modules (Completed): Advanced Client Side, Client Server Architecture, Algorithms Theory, Design & Implementation, Database Systems, Object Oriented Programming, Software Development Group Project'
      ]
    },
    {
      id: 2,
      institution: 'Rathnavali Balika Vidyalaya, Gampaha',
      degree: 'GCE Advanced Level - Bio Science Stream',
      period: 'Jan 2023 (2022)',
      details: ['Results: 2 C and 1 S pass']
    },
    {
      id: 3,
      institution: 'Rathnavali Balika Vidyalaya, Gampaha',
      degree: 'GCE Advanced Level - Bio Science Stream',
      period: 'Dec 2019',
      details: ['Results: 8 A and 1 B pass']
    }
  ];

  const certifications = [
    {
      id: 1,
      title: 'IX 24 Designathon - Sustainable Urban Living',
      details: 'Created a mobile application that highlights sustainable urban living using Figma.'
    },
    {
      id: 2,
      title: 'CodeSprint 8.0',
      details: 'Developed a project "Skillfy" an advanced online platform designed to provide educators worldwide with valuable teacher training and professional development resources.'
    },
    {
      id: 3,
      title: 'IEEE Xtreme',
      details: 'Participated in a global 24-hour programming competition that tests competitive programming skills.'
    },
    {
      id: 4,
      title: 'Ideaforge (Ideathon organized by UOK)',
      details: 'Developed a project "Wellness 360" to provide a healthcare solution that solves clients and doctors\' problems by incorporating technology into better management of healthcare system and interaction with clients.'
    },
    {
      id: 5,
      title: 'Hult Prize',
      details: 'Participated and presented SDGP project CarCare++ in the on-campus qualifier round.'
    }
  ];

  return (
    <div className="education-container">
      <div className="education-content">
        <div className="education-column">
          <h2 className="column-title animate-on-scroll fade-in-up">Education</h2>
          
          <div className="timeline">
            {education.map((item, index) => (
              <div key={item.id} className={`timeline-item animate-on-scroll slide-in-left`} style={{animationDelay: `${index * 0.2}s`}}>
                <div className="timeline-marker"></div>
                <div className="timeline-date">{item.period}</div>
                <div className="timeline-title">{item.degree}</div>
                <div className="timeline-institution">{item.institution}</div>
                {item.details.length > 0 && (
                  <ul className="timeline-details">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="animate-on-scroll fade-in" style={{animationDelay: `${(index * 0.2) + (detailIndex * 0.1) + 0.3}s`}}>
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="certifications-column">
          <h2 className="column-title animate-on-scroll fade-in-up">Certifications & Activities</h2>
          
          <div className="certifications-list">
            {certifications.map((cert, index) => (
              <div key={cert.id} className={`certification-item animate-on-scroll slide-in-right`} style={{animationDelay: `${index * 0.15}s`}}>
                <div className="certification-icon">
                  <div className="icon-inner">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <div className="certification-content">
                  <div className="certification-title">{cert.title}</div>
                  <div className="certification-details">{cert.details}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;