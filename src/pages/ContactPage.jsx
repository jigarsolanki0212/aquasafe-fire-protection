import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Contact from '../components/Contact';

const ContactPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Contact />
    </div>
  );
};

export default ContactPage;
