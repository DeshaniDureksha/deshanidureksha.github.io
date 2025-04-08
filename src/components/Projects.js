import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';
import carcareImg from '../assets/carcare.png';
import estateImg from '../assets/estate-agent.png';
import portfolioImg from '../assets/portfolio.png';
import planeImg from '../assets/plane.png';
import ticketImg from '../assets/ticket.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [animated, setAnimated] = useState(false);
  
  useEffect(() => {
    setAnimated(true);
  }, []);

  const projectsData = [
    {
      id: 1,
      title: "CarCare++ App",
      description: "A comprehensive mobile app improving vehicle maintenance by 18% with smart tracking and document storage.",
      image: carcareImg,
      category: "mobile",
      stack: ["React Native", "Nest.js", "Python", "MySQL", "RESTful APIs", "AWS S3"],
      github: "https://github.com/Pavith19/CarCare-Project",
      liveDemo: "#",
      period: "Sep 2024 - Present"
    },
    {
      id: 2,
      title: "Ticket Booking System",
      description: "Real-time CLI and web-based ticket booking system using Java, OOP, and WebSockets for concurrency.",
      image: ticketImg,
      category: "software",
      stack: ["Java", "Spring Boot", "React.js", "WebSocket"],
      github: "https://github.com/DeshaniDureksha/Threaded-TicketSystem",
      liveDemo: "#",
      period: "Dec 2024"
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description: "Modern, animated portfolio website to highlight skills and projects with clean UI/UX.",
      image: portfolioImg,
      category: "web",
      stack: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/DeshaniDureksha/Portfolio-Website",
      liveDemo: "#",
      period: "Nov 2024"
    },
    {
      id: 4,
      title: "Estate Agent Web App",
      description: "Responsive SPA with property filters, local storage, JSON handling, and CSP security.",
      image: estateImg,
      category: "web",
      stack: ["React.js", "JSON", "Local Storage", "CSP"],
      github: "https://github.com/DeshaniDureksha/Estate-Agent-WebApplication",
      liveDemo: "#",
      period: "Dec 2024"
    },
    {
      id: 5,
      title: "Plane Management System",
      description: "Java console app for ticketing with seat plans, file I/O, and OOP principles.",
      image: planeImg,
      category: "software",
      stack: ["Java", "OOP", "2D Arrays", "File I/O"],
      github: "https://github.com/DeshaniDureksha/PlaneManagement-System",
      liveDemo: "#",
      period: "Feb 2024"
    }
  ];

  const filterProjects = (category) => {
    setActiveFilter(category);
  };

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className={`section-title ${animated ? 'fade-in' : ''}`}>
          <h2>My Projects</h2>
          <div className="underline"></div>
          <p>Here are some of my recent projects that showcase my technical skills and problem-solving abilities.</p>
        </div>

        <div className={`project-filters ${animated ? 'fade-in' : ''}`}>
          {['all', 'web', 'mobile', 'software'].map((cat) => (
            <button
              key={cat}
              className={activeFilter === cat ? 'active' : ''}
              onClick={() => filterProjects(cat)}
            >
              {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1) + ' Apps'}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${animated ? 'fade-in' : ''}`} 
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    {/* GitHub Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link">
                    {/* Live Demo Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
              </div>

              <div className="project-info">
                <div className="project-period">{project.period}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
