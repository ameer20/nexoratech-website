import React, { useState } from "react";

const blogPosts = [
  {
    title: "Why Outsource Your IT?",
    date: "July 2025",
    author: "Development Team",
    summary: "Discover the benefits of outsourcing IT projects to skilled teams.",
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=400&h=200&fit=crop",
  },
  {
    title: "Testing Strategies for Modern Apps",
    date: "June 2025",
    author: "QA Experts",
    summary: "Best practices for ensuring software quality and reliability.",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&w=400&h=200&fit=crop",
  },
  {
    title: "Cloud Migration: A Step-by-Step Guide",
    date: "May 2025",
    author: "Cloud Team",
    summary: "How to move your business to the cloud with minimal risk.",
    image:
      "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&w=400&h=200&fit=crop",
  },
  {
    title: "IT Support & Maintenance Best Practices",
    date: "April 2025",
    author: "IT Support Team",
    summary:
      "How proactive support and regular maintenance keep your business running smoothly.",
    image:
      "https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg?auto=compress&w=400&h=200&fit=crop",
  },
  {
    title: "Affordable IT Solutions for Small Businesses",
    date: "March 2025",
    author: "Small Business Success Team",
    summary:
      "Discover how NexoraTech helps small businesses thrive with cost-effective, reliable IT services.",
    image:
      "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&w=400&h=200&fit=crop",
  },
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <main className="blog-page container">
      <section
        className="blog-header"
        style={{ textAlign: "center", marginBottom: "2.5rem" }}
      >
        <h1>Blog & Resources</h1>
        <p
          className="blog-lead"
          style={{
            color: "#2d3e5e",
            fontSize: "1.15rem",
            marginTop: "1rem",
          }}
        >
          Insights, tips, and resources to help your business grow with technology.
        </p>
      </section>
      {selectedPost === null ? (
        <section
          className="blog-list"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {blogPosts.map((post, i) => (
            <article
              className="blog-post"
              key={i}
              style={{
                background: "#f0f6fb",
                borderRadius: "1rem",
                boxShadow:
                  "0 2px 8px 0 rgba(30, 60, 120, 0.04)",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <img
                src={post.image}
                alt={post.title}
                style={{
                  width: "100%",
                  maxWidth: 400,
                  height: 200,
                  objectFit: "cover",
                  borderRadius: "0.7rem",
                  marginBottom: "1.2rem",
                }}
              />
              <h2 style={{ color: "#1a2940", marginBottom: "0.3rem" }}>
                {post.title}
              </h2>
              <span
                style={{
                  color: "#4ea8ff",
                  fontWeight: 600,
                  fontSize: "1rem",
                  marginBottom: "0.5rem",
                }}
              >
                {post.date} &nbsp;|&nbsp; {post.author}
              </span>
              <p
                style={{
                  color: "#2d3e5e",
                  fontSize: "1.05rem",
                  marginTop: "0.5rem",
                }}
              >
                {post.summary}
              </p>
              <button
                className="cta"
                style={{
                  marginTop: "1.2rem",
                  alignSelf: "flex-end",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedPost(i)}
              >
                Read More
              </button>
            </article>
          ))}
        </section>
      ) : (
        <section
          className="blog-detail"
          style={{
            maxWidth: 700,
            margin: "0 auto",
            background: "#f0f6fb",
            borderRadius: "1rem",
            boxShadow:
              "0 2px 8px 0 rgba(30, 60, 120, 0.04)",
            padding: "2.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <button
            onClick={() => setSelectedPost(null)}
            style={{
              background: "none",
              border: "none",
              color: "#4ea8ff",
              fontWeight: 600,
              fontSize: "1rem",
              marginBottom: "1.2rem",
              cursor: "pointer",
            }}
          >
            ← Back to Blog
          </button>
          <img
            src={blogPosts[selectedPost].image}
            alt={blogPosts[selectedPost].title}
            style={{
              width: "100%",
              maxWidth: 500,
              height: 240,
              objectFit: "cover",
              borderRadius: "0.7rem",
              marginBottom: "1.2rem",
            }}
          />
          <h2 style={{ color: "#1a2940", marginBottom: "0.3rem" }}>
            {blogPosts[selectedPost].title}
          </h2>
          <span
            style={{
              color: "#4ea8ff",
              fontWeight: 600,
              fontSize: "1rem",
              marginBottom: "0.5rem",
            }}
          >
            {blogPosts[selectedPost].date} &nbsp;|&nbsp; {blogPosts[selectedPost].author}
          </span>
          <p
            style={{
              color: "#2d3e5e",
              fontSize: "1.08rem",
              marginTop: "1.2rem",
            }}
          >
            {/* Example detailed content for realism */}
            {blogPosts[selectedPost].title === "Why Outsource Your IT?" && (
              <>
                Outsourcing IT allows your business to focus on core strengths while leveraging expert teams for technology needs. It reduces costs, increases flexibility, and gives you access to the latest innovations without the overhead of hiring in-house.{" "}
                <br />
                <br />
                <strong>Key Benefits:</strong>
                <ul
                  style={{
                    margin: "1rem 0 1rem 1.5rem",
                    color: "#2d3e5e",
                  }}
                >
                  <li>Cost savings and predictable budgeting</li>
                  <li>Access to global talent and expertise</li>
                  <li>Faster project delivery and scalability</li>
                  <li>Reduced risk and improved compliance</li>
                </ul>
                Ready to transform your IT?{" "}
                <a
                  href="/contact"
                  style={{
                    color: "#4ea8ff",
                    textDecoration: "underline",
                  }}
                >
                  Contact us
                </a>{" "}
                for a free consultation.
              </>
            )}
            {blogPosts[selectedPost].title === "Testing Strategies for Modern Apps" && (
              <>
                Modern applications require robust testing strategies to ensure reliability and user satisfaction. Combine automated and manual testing, use CI/CD pipelines, and always test for security and performance.
                <br />
                <br />
                <strong>Best Practices:</strong>
                <ul
                  style={{
                    margin: "1rem 0 1rem 1.5rem",
                    color: "#2d3e5e",
                  }}
                >
                  <li>Automate repetitive tests for speed</li>
                  <li>Include exploratory and usability testing</li>
                  <li>Integrate testing early in the development cycle</li>
                  <li>Monitor and test in production</li>
                </ul>
                Want to improve your QA?{" "}
                <a
                  href="/contact"
                  style={{
                    color: "#4ea8ff",
                    textDecoration: "underline",
                  }}
                >
                  Talk to our experts
                </a>
                .
              </>
            )}
            {blogPosts[selectedPost].title === "Cloud Migration: A Step-by-Step Guide" && (
              <>
                Migrating to the cloud can be seamless with the right plan. Assess your needs, choose the right provider, and follow a phased approach for minimal disruption.
                <br />
                <br />
                <strong>Step-by-Step:</strong>
                <ul
                  style={{
                    margin: "1rem 0 1rem 1.5rem",
                    color: "#2d3e5e",
                  }}
                >
                  <li>Assess current infrastructure and goals</li>
                  <li>Select the best-fit cloud provider</li>
                  <li>Plan migration phases and timelines</li>
                  <li>Test, monitor, and optimize post-migration</li>
                </ul>
                Need help with your migration?{" "}
                <a
                  href="/contact"
                  style={{
                    color: "#4ea8ff",
                    textDecoration: "underline",
                  }}
                >
                  Get in touch
                </a>
                .
              </>
            )}
            {blogPosts[selectedPost].title === "IT Support & Maintenance Best Practices" && (
              <>
                Proactive IT support and regular maintenance are crucial for ensuring your business operations run smoothly without unexpected disruptions. Implementing best practices in IT support and maintenance can save costs and improve efficiency.
                <br />
                <br />
                <strong>Key Practices:</strong>
                <ul
                  style={{
                    margin: "1rem 0 1rem 1.5rem",
                    color: "#2d3e5e",
                  }}
                >
                  <li>Regular system check-ups and updates</li>
                  <li>24/7 monitoring for critical issues</li>
                  <li>Data backup and disaster recovery planning</li>
                  <li>Helpdesk support for immediate assistance</li>
                </ul>
                Looking for reliable IT support?{" "}
                <a
                  href="/contact"
                  style={{
                    color: "#4ea8ff",
                    textDecoration: "underline",
                  }}
                >
                  Contact our IT team
                </a>
                .
              </>
            )}
          </p>
        </section>
      )}
    </main>
  );
};

export default Blog;
