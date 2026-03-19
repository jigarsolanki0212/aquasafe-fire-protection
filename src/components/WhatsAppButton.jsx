import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/917383374584" 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={32} />
      
      <style jsx>{`
        .whatsapp-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 64px;
          height: 64px;
          background: #25d366;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 15px 30px -5px rgba(37, 211, 102, 0.4);
          z-index: 10000;
          transition: var(--transition);
          text-decoration: none;
          animation: bounce 2s infinite alternate;
        }

        .whatsapp-btn:hover {
          transform: translateY(-8px) scale(1.1);
          box-shadow: 0 20px 40px -10px rgba(37, 211, 102, 0.6);
        }

        @keyframes bounce {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-5px) rotate(5deg); }
        }

        @media (max-width: 768px) {
          bottom: 20px;
          right: 20px;
          width: 56px;
          height: 56px;
        }
      `}</style>
    </a>
  );
};

export default WhatsAppButton;

