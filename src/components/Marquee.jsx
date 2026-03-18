import React from 'react';

const Marquee = () => {
  const items = [
    { icon: '🏛️', text: "MSME Registered" },
    { icon: '🛒', text: "GeM Marketplace" },
    { icon: '🇮🇳', text: "Make In India" },
    { icon: '✅', text: "FSSAI Certified" },
    { icon: '🔥', text: "Fire NOC Consultancy" },
    { icon: '🏆', text: "500+ Projects" },
    { icon: '📍', text: "Based in Ahmedabad" },
    { icon: '📞', text: "24/7 Support" }
  ];

  return (
    <div className="trust-strip">
      <div className="trust-track">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="trust-item">
            <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
