import React from 'react';

const Services = () => {
  const serviceList = [
    { icon: '🔧', title: 'Refilling & Servicing', desc: 'Expert refilling of all fire extinguishers with certified pressure testing and rapid turnaround.' },
    { icon: '📋', title: 'NOC & Documentation', desc: 'End-to-end guidance for fire safety NOC from local authorities with full compliance checks.' },
    { icon: '🛠️', title: 'AMC Maintenance', desc: 'Reliable Annual Maintenance Contracts (AMC) to ensure your safety systems are always mission-ready.' },
    { icon: '🚒', title: 'System Installation', desc: 'Professional installation of hydrants, alarms, and sprinklers following strict safety norms.' },
    { icon: '🎓', title: 'Training & Drills', desc: 'Expert-led fire safety training, demonstrations, and emergency evacuation drills for staff.' },
    { icon: '⚡', title: 'Emergency Support', desc: '24/7 technical support and site visits to ensure continuous protection across Ahmedabad.' }
  ];

  return (
    <section className="section" id="services" style={{ background: 'var(--bg-accent)', borderTop: '1px solid var(--border)' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="reveal" style={{ textAlign: 'center' }}>
          <div className="s-tag">🛠️ Professional Safety Services</div>
          <h2 className="s-title">Dedicated to <span className="gradient-text">Absolute Protection</span></h2>
          <p className="s-sub" style={{ margin: '0 auto 60px' }}>
            From consultancy to maintenance, we manage your fire safety lifecycle 
            with unmatched precision and local expertise.
          </p>
        </div>

        <div className="cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {serviceList.map((s, i) => (
            <div key={i} className="deluxe-card reveal" style={{ padding: '50px 40px', textAlign: 'left' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '18px', background: 'var(--gradient-fire)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '32px', boxShadow: '0 20px 40px -10px rgba(232, 37, 26, 0.4)' }}>
                {s.icon}
              </div>
              <h3 style={{ marginBottom: '20px', fontSize: '1.4rem', fontWeight: '900', color: 'var(--text)' }}>{s.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8' }}>{s.desc}</p>
              <div style={{ marginTop: '32px', borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
                <a href="#contact" style={{ color: 'var(--orange)', textDecoration: 'none', fontWeight: '800', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  Explore Details <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
