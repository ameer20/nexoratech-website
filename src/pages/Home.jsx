import React from "react";
import logo from "../assets/logo.png";

const Home = () => (
  <main className="home-page container">
    <section className="hero">
      <div className="hero-content">
        <h1 style={{color: '#1a2940'}}>NexoraTech: Your Global IT Partner</h1>
        <div style={{color: '#4ea8ff', fontWeight: 500, fontSize: '1.2rem', marginBottom: 12}}>Next-Gen IT Solutions for Small Businesses & Enterprises</div>
        <p>
          NexoraTech delivers modern, affordable IT solutions for small businesses and enterprises in the USA, Europe, and worldwide. From custom software development and QA/testing to 24/7 IT support, cloud migration, and cybersecurity, we help you grow, innovate, and stay secure. <strong>Trusted by healthcare, finance, retail, and startups globally.</strong>
        </p>
        <a href="/contact" className="cta">Let’s Work Together</a>
      </div>
      <div className="hero-image">
        <img src={logo} alt="NexoraTech Logo" style={{width: 120, height: 120, objectFit: 'contain', borderRadius: 16, background: '#fff', boxShadow: '0 2px 8px 0 rgba(30,60,120,0.07)'}} />
      </div>
    </section>
    <section className="services-preview">
      <h2>Our Services</h2>
      <div className="services-cards">
        <div className="service-card">
          <span className="service-icon" role="img" aria-label="Development">💻</span>
          <h3>Custom Development</h3>
          <ul>
            <li>Web & Mobile Apps</li>
            <li>Cloud Solutions</li>
            <li>Business Automation</li>
          </ul>
        </div>
        <div className="service-card">
          <span className="service-icon" role="img" aria-label="QA">🧪</span>
          <h3>Testing & QA</h3>
          <ul>
            <li>Automated & Manual Testing</li>
            <li>QA Consulting</li>
            <li>Performance & Security Audits</li>
          </ul>
        </div>
        <div className="service-card">
          <span className="service-icon" role="img" aria-label="IT Support">🛠️</span>
          <h3>IT Support</h3>
          <ul>
            <li>24/7 Helpdesk</li>
            <li>Remote & Onsite Support</li>
            <li>Infrastructure Management</li>
          </ul>
        </div>
        <div className="service-card">
          <span className="service-icon" role="img" aria-label="Maintenance">🔒</span>
          <h3>Maintenance & Upgrades</h3>
          <ul>
            <li>Ongoing Support</li>
            <li>System Upgrades</li>
            <li>Cybersecurity & Backups</li>
          </ul>
        </div>
      </div>
    </section>
    <section className="client-logos">
      <h3>Trusted by</h3>
      <div className="logos-row">
        <div className="logo-placeholder">Acme Corp</div>
        <div className="logo-placeholder">HealthPlus</div>
        <div className="logo-placeholder">FinEdge</div>
        <div className="logo-placeholder">EduSmart</div>
      </div>
    </section>
    <section className="home-trust">
      <h3>Our Certifications & Tech Stack</h3>
      <div className="trust-badges">
        <span className="badge">ISO 9001</span>
        <span className="badge">Microsoft Partner</span>
        <span className="badge">AWS Certified</span>
        <span className="badge">React</span>
        <span className="badge">Node.js</span>
        <span className="badge">Docker</span>
      </div>
    </section>
    <section className="why-us-preview">
      <h2>Why Choose Us?</h2>
      <div className="why-us-cards">
        <div className="why-card">
          <strong>Proven Trust</strong>
          <p>Long-term partnerships with global clients, transparent processes, and a reputation for reliability.</p>
        </div>
        <div className="why-card">
          <strong>On-Time Delivery</strong>
          <p>Agile teams, clear communication, and a commitment to meeting deadlines every time.</p>
        </div>
        <div className="why-card">
          <strong>Cost-Effective</strong>
          <p>Competitive pricing, flexible engagement models, and measurable ROI for your business.</p>
        </div>
      </div>
    </section>
  </main>
);

export default Home;
