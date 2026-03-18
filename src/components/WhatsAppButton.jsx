import React from 'react';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/917383374584" 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-btn"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '64px',
        height: '64px',
        background: '#25d366',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.8rem',
        boxShadow: '0 20px 40px -10px rgba(37, 211, 102, 0.6)',
        zIndex: 10000,
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        textDecoration: 'none'
      }}
    >
      <span style={{ animation: 'bounce 2s infinite alternate' }}>💬</span>
      <style>{`
        @keyframes bounce { 0% { transform: scale(1) rotate(0deg); } 100% { transform: scale(1.1) rotate(10deg); } }
        .whatsapp-btn:hover { transform: translateY(-10px) scale(1.1); boxShadow: 0 30px 60px -15px rgba(37, 211, 102, 0.9); }
      `}</style>
    </a>
  );
};

export default WhatsAppButton;
