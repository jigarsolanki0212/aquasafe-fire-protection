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
      <div className="inner">
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '70px', alignItems: 'center' }}>
          <div className="reveal visible" style={{ textAlign: 'left' }}>
            <div className="s-tag">🔥 About Us</div>
            <h2 className="s-title">Protecting Gujarat<br /><span>Since Day One</span></h2>
            <div style={{ marginBottom: '24px' }}>
              <p className="s-sub" style={{ marginBottom: '16px' }}>
                Aqua Safe Fire Protection is a certified, MSME-registered fire safety company based in Ahmedabad. 
                Our expertise covers end-to-end fire protection — from system design and NOC to installation, refilling, and annual maintenance.
              </p>
              <p className="s-sub" style={{ marginBottom: '16px' }}>
                Being a GeM-listed provider, we serve factories, offices, hotels, hospitals, and residential complexes 
                across Gujarat with full compliance and rapid turnaround times.
              </p>
            </div>
            <div className="flex items-center gap-1" style={{ background: 'rgba(245,130,13,.06)', border: '1px solid rgba(245,130,13,.2)', borderRadius: '12px', padding: '16px 24px', display: 'inline-flex', gap: '16px' }}>
              <div>
                <div style={{ fontSize: '0.65rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>GSTIN / UIN</div>
                <div style={{ fontSize: '1rem', fontWeight: '800', color: '#fff', letterSpacing: '1px' }}>24FOSPP5631F2ZK</div>
              </div>
            </div>
          </div>

          <div className="grid reveal visible" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            {highlights.map((h, i) => (
              <div key={i} className="card" style={{ padding: '24px', textAlign: 'left', display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--gradient-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>
                  {h.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#fff' }}>{h.title}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>{h.sub}</div>
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
