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
    // 1. Optimized Cursor Glow
    const glow = document.getElementById('cursor-glow');
    const updateMousePos = (e) => {
      if (glow) {
        glow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    window.addEventListener('mousemove', updateMousePos);
    
    // 2. Advanced Intersection Observer
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { 
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
    
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    
    // 3. 3D Tilt & Magnetic Effect Engine
    const handleDynamicInteractions = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Update variables for CSS shine
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Magnetic pull logic (for buttons)
      if (card.classList.contains('btn-fire') || card.classList.contains('theme-toggle')) {
        const moveX = (x - centerX) * 0.4;
        const moveY = (y - centerY) * 0.4;
        card.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(1.05)`;
      } else {
        // Standard 3D Tilt
        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((centerX - x) / centerX) * 10;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
      }
    };
    
    const resetCard = (e) => {
      e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0) scale(1)`;
    };
    
    const targets = document.querySelectorAll('.deluxe-card, .stat-box, .btn-fire, .theme-toggle');
    targets.forEach(t => {
      t.addEventListener('mousemove', handleDynamicInteractions);
      t.addEventListener('mouseleave', resetCard);
    });

    // 4. Smooth Scroll Parallax
    const handleParallaxScroll = () => {
      const scrolled = window.scrollY;
      const backgrounds = document.querySelectorAll('.bg-aura');
      backgrounds.forEach(bg => {
        bg.style.transform = `translateY(${scrolled * 0.15}px)`;
      });
    };
    window.addEventListener('scroll', handleParallaxScroll);

    return () => {
      window.removeEventListener('mousemove', updateMousePos);
      window.removeEventListener('scroll', handleParallaxScroll);
      document.querySelectorAll('.reveal').forEach(el => obs.unobserve(el));
      targets.forEach(t => {
        t.removeEventListener('mousemove', handleDynamicInteractions);
        t.removeEventListener('mouseleave', resetCard);
      });
    };
  }, []);

  return (
    <div className="main-wrapper">
      <div id="cursor-glow"></div>
      <div className="bg-aura"></div>
      <Navbar />
      <Hero />
      <Marquee />
      <div id="about"><About /></div>
      <div id="products"><Products /></div>
      <div id="services"><Services /></div>
      <div id="why"><WhyChoose /></div>
      <div id="industries"><Industries /></div>
      <div id="contact"><Contact /></div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
