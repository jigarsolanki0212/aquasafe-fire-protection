import React from 'react';

const Industries = () => {
  const industries = [
    "🏭 Manufacturing", "🏢 Commercial Offices", "🏨 Hotels", "🏥 Hospitals", 
    "🏫 Schools", "⛽ Petrol Pumps", "🏗️ Construction", "🏠 Residential Societies", 
    "🏬 Malls", "🏛️ Government Buildings", "🚗 Automobile", "💊 Pharma & Chemicals"
  ];

  return (
    <section className="section bg-color">
      <div className="reveal">
        <h2 className="section-title">
          Who We <span className="gradient-text">Serve</span>
        </h2>
        <p className="section-subtitle">
          Pro-active fire safety for every sector. From retail to hazardous materials.
        </p>
      </div>

      <div className="chips-container stagger-container reveal">
        {industries.map((ind, i) => (
          <div key={i} className="chip">{ind}</div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
