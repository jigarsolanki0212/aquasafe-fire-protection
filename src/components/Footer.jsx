import React from 'react';

const Footer = () => {
  return (
    <footer className="section glass-card" style={{ marginTop: '100px', borderBottom: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: '40px 40px 0 0', paddingBottom: '30px' }}>
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="logo-text" style={{ fontSize: '2rem' }}>
          <span className="logo-aqua">Aqua</span> <span className="logo-fire">Safe</span> Fire Protection
        </h2>
        
        <p style={{ color: 'var(--text-dim)', textAlign: 'center', maxWidth: '600px' }}>
          All Type of Safety Solution | Refilling & Servicing | AMC <br />
          Shop No. 512, 513, Hiltown Trade Centre, Ahmedabad – 382330
        </p>

        <div className="flex gap-1" style={{ marginTop: '20px' }}>
          <span className="hero-badge">GSTIN: 24FOSPP5631F2ZK</span>
          <span className="hero-badge">UIN: MSME-GJ-01-XXXX</span>
        </div>

        <div style={{ borderTop: '1px solid var(--glass-border)', width: '100%', marginTop: '40px', paddingTop: '20px', textAlign: 'center' }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
            © {new Date().getFullYear()} Aqua Safe Fire Protection. All rights reserved. 
            <br />
            Proudly Made in Ahmedabad, India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
