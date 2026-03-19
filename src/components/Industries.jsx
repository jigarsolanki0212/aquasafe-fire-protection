import React from 'react';
import { Target, Factory, Building2, FlaskConical, Hospital, GraduationCap, School, Hotel, Home } from 'lucide-react';

const Industries = () => {
  const industries = [
    { icon: <Factory size={16} />, name: "Industrial Factories" },
    { icon: <FlaskConical size={16} />, name: "Chemical Plants" },
    { icon: <Building2 size={16} />, name: "Textile Units" },
    { icon: <Building2 size={16} />, name: "Pharma Units" },
    { icon: <Building2 size={16} />, name: "High-Rise Buildings" },
    { icon: <Hotel size={16} />, name: "Hotels & Resorts" },
    { icon: <Hospital size={16} />, name: "Hospitals & Clinics" },
    { icon: <School size={16} />, name: "Educational Institutes" },
    { icon: <Home size={16} />, name: "Residential Schemes" }
  ];

  return (
    <section className="section" id="industries">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <div className="s-tag">
            <Building2 size={16} /> Trusted Across Industries
          </div>
          <h2 className="s-title">Providing Safety for <br /><span className="gradient-text">Every Sector</span></h2>
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '60px' }}>
          {industries.map((ind, i) => (
            <div key={i} className="reveal" style={{ padding: '12px 24px', borderRadius: '100px', background: 'var(--glass)', border: '1px solid var(--glass-border)', fontSize: '0.9rem', fontWeight: '700', cursor: 'default', transition: 'var(--transition)', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)' }}>
              <span style={{ color: 'var(--red)' }}>{ind.icon}</span>
              {ind.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;

