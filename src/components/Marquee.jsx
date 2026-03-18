import React from 'react';

const Marquee = () => {
  const items = [
    "MSME Registered", 
    "GeM Marketplace", 
    "Make In India", 
    "FSSAI Certified", 
    "Fire NOC Consultancy", 
    "500+ Projects", 
    "Based in Ahmedabad", 
    "24/7 Support"
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="marquee-item">
            <span className="marquee-dot">•</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
