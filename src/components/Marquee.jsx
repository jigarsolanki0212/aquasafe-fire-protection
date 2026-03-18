import React from 'react';

const Marquee = () => {
  const items = [
    "🇮🇳 MAKE IN INDIA", "✅ FSSAI CERTIFIED", "🏛️ FIRE NOC CONSULTANCY", 
    "🏆 500+ PROJECTS", "📍 BASED IN AHMEDABAD", "📞 24/7 SUPPORT",
    "🛡️ MSME REGISTERED", "🏷️ ISI CERTIFIED", "🏢 GOVT. SUPPLIER"
  ];

  return (
    <div className="trust-strip">
      <div className="trust-track">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="trust-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
