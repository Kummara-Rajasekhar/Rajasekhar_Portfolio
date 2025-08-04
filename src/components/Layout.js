import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import ScrollProgress from './ScrollProgress';
import ParticleBackground from './ParticleBackground';

const Layout = ({ darkMode, setDarkMode }) => {
  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <ScrollProgress />
      <ParticleBackground />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout; 