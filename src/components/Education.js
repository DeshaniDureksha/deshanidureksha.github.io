import React from 'react';
import '../styles/Education.css';

const Education = () => {
  const education = [
    {
      id: 1,
      institution: 'University of Westminster (Informatics Institute of Technology)',
      degree: 'BSc (Hons) Computer Science',
      period: 'Sep 2023 - Present',
      details: [
        'Year 1 Modules (Completed): Mathematics for Computer Science, Computer Systems Fundamentals, Software Development I, Software Development II, Web Design and Development, Trends in Computer Science',
        'Year 2 Modules (Current): Advanced Client Side, Client Server Architecture, Algorithms Theory, Design & Implementation, Database Systems, Object Oriented Programming, Software Development Group Project'
      ]
    },
    {
      id: 2,
      institution: 'Rathnavali Balika Vidyalaya, Gampaha',
      degree: 'GCE Advanced Level - Bio Science Stream',
      period: '2014 - 2023',
      details: []
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
      <div className="section-title">
        <h2>Education & Certifications</h2>
      </div>
      
      <div className="education-content">
        <div className="education-column">
          <h3 className="column-title">Education</h3>
          <div className="timeline">
            {education.map((item) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-date">{item.period}</div>
                  <h4 className="timeline-title">{item.degree}</h4>
                  <div className="timeline-institution">{item.institution}</div>
                  {item.details.length > 0 && (
                    <ul className="timeline-details">
                      {item.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="certifications-column">
          <h3 className="column-title">Certifications & Activities</h3>
          <div className="certifications-list">
            {certifications.map((cert) => (
              <div key={cert.id} className="certification-item">
                <div className="certification-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <div className="certification-content">
                  <h4 className="certification-title">{cert.title}</h4>
                  <p className="certification-details">{cert.details}</p>
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