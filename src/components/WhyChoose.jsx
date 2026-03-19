import React from 'react';
import { Trophy, ShieldCheck, Building2, Heart, Award, Star } from 'lucide-react';

const WhyChoose = () => {
  const reasons = [
    { icon: <Star size={32} />, title: 'Quality Assurance', desc: 'Rigorous 15-point check for all refilling & high-grade ISI marked safety products.' },
    { icon: <Building2 size={32} />, title: 'Vast Experience', desc: 'Proudly serving Ahmedabad’s top factories, hospitals, and residential schemes since years.' },
    { icon: <ShieldCheck size={32} />, title: 'MSME Registered', desc: 'Trusted government-recognized fire safety vendor with full GST and UIN compliance.' },
    { icon: <Heart size={32} />, title: 'Client Focused', desc: 'Personalized AMC plans and rapid response to all emergencies in the Gujarat region.' }
  ];

  return (
    <section className="section" id="why" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
          <div className="s-tag">
            <Trophy size={16} /> Why Choose Us?
          </div>
          <h2 className="s-title">The Most Trusted <br /><span className="gradient-text">Safety Partner</span></h2>
          <p className="s-sub" style={{ margin: '0 auto' }}>
            We bring years of expertise and government-recognized quality to every 
            project we handle in Ahmedabad and beyond.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {reasons.map((r, i) => (
            <div key={i} className="deluxe-card reveal" style={{ textAlign: 'center', padding: '40px 30px' }}>
              <div style={{ margin: '0 auto 24px', width: '64px', height: '64px', borderRadius: '18px', background: 'var(--gradient-fire)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 15px 30px -5px rgba(239, 68, 68, 0.4)' }}>
                {r.icon}
              </div>
              <h3 style={{ marginBottom: '16px', fontSize: '1.25rem', fontWeight: '800', color: 'var(--text)' }}>{r.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7' }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

