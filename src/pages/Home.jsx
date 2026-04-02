import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import ProductsPreview from '../components/Products';
import ServicesPreview from '../components/Services';
import WhyChoose from '../components/WhyChoose';
import Industries from '../components/Industries';
import Contact from '../components/Contact';
import WhatsAppButton from '../components/WhatsAppButton';

const Home = () => {
  useEffect(() => {
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
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      if (card.classList.contains('btn-fire') || card.classList.contains('theme-toggle')) {
        const moveX = (x - centerX) * 0.4;
        const moveY = (y - centerY) * 0.4;
        card.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(1.05)`;
      } else {
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

    return () => {
      document.querySelectorAll('.reveal').forEach(el => obs.unobserve(el));
      targets.forEach(t => {
        t.removeEventListener('mousemove', handleDynamicInteractions);
        t.removeEventListener('mouseleave', resetCard);
      });
    };
  }, []);

  return (
    <>
      <Hero />
      <Marquee />
      <div id="about"><About /></div>
      <div id="products"><ProductsPreview /></div>
      <div id="services"><ServicesPreview /></div>
      <div id="why"><WhyChoose /></div>
      <div id="industries"><Industries /></div>
      <div id="contact"><Contact /></div>
      <WhatsAppButton />
    </>
  );
};

export default Home;
