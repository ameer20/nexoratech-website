import React, { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvgryrlk"; // Replace with your Formspree form ID

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("There was a problem sending your message. Please try again later.");
      }
    } catch {
      setError("There was a problem sending your message. Please try again later.");
    }
  };

  return (
    <main className="contact-page">
      <section style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1>Contact Us</h1>
        <p style={{ color: "#2d3e5e", fontSize: "1.1rem", marginTop: "1rem" }}>
          Let's connect! Fill out the form and our team will get back to you within 24 hours.
        </p>
      </section>
      {submitted ? (
        <div style={{ background: "#eaf6ff", borderRadius: "1rem", padding: "2rem", textAlign: "center", color: "#1a2940", boxShadow: "0 2px 8px 0 rgba(30, 60, 120, 0.07)" }}>
          <h2>Thank you for reaching out!</h2>
          <p>We appreciate your message and will respond as soon as possible.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit} style={{ background: "#f0f6fb", borderRadius: "1rem", boxShadow: "0 2px 8px 0 rgba(30, 60, 120, 0.04)", padding: "2rem", maxWidth: 500, margin: "0 auto" }}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input id="name" name="name" type="text" placeholder="Enter your name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input id="email" name="email" type="email" placeholder="Enter your email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" placeholder="Type your message" value={form.message} onChange={handleChange} required />
          </div>
          <button type="submit" className="send-btn">Send Message</button>
          {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
        </form>
      )}
      <section className="contact-info" style={{ marginTop: "2.5rem", textAlign: "center" }}>
        <h3 style={{ color: "#1a2940", marginBottom: "1rem" }}>Other Ways to Reach Us</h3>
        <p>Email: <a href="mailto:info@nexoratech.com" style={{ color: "#4ea8ff" }}>info@nexoratech.com</a></p>
        <p>WhatsApp: <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" style={{ color: "#4ea8ff", fontWeight: 600, fontSize: '1.08rem', display: 'inline-flex', alignItems: 'center' }}>
          <span style={{fontSize: '1.3em', marginRight: 6}}>💬</span>Chat with us on WhatsApp
        </a></p>
        <div style={{margin: '1.2rem 0'}}>
          <a
            href="https://wa.me/918010108368"
            target="_blank"
            rel="noopener noreferrer"
            className="cta"
            style={{background: '#25D366', color: '#fff', border: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 600, fontSize: '1.08rem', margin: '0.5rem 0'}}>
            <span style={{fontSize: '1.3em'}}>💬</span> Start WhatsApp Chat
          </a>
        </div>
        {/* Address removed as requested */}
        {/* Map removed as requested */}
      </section>
    </main>
  );
};

export default Contact;
