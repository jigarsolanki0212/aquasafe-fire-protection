import React from 'react';

const WhyChoose = () => {
  const reasons = [
    { icon: '⭐', title: 'Quality Assurance', desc: 'Rigorous 15-point check for all refilling & high-grade ISI marked safety products.' },
    { icon: '🏭', title: 'Vast Experience', desc: 'Proudly serving Ahmedabad’s top factories, hospitals, and residential schemes since years.' },
    { icon: '🏢', title: 'MSME Registered', desc: 'Trusted government-recognized fire safety vendor with full GST and UIN compliance.' },
    { icon: '🤝', title: 'Client Focused', desc: 'Personalized AMC plans and rapid response to all emergencies in the Gujarat region.' }
  ];

  return (
    <section className="section" id="why" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <div className="s-tag">🏆 Why Choose Us?</div>
          <h2 className="s-title">The Most Trusted <br /><span className="gradient-text">Safety Partner</span></h2>
        </div>

        <div className="cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '60px' }}>
          {reasons.map((r, i) => (
            <div key={i} className="deluxe-card reveal" style={{ textAlign: 'center', padding: '50px 30px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '24px' }}>{r.icon}</div>
              <h3 style={{ marginBottom: '16px', fontSize: '1.25rem', fontWeight: '900', color: 'var(--text)' }}>{r.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7' }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
