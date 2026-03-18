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
    const updateMousePos = (e) => {
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', updateMousePos);
    
    // Scroll reveal logic
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-show');
        }
      });
    }, { threshold: 0.1 });
    
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));
    
    return () => {
      window.removeEventListener('mousemove', updateMousePos);
      reveals.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <main>
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
      <div id="why-choose">
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
