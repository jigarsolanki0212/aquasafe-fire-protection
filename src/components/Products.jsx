import React from 'react';
import { Shield, Droplets, Bell, Camera, Construction, Map, Disc, PackageSearch, CheckCircle2 } from 'lucide-react';

const Products = () => {
  const list = [
    { icon: <Shield size={32} />, title: 'Fire Extinguishers', desc: 'ABC, CO2, Water & Foam. Complete refilling, pressure testing & servicing at your premises.' },
    { icon: <Droplets size={32} />, title: 'Hydrant Systems', desc: 'Single & double hydrant valves, hose reels, pipes, branch nozzles, house boxes & full setup.' },
    { icon: <Disc size={32} />, title: 'Sprinkler Systems', desc: 'GM Sprinklers, 2-way valves, water monitors, sprinkler nozzles & flexible fittings.' },
    { icon: <Bell size={32} />, title: 'Alarm & Detection', desc: 'Smoke detectors, alarm panels, manual call points, hooters & full wireless systems.' },
    { icon: <Camera size={32} />, title: 'CCTV & Automation', desc: 'High-res security cameras, smart home automation & connected safety solutions.' },
    { icon: <Construction size={32} />, title: 'Road Safety Products', desc: 'Cones, studs, speed breakers, safety jackets, convex mirrors & barricade tapes.' },
    { icon: <Map size={32} />, title: 'Safety Signage', desc: 'Exit signs, hydrant markers, extinguisher location boards & custom compliance signs.' },
    { icon: <Droplets size={32} />, title: 'Fire Balls & More', desc: 'AFO fire balls, dry riser inlets, flexible joints & specialized equipment accessories.' }
  ];

  return (
    <section className="section" id="products">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
          <div className="s-tag">
            <PackageSearch size={16} /> Premium Safety Arsenal
          </div>
          <h2 className="s-title">Modern <span className="gradient-text">Safety Equipment</span></h2>
          <p className="s-sub" style={{ margin: '0 auto' }}>
            We supply and install reliable fire safety equipment, 
            built to handle any emergency with zero failure rates.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {list.map((p, i) => (
            <div key={i} className="deluxe-card reveal" style={{ textAlign: 'center', padding: '40px 30px' }}>
              <div style={{ margin: '0 auto 24px', width: '64px', height: '64px', borderRadius: '50%', background: 'var(--glass)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--orange)' }}>
                {p.icon}
              </div>
              <h3 style={{ marginBottom: '16px', fontSize: '1.2rem', fontWeight: '800', color: 'var(--text)' }}>{p.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '24px' }}>{p.desc}</p>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                <span style={{ fontSize: '0.65rem', padding: '6px 12px', borderRadius: '50px', background: 'rgba(239, 68, 68, 0.1)', color: 'var(--red)', fontWeight: '800', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                  <CheckCircle2 size={10} style={{ marginRight: '4px', verticalAlign: 'middle' }} /> CERTIFIED
                </span>
                <span style={{ fontSize: '0.65rem', padding: '6px 12px', borderRadius: '50px', background: 'rgba(249, 115, 22, 0.1)', color: 'var(--orange)', fontWeight: '800', border: '1px solid rgba(249, 115, 22, 0.2)' }}>PREMIUM</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

