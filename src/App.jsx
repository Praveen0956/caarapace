import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import PageWrapper from './components/PageWrapper.jsx';

import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import CDeck from './pages/CDeck.jsx';
import Pulse from './pages/Pulse.jsx';
import Careers from './pages/Careers.jsx';

export default function App(){
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home/></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><Services/></PageWrapper>} />
          <Route path="/cdeck" element={<PageWrapper><CDeck/></PageWrapper>} />
          <Route path="/pulse" element={<PageWrapper><Pulse/></PageWrapper>} />
          <Route path="/careers" element={<PageWrapper><Careers/></PageWrapper>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
