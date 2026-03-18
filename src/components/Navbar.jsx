import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <svg className="logo-flame" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C12 2 4 8 4 14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14C20 8 12 2 12 2Z" fill="url(#flame-grad)"/>
          <path d="M12 6C12 6 8 10 8 14C8 16.2091 9.79086 18 12 18C14.2091 18 16 16.2091 16 14C16 10 12 6 12 6Z" fill="#ffb347"/>
          <defs>
            <linearGradient id="flame-grad" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#e8251a" />
              <stop offset="1" stopColor="#f5820d" />
            </linearGradient>
          </defs>
        </svg>
        <div className="flex flex-col">
          <span className="logo-text">
            <span className="logo-aqua">Aqua</span> <span className="logo-fire">Safe</span>
          </span>
          <span className="nav-sublabel">Safety Solution · AMC · Refilling</span>
        </div>
      </div>
      
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#services">Services</a>
        <a href="#industries">Industries</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#contact" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>
        🔥 Get Quote
      </a>
    </nav>
  );
};

export default Navbar;
