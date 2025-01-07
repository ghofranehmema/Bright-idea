import React from 'react';
import './AboutPage.css';
import Header from './header';

const AboutPage = () => {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="about">
        <div className="about-section">
          <h1>About Bright Idea</h1>
          <p>We turn brilliant ideas into groundbreaking realities.</p>
        </div>
        <div className="about-image">
  <img src="p1.jpg" alt="Bright Idea logo" />
  </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>Our mission is to empower entrepreneurs and creators to bring their most ambitious ideas to life. We provide the tools, guidance, and support necessary to succeed in an ever-evolving digital world.</p>
          </div>
          <div className="vision">
            <h2>Our Vision</h2>
            <p>We aim to become a global leader in innovation, inspiring individuals and businesses to think differently and explore new possibilities through technology and creativity.</p>
          </div>
        </div>
      </section>
       {/* Values Section */}
       <section className="values">
        <h2>Our Core Values</h2>
        <div className="values-container">
          <div className="value">
            <h3>Innovation</h3>
            <p>We believe innovation is the key to success. We encourage creative thinking and bold ideas to shape a brighter future.</p>
          </div>
          <div className="value">
            <h3>Commitment</h3>
            <p>We are committed to supporting our clients and being their trusted partner in bringing their ideas to life.</p>
          </div>
          <div className="value">
            <h3>Excellence</h3>
            <p>We strive for excellence in everything we do, delivering high-quality solutions that meet our clients' needs and exceed their expectations.</p>
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="call">
        <h2>Join Us On Our Journey!</h2>
        <p>If you share our vision and would like to collaborate with us, get in touch today.</p>
        <a href="#contact" className="call-btn">Contact Us</a>
      </section>
    </div>
  );
};

export default AboutPage;