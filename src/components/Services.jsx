import React from 'react';

const Services = () => {
  const serviceList = [
    { icon: '🔧', title: 'AMC – Fire Extinguishers', desc: 'Scheduled inspections, refilling, and certification at your doorstep.' },
    { icon: '🚒', title: 'AMC – Systems', desc: 'Hydrant & Sprinkler maintenance, repairs, and complete compliance.' },
    { icon: '📐', title: 'NOC & Consultancy', desc: 'Custom design, layout, and fire NOC acquisition from local authorities.' },
    { icon: '🎓', title: 'Fire Training', desc: 'Hands-on demonstrations and evacuation drills for staff and residents.' },
    { icon: '🔁', title: 'Refilling & Servicing', desc: 'Fast turnaround on-site or in-house refilling for all types of extinguishers.' },
    { icon: '🏠', title: 'Home Automation', desc: 'Complete smart security + fire alarm integration for modern living.' }
  ];

  return (
    <section className="section bg-color">
      <div className="reveal">
        <h2 className="section-title">
          Professional <span className="gradient-text">Safety Services</span>
        </h2>
        <p className="section-subtitle">
          We go beyond providing products. Our certified team provides end-to-end 
          maintenance, training, and consultancy for zero-risk safety management.
        </p>
      </div>

      <div className="card-grid stagger-container reveal">
        {serviceList.map((s, i) => (
          <div key={i} className="glass-card service-card" style={{ padding: '40px' }}>
            <div className="card-icon" style={{ fontSize: '3rem', marginBottom: '15px' }}>{s.icon}</div>
            <h3 style={{ marginBottom: '15px', color: 'var(--primary-orange)' }}>{s.title}</h3>
            <p style={{ color: 'var(--text-dim)', fontSize: '1rem', lineHeight: '1.7' }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
