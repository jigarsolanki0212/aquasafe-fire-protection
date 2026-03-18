import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="bg-aura"></div>
      
      {/* Animated Fire Particles Layer */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
              scale: `${0.2 + Math.random() * 0.8}`
            }}
          ></div>
        ))}
      </div>

      <div className="container">
        <div className="grid-2">
          <div className="reveal visible" style={{ textAlign: 'left' }}>
            <div className="s-tag">🛡️ ગુજરાતનું સૌ પ્રથમ શાયર સર્વિસ પાર્ટનર 🔥</div>
            <h1 className="s-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1.2', marginBottom: '24px' }}>
              We Secure What <br />
              <span className="gradient-text">You've Built.</span> <br />
              With <span style={{ color: 'var(--red)' }}>Precision.</span>
            </h1>
            <p className="s-sub" style={{ fontSize: '1.1rem', maxWidth: '550px', marginBottom: '40px', color: 'var(--text-muted)' }}>
              Ahmedabad’s leading fire safety company delivering end-to-end protection 
              for industrial, commercial, and residential spaces. 
              <span style={{ display: 'block', marginTop: '10px', color: '#fff', fontWeight: '600' }}>Government certified. GeM listed. Unmatched quality.</span>
            </p>
            
            <div className="flex gap-1 items-center" style={{ flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-fire">
                📑 Request a Consultation
                <span style={{ fontSize: '1.2rem' }}>→</span>
              </a>
              <a href="https://wa.me/917383374584" className="btn-ghost" style={{ marginLeft: '12px' }}>
                💬 WhatsApp Now
              </a>
            </div>

            {/* Deluxe Stats Wrap */}
            <div className="hero-stats reveal">
              <div className="stat-box">
                <div className="hstat-num counter" data-target="270">0</div>
                <div className="hstat-label">Projects Done</div>
              </div>
              <div className="stat-box">
                <div className="hstat-num counter" data-target="54">0</div>
                <div className="hstat-label">Compliance</div>
              </div>
              <div className="stat-box">
                <div className="hstat-num counter" data-target="24/7">24/7</div>
                <div className="hstat-label">Expert Support</div>
              </div>
              <div className="stat-box">
                <div className="hstat-num counter" data-target="AMC">AMC</div>
                <div className="hstat-label">Professional</div>
              </div>
            </div>
          </div>

          <div className="shield-parallax reveal visible" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="shield-orbital"></div>
            <div className="shield-orbital" style={{ width: '85%', height: '85%', animationDirection: 'reverse', opacity: '0.4' }}></div>
            <svg className="shield-main" viewBox="0 0 100 120" fill="none">
              <path d="M50 0L10 15V45C10 75 50 100 50 100C50 100 90 75 90 45V15L50 0Z" fill="url(#hero-grad)" />
              <path d="M50 20V80" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
              <circle cx="50" cy="50" r="15" fill="rgba(255,255,255,0.1)" />
              <defs>
                <linearGradient id="hero-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--red)" />
                  <stop offset="100%" stopColor="var(--orange)" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Floating Tags */}
            <div className="floating-tag" style={{ top: '10%', right: '5%', animationDelay: '0s' }}>NOC & Design 📐</div>
            <div className="floating-tag" style={{ top: '40%', right: '-15%', animationDelay: '1s', background: 'rgba(37,211,102,0.1)', borderColor: 'rgba(37,211,102,0.3)', color: '#25d366' }}>GeM Listed ✅</div>
            <div className="floating-tag" style={{ bottom: '10%', left: '-10%', animationDelay: '2s' }}>Refilling Support 📨</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
