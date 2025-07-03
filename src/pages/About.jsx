import React from "react";

const About = () => (
  <main className="about-page container">
    <section className="about-mission">
      <h1>About NexoraTech</h1>
      <p className="mission">
        NexoraTech is a global IT partner for small businesses and enterprises in the USA, Europe, and beyond. We deliver reliable, cost-effective, and timely software solutions—custom development, QA/testing, IT support, cloud services, and cybersecurity. Our mission is to empower your business with innovative technology, measurable results, and exceptional service.
      </p>
      <p style={{color: '#2d3e5e', fontSize: '1.08rem', marginTop: '1.2rem'}}>
        <strong>Why choose NexoraTech?</strong> We combine deep technical expertise with a personal approach, offering tailored solutions for every client. Whether you’re a startup, clinic, retailer, or enterprise, we help you scale, secure your data, and achieve your business goals—on time and on budget.
      </p>
    </section>
    <section className="about-team">
      <h2>Meet the Team</h2>
      <div className="team-cards">
        <div className="team-card">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="John Doe" className="team-avatar" />
          <h3>John Doe</h3>
          <p>CEO & Solution Architect</p>
        </div>
        <div className="team-card">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Jane Smith" className="team-avatar" />
          <h3>Jane Smith</h3>
          <p>Lead Developer</p>
        </div>
        <div className="team-card">
          <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Mike Brown" className="team-avatar" />
          <h3>Mike Brown</h3>
          <p>QA & Testing Lead</p>
        </div>
        <div className="team-card">
          <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Sara Lee" className="team-avatar" />
          <h3>Sara Lee</h3>
          <p>IT Support Manager</p>
        </div>
      </div>
    </section>
    <section className="about-why">
      <h2>Why Choose Us?</h2>
      <div className="about-why-cards">
        <div className="about-why-card">
          <span role="img" aria-label="trust">🤝</span>
          <h4>Trust</h4>
          <p>Long-term partnerships and transparent processes.</p>
        </div>
        <div className="about-why-card">
          <span role="img" aria-label="timeliness">⏱️</span>
          <h4>Timeliness</h4>
          <p>Agile teams and a commitment to deadlines.</p>
        </div>
        <div className="about-why-card">
          <span role="img" aria-label="cost-effective">💡</span>
          <h4>Cost-effective</h4>
          <p>Competitive pricing and measurable ROI.</p>
        </div>
      </div>
    </section>
  </main>
);

export default About;
