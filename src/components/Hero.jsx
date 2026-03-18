import React, { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [particles, setParticles] = useState([]);
  const shieldRef = useRef(null);

  useEffect(() => {
    // Generate fire particles
    const ps = Array.from({ length: 40 }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      size: `${Math.random() * 5 + 2}px`,
      duration: `${4 + Math.random() * 6}s`,
      opacity: 0.1 + Math.random() * 0.4
    }));
    setParticles(ps);

    // Parallax logic for shield
    const handleMouse = (e) => {
      if (shieldRef.current) {
        const x = (e.clientX - window.innerWidth / 2) / 25;
        const y = (e.clientY - window.innerHeight / 2) / 25;
        shieldRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="bg-aura"></div>
      <div className="particles-container" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {particles.map((p, i) => (
          <div key={i} style={{
            position: 'absolute',
            bottom: '-10px',
            left: p.left,
            width: p.size,
            height: p.size,
            background: 'var(--red)',
            borderRadius: '50%',
            opacity: p.opacity,
            filter: 'blur(1px)',
            animation: `rise ${p.duration} linear ${p.delay} infinite`
          }} />
        ))}
      </div>

      <div className="container">
        <div className="grid-2">
          <div className="hero-content reveal visible" style={{ textAlign: 'left' }}>
            <div className="s-tag"> ગુજરાતનું સૌથી વિશ્વસનીય ફાયર સર્વિસ પાર્ટનર 🛡️</div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: '1.05', marginBottom: '24px' }}>
              We Secure What <br />
              <span className="gradient-text">You've Built.</span> <br />
              With Precision.
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '40px' }}>
              Ahmedabad's leading fire safety company delivering end-to-end protection for 
              industrial, commercial, and residential spaces. Government certified. GeM listed. Unmatched quality.
            </p>
            
            <div className="flex gap-1" style={{ flexWrap: 'wrap', gap: '20px' }}>
              <a href="#contact" className="btn-fire">🔥 Request a Consultation</a>
              <a href="https://wa.me/917383374584" className="btn-ghost" target="_blank" rel="noreferrer">
                💬 WhatsApp Now
              </a>
            </div>

            <div className="hero-stats reveal visible">
              <div className="stat-box">
                <div className="hstat-num counter" data-target="500">500+</div>
                <div className="hstat-label">Projects Done</div>
              </div>
              <div className="stat-box">
                <div className="hstat-num counter" data-target="100">100%</div>
                <div className="hstat-label">Compliance</div>
              </div>
              <div className="stat-box">
                <div className="hstat-num">24/7</div>
                <div className="hstat-label">Expert Support</div>
              </div>
              <div className="stat-box">
                <div className="hstat-num">AMC</div>
                <div className="hstat-label">Professional</div>
              </div>
            </div>
          </div>

          <div className="hero-visual reveal visible" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="shield-parallax" ref={shieldRef}>
              <div className="shield-orbital"></div>
              <div className="shield-orbital" style={{ width: '80%', height: '80%', top: '10%', left: '10%', animationDirection: 'reverse', animationDuration: '20s' }}></div>
              <svg className="shield-main" viewBox="0 0 160 180" fill="none">
                <path d="M80 8L16 36v54c0 40 27 72 64 80 37-8 64-40 64-80V36L80 8z" fill="url(#sh1)" stroke="url(#sh2)" strokeWidth="2"/>
                <path d="M80 40c0 0-12 24-12 44 0 9 4 18 12 20 8-2 12-11 12-20 0-20-12-44-12-44z" fill="white" fillOpacity="0.1"/>
                <defs>
                  <linearGradient id="sh1" x1="80" y1="8" x2="80" y2="170" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#e8251a" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#f5820d" stopOpacity="0.9"/>
                  </linearGradient>
                  <linearGradient id="sh2" x1="80" y1="8" x2="80" y2="170" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ffb347"/>
                    <stop offset="100%" stopColor="#e8251a"/>
                  </linearGradient>
                </defs>
              </svg>
              {/* Floating tags with stagger */}
              <div className="chip" style={{ position: 'absolute', top: '5%', right: '-15%', animation: 'floating 5s ease-in-out infinite' }}>NOC & Design 📐</div>
              <div className="chip" style={{ position: 'absolute', bottom: '15%', left: '-15%', animation: 'floating 4s ease-in-out infinite' }}>Refilling Support 🔁</div>
              <div className="chip" style={{ position: 'absolute', top: '50%', right: '-30%', animation: 'floating 3s ease-in-out infinite' }}>GeM Listed ✅</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
