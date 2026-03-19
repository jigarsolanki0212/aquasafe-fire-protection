import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Flame, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [theme, isMenuOpen]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="/" className="logo">
          <div className="logo-flame">
            <Flame size={32} color="var(--red)" fill="var(--red)" fillOpacity={0.2} />
          </div>
          <div className="logo-text">
            <div className="logo-brand">AquaSafe <span style={{ color: 'var(--red)' }}>Fire</span></div>
            <div className="logo-sub">Safety • Success • Protection</div>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links desktop-only">
          {navItems.map((item) => (
            <li key={item.label}><a href={item.href}>{item.label}</a></li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <a href="#contact" className="btn-fire desktop-only" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>
            Get Quote
          </a>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
        <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
          <div className="mobile-nav-header">
            <div className="logo-brand">AquaSafe <span style={{ color: 'var(--red)' }}>Fire</span></div>
            <button className="close-btn" onClick={() => setIsMenuOpen(false)}><X size={24} /></button>
          </div>
          <ul className="mobile-nav-links">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.label} <ChevronRight size={18} opacity={0.5} />
                </a>
              </li>
            ))}
            <li style={{ marginTop: '20px' }}>
              <a href="#contact" className="btn-fire" onClick={() => setIsMenuOpen(false)} style={{ justifyContent: 'center', width: '100%', padding: '18px' }}>
                Get Quote
              </a>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .theme-toggle {
          padding: 10px;
          border-radius: 12px;
          background: var(--glass);
          border: 1px solid var(--glass-border);
          transition: var(--transition);
          color: var(--text);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .theme-toggle:hover {
          background: var(--glass-border);
          transform: translateY(-2px);
        }
        .desktop-only { display: none !important; }
        .mobile-menu-btn {
          display: flex !important;
          background: none;
          border: none;
          color: var(--text);
          cursor: pointer;
          padding: 8px;
        }

        @media (min-width: 769px) {
          .desktop-only { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }

        /* Mobile Menu Styles */
        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          z-index: 2000;
          visibility: hidden;
          opacity: 0;
          transition: var(--transition);
        }
        .mobile-overlay.active {
          visibility: visible;
          opacity: 1;
        }
        .mobile-nav {
          position: fixed;
          top: 0;
          right: -100%;
          width: 300px;
          height: 100%;
          background: var(--bg);
          z-index: 2001;
          padding: 40px 30px;
          transition: 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
        }
        .mobile-nav.active {
          right: 0;
        }
        .mobile-nav-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 50px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border);
        }
        .logo-brand {
          font-weight: 800;
          font-size: 1.2rem;
          color: var(--text);
        }
        .close-btn {
          background: none;
          border: none;
          color: var(--text);
          cursor: pointer;
        }
        .mobile-nav-links {
          list-style: none;
          display: grid;
          gap: 12px;
        }
        .mobile-nav-links a {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          background: var(--glass);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          color: var(--text);
          text-decoration: none;
          font-weight: 700;
          transition: var(--transition);
        }
        .mobile-nav-links a:hover {
          background: var(--glass-border);
          color: var(--red);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;


