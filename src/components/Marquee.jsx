import React from 'react';
import { CheckCircle2, MapPin, Phone, Shield, Building, Award, Star } from 'lucide-react';

const Marquee = () => {
  const items = [
    { icon: <CheckCircle2 size={16} />, text: "MAKE IN INDIA" },
    { icon: <Shield size={16} />, text: "FIRE NOC EXPERTS" },
    { icon: <Award size={16} />, text: "ISI CERTIFIED" },
    { icon: <MapPin size={16} />, text: "AHMEDABAD BASED" },
    { icon: <Phone size={16} />, text: "24/7 SUPPORT" },
    { icon: <Building size={16} />, text: "GOVT. SUPPLIER" },
    { icon: <Star size={16} />, text: "500+ PROJECTS" }
  ];

  return (
    <div className="trust-strip">
      <div className="trust-track">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="trust-item">
            <span className="trust-icon">{item.icon}</span>
            <span className="trust-text">{item.text}</span>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        .trust-strip {
          background: var(--bg-accent);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 24px 0;
          overflow: hidden;
          position: relative;
          z-index: 10;
        }
        .trust-track {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .trust-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-right: 48px;
          white-space: nowrap;
          color: var(--text-muted);
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.05em;
          transition: var(--transition);
        }
        .trust-item:hover {
          color: var(--orange);
        }
        .trust-icon {
          color: var(--orange);
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
};

export default Marquee;

