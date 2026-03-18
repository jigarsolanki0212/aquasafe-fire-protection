import React from 'react';

const Products = () => {
  const products = [
    { icon: '🧯', title: 'Fire Extinguishers', desc: 'ABC, CO₂, Water & Foam. Refilling, pressure testing & servicing available.' },
    { icon: '🚒', title: 'Hydrant Systems', desc: 'Single & double hydrant valves, hose reels, pipes, branch nozzles & house boxes.' },
    { icon: '🌧️', title: 'Sprinkler Systems', desc: 'GM Sprinklers, 2-way valves, water monitors, sprinkler nozzles & flexible fittings.' },
    { icon: '🔔', title: 'Fire Alarm', desc: 'Smoke detectors, alarm panels, manual call points, hooters & full alarm systems.' },
    { icon: '📷', title: 'CCTV & Automation', desc: 'Security cameras, smart home automation & complete surveillance solutions.' },
    { icon: '🚧', title: 'Road Safety', desc: 'Cones, studs, speed breakers, safety jackets, convex mirrors & barricade tapes.' },
    { icon: '🏷️', title: 'Safety Signs', desc: 'Exit signs, hydrant markers, extinguisher boards & all safety signage.' },
    { icon: '⚽', title: 'Fire Balls', desc: 'AFO fire balls, dry riser inlets, flexible joints & all system accessories.' }
  ];

  return (
    <section className="section bg-color" id="products">
      <div className="inner">
        <div className="reveal visible" style={{ textAlign: 'center' }}>
          <div className="s-tag">🛡️ Products</div>
          <h2 className="s-title">Safety <span className="gradient-text">Product Range</span></h2>
          <p className="s-sub" style={{ margin: '0 auto 56px' }}>Certified fire protection and safety products for every type of premises — supplied and installed by experts.</p>
        </div>

        <div className="cards-grid">
          {products.map((p, i) => (
            <div key={i} className="card product-card reveal visible" style={{ textAlign: 'center' }}>
              <span className="card-icon" style={{ fontSize: '3rem', marginBottom: '16px' }}>{p.icon}</span>
              <h3 style={{ marginBottom: '12px', fontWeight: '800' }}>{p.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: '1.7' }}>{p.desc}</p>
              <div 
                style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'var(--gradient-main)', transform: 'scaleX(0)', transition: 'transform 0.3s' }} 
                className="hover-line"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
