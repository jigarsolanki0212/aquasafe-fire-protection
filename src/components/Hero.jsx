import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Zap, Activity, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef(null);
  
  // Lazy state initialization ensures this only runs once on the client
  const [particles] = useState(() => [...Array(20)].map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${5 + Math.random() * 5}s`,
    scale: 0.3 + Math.random() * 0.7,
    background: i % 2 === 0 ? 'var(--red)' : 'var(--orange)'
  })));

  useEffect(() => {
    if (titleRef.current) {
      const words = titleRef.current.innerText.split(' ');
      titleRef.current.innerHTML = words.map((word, i) => 
        `<span style="display:inline-block; opacity:0; transform:translateY(30px); transition:all 0.6s cubic-bezier(0.2,1,0.3,1) ${i * 0.1}s">${word}</span>`
      ).join(' ');
      
      setTimeout(() => {
        const spans = titleRef.current.querySelectorAll('span');
        spans.forEach(s => { s.style.opacity = '1'; s.style.transform = 'translateY(0)'; });
      }, 500);
    }

    // Counter Animation Logic
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const endAttr = target.getAttribute('data-target');
          if (!endAttr) return;
          const end = parseInt(endAttr);
          if (isNaN(end)) return;
          
          const duration = 2000;
          const startTime = performance.now();
          
          const updateCount = (timestamp) => {
            const progress = Math.min((timestamp - startTime) / duration, 1);
            target.innerText = Math.floor(progress * end);
            if (progress < 1) requestAnimationFrame(updateCount);
            else target.innerText = end + (target.getAttribute('data-suffix') || '');
          };
          requestAnimationFrame(updateCount);
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.5 });

    const counters = document.querySelectorAll('.counter');
    counters.forEach(c => observer.observe(c));

    return () => counters.forEach(c => observer.unobserve(c));
  }, []);

  return (
    <section className="hero">
      <div className="particles-container">
        {particles.map((p) => (
          <div 
            key={p.id} 
            className="particle" 
            style={{
              left: p.left,
              animationDelay: p.animationDelay,
              animationDuration: p.animationDuration,
              scale: p.scale,
              background: p.background
            }}
          ></div>
        ))}
      </div>

      <div className="container">
        <div className="grid-2">
          <div className="reveal visible" style={{ textAlign: 'left' }}>
            <div className="s-tag">
              <ShieldCheck size={16} /> Best Fire Safety Partner in Ahmedabad
            </div>
            <h1 
              ref={titleRef}
              className="s-title" 
            >
              Premium Fire Safety Services in Gujarat.
            </h1>
            <p className="s-sub">
              Gujarat’s leading fire safety company delivering end-to-end protection 
              for industrial, commercial, and residential spaces.
            </p>

            <div className="cert-tags reveal">
              <span className="cert-tag">Government Certified</span>
              <span className="cert-tag">GeM Listed</span>
              <span className="cert-tag">Professional</span>
            </div>
            
            <div className="hero-btns reveal">
              <a href="#contact" className="btn-fire">
                Consultation <ArrowRight size={18} />
              </a>
              <a href="https://wa.me/917383374584" className="btn-ghost">
                <MessageSquare size={18} /> Chat Now
              </a>
            </div>

            <div className="hero-stats reveal">
              <div className="stat-box">
                <div className="hstat-num counter" data-target="270" data-suffix="+">0</div>
                <div className="hstat-label">Projects</div>
              </div>
              <div className="stat-box">
                <div className="hstat-num counter" data-target="54" data-suffix="+">0</div>
                <div className="hstat-label">Compliance</div>
              </div>
              <div className="stat-box">
                <div className="hstat-num" style={{ color: 'var(--orange)' }}>24/7</div>
                <div className="hstat-label">Support</div>
              </div>
              <div className="stat-box">
                <div className="hstat-num">AMC</div>
                <div className="hstat-label">Expertise</div>
              </div>
            </div>
          </div>

          <div className="shield-parallax reveal visible">
            <div className="shield-orbital"></div>
            <div className="shield-orbital" style={{ width: '80%', height: '80%', animationDirection: 'reverse', opacity: '0.3' }}></div>
            
            <div style={{ position: 'relative', zIndex: 2 }}>
              <svg className="shield-main" viewBox="0 0 100 120" fill="none" style={{ width: '180px', filter: 'drop-shadow(0 20px 40px rgba(239, 68, 68, 0.3))' }}>
                <path d="M50 0L10 15V45C10 75 50 100 50 100C50 100 90 75 90 45V15L50 0Z" fill="url(#hero-shield-grad)" />
                <path d="M50 25L30 35V50C30 65 50 80 50 80C50 80 70 65 70 50V35L50 25Z" fill="rgba(255,255,255,0.1)" />
                <defs>
                  <linearGradient id="hero-shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--red)" />
                    <stop offset="100%" stopColor="var(--orange)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            <div className="floating-tag" style={{ top: '10%', right: '0%', animationDelay: '0s' }}>
              <Activity size={14} style={{ marginRight: '6px' }} /> NOC & Design
            </div>
            <div className="floating-tag" style={{ top: '50%', right: '-10%', animationDelay: '1.5s', color: '#22c55e', display: 'flex', alignItems: 'center' }}>
              GeM Listed <CheckCircle2 size={14} style={{ marginLeft: '6px' }} />
            </div>
            <div className="floating-tag" style={{ bottom: '10%', left: '-5%', animationDelay: '2.5s' }}>
              <Zap size={14} style={{ marginRight: '6px' }} /> Refilling
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;





