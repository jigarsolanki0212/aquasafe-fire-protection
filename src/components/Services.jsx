import React from 'react';

const Services = () => {
  const services = [
    { icon: '🔧', title: 'AMC – Fire Extinguishers', desc: 'Annual Maintenance Contracts with scheduled inspections, refilling, pressure testing & certification for all extinguisher types.' },
    { icon: '🚒', title: 'AMC – Hydrant & Sprinkler', desc: 'Comprehensive maintenance for fire hydrant and sprinkler systems — periodic checks, repairs & regulatory compliance.' },
    { icon: '📐', title: 'Fire Consultancy & NOC', desc: 'Expert fire system design, layout planning & end-to-end assistance with fire NOC from local authorities.' },
    { icon: '🎓', title: 'Fire Training & Demos', desc: 'Hands-on fire safety training and live extinguisher demonstrations. Evacuation drills for your team.' },
    { icon: '🔁', title: 'Refilling & Servicing', desc: 'On-site and in-house refilling of all fire extinguisher types. Fast turnaround with quality assurance.' },
    { icon: '🏠', title: 'Home Automation', desc: 'Smart security & automation systems integrated with fire alarms for complete, connected building safety.' }
  ];

  return (
    <section className="section bg-color" id="services">
      <div className="inner">
        <div className="reveal visible" style={{ textAlign: 'center' }}>
          <div className="s-tag">⚙️ Services</div>
          <h2 className="s-title">Safety <span className="gradient-text">Under One Roof</span></h2>
          <p className="s-sub" style={{ margin: '0 auto 56px' }}>From consultation and design to maintenance and training — we handle the full lifecycle of your fire safety systems.</p>
        </div>

        <div className="cards-grid">
          {services.map((s, i) => (
            <div key={i} className="card service-card reveal visible" style={{ padding: '36px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'var(--glass)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', marginBottom: '24px' }} className="svc-icon-wrap">
                {s.icon}
              </div>
              <h3 style={{ marginBottom: '12px', fontWeight: '800', lineHeight: '1.3' }}>{s.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: '1.75' }}>{s.desc}</p>
              <div 
                style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '4px', background: 'var(--gradient-main)', transform: 'scaleY(0)', transition: 'transform 0.3s', transformOrigin: 'bottom' }} 
                className="hover-bar"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
