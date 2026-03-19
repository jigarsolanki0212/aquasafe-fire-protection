import React from 'react';
import { Flame, ShieldCheck, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '80px 0 40px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', marginBottom: '80px' }}>
          <div>
            <a href="/" className="logo" style={{ marginBottom: '24px' }}>
              <div className="logo-flame">
                <Flame size={32} color="var(--red)" fill="var(--red)" fillOpacity={0.2} />
              </div>
              <div className="logo-text">
                <div className="logo-brand" style={{ fontSize: '1.4rem', fontWeight: '800' }}>AquaSafe <span style={{ color: 'var(--red)' }}>Fire</span></div>
                <div className="logo-sub">Safety • Success • Protection</div>
              </div>
            </a>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', maxWidth: '400px' }}>
              Ahmedabad's most trusted fire safety partner. Providing certified equipment, 
              expert consultancy, and complete protection for your projects across Gujarat.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
            <div>
              <h4 style={{ color: 'var(--text)', marginBottom: '24px', fontSize: '1rem', fontWeight: '800' }}>Company</h4>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '16px' }}>
                <li><a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}>About Us</a></li>
                <li><a href="#products" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}>Products</a></li>
                <li><a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}>Services</a></li>
                <li><a href="#contact" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}>Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'var(--text)', marginBottom: '24px', fontSize: '1rem', fontWeight: '800' }}>Inquiries</h4>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  <Mail size={16} color="var(--red)" /> aquasafefireprotection55@gmail.com
                </li>
                <li style={{ display: 'flex', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  <Phone size={16} color="var(--red)" /> +91 73833 74584
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: '40px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            © 2026 AquaSafe Fire Protection. All rights reserved. 
            <span style={{ marginLeft: '12px', color: 'var(--text)', fontWeight: '700' }}>GST: 24FOSPP5631F2ZK</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>
            <ShieldCheck size={16} color="#22c55e" /> Certified Safety Partner
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

