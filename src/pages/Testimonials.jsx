import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote:
      "As a small business owner, I was overwhelmed by IT issues. NexoraTech set up our cloud, secured our data, and is always just a call away. Their team is friendly, fast, and explains everything in plain English. Highly recommended for any small business!",
    client: "Linda Garcia",
    company: "Garcia Family Dental Clinic",
    avatar:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&w=80&h=80&fit=crop"
  },
  {
    quote:
      "Great team, delivered on time and exceeded expectations! Their agile approach and technical expertise made a real difference to our product launch.",
    client: "Sarah Thompson",
    company: "Acme Corp",
    avatar:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=80&h=80&fit=crop"
  },
  {
    quote:
      "Professional, reliable, and highly skilled. The team provided valuable insights and went above and beyond to ensure our systems ran smoothly.",
    client: "James Lee",
    company: "Bluewave Solutions",
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=80&h=80&fit=crop"
  },
  {
    quote:
      "Excellent communication and support throughout the project. We felt like true partners every step of the way.",
    client: "Priya Patel",
    company: "NextGen Tech",
    avatar:
      "https://images.pexels.com/photos/1181696/pexels-photo-1181696.jpeg?auto=compress&w=80&h=80&fit=crop"
  },
  {
    quote:
      "Our go-to partner for all IT needs. Their proactive approach and fast response times are unmatched.",
    client: "Michael Chen",
    company: "InnovateX",
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&w=80&h=80&fit=crop"
  }
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false
};


const Testimonials = () => (
  <main className="testimonials-page container">
    <section>
      <h1>What Our Clients Say</h1>
      <p className="testimonials-lead">Real feedback from our valued partners and clients worldwide.</p>
      <div className="testimonial-slider">
        <Slider {...sliderSettings}>
          {testimonials.map((t, i) => (
            <div className="testimonial-slide" key={i}>
              <div className="testimonial-avatar-row" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.2rem', justifyContent: 'center' }}>
                <img
                  src={t.avatar}
                  alt={t.client}
                  className="testimonial-avatar"
                  loading="lazy"
                  style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: '3px solid #4ea8ff' }}
                />
                <div className="testimonial-client-info" style={{ textAlign: 'left' }}>
                  <span className="testimonial-client-name" style={{ fontWeight: 600, color: '#1a2940', fontSize: '1.1rem' }}>{t.client}</span><br />
                  <span className="testimonial-client-company" style={{ color: '#4ea8ff', fontSize: '1rem' }}>{t.company}</span>
                </div>
              </div>
              <p className="testimonial-quote">“{t.quote}”</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
    <section className="testimonials-cta" style={{ textAlign: 'center', marginTop: '2.5rem' }}>
      <a href="/contact" className="cta">Become Our Next Success Story</a>
    </section>
  </main>
);

export default Testimonials;
