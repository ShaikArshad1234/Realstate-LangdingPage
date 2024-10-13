import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src="/sa.png" alt="About Me" /> 
        <div className="bio">
          <p>I am a passionate UI Developer...</p>
          <a href="/Shaik_Arshad_Resume.pdf" className="btn-secondary" download="Shaik_Arshad_Resume.pdf">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
