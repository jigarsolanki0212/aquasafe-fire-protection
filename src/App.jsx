import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CatalogLayout from './pages/CatalogLayout';
import ContactPage from './pages/ContactPage';
import { productsData, servicesData } from './constants/data';
import GlobalEffects from './components/GlobalEffects';

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.35 } },
  exit:    { opacity: 0, transition: { duration: 0.2 } },
};

// Wrapper so AnimatePresence can read location
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<CatalogLayout items={productsData} title="Products" bannerSubtitle="Premium Safety Arsenal" />} />
          <Route path="/products/:id" element={<CatalogLayout items={productsData} title="Products" bannerSubtitle="Product Details" />} />
          <Route path="/services" element={<CatalogLayout items={servicesData} title="Services" bannerSubtitle="Professional Safety Services" />} />
          <Route path="/services/:id" element={<CatalogLayout items={servicesData} title="Services" bannerSubtitle="Service Details" />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <GlobalEffects />
      <div className="main-wrapper">
        <div id="cursor-glow" />
        <div className="bg-aura" />
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
