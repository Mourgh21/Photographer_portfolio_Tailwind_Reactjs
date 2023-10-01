import React from 'react';

// import Pages
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Portfolio from '../pages/Portfolio'

// import routes route and useLocation hook
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode='wait'>
  <Routes key={location.pathname} Location={location}>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/portfolio' element={<Portfolio/>} />
  </Routes>
  </AnimatePresence>
  );
};

export default AnimRoutes;
