import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Real Estate Dashboard',
      description: 'React JS',
    },
    {
      title: 'E-Commerce App',
      description: 'React JS, Node Js, MongoDB',
    },
  ];

  return (
    <section id="portfolio">
      <h2>My Recent Work</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            {project.image && <img src={project.image} alt={project.title} />}
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
