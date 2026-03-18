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
      <div className="nav-inner">
        <a className="logo" href="#home">
          <svg className="logo-flame" viewBox="0 0 40 48" fill="none">
            <path d="M20 2C20 2 8 16 8 28c0 7.7 5.4 14 12 14s12-6.3 12-14C32 20 20 2 20 2z" fill="url(#fg1)"/>
            <path d="M20 18c0 0-5 7-5 13 0 3.3 2.2 6 5 6s5-2.7 5-6c0-6-5-13-5-13z" fill="url(#fg2)" opacity="0.8"/>
            <defs>
              <linearGradient id="fg1" x1="20" y1="2" x2="20" y2="42" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f5820d"/>
                <stop offset="100%" stopColor="#e8251a"/>
              </linearGradient>
              <linearGradient id="fg2" x1="20" y1="18" x2="20" y2="42" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffb347"/>
                <stop offset="100%" stopColor="#f5820d"/>
              </linearGradient>
            </defs>
          </svg>
          <div className="logo-text">
            <div className="logo-brand"><span style={{color: 'var(--orange)'}}>Aqua</span> <span style={{color: 'var(--red)'}}>Safe</span> Fire</div>
            <div className="logo-sub">Safety Success Protection (Ahmedabad)</div>
          </div>
        </a>
        
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        
        <a className="btn-fire" href="#contact" style={{ padding: '12px 32px', fontSize: '0.9rem', borderRadius: '12px' }}>
          🔥 Get Quote
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
