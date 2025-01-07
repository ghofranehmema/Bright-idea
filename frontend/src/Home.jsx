import React from 'react';
import { Link } from 'react-router-dom'; // Importer Link pour la navigation
import './HomePage.css';
import Header from './components/header';

const HomePage = () => {
  return (
    <div>
      <Header />
      
      <section className="hero">
        <div className="hero-content">
          <h1>Bring Your Bright Ideas to Life</h1>
          <p>Join our platform to transform your innovative ideas into reality.</p>
          {/* Utiliser Link pour la navigation vers la page d'inscription */}
          <Link className="cta-btn">Get Started</Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>Consultation</h3>
            <p>We provide strategic advice to help you bring your innovative ideas to life.</p>
          </div>
          <div className="service-card">
            <h3>Prototype Creation</h3>
            <p>We create prototypes to help you visualize and test your projects efficiently.</p>
          </div>
          <div className="service-card">
            <h3>Development</h3>
            <p>We develop tailored solutions to make your tech projects a reality.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"An exceptional team that transformed our idea into a concrete product. They understood our needs perfectly." - Client A</p>
          </div>
          <div className="testimonial-card">
            <p>"Fast and efficient service with excellent communication. Highly recommended!" - Client B</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Sign up today and embark on your journey to bring your bright ideas to life!</p>
        {/* Utiliser Link pour la navigation vers la page d'inscription */}
        <Link to="/register" className="cta-btn">Sign Up</Link>
      </section>
    </div>
  );
};

export default HomePage;
