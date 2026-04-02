import React, { useRef } from 'react';
import { Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { servicesData } from '../constants/data';

const cardVariants = {
  hidden:  { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.09, duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  })
};

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section" id="services" style={{ background: 'var(--bg-accent)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}
        >
          <div className="s-tag">
            <Wrench size={16} /> Professional Safety Services
          </div>
          <h2 className="s-title">Dedicated to <span className="gradient-text">Absolute Protection</span></h2>
          <p className="s-sub" style={{ margin: '0 auto' }}>
            From consultancy to maintenance, we manage your fire safety lifecycle
            with unmatched precision and local expertise.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '28px' }}>
          {servicesData.map((s, i) => (
            <motion.div
              key={s.id}
              custom={i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={cardVariants}
            >
              <Link to={`/services/${s.id}`} className="home-srv-card">
                {/* Image strip */}
                <div className="home-srv-img-wrap">
                  <img src={s.image} alt={s.title} loading={i < 3 ? 'eager' : 'lazy'} decoding="async" />
                  <div className="home-srv-img-num">0{i + 1}</div>
                </div>
                {/* Body */}
                <div className="home-srv-body">
                  <div className="home-srv-icon-wrap">{s.icon}</div>
                  <h3 className="home-srv-title">{s.title}</h3>
                  <p className="home-srv-desc">{s.shortDesc}</p>
                  <div className="home-srv-cta">
                    Explore Details <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65, duration: 0.5 }}
          style={{ textAlign: 'center', marginTop: '52px' }}
        >
          <Link to="/services" className="btn-fire" style={{ display: 'inline-flex', gap: '10px' }}>
            View All Services <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>

      <style>{`
        .home-srv-card {
          text-decoration: none;
          display: flex;
          flex-direction: column;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--glass-border);
          background: var(--glass);
          backdrop-filter: blur(12px);
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s, border-color 0.3s;
          height: 100%;
        }
        .home-srv-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 28px 60px rgba(239,68,68,0.18), 0 8px 24px rgba(0,0,0,0.18);
          border-color: rgba(239,68,68,0.4);
        }
        .home-srv-img-wrap {
          position: relative;
          height: 180px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .home-srv-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.22,1,0.36,1);
          filter: brightness(0.85);
        }
        .home-srv-card:hover .home-srv-img-wrap img { transform: scale(1.08); filter: brightness(0.95); }
        .home-srv-img-num {
          position: absolute;
          bottom: 14px;
          left: 18px;
          font-size: 2.5rem;
          font-weight: 900;
          color: rgba(255,255,255,0.15);
          line-height: 1;
          letter-spacing: -2px;
          pointer-events: none;
        }
        .home-srv-body {
          padding: 28px 26px 32px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .home-srv-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: var(--gradient-fire);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          color: #fff;
          box-shadow: 0 10px 25px rgba(239,68,68,0.35);
          transition: transform 0.3s;
        }
        .home-srv-card:hover .home-srv-icon-wrap { transform: scale(1.1) rotate(-4deg); }
        .home-srv-title { font-size: 1.15rem; font-weight: 800; color: var(--text); margin: 0 0 10px; letter-spacing: -0.2px; }
        .home-srv-desc { color: var(--text-muted); font-size: 0.875rem; line-height: 1.65; margin: 0 0 24px; flex: 1; }
        .home-srv-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--orange);
          font-size: 0.82rem;
          font-weight: 800;
          padding-top: 20px;
          border-top: 1px solid var(--glass-border);
          transition: gap 0.25s;
          margin-top: auto;
        }
        .home-srv-card:hover .home-srv-cta { gap: 14px; color: var(--red); }
      `}</style>
    </section>
  );
};

export default Services;
