import React from 'react';

const About = () => {
  const highlights = [
    { icon: '🏛️', title: 'GeM Registered', sub: 'Govt. e-Marketplace' },
    { icon: '📋', title: 'NOC & Design', sub: 'Fire Consultancy' },
    { icon: '🔧', title: 'AMC Services', sub: 'Annual Maintenance' },
    { icon: '🎓', title: 'Fire Training', sub: 'Demos & Drills' },
    { icon: '📦', title: 'All Products', sub: 'Full Safety Range' },
    { icon: '⚡', title: 'Fast Response', sub: 'Ahmedabad Based' }
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <div className="reveal">
            <div className="s-tag">🔥 Elite Safety Experts</div>
            <h2 className="s-title">Protecting Gujarat<br /><span className="gradient-text">Since Day One</span></h2>
            <p className="s-sub" style={{ marginBottom: '24px' }}>
              Aqua Safe Fire Protection is a certified, MSME-registered company based in Ahmedabad. 
              We provide total fire safety solutions — from system design and NOC to installation, refilling, and maintenance.
            </p>
            <div style={{ background: 'var(--glass)', border: '1px solid var(--border)', borderRadius: '20px', padding: '24px', display: 'inline-flex', gap: '24px', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>GSTIN / UIN</div>
                <div style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--text)', letterSpacing: '1px' }}>24FOSPP5631F2ZK</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            {highlights.map((h, i) => (
              <div key={i} className="deluxe-card reveal" style={{ padding: '30px', textAlign: 'left', display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--gradient-fire)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                  {h.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--text)' }}>{h.title}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{h.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
