import React from 'react';

const Services = () => {
  const serviceList = [
    { icon: '🔧', title: 'AMC – Fire Extinguishers', desc: 'Annual Maintenance Contracts with scheduled inspections, refilling, pressure testing & doorstep certification.' },
    { icon: '🚒', title: 'AMC – Hydrant & Sprinkler', desc: 'Comprehensive maintenance for fire hydrant and sprinkler systems — periodic checks, repairs & regulatory compliance.' },
    { icon: '📐', title: 'Fire Consultancy & NOC', desc: 'Expert fire system design, layout planning & end-to-end assistance with fire NOC from local authorities.' },
    { icon: '🎓', title: 'Fire Training & Demos', desc: 'Hands-on fire safety training and live extinguisher demonstrations. Evacuation drills for your team.' },
    { icon: '🔁', title: 'Refilling & Servicing', desc: 'On-site and in-house refilling of all fire extinguisher types. Fast turnaround with quality assurance.' },
    { icon: '🏠', title: 'Home Automation', desc: 'Smart security & automation systems integrated with fire alarms for complete, connected building safety.' }
  ];

  return (
    <section className="section" id="services">
      <div className="container" style={{ position: 'relative', z-index: 2 }}>
        <div className="reveal visible" style={{ textAlign: 'center' }}>
          <div className="s-tag">⚙️ Professional Services</div>
          <h2 className="s-title">Elite <span className="gradient-text">Safety Services</span></h2>
          <p className="s-sub" style={{ margin: '0 auto 60px' }}>From consultation to emergency response — we provide end-to-end fire safety expertise.</p>
        </div>

        <div className="cards-grid">
          {serviceList.map((s, i) => (
            <div key={i} className="deluxe-card reveal visible" style={{ textAlign: 'left', padding: '50px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '18px', background: 'var(--gradient-fire)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '32px', boxShadow: '0 10px 30px rgba(232, 37, 26, 0.4)' }} className="svc-icon-wrap">
                {s.icon}
              </div>
              <h3 style={{ marginBottom: '20px', fontSize: '1.4rem', fontWeight: '800', lineHeight: '1.2' }}>{s.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>{s.desc}</p>
              <div 
                style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: 'var(--gradient-fire)', transform: 'scaleX(0)', transition: 'transform 0.3s' }} 
                className="hover-line"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
