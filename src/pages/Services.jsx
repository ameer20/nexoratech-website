import React from "react";

const Services = () => (
  <main className="services-page container">
    <section className="services-intro">
      <h1>Our Services</h1>
      <p>
        We deliver end-to-end IT solutions tailored to your business needs. From
        custom development to ongoing support, our team ensures quality, security,
        and innovation at every step.
      </p>
    </section>
    <section className="services-list">
      <div className="service-card">
        <span
          className="service-icon"
          role="img"
          aria-label="development"
        >
          💻
        </span>
        <h2>Development</h2>
        <p>Web & Mobile Apps, Custom Software, Cloud Solutions</p>
        <ul>
          <li>React, Node.js, .NET, Python</li>
          <li>iOS & Android Apps</li>
          <li>API & Backend Development</li>
        </ul>
      </div>
      <div className="service-card">
        <span className="service-icon" role="img" aria-label="qa">
          🧪
        </span>
        <h2>Testing & QA</h2>
        <p>Automated & Manual Testing, QA Consulting</p>
        <ul>
          <li>Unit, Integration, E2E Testing</li>
          <li>Performance & Security Testing</li>
          <li>Test Automation (Cypress, Selenium)</li>
        </ul>
      </div>
      <div className="service-card">
        <span className="service-icon" role="img" aria-label="support">
          🛠️
        </span>
        <h2>IT Support</h2>
        <p>24/7 Support, Helpdesk, Infrastructure Management</p>
        <ul>
          <li>Remote & Onsite Support</li>
          <li>Cloud & Server Management</li>
          <li>Disaster Recovery</li>
        </ul>
      </div>
      <div className="service-card">
        <span className="service-icon" role="img" aria-label="maintenance">
          🔄
        </span>
        <h2>Maintenance & Upgrades</h2>
        <p>Ongoing Support, System Upgrades, Security</p>
        <ul>
          <li>Legacy System Modernization</li>
          <li>Security Patching</li>
          <li>Continuous Improvement</li>
        </ul>
      </div>
    </section>
    <section className="services-cta">
      <a href="/contact" className="cta">
        Discuss Your Project
      </a>
    </section>
  </main>
);

export default Services;
