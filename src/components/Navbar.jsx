import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="/" className="logo">
          <svg className="logo-flame" viewBox="0 0 100 120" fill="none">
            <path d="M50 0C50 0 20 40 20 75C20 95 33 115 50 115C67 115 80 95 80 75C80 40 50 0 50 0Z" fill="var(--red)" />
            <path d="M50 30C50 30 35 60 35 80C35 95 42 105 50 105C58 105 65 95 65 80C65 60 50 30 50 30Z" fill="var(--orange)" />
          </svg>
          <div className="logo-text">
            <div className="logo-brand">Aqua Safe <span style={{ color: 'var(--red)' }}>Fire</span></div>
            <div className="logo-sub">Safety Success Protection (Ahmedabad)</div>
          </div>
        </a>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'dark' ? '🌕' : '☀️'}
          </button>
          
          <a href="#contact" className="btn-fire" style={{ padding: '12px 28px', fontSize: '0.85rem' }}>
            🔥 Get Quote
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
