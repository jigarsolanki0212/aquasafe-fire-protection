import React from 'react';
import { PenTool, FileCheck, ShieldAlert, Wrench, GraduationCap, PhoneCall, ArrowRight, Cog } from 'lucide-react';

const Services = () => {
  const serviceList = [
    { icon: <PenTool size={28} />, title: 'Refilling & Servicing', desc: 'Expert refilling of all fire extinguishers with certified pressure testing and rapid turnaround.' },
    { icon: <FileCheck size={28} />, title: 'NOC & Documentation', desc: 'End-to-end guidance for fire safety NOC from local authorities with full compliance checks.' },
    { icon: <Cog size={28} />, title: 'AMC Maintenance', desc: 'Reliable Annual Maintenance Contracts (AMC) to ensure your safety systems are always mission-ready.' },
    { icon: <ShieldAlert size={28} />, title: 'System Installation', desc: 'Professional installation of hydrants, alarms, and sprinklers following strict safety norms.' },
    { icon: <GraduationCap size={28} />, title: 'Training & Drills', desc: 'Expert-led fire safety training, demonstrations, and emergency evacuation drills for staff.' },
    { icon: <PhoneCall size={28} />, title: 'Emergency Support', desc: '24/7 technical support and site visits to ensure continuous protection across Ahmedabad.' }
  ];

  return (
    <section className="section" id="services" style={{ background: 'var(--bg-accent)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
          <div className="s-tag">
            <Wrench size={16} /> Professional Safety Services
          </div>
          <h2 className="s-title">Dedicated to <span className="gradient-text">Absolute Protection</span></h2>
          <p className="s-sub" style={{ margin: '0 auto' }}>
            From consultancy to maintenance, we manage your fire safety lifecycle 
            with unmatched precision and local expertise.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {serviceList.map((s, i) => (
            <div key={i} className="deluxe-card reveal" style={{ padding: '40px', textAlign: 'left' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '18px', background: 'var(--gradient-fire)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px', boxShadow: '0 15px 30px -5px rgba(239, 68, 68, 0.4)', color: '#fff' }}>
                {s.icon}
              </div>
              <h3 style={{ marginBottom: '16px', fontSize: '1.25rem', fontWeight: '800', color: 'var(--text)' }}>{s.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '32px' }}>{s.desc}</p>
              <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
                <a href="#contact" style={{ color: 'var(--orange)', textDecoration: 'none', fontWeight: '800', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px', transition: 'var(--transition)' }}>
                  Explore Details <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

