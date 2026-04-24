import React, { useMemo } from 'react';
import { Building2, FileText, Settings, GraduationCap, Package, Zap, CheckCircle2 } from 'lucide-react';

const About = () => {
  const highlights = useMemo(() => [
    { icon: <Building2 size={24} />, title: 'GeM Registered', sub: 'Govt. e-Marketplace' },
    { icon: <FileText size={24} />, title: 'NOC & Design', sub: 'Fire Consultancy' },
    { icon: <Settings size={24} />, title: 'AMC Services', sub: 'Annual Maintenance' },
    { icon: <GraduationCap size={24} />, title: 'Fire Training', sub: 'Demos & Drills' },
    { icon: <Package size={24} />, title: 'All Products', sub: 'Full Safety Range' },
    { icon: <Zap size={24} />, title: 'Fast Response', sub: 'Ahmedabad Based' }
  ], []);

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'flex-start' }}>
          <div className="reveal">
            <div className="s-tag">
              <CheckCircle2 size={16} /> Elite Safety Experts
            </div>
            <h2 className="s-title">Protecting Gujarat<br /><span className="gradient-text">Since Day One</span></h2>
            <p className="s-sub">
              AquaSafe Fire Protection is a certified, MSME-registered company based in Ahmedabad. 
              We provide total fire safety solutions — from system design and NOC to installation, refilling, and maintenance.
            </p>
            <div className="reg-tag">
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '8px', fontWeight: '700' }}>GSTIN / Registration</div>
                <div style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text)', letterSpacing: '1px' }}>24FOSPP5631F2ZK</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {highlights.map((h, i) => (
              <div key={i} className="deluxe-card reveal" style={{ padding: '24px', textAlign: 'left' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--gradient-fire)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: '#fff' }}>
                  {h.icon}
                </div>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text)', marginBottom: '4px' }}>{h.title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>{h.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

