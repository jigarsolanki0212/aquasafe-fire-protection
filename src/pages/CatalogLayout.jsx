import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

// ── Animation Config ─────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

const CatalogLayout = ({ items, title, bannerSubtitle }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedItem = id ? items.find(i => i.id === id) : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id, title]);

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: '80px' }}>
      <AnimatePresence mode="wait">
        {!selectedItem ? (
          /* ══════════════════════════════════════════════════════════════
             PREMIUM LIST VIEW (NO SIDEBAR, MODERN BENTO GRID)
             ══════════════════════════════════════════════════════════════ */
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pl-layout"
          >
            {/* Header */}
            <div className="pl-header">
              <motion.div variants={stagger} initial="hidden" animate="visible" className="pl-header-content">
                <motion.div variants={fadeUp} className="pl-subtitle">
                  <span className="pl-line" /> {bannerSubtitle}
                </motion.div>
                <motion.h1 variants={fadeUp} className="pl-title">
                  Next-Gen <span style={{ color: 'var(--red)' }}>{title}</span>
                </motion.h1>
                <motion.p variants={fadeUp} className="pl-desc">
                  Discover our enterprise-grade fire protection {title.toLowerCase()}. Engineered for absolute reliability, compliance, and zero-failure response.
                </motion.p>
              </motion.div>
            </div>

            {/* Modern Grid */}
            <div className="container">
              <motion.div
                className="pl-grid"
                variants={stagger}
                initial="hidden"
                animate="visible"
              >
                {items.map((item, idx) => (
                  <motion.div key={item.id} variants={fadeUp} className={`pl-card ${idx === 0 || idx === 3 ? 'pl-card-large' : ''}`}>
                    <Link to={`/${title.toLowerCase()}/${item.id}`} className="pl-card-link">
                      <div className="pl-card-img-wrap">
                        <img src={item.image} alt={item.title} loading={idx < 4 ? 'eager' : 'lazy'} />
                        <div className="pl-card-overlay" />
                        <div className="pl-card-icon-glass">{item.icon}</div>
                      </div>
                      <div className="pl-card-content">
                        <h3 className="pl-card-title">{item.title}</h3>
                        <p className="pl-card-short">{item.shortDesc}</p>
                        <div className="pl-card-cta">
                          <span>Explore System</span> <ArrowRight size={16} />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ) : (
          /* ══════════════════════════════════════════════════════════════
             PREMIUM DETAIL VIEW (SPLIT SCREEN IMMERSIVE)
             ══════════════════════════════════════════════════════════════ */
          <motion.div
            key={selectedItem.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pd-layout container"
          >
            {/* Nav Row */}
            <div className="pd-nav-row">
              <button onClick={() => navigate(`/${title.toLowerCase()}`)} className="pd-back-btn">
                <ArrowLeft size={18} /> Back to {title}
              </button>
            </div>

            <div className="pd-split">
              {/* Left: Sticky Image Gallery */}
              <div className="pd-left">
                <div className="pd-sticky-frame">
                  <motion.img 
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    src={selectedItem.image} 
                    alt={selectedItem.title} 
                    className="pd-hero-img" 
                  />
                  <div className="pd-img-gradient" />
                  <div className="pd-stamp">
                    <ShieldCheck size={24} color="var(--red)" />
                    <span>Certified Component</span>
                  </div>
                </div>
              </div>

              {/* Right: Scrolling Content */}
              <div className="pd-right">
                <motion.div variants={stagger} initial="hidden" animate="visible">
                  <motion.div variants={fadeUp} className="pd-icon-badge">
                    {selectedItem.icon}
                  </motion.div>
                  
                  <motion.h1 variants={fadeUp} className="pd-title">
                    {selectedItem.title}
                  </motion.h1>
                  
                  <motion.p variants={fadeUp} className="pd-lead">
                    {selectedItem.shortDesc}
                  </motion.p>
                  
                  <motion.div variants={fadeUp} className="pd-separator" />
                  
                  <motion.p variants={fadeUp} className="pd-desc">
                    {selectedItem.description}
                  </motion.p>

                  {/* Bento Features */}
                  {selectedItem.features && (
                    <motion.div variants={fadeUp} className="pd-features">
                      <h3 className="pd-features-title"><Zap size={18} /> Technical Specifications</h3>
                      <div className="pd-features-grid">
                        {selectedItem.features.map((feat, i) => (
                          <div key={i} className="pd-feature-box">
                            <CheckCircle2 color="var(--red)" size={20} className="pd-feature-icon" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Procurement CTA */}
                  <motion.div variants={fadeUp} className="pd-procurement">
                    <div className="pd-pro-text">
                      <h4>Ready for integration?</h4>
                      <p>Get a comprehensive quotation and technical compliance documentation.</p>
                    </div>
                    <Link to={`/contact?item=${encodeURIComponent(selectedItem.title)}`} className="btn-fire pd-pro-btn">
                      Request Quote
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        /* ════════ LIST VIEW STYLES ════════ */
        .pl-header {
          padding: 80px 20px 60px;
          text-align: center;
          position: relative;
        }
        .pl-header::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(circle at 50% 0%, rgba(239,68,68,0.08) 0%, transparent 60%);
          pointer-events: none;
        }
        .pl-header-content { max-width: 800px; margin: 0 auto; position: relative; z-index: 1; }
        .pl-subtitle {
          color: var(--text-muted); font-size: 0.85rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 3px; display: flex;
          align-items: center; justify-content: center; gap: 12px; margin-bottom: 20px;
        }
        .pl-line { width: 40px; height: 2px; background: var(--red); display: block; }
        .pl-title { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 900; color: var(--text); margin: 0 0 24px; letter-spacing: -1.5px; line-height: 1.1; }
        .pl-desc { font-size: 1.1rem; color: var(--text-muted); line-height: 1.6; margin: 0 auto; max-width: 600px; }

        .pl-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          padding-bottom: 100px;
        }
        .pl-card {
          height: 380px;
          border-radius: 20px;
          overflow: hidden;
          background: var(--glass);
          border: 1px solid var(--glass-border);
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), border-color 0.4s;
        }
        .pl-card-large { grid-column: span 2; }
        @media (max-width: 900px) {
          .pl-grid { grid-template-columns: repeat(2, 1fr); }
          .pl-card-large { grid-column: span 2; }
        }
        @media (max-width: 600px) {
          .pl-grid { grid-template-columns: 1fr; }
          .pl-card-large { grid-column: span 1; }
          .pl-card { height: 340px; }
        }
        .pl-card:hover { transform: translateY(-6px); border-color: rgba(239,68,68,0.4); }
        .pl-card-link { text-decoration: none; display: flex; flex-direction: column; height: 100%; position: relative; }
        .pl-card-img-wrap { flex: 1; position: relative; overflow: hidden; }
        .pl-card-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s ease; display: block; filter: brightness(0.85) grayscale(0.2); }
        .pl-card:hover .pl-card-img-wrap img { transform: scale(1.05); filter: brightness(1) grayscale(0); }
        .pl-card-overlay { position: absolute; inset: 0; background: linear-gradient(to top, var(--bg-accent) 0%, transparent 80%); }
        .pl-card-icon-glass {
          position: absolute; top: 20px; right: 20px;
          width: 48px; height: 48px; border-radius: 12px;
          background: rgba(0,0,0,0.4); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1);
          color: #fff; display: flex; align-items: center; justify-content: center;
        }

        .pl-card-content {
          padding: 24px;
          background: var(--bg-accent);
          position: relative;
        }
        .pl-card-title { font-size: 1.3rem; font-weight: 800; color: var(--text); margin: 0 0 8px; letter-spacing: -0.3px; }
        .pl-card-short { font-size: 0.9rem; color: var(--text-muted); line-height: 1.5; margin: 0 0 20px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .pl-card-cta {
          display: flex; align-items: center; gap: 8px;
          color: var(--red); font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;
        }

        /* ════════ DETAIL VIEW STYLES ════════ */
        .pd-layout { padding-bottom: 100px; }
        .pd-nav-row { padding: 20px 0 30px; }
        .pd-back-btn {
          background: transparent; border: 1px solid var(--glass-border); color: var(--text);
          padding: 10px 20px; border-radius: 50px; display: inline-flex; align-items: center; gap: 8px;
          font-weight: 600; font-size: 0.9rem; cursor: pointer; transition: all 0.2s;
        }
        .pd-back-btn:hover { border-color: var(--red); color: var(--red); background: rgba(239,68,68,0.05); }

        .pd-split { display: flex; gap: 60px; align-items: flex-start; }
        @media (max-width: 960px) {
          .pd-split { flex-direction: column; gap: 40px; }
        }

        .pd-left { flex: 1; max-width: 50%; width: 100%; position: sticky; top: 100px; }
        @media (max-width: 960px) {
          .pd-left { max-width: 100%; position: relative; top: 0; }
        }
        
        .pd-sticky-frame {
          position: relative; height: calc(100vh - 160px); min-height: 500px; max-height: 700px;
          border-radius: 24px; overflow: hidden; background: #000; border: 1px solid var(--glass-border);
        }
        @media (max-width: 960px) { .pd-sticky-frame { height: 400px; min-height: auto; } }
        .pd-hero-img { width: 100%; height: 100%; object-fit: cover; display: block; opacity: 0.8; }
        .pd-img-gradient { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(0,0,0,0.5) 0%, transparent 50%, rgba(239,68,68,0.1) 100%); pointer-events: none; }
        .pd-stamp {
          position: absolute; bottom: 24px; left: 24px;
          background: rgba(0,0,0,0.6); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.1);
          padding: 12px 20px; border-radius: 12px; display: flex; align-items: center; gap: 12px;
        }
        .pd-stamp span { color: #fff; font-size: 0.85rem; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; }

        .pd-right { flex: 1; padding: 20px 0; }
        .pd-icon-badge {
          width: 56px; height: 56px; border-radius: 16px; background: rgba(239,68,68,0.1);
          border: 1px solid rgba(239,68,68,0.2); color: var(--red);
          display: flex; align-items: center; justify-content: center; margin-bottom: 30px;
        }
        .pd-icon-badge svg { width: 28px; height: 28px; }
        .pd-title { font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 900; color: var(--text); margin: 0 0 20px; letter-spacing: -1px; line-height: 1.1; }
        .pd-lead { font-size: 1.25rem; font-weight: 600; color: var(--text); margin: 0 0 30px; line-height: 1.5; }
        .pd-separator { width: 60px; height: 3px; background: var(--red); margin-bottom: 30px; border-radius: 3px; }
        .pd-desc { font-size: 1.05rem; color: var(--text-muted); line-height: 1.8; margin: 0 0 40px; }

        /* Bento Features */
        .pd-features { margin-bottom: 50px; }
        .pd-features-title { display: flex; align-items: center; gap: 10px; color: var(--text); font-size: 1.2rem; font-weight: 800; margin-bottom: 24px; }
        .pd-features-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 600px) { .pd-features-grid { grid-template-columns: 1fr; } }
        .pd-feature-box {
          background: var(--glass); border: 1px solid var(--glass-border); border-radius: 16px;
          padding: 20px; display: flex; align-items: flex-start; gap: 14px;
          transition: background 0.3s;
        }
        .pd-feature-box:hover { background: rgba(255,255,255,0.03); }
        .pd-feature-icon { flex-shrink: 0; margin-top: 2px; }
        .pd-feature-box span { color: var(--text); font-size: 0.95rem; font-weight: 500; line-height: 1.4; }

        /* Procurement Box */
        .pd-procurement {
          background: linear-gradient(135deg, rgba(239,68,68,0.1) 0%, rgba(0,0,0,0.2) 100%);
          border: 1px solid rgba(239,68,68,0.2); border-radius: 20px;
          padding: 30px; display: flex; align-items: center; justify-content: space-between; gap: 20px;
          flex-wrap: wrap;
        }
        .pd-pro-text h4 { color: var(--text); font-size: 1.2rem; font-weight: 800; margin: 0 0 8px; }
        .pd-pro-text p { color: var(--text-muted); font-size: 0.9rem; margin: 0; }
        .pd-pro-btn { white-space: nowrap; }
      `}</style>
    </div>
  );
};

export default CatalogLayout;
