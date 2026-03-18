import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 25 }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      size: `${2 + Math.random() * 4}px`,
      color: ['#f5820d', '#e8251a', '#ffb347'][Math.floor(Math.random() * 3)]
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="particles-container" style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {particles.map((p, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{ 
              left: p.left, 
              animationDelay: p.delay, 
              width: p.size, 
              height: p.size, 
              background: p.color,
              position: 'absolute',
              bottom: '-20px',
              borderRadius: '50%',
              animation: 'rise 8s linear infinite'
            }}
          />
        ))}
      </div>

      <div className="inner">
        <div className="hero-inner">
          <div className="hero-left reveal visible">
            <div className="s-tag" style={{ display: 'flex', alignItems: 'center' }}>
              <div className="badge-dot"></div>
              MSME · GeM · Make In India · FSSAI
            </div>
            
            <h1 className="s-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)' }}>
              Gujarat's Most<br />
              <span className="gradient-text">Trusted Fire</span><br />
              Safety Partner
            </h1>
            
            <p className="s-sub" style={{ marginBottom: '32px' }}>
              Complete fire protection solutions for homes, industries & commercial spaces. 
              Installation, AMC, refilling, NOC consultancy & fire training — all under one roof.
            </p>

            <div className="flex gap-1" style={{ flexWrap: 'wrap', gap: '16px' }}>
              <a href="#contact" className="btn-fire">🔥 Free Consultation</a>
              <a href="https://wa.me/917383374584" className="btn-ghost">💬 WhatsApp Now</a>
            </div>

            <div className="hero-stats">
              <div className="hstat">
                <div className="hstat-num counter" data-target="500">500+</div>
                <div className="hstat-label">Projects</div>
              </div>
              <div className="hstat">
                <div className="hstat-num counter" data-target="100">100%</div>
                <div className="hstat-label">Compliant</div>
              </div>
              <div className="hstat">
                <div className="hstat-num">24/7</div>
                <div className="hstat-label">Support</div>
              </div>
              <div className="hstat">
                <div className="hstat-num">AMC</div>
                <div className="hstat-label">Available</div>
              </div>
            </div>
          </div>

          <div className="hero-visual reveal visible">
            <div className="shield-container">
              <div className="shield-ring ring1"></div>
              <div className="shield-ring ring2"></div>
              {/* Shield SVG */}
              <svg className="main-shield" viewBox="0 0 160 180" fill="none">
                <path d="M80 8L16 36v54c0 40 27 72 64 80 37-8 64-40 64-80V36L80 8z" fill="url(#sg1)" stroke="url(#sg2)" stroke-width="1.5"/>
                <path d="M80 40c0 0-12 24-12 44 0 9 4 18 12 20 8-2 12-11 12-20 0-20-12-44-12-44z" fill="url(#ff1)"/>
                <defs>
                  <linearGradient id="sg1" x1="80" y1="8" x2="80" y2="170" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#e8251a" stopOpacity="0.2"/>
                    <stop offset="100%" stopColor="#f5820d" stopOpacity="0.1"/>
                  </linearGradient>
                  <linearGradient id="sg2" x1="80" y1="8" x2="80" y2="170" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#f5820d"/>
                    <stop offset="100%" stopColor="#e8251a"/>
                  </linearGradient>
                  <linearGradient id="ff1" x1="80" y1="40" x2="80" y2="110">
                    <stop offset="0%" stopColor="#ffb347"/>
                    <stop offset="100%" stopColor="#f5820d"/>
                  </linearGradient>
                </defs>
              </svg>
              {/* Floating Tags */}
              <div className="floating-tag tag1 glass-card" style={{ position: 'absolute', top: '10%', right: '-10%', padding: '10px 18px', borderRadius: '12px', background: 'var(--dark2)', border: '1px solid var(--border)', fontSize: '0.8rem', fontWeight: '700', animation: 'float 4s ease-in-out infinite' }}>🛡️ NOC Consultancy</div>
              <div className="floating-tag tag2 glass-card" style={{ position: 'absolute', bottom: '15%', left: '-15%', padding: '10px 18px', borderRadius: '12px', background: 'var(--dark2)', border: '1px solid var(--border)', fontSize: '0.8rem', fontWeight: '700', animation: 'float 5s ease-in-out infinite' }}>🧯 Full Servicing</div>
              <div className="floating-tag tag3 glass-card" style={{ position: 'absolute', top: '50%', right: '-25%', padding: '10px 18px', borderRadius: '12px', background: 'var(--dark2)', border: '1px solid var(--border)', fontSize: '0.8rem', fontWeight: '700', animation: 'float 3.5s ease-in-out infinite' }}>✅ GeM Registered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
