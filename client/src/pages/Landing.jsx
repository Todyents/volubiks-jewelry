import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="landing">
      <section className="hero">
        <div className="hero-content">
          <h1>Royal Volubiks Jewelries</h1>
          <p className="lead">Exquisite artisan jewelry — crafted with care, worn with confidence.</p>
          <div className="hero-ctas">
            <Link to="/shop"><button className="button primary">Shop Collection</button></Link>
            <a href="#about"><button className="button ghost">Learn More</button></a>
          </div>
        </div>
        <div className="hero-image" aria-hidden="true">
          <img src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=1400&q=80" alt="Elegant jewelry on display" />
        </div>
      </section>

      <section id="about" className="features">
        <h2>Why Royal Volubiks?</h2>
        <div className="feature-grid">
          <div className="feature">
            <h3>Timeless Design</h3>
            <p>Each piece is designed for elegance and longevity.</p>
          </div>
          <div className="feature">
            <h3>Handcrafted</h3>
            <p>Artisan-made with attention to detail and quality materials.</p>
          </div>
          <div className="feature">
            <h3>Secure Payments</h3>
            <p>Pay using Paystack or Moniepoint integrations (test mode available).</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Visit & Contact</h2>
        <p>Open to collaborations and custom orders. Email: <a href="mailto:hello@volubiks.example">hello@volubiks.example</a></p>
      </section>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Royal Volubiks Jewelries</p>
      </footer>
    </div>
  );
}
