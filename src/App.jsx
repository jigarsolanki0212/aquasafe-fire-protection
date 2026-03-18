import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  useEffect(() => {
    // Optimized Cursor Glow
    const glow = document.getElementById('cursor-glow');
    const updateMousePos = (e) => {
      if (glow) {
        glow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    window.addEventListener('mousemove', updateMousePos);
    
    // Intersection Observer for all reveal elements
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { 
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
    
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    
    // Counter Animation Logic
    const statsObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.counter').forEach(c => {
            const targetStr = c.getAttribute('data-target');
            const target = parseInt(targetStr);
            if (isNaN(target)) return;
            
            let count = 0;
            const duration = 2000;
            const step = (time) => {
              if (!startTime) startTime = time;
              const progress = Math.min((time - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 4); // EaseOutQuart
              c.innerText = Math.floor(eased * target) + (targetStr.includes('+') ? '+' : '');
              if (progress < 1) requestAnimationFrame(step);
            };
            let startTime = null;
            requestAnimationFrame(step);
          });
          statsObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) statsObs.observe(heroStats);

    // 3D Tilt & Magnetic Shine Effect
    const handleCardMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Update variables for CSS shine
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((centerX - x) / centerX) * 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02) translateY(-10px)`;
    };
    
    const resetCard = (e) => {
      e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateY(0)`;
    };
    
    const cards = document.querySelectorAll('.deluxe-card, .stat-box, .btn-fire');
    cards.forEach(card => {
      card.addEventListener('mousemove', handleCardMove);
      card.addEventListener('mouseleave', resetCard);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePos);
      document.querySelectorAll('.reveal').forEach(el => obs.unobserve(el));
      if (heroStats) statsObs.unobserve(heroStats);
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleCardMove);
        card.removeEventListener('mouseleave', resetCard);
      });
    };
  }, []);

  return (
    <div className="main-wrapper">
      <div id="cursor-glow"></div>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Products />
      <Services />
      <WhyChoose />
      <Industries />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
