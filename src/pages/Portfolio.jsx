import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    name: "E-commerce App",
    industry: "Retail",
    description:
      "A scalable web platform for online retail, featuring real-time inventory, secure payments, and analytics.",
    image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&w=400&h=200&fit=crop",
  },
  {
    name: "HealthTech Dashboard",
    industry: "Healthcare",
    description:
      "A HIPAA-compliant analytics dashboard for healthcare providers, with data visualization and reporting.",
    image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&w=400&h=200&fit=crop",
  },
  {
    name: "FinTech Mobile App",
    industry: "Finance",
    description:
      "A secure mobile banking solution with biometric login, instant transfers, and budgeting tools.",
    image: "https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg?auto=compress&w=400&h=200&fit=crop",
  },
  {
    name: "EduSmart LMS",
    industry: "Education",
    description:
      "A cloud-based learning management system for schools and universities, supporting online courses and exams.",
    image: "https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&w=400&h=200&fit=crop",
  },
];

const Portfolio = () => (
  <main className="portfolio-page container">
    <section className="portfolio-intro">
      <h1>Our Projects</h1>
      <p className="portfolio-lead">
        Explore some of our recent work across industries. We deliver robust,
        scalable, and innovative solutions for every client.
      </p>
    </section>
    <section className="portfolio-grid">
      {projects.map((p, i) => (
        <div className="project-card" key={i}>
          <img src={p.image} alt={p.name} className="project-image" />
          <h2>{p.name}</h2>
          <span className="project-industry">{p.industry}</span>
          <p className="project-desc">{p.description}</p>
        </div>
      ))}
    </section>
    <div className="portfolio-cta">
      <a href="/contact" className="cta">
        Start Your Project
      </a>
    </div>
  </main>
);

export default Portfolio;
