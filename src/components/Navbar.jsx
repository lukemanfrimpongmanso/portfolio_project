import React, { useState } from 'react';
import '../styles/navbar.scss';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">
        <div className="circle"></div>
        Lukeman Frimpong
      </a>
      <div className={`navbar-links ${sidebarOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="menu-icon" onClick={toggleSidebar}>
        ☰ 
      </div>
    </nav>
  );
}

export default Navbar;
