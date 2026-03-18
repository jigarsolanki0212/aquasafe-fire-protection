import React from 'react';

const WhyChoose = () => {
  const reasons = [
    { title: '✅ Government Certified', desc: 'MSME registered and listed on GeM marketplace — eligible for all government procurement.' },
    { title: '⚡ Quick On-Site Response', desc: 'Ahmedabad-based team ensures fast arrival for emergencies, servicing & refilling.' },
    { title: '🔒 Fully Compliant', desc: 'All products and installations meet Indian fire safety standards and local NOC requirements.' },
    { title: '💰 Transparent Pricing', desc: 'Competitive, honest pricing with no hidden costs. Best value for quality fire safety solutions.' }
  ];

  return (
    <section className="section bg-color" id="why">
      <div className="inner">
        <div className="reveal visible" style={{ textAlign: 'center' }}>
          <div className="s-tag">💡 Why Choose Us</div>
          <h2 className="s-title">The <span className="gradient-text">Aqua Safe</span> Advantage</h2>
          <p className="s-sub" style={{ margin: '0 auto 56px' }}>Trusted by homes, businesses and industries across Ahmedabad and Gujarat.</p>
        </div>

        <div className="cards-grid">
          {reasons.map((r, i) => (
            <div key={i} className="card why-card reveal visible" style={{ textAlign: 'center', padding: '40px' }}>
              <span style={{ fontSize: '3rem', marginBottom: '20px', display: 'block' }}>{r.title.split(' ')[0]}</span>
              <h3 style={{ marginBottom: '12px', fontWeight: '800' }}>{r.title.split(' ').slice(1).join(' ')}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: '1.7' }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
