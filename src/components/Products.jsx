import React from 'react';

const Products = () => {
  const list = [
    { icon: '🧯', title: 'Fire Extinguishers', desc: 'ABC, CO2, Water & Foam. Complete refilling, pressure testing & servicing at your premises.' },
    { icon: '🚒', title: 'Hydrant Systems', desc: 'Single & double hydrant valves, hose reels, pipes, branch nozzles, house boxes & full setup.' },
    { icon: '🌧️', title: 'Sprinkler Systems', desc: 'GM Sprinklers, 2-way valves, water monitors, sprinkler nozzles & flexible fittings.' },
    { icon: '🔔', title: 'Alarm & Detection', desc: 'Smoke detectors, alarm panels, manual call points, hooters & full wireless systems.' },
    { icon: '📷', title: 'CCTV & Automation', desc: 'High-res security cameras, smart home automation & connected safety solutions.' },
    { icon: '🚧', title: 'Road Safety Products', desc: 'Cones, studs, speed breakers, safety jackets, convex mirrors & barricade tapes.' },
    { icon: '🏷️', title: 'Safety Signage', desc: 'Exit signs, hydrant markers, extinguisher location boards & custom compliance signs.' },
    { icon: '⚽', title: 'Fire Balls & More', desc: 'AFO fire balls, dry riser inlets, flexible joints & specialized equipment accessories.' }
  ];

  return (
    <section className="section" id="products">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <div className="s-tag">🧯 Safety Solutions</div>
          <h2 className="s-title">Modern <span className="gradient-text">Safety Arsenal</span></h2>
          <p className="s-sub" style={{ margin: '0 auto 60px' }}>
            We supply and install the world's most reliable fire safety equipment, 
            built to handle any emergency with zero failure.
          </p>
        </div>

        <div className="cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {list.map((p, i) => (
            <div key={i} className="deluxe-card reveal" style={{ textAlign: 'center', padding: '50px 30px' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '24px', display: 'block' }}>{p.icon}</div>
              <h3 style={{ marginBottom: '16px', fontSize: '1.25rem', fontWeight: '800', color: 'var(--text)' }}>{p.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.7' }}>{p.desc}</p>
              <div style={{ marginTop: '24px', display: 'flex', gap: '8px', justifyContent: 'center' }}>
                <span style={{ fontSize: '0.7rem', padding: '6px 14px', borderRadius: '50px', background: 'rgba(232,37,26,0.08)', color: 'var(--orange)', fontWeight: '800', border: '1px solid rgba(232,37,26,0.1)' }}>CERTIFIED</span>
                <span style={{ fontSize: '0.7rem', padding: '6px 14px', borderRadius: '50px', background: 'rgba(255,179,71,0.08)', color: 'var(--gold)', fontWeight: '800', border: '1px solid rgba(255,179,71,0.1)' }}>PREMIUM</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
