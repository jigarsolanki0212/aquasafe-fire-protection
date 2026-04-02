import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Menu, X, Flame, ChevronDown, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { productsData, servicesData } from '../constants/data';

const dropdownVariants = {
  hidden:  { opacity: 0, y: -8, scale: 0.96 },
  visible: { opacity: 1, y: 0,  scale: 1,   transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -6, scale: 0.97, transition: { duration: 0.15 } },
};

const DropdownNav = ({ label, to, items, basePath }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <li ref={ref} style={{ position: 'relative', listStyle: 'none' }}>
      <div
        style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', padding: '8px 4px' }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <Link to={to} style={{ display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none', color: 'inherit', fontWeight: 600 }}>
          {label}
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown size={15} />
          </motion.span>
        </Link>
      </div>
      <AnimatePresence>
        {open && (
          <motion.ul
            className="nav-dropdown"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            {items.map((item) => (
              <li key={item.id}>
                <Link
                  to={`${basePath}/${item.id}`}
                  className="nav-dropdown-link"
                  onClick={() => setOpen(false)}
                >
                  <span className="nav-dropdown-icon">{item.icon}</span>
                  <span>{item.title}</span>
                  <ChevronRight size={13} className="nav-dropdown-arrow" />
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(null); // 'products' | 'services' | null
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [theme, isMenuOpen]);

  const always = !isHome || isScrolled;

  return (
    <>
      <nav className={`navbar ${(isScrolled || !isHome) ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          {/* Logo */}
          <Link to="/" className="logo">
            <div className="logo-flame">
              <Flame size={30} color="var(--red)" fill="var(--red)" fillOpacity={0.2} />
            </div>
            <div className="logo-text">
              <div className="logo-brand">AquaSafe <span style={{ color: 'var(--red)' }}>Fire</span></div>
              <div className="logo-sub">Safety • Success • Protection</div>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="nav-links desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '6px', listStyle: 'none', margin: 0, padding: 0 }}>
            <li><a href={isHome ? '#about' : '/#about'} className="nav-link">About</a></li>
            <DropdownNav label="Products"  to="/products"  items={productsData} basePath="/products" />
            <DropdownNav label="Services"  to="/services"  items={servicesData} basePath="/services" />
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} className="theme-toggle" aria-label="Toggle Theme">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link to="/contact" className="btn-fire desktop-only" style={{ padding: '10px 22px', fontSize: '0.83rem' }}>
              Get Quote
            </Link>
            <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(v => !v)} aria-label="Toggle Menu">
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)', zIndex: 1999 }}
            />
            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              style={{ position: 'fixed', top: 0, right: 0, width: '300px', height: '100%', background: 'var(--bg)', zIndex: 2000, display: 'flex', flexDirection: 'column', boxShadow: '-10px 0 40px rgba(0,0,0,0.3)', overflowY: 'auto' }}
            >
              {/* Drawer Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px', borderBottom: '1px solid var(--border)' }}>
                <div className="logo-brand">AquaSafe <span style={{ color: 'var(--red)' }}>Fire</span></div>
                <button onClick={() => setIsMenuOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer' }}>
                  <X size={22} />
                </button>
              </div>

              {/* Drawer Links */}
              <div style={{ padding: '16px', flex: 1 }}>
                {[
                  { label: 'Home', to: '/', type: 'link' },
                  { label: 'About', href: '/#about', type: 'href' },
                  { label: 'Products', type: 'group', key: 'products', to: '/products', items: productsData, basePath: '/products' },
                  { label: 'Services', type: 'group', key: 'services', to: '/services', items: servicesData, basePath: '/services' },
                  { label: 'Contact', to: '/contact', type: 'link' },
                ].map((item) => {
                  if (item.type === 'link') {
                    return (
                      <Link key={item.label} to={item.to} onClick={() => setIsMenuOpen(false)} className="mobile-nav-item">
                        {item.label} <ChevronRight size={16} />
                      </Link>
                    );
                  }
                  if (item.type === 'href') {
                    return (
                      <a key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)} className="mobile-nav-item">
                        {item.label} <ChevronRight size={16} />
                      </a>
                    );
                  }
                  // group
                  const isGroupOpen = mobileOpen === item.key;
                  return (
                    <div key={item.label}>
                      <button
                        className="mobile-nav-item mobile-nav-group"
                        onClick={() => setMobileOpen(isGroupOpen ? null : item.key)}
                        style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer' }}
                      >
                        <Link to={item.to} onClick={(e) => { e.stopPropagation(); setIsMenuOpen(false); }} style={{ color: 'inherit', textDecoration: 'none', flex: 1 }}>
                          {item.label}
                        </Link>
                        <motion.span animate={{ rotate: isGroupOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronDown size={16} />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {isGroupOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ overflow: 'hidden' }}
                          >
                            <div style={{ paddingLeft: '16px', paddingBottom: '8px' }}>
                              {item.items.map(child => (
                                <Link
                                  key={child.id}
                                  to={`${item.basePath}/${child.id}`}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="mobile-nav-sub"
                                >
                                  {child.title}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                <Link to="/contact" className="btn-fire" onClick={() => setIsMenuOpen(false)} style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                  Get Free Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link {
          padding: 8px 12px;
          border-radius: 8px;
          color: var(--text);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.92rem;
          transition: color 0.2s, background 0.2s;
        }
        .nav-link:hover { color: var(--red); background: rgba(239,68,68,0.07); }

        /* Dropdown */
        .nav-dropdown {
          position: absolute;
          top: calc(100% + 4px);
          left: 50%;
          transform: translateX(-50%);
          list-style: none;
          padding: 10px 0;
          margin: 0;
          min-width: 240px;
          background: var(--bg);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.25);
          backdrop-filter: blur(20px);
          z-index: 500;
          overflow: hidden;
        }
        .nav-dropdown-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 18px;
          color: var(--text);
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 500;
          transition: all 0.2s;
          position: relative;
        }
        .nav-dropdown-link:hover { background: rgba(239,68,68,0.07); color: var(--red); padding-left: 24px; }
        .nav-dropdown-icon { color: var(--red); display: flex; align-items: center; flex-shrink: 0; }
        .nav-dropdown-arrow { margin-left: auto; opacity: 0; transition: opacity 0.2s; }
        .nav-dropdown-link:hover .nav-dropdown-arrow { opacity: 1; }

        /* Theme toggle */
        .theme-toggle {
          padding: 9px; border-radius: 10px;
          background: var(--glass); border: 1px solid var(--glass-border);
          color: var(--text); cursor: pointer; display: flex;
          align-items: center; justify-content: center;
          transition: background 0.2s, transform 0.2s;
        }
        .theme-toggle:hover { background: var(--glass-border); transform: rotate(20deg); }

        /* Desktop/Mobile visibility */
        .desktop-only { display: none !important; }
        .mobile-menu-btn {
          display: flex !important;
          background: none; border: none;
          color: var(--text); cursor: pointer; padding: 8px;
        }
        @media (min-width: 800px) {
          .desktop-only { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }

        /* Mobile nav items */
        .mobile-nav-item {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 16px; margin-bottom: 4px;
          background: var(--glass); border: 1px solid var(--glass-border);
          border-radius: 12px; color: var(--text); text-decoration: none;
          font-weight: 600; font-size: 0.92rem; transition: all 0.2s;
        }
        .mobile-nav-item:hover { border-color: var(--red); color: var(--red); }
        .mobile-nav-sub {
          display: block; padding: 9px 12px; margin: 3px 0;
          border-radius: 8px; color: var(--text-muted); text-decoration: none;
          font-size: 0.85rem; font-weight: 500; transition: all 0.2s;
        }
        .mobile-nav-sub:hover { color: var(--red); background: rgba(239,68,68,0.06); }
        .logo-brand { font-weight: 800; font-size: 1.1rem; color: var(--text); }
      `}</style>
    </>
  );
};

export default Navbar;
