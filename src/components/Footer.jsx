import React from "react";

const Footer = () => (
  <footer className="site-footer">
    <div>
      <span>© {new Date().getFullYear()} NexoraTech. All rights reserved.</span>
      <span className="trust-indicators">ISO 9001 | Microsoft Partner | AWS Certified</span>
      <span className="tech-stack">React · Node.js · AWS · Docker · Cypress</span>
    </div>
  </footer>
);

export default Footer;
