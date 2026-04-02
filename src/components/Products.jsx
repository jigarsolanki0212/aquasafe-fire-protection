import React, { useRef } from 'react';
import { PackageSearch, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { productsData } from '../constants/data';

const cardVariants = {
  hidden:  { opacity: 0, y: 50, scale: 0.95 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  })
};

const Products = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section" id="products">
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
            <PackageSearch size={16} /> Premium Safety Arsenal
          </div>
          <h2 className="s-title">Modern <span className="gradient-text">Safety Equipment</span></h2>
          <p className="s-sub" style={{ margin: '0 auto' }}>
            We supply and install reliable fire safety equipment,
            built to handle any emergency with zero failure rates.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {productsData.map((p, i) => (
            <motion.div
              key={p.id}
              custom={i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={cardVariants}
            >
              <Link
                to={`/products/${p.id}`}
                className="home-prod-card"
              >
                {/* Image */}
                <div className="home-prod-img-wrap">
                  <img src={p.image} alt={p.title} loading={i < 4 ? 'eager' : 'lazy'} decoding="async" />
                  <div className="home-prod-img-overlay" />
                  <div className="home-prod-hover-label">View Details &rarr;</div>
                </div>
                {/* Body */}
                <div className="home-prod-body">
                  <div className="home-prod-icon">{p.icon}</div>
                  <h3 className="home-prod-title">{p.title}</h3>
                  <p className="home-prod-desc">{p.shortDesc}</p>
                  <div className="home-prod-badges">
                    <span className="badge-red"><CheckCircle2 size={10} /> CERTIFIED</span>
                    <span className="badge-orange">PREMIUM</span>
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
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{ textAlign: 'center', marginTop: '52px' }}
        >
          <Link to="/products" className="btn-fire" style={{ display: 'inline-flex', gap: '10px' }}>
            Explore All Products <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>

      <style>{`
        .home-prod-card {
          text-decoration: none;
          display: flex;
          flex-direction: column;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--glass-border);
          background: var(--glass);
          backdrop-filter: blur(12px);
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s, border-color 0.3s;
          position: relative;
        }
        .home-prod-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 28px 60px rgba(239,68,68,0.2), 0 8px 24px rgba(0,0,0,0.2);
          border-color: rgba(239,68,68,0.4);
        }
        .home-prod-img-wrap {
          position: relative;
          height: 190px;
          overflow: hidden;
        }
        .home-prod-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.22,1,0.36,1);
        }
        .home-prod-card:hover .home-prod-img-wrap img { transform: scale(1.1); }
        .home-prod-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%);
        }
        .home-prod-hover-label {
          position: absolute;
          top: 12px;
          right: 12px;
          background: var(--red);
          color: #fff;
          font-size: 0.68rem;
          font-weight: 800;
          padding: 5px 12px;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          opacity: 0;
          transform: translateY(-6px);
          transition: all 0.3s;
        }
        .home-prod-card:hover .home-prod-hover-label { opacity: 1; transform: translateY(0); }
        .home-prod-body { padding: 22px 22px 26px; flex: 1; display: flex; flex-direction: column; }
        .home-prod-icon { color: var(--orange); margin-bottom: 12px; display: flex; }
        .home-prod-title { font-size: 1.1rem; font-weight: 800; color: var(--text); margin: 0 0 10px; }
        .home-prod-desc { color: var(--text-muted); font-size: 0.85rem; line-height: 1.6; margin: 0 0 18px; flex: 1; }
        .home-prod-badges { display: flex; gap: 8px; flex-wrap: wrap; }
        .badge-red {
          font-size: 0.62rem; padding: 5px 12px; border-radius: 50px;
          background: rgba(239,68,68,0.1); color: var(--red);
          font-weight: 800; border: 1px solid rgba(239,68,68,0.2);
          display: flex; align-items: center; gap: 4px;
        }
        .badge-orange {
          font-size: 0.62rem; padding: 5px 12px; border-radius: 50px;
          background: rgba(249,115,22,0.1); color: var(--orange);
          font-weight: 800; border: 1px solid rgba(249,115,22,0.2);
        }
      `}</style>
    </section>
  );
};

export default Products;
