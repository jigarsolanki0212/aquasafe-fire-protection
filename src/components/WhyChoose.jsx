import React from 'react';

const WhyChoose = () => {
  const reasons = [
    { title: '✅ Government Certified', desc: 'MSME, GeM & FSSAI Registered — your safety is in expert hands.' },
    { title: '⚡ Quick Response', desc: 'Emergency response and on-site servicing with minimal downtime.' },
    { title: '🔒 Fully Compliant', desc: 'All equipment and services adhere strictly to national safety norms.' },
    { title: '💰 Transparent Pricing', desc: 'Honest pricing with no hidden costs and 24/7 AMC support.' }
  ];

  return (
    <section className="section bg-color">
      <div className="reveal">
        <h2 className="section-title">
          Why <span className="gradient-text">Choose Us</span>?
        </h2>
        <p className="section-subtitle">
          We prioritize your safety with certified processes, rapid execution, 
          and unmatched expertise in Ahmedabad.
        </p>
      </div>

      <div className="grid stagger-container reveal" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }}>
        {reasons.map((r, i) => (
          <div key={i} className="glass-card" style={{ padding: '40px', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '15px', color: 'var(--primary-gold)' }}>{r.title}</h3>
            <p style={{ color: 'var(--text-dim)', fontSize: '1rem' }}>{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
