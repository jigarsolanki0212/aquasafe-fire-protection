import React from 'react';

const Industries = () => {
  const industries = [
    "Industrial Factories", "Chemical Plants", "Textile Units", 
    "Pharma Units", "High-Rise Buildings", "Hotels & Resorts", 
    "Hospitals & Clinics", "Educational Institutes", "Residential Schemes"
  ];

  return (
    <section className="section" id="industries">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <div className="s-tag">🏢 Trusted Across Industries</div>
          <h2 className="s-title">Providing Safety for <br /><span className="gradient-text">Every Sector</span></h2>
        </div>

        <div className="flex flex-wrap gap-1 items-center justify-center" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '60px' }}>
          {industries.map((ind, i) => (
            <div key={i} className="deluxe-card reveal" style={{ padding: '16px 32px', borderRadius: '50px', background: 'var(--glass)', border: '1px solid var(--border)', fontSize: '0.95rem', fontWeight: '800', cursor: 'pointer', transition: 'all 0.4s' }}>
              🎯 {ind}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
