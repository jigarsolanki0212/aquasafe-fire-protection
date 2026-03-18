import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '80px 5% 40px' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <a href="/" className="logo" style={{ justifyContent: 'center', marginBottom: '40px' }}>
          <svg className="logo-flame" viewBox="0 0 100 120" fill="none" style={{ width: '40px' }}>
            <path d="M50 0C50 0 20 40 20 75C20 95 33 115 50 115C67 115 80 95 80 75C80 40 50 0 50 0Z" fill="var(--red)" />
            <path d="M50 30C50 30 35 60 35 80C35 95 42 105 50 105C58 105 65 95 65 80C65 60 50 30 50 30Z" fill="var(--orange)" />
          </svg>
          <div className="logo-text" style={{ textAlign: 'left' }}>
            <div className="logo-brand" style={{ fontSize: '1.4rem', fontWeight: '900' }}>Aqua Safe <span style={{ color: 'var(--red)' }}>Fire</span></div>
            <div className="logo-sub" style={{ fontSize: '0.7rem' }}>Safety Success Protection (Ahmedabad)</div>
          </div>
        </a>

        <div style={{ maxWidth: '800px', margin: '0 auto 40px' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Ahmedabad's most trusted fire safety partner. Providing ISI certified equipment, 
            professional refilling, and expert consultancy for industrial and commercial sectors across Gujarat.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', marginBottom: '60px', flexWrap: 'wrap' }}>
          <a href="#about" style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: '800', fontSize: '0.9rem' }}>About Us</a>
          <a href="#products" style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: '800', fontSize: '0.9rem' }}>Products</a>
          <a href="#services" style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: '800', fontSize: '0.9rem' }}>Services</a>
          <a href="#contact" style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: '800', fontSize: '0.9rem' }}>Contact</a>
        </div>

        <div style={{ padding: '32px 0', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            © 2026 Aqua Safe Fire Protection. All rights reserved. 
            <span style={{ marginLeft: '10px', color: 'var(--text)', fontWeight: '700' }}>GST: 24FOSPP5631F2ZK</span>
          </div>
          <div style={{ display: 'flex', gap: '4px', alignItems: 'center', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Proudly Made in Ahmedabad, India 🇮🇳
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
