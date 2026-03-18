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
    // Cursor glow handler
    const glow = document.getElementById('cursor-glow');
    const updateMousePos = (e) => {
      if (glow) {
        glow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    window.addEventListener('mousemove', updateMousePos);
    
    // Scroll reveal logic
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') });
    }, { threshold: 0.1 });
    
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => obs.observe(el));
    
    // Counter Animation
    const statsObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const counters = e.target.querySelectorAll('.counter');
          counters.forEach(c => {
            const targetStr = c.getAttribute('data-target');
            const target = parseInt(targetStr);
            let count = 0;
            const duration = 2000;
            const step = target / (duration / 20);
            const timer = setInterval(() => {
              count = Math.min(count + step, target);
              c.innerText = Math.floor(count) + (targetStr.includes('%') || c.innerText.includes('%') ? '%' : '+');
              if (count >= target) {
                c.innerText = targetStr + (targetStr.includes('%') ? '' : '+');
                clearInterval(timer);
              }
            }, 20);
          });
          statsObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) statsObs.observe(heroStats);

    return () => {
      window.removeEventListener('mousemove', updateMousePos);
      reveals.forEach(el => obs.unobserve(el));
      if (heroStats) statsObs.unobserve(heroStats);
    };
  }, []);

  return (
    <main style={{ position: 'relative' }}>
      <div id="cursor-glow"></div>
      <Navbar />
      <Hero />
      <Marquee />
      <div id="about">
        <About />
      </div>
      <div id="products">
        <Products />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="why">
        <WhyChoose />
      </div>
      <div id="industries">
        <Industries />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

export default App;
