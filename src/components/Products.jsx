import React from 'react';

const Products = () => {
  const productList = [
    { emoji: '🧯', title: 'Fire Extinguishers', desc: 'ABC, CO2, Water & Foam. Compelte refilling & servicing.' },
    { emoji: '🚒', title: 'Hydrant Systems', desc: 'Valves, hose reels, pipes, branch nozzles, house boxes.' },
    { emoji: '🌧️', title: 'Sprinkler Systems', desc: 'GM Sprinklers, 2-way valves, water monitors, nozzles.' },
    { emoji: '🔔', title: 'Fire Alarm', desc: 'Detection panels, manual call points, smoke detectors.' },
    { emoji: '📷', title: 'CCTV & Automation', desc: 'Smart security solutions & high-res cameras.' },
    { emoji: '🚧', title: 'Road Safety', desc: 'Cones, studs, speed breakers, safety jackets.' },
    { emoji: '🏷️', title: 'Safety Signs', desc: 'Exit signs, hydrant markers, extinguisher boards.' },
    { emoji: '⚽', title: 'Fire Balls', desc: 'AFO balls, dry riser inlets, flexible joints.' }
  ];

  return (
    <section className="section bg-color">
      <div className="reveal">
        <h2 className="section-title">
          World-Class <span className="gradient-text">Fire Protection</span> Products
        </h2>
        <p className="section-subtitle">
          From residential to heavy industrial equipment, we provide industry-leading 
          safety gear compliant with national standards.
        </p>
      </div>

      <div className="card-grid stagger-container reveal">
        {productList.map((p, i) => (
          <div key={i} className="glass-card product-card">
            <div className="card-icon">{p.emoji}</div>
            <h3 style={{ marginBottom: '10px' }}>{p.title}</h3>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>{p.desc}</p>
            <div style={{ marginTop: 'auto', display: 'flex', gap: '8px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--primary-orange)', border: '1px solid var(--primary-orange)', padding: '2px 8px', borderRadius: '4px' }}>CERTIFIED</span>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--primary-gold)', border: '1px solid var(--primary-gold)', padding: '2px 8px', borderRadius: '4px' }}>QUALITY</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
