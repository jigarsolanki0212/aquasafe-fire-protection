import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GlobalEffects = () => {
  const location = useLocation();

  useEffect(() => {
    // 1. Optimized Cursor Glow
    const glow = document.getElementById('cursor-glow');
    const updateMousePos = (e) => {
      if (glow) {
        glow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    window.addEventListener('mousemove', updateMousePos);

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
    };
  }, []);

  // Make sure we scroll to top on route change or hash change (if not hash)
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
};

export default GlobalEffects;
