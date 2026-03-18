import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      const words = titleRef.current.innerText.split(' ');
      titleRef.current.innerHTML = words.map((word, i) => 
        `<span style="display:inline-block; opacity:0; transform:translateY(30px); transition:all 0.6s cubic-bezier(0.2,1,0.3,1) ${i * 0.1}s">${word}&nbsp;</span>`
      ).join('');
      
      setTimeout(() => {
        const spans = titleRef.current.querySelectorAll('span');
        spans.forEach(s => { s.style.opacity = '1'; s.style.transform = 'translateY(0)'; });
      }, 500);
    }
  }, []);

  return (
    <section className="hero">
      <div className="particles-container">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
              scale: `${0.3 + Math.random() * 0.7}`,
              background: i % 2 === 0 ? 'var(--red)' : 'var(--orange)'
            }}
          ></div>
        ))}
      </div>

      <div className="container">
        <div className="grid-2">
          <div className="reveal visible" style={{ textAlign: 'left' }}>
            <div className="s-tag">🛡️ ગુજરાતનું સૌ પ્રથમ શાયર સર્વિસ પાર્ટનર 🔥</div>
            <h1 
              ref={titleRef}
              className="s-title" 
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.1', marginBottom: '24px' }}
            >
              We Secure What You've Built. With Precision.
            </h1>
            <p className="s-sub" style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '50px' }}>
              Ahmedabad’s leading fire safety company delivering end-to-end protection 
              for industrial, commercial, and residential spaces. 
              <span style={{ display: 'block', marginTop: '12px', fontWeight: '800', color: 'var(--red)' }}>Government Certified. GeM Listed. Professional.</span>
            </p>
            
            <div className="flex gap-1 items-center" style={{ flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-fire">
                📑 Request a Consultation <span>→</span>
              </a>
              <a href="https://wa.me/917383374584" className="btn-ghost" style={{ marginLeft: '15px' }}>
                💬 Chat Now
              </a>
            </div>

            <div className="hero-stats reveal">
              <div className="stat-box" style={{ flex: 1 }}>
                <div className="hstat-num counter" data-target="270">0</div>
                <div className="hstat-label">Projects</div>
              </div>
              <div className="stat-box" style={{ flex: 1 }}>
                <div className="hstat-num counter" data-target="54">0</div>
                <div className="hstat-label">Compliance</div>
              </div>
              <div className="stat-box" style={{ flex: 1 }}>
                <div className="hstat-num counter" data-target="24/7">24/7</div>
                <div className="hstat-label">Support</div>
              </div>
              <div className="stat-box" style={{ flex: 1 }}>
                <div className="hstat-num counter" data-target="AMC">AMC</div>
                <div className="hstat-label">Expertise</div>
              </div>
            </div>
          </div>

          <div className="shield-parallax reveal visible" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="shield-orbital"></div>
            <div className="shield-orbital" style={{ width: '80%', height: '80%', animationDirection: 'reverse', opacity: '0.4' }}></div>
            <svg className="shield-main" viewBox="0 0 100 120" fill="none" style={{ width: '220px' }}>
              <path d="M50 0L10 15V45C10 75 50 100 50 100C50 100 90 75 90 45V15L50 0Z" fill="url(#hero-shield-grad)" />
              <circle cx="50" cy="50" r="15" fill="rgba(255,255,255,0.1)" />
              <defs>
                <linearGradient id="hero-shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--red)" />
                  <stop offset="100%" stopColor="var(--orange)" />
                </linearGradient>
              </defs>
            </svg>
            
            <div className="floating-tag" style={{ top: '15%', right: '5%', animationDelay: '0s' }}>NOC & Design 🏛️</div>
            <div className="floating-tag" style={{ top: '45%', right: '-15%', animationDelay: '1.5s', color: '#25d366' }}>GeM Listed ✅</div>
            <div className="floating-tag" style={{ bottom: '15%', left: '-10%', animationDelay: '2.5s' }}>Refilling ✨</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
