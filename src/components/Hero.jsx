import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 4}s`,
      size: `${2 + Math.random() * 4}px`
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="hero section">
      <div id="particles">
        {particles.map(p => (
          <div 
            key={p.id} 
            className="fire-particle" 
            style={{ 
              left: p.left, 
              animationDelay: p.delay, 
              animationDuration: p.duration,
              width: p.size,
              height: p.size
            }}
          />
        ))}
      </div>

      <div className="hero-content reveal-left reveal-show">
        <div className="hero-badge">
          <div className="pulse-dot"></div>
          MSME · GeM · Make In India · FSSAI
        </div>
        
        <h1 className="hero-title">
          Gujarat's Most Trusted <br />
          <span className="gradient-text">Fire Safety Partner</span>
        </h1>
        
        <p className="hero-subtext">
          Complete fire protection solutions for homes, industries & commercial spaces. 
          Installation, AMC, refilling, NOC consultancy & fire training — all under one roof.
        </p>

        <div className="flex gap-1" style={{ flexWrap: 'wrap' }}>
          <a href="#contact" className="btn-primary">
            🔥 Free Consultation
          </a>
          <a href="https://wa.me/917383374584" className="btn-ghost">
            💬 WhatsApp Now
          </a>
        </div>

        <div className="hero-stats stagger-container reveal reveal-show">
          <div className="stat-item">
            <h3 className="counter" data-target="500">500+</h3>
            <p>Projects</p>
          </div>
          <div className="stat-item border-l">
            <h3 className="counter" data-target="100">100%</h3>
            <p>Compliant</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Support</p>
          </div>
          <div className="stat-item">
            <h3>AMC</h3>
            <p>Available</p>
          </div>
        </div>
      </div>

      <div className="hero-visual reveal-right reveal-show">
        <div className="shield-container">
          <div className="orbital-ring"></div>
          <div className="orbital-ring"></div>
          
          <div className="main-shield">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L3 7V12C3 17.41 6.84 21.09 12 22C17.16 21.09 21 17.41 21 12V7L12 2Z" fill="url(#shield-grad)" />
              <path d="M12 4.4L5 8.2V12C5 16.2 8 19.3 12 20.3C16 19.3 19 16.2 19 12V8.2L12 4.4Z" fill="rgba(255,255,255,0.1)" />
              <path d="M12 2C12 2 4 8 4 14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14C20 8 12 2 12 2Z" fill="url(#flame-grad-center)" transform="scale(0.3) translate(28, 28)"/>
              <defs>
                <linearGradient id="shield-grad" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#e8251a" />
                  <stop offset="1" stopColor="#f5820d" />
                </linearGradient>
                <linearGradient id="flame-grad-center" x1="12" y1="2" x2="12" y2="22">
                  <stop stopColor="#ffb347" />
                  <stop offset="1" stopColor="#e8251a" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="floating-tag tag-1 glass-card">NOC Consultancy</div>
          <div className="floating-tag tag-2 glass-card">GeM Registered</div>
          <div className="floating-tag tag-3 glass-card">All Extinguisher Types</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
