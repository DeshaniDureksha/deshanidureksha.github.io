import React, { useState } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical');
  
  const technicalSkills = [
    { name: 'HTML', level: 85 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 75 },
    { name: 'React.js', level: 70 },
    { name: 'Node.js', level: 65 },
    { name: 'Java', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'Spring Boot', level: 60 },
    { name: 'MySQL', level: 75 }
  ];
  
  const softSkills = [
    { name: 'Project Management', level: 80 },
    { name: 'Teamwork', level: 90 },
    { name: 'Problem Solving', level: 85 },
    { name: 'Communication', level: 80 },
    { name: 'Critical Thinking', level: 85 },
    { name: 'Time Management', level: 75 },
    { name: 'Adaptability', level: 80 }
  ];

  return (
    <div className="skills-container">
      <div className="section-title">
        <h2>My Skills</h2>
      </div>
      
      <div className="skills-tabs">
        <button 
          className={`tab-btn ${activeTab === 'technical' ? 'active' : ''}`}
          onClick={() => setActiveTab('technical')}
        >
          Technical Skills
        </button>
        <button 
          className={`tab-btn ${activeTab === 'soft' ? 'active' : ''}`}
          onClick={() => setActiveTab('soft')}
        >
          Soft Skills
        </button>
      </div>
      
      <div className="skills-content">
        {activeTab === 'technical' ? (
          <div className="technical-skills">
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{width: `${skill.level}%`}}
                      data-level={skill.level}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="soft-skills">
            <div className="skills-grid">
              {softSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress soft" 
                      style={{width: `${skill.level}%`}}
                      data-level={skill.level}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;