
import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services">
      <h2>What I Offer</h2>
      <div className="services-grid">
        <div className="service-card">
          <i className="icon-ui-design"></i>
          <h3>UI Developer</h3>
          <p>Designing visually stunning and user-friendly interfaces.</p>
        </div>
        <div className="service-card">
          <i className="icon-responsive"></i>
          <h3>Responsive Web Design</h3>
          <p>Ensuring that your website looks amazing on all devices.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;