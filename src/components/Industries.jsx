import React from 'react';

const Industries = () => {
  const industries = [
    "🏭 Manufacturing", "🏢 Offices", "🏨 Hotels", "🏥 Hospitals", 
    "🏫 Schools", "⛽ Petrol Pumps", "🏗️ Construction", "🏠 Societies", 
    "🏬 Malls", "🏛️ Government Buildings", "🚗 Automobile", "💊 Pharma"
  ];

  return (
    <section className="section bg-color" id="industries">
      <div className="inner">
        <div className="reveal visible" style={{ textAlign: 'left' }}>
          <div className="s-tag">🏭 Industries Served</div>
          <h2 className="s-title">Sectors <span className="gradient-text">We Protect</span></h2>
          <p className="s-sub" style={{ marginBottom: '40px' }}>Providing fire safety compliance and solutions across Gujarat's diverse industries.</p>
        </div>

        <div className="flex" style={{ flexWrap: 'wrap', gap: '16px', justifyContent: 'flex-start' }}>
          {industries.map((ind, i) => (
            <div 
              key={i} 
              className="chip reveal visible" 
              style={{ padding: '12px 24px', borderRadius: '50px', background: 'var(--glass)', border: '1px solid var(--border)', fontSize: '0.9rem', fontWeight: '500', color: 'var(--muted)', cursor: 'default', transition: 'all 0.3s' }}
              onMouseEnter={(e) => { e.target.style.background = 'rgba(232, 37, 26, 0.08)'; e.target.style.borderColor = 'rgba(232, 37, 26, 0.35)'; e.target.style.color = '#fff'; e.target.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={(e) => { e.target.style.background = 'var(--glass)'; e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--muted)'; e.target.style.transform = 'translateY(0)'; }}
            >
              {ind}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
