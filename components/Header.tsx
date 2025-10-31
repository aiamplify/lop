import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [route, setRoute] = useState(window.location.hash);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    const handleHashChange = () => {
      setRoute(window.location.hash);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleHashNav = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    window.location.hash = hash;
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500`}
      style={{
        backgroundColor: isScrolled ? 'rgba(26, 26, 26, 0.95)' : 'rgba(26, 26, 26, 0)',
        backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
        opacity: headerOpacity,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: 'spring' }}
    >
      {/* Border at bottom when scrolled */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          className="text-2xl font-heading font-bold cursor-hover"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <a href="#" onClick={(e) => handleHashNav(e, '')} className="flex items-center space-x-3 group">
            {/* Hard Hat Icon */}
            <div className="relative">
              <svg className="w-7 h-7 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L4 8v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-8-5zm0 2.18l6 3.75V16c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1V8.93l6-3.75z"/>
                <path d="M12 7c-2.21 0-4 1.79-4 4v5h8v-5c0-2.21-1.79-4-4-4zm2 7h-4v-3c0-1.1.9-2 2-2s2 .9 2 2v3z"/>
              </svg>
            </div>
            <span className="text-white group-hover:text-brand-orange transition-colors duration-300 tracking-wide">
              AI for Contractors
            </span>
          </a>
        </motion.div>

        <nav className="hidden md:flex space-x-8 items-center">
          <motion.a
            href="#"
            onClick={(e) => handleHashNav(e, '')}
            className="relative text-gray-300 hover:text-brand-orange transition-colors duration-300 font-medium cursor-hover"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
            whileHover={{ y: -2 }}
          >
            Blog
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-brand-orange"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="#/resources"
            onClick={(e) => handleHashNav(e, '/resources')}
            className="relative text-gray-300 hover:text-brand-orange transition-colors duration-300 font-medium cursor-hover"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -2 }}
          >
            Resources
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-brand-orange"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="#subscribe"
            onClick={(e) => handleScrollTo(e, 'subscribe')}
            className="relative bg-brand-orange text-white px-5 py-2 font-heading font-semibold overflow-hidden group cursor-hover text-sm uppercase tracking-wider"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-brand-blue"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">
              Subscribe
            </span>
          </motion.a>
        </nav>

        <motion.button
          className="md:hidden text-white cursor-hover"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;
