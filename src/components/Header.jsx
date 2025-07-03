import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";


const Header = () => (
  <header className="site-header">
    <div className="header-brand" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem'}}>
      <img
        src={logo}
        alt="NexoraTech Logo"
        style={{ height: 48, width: 48, objectFit: 'contain', marginRight: 16, borderRadius: 8, background: '#fff', boxShadow: '0 2px 8px 0 rgba(30,60,120,0.07)' }}
      />
      <div style={{textAlign: 'left'}}>
        <span style={{fontWeight: 700, fontSize: '1.5rem', color: '#fff', letterSpacing: '0.5px'}}>NexoraTech</span>
        <div style={{fontSize: '1rem', color: '#4ea8ff', fontWeight: 400, marginTop: 2}}>Next-Gen IT Solutions, Delivered Globally</div>
      </div>
    </div>
    <nav>
      <ul>
        <li><NavLink to="/" end className={({ isActive }) => isActive ? "active" : undefined}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : undefined}>About Us</NavLink></li>
        <li><NavLink to="/services" className={({ isActive }) => isActive ? "active" : undefined}>Services</NavLink></li>
        <li><NavLink to="/portfolio" className={({ isActive }) => isActive ? "active" : undefined}>Portfolio</NavLink></li>
        <li><NavLink to="/testimonials" className={({ isActive }) => isActive ? "active" : undefined}>Testimonials</NavLink></li>
        <li><NavLink to="/blog" className={({ isActive }) => isActive ? "active" : undefined}>Blog</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : undefined}>Contact</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
