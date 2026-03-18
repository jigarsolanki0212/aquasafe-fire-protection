import React from 'react';

const About = () => {
  const highlights = [
    { icon: '🏛️', title: 'GeM Registered', desc: 'Officially listed on Govt e-Marketplace' },
    { icon: '📐', title: 'NOC & Design', desc: 'Expert fire safety layouts & certification' },
    { icon: '🔧', title: 'AMC Services', desc: 'Preventive maintenance & timely checks' },
    { icon: '🎓', title: 'Fire Training', desc: 'Evacuation drills & safety hand-on' },
    { icon: '🧯', title: 'All Products', desc: 'One-stop shop for all fire equipment' },
    { icon: '⚡', title: 'Fast Response', desc: 'On-site service in Record time' }
  ];

  return (
    <section className="section glass-card" style={{ margin: '50px 5%', borderRadius: '32px' }}>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px' }}>
        <div className="reveal-left">
          <div className="hero-badge" style={{ marginBottom: '1rem' }}>
            GSTIN: 24FOSPP5631F2ZK
          </div>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>
            We Secure What <br />
            <span className="gradient-text">You've Built.</span>
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-dim)', marginBottom: '1.5rem' }}>
            Aqua Safe Fire Protection is a premier fire safety provider dedicated to protecting lives and properties. 
            Based in the industrial hub of Ahmedabad, we combine cutting-edge technology with rigorous safety 
            protocols to deliver world-class protection.
          </p>
          <p style={{ color: 'var(--text-dim)' }}>
            From individual households to massive industrial complexes, our certified experts ensure 
            complete compliance with local and national fire safety regulations.
          </p>
        </div>

        <div className="grid stagger-container reveal-right" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          {highlights.map((h, i) => (
            <div key={i} className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{h.icon}</div>
              <h4 style={{ marginBottom: '5px' }}>{h.title}</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
