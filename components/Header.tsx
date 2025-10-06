import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeaderProps {
  onGetQuoteClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGetQuoteClick }) => {
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

  const isSubPage = route.startsWith('#/blog') || route === '#/about' || route.startsWith('#/projects') || route.startsWith('#/services');

  const navItems = [
    ...(isSubPage ? [{ label: 'Home', hash: '' }] : []),
    { label: 'Services', hash: '/services' },
    { label: 'Projects', hash: '/projects' },
    { label: 'About', hash: '/about' },
    { label: 'Blog', hash: '/blog' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500`}
      style={{
        backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.95)' : 'rgba(10, 10, 10, 0)',
        backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
        opacity: headerOpacity,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: 'spring' }}
    >
      {/* Glowing border at bottom when scrolled */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-green/50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          className="text-2xl font-orbitron font-bold cursor-hover"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <a href="#" onClick={(e) => handleHashNav(e, '')} className="flex items-center space-x-2 group">
            <motion.span
              className="w-3 h-3 bg-brand-green block"
              animate={{
                boxShadow: [
                  '0 0 10px rgba(0, 255, 153, 0.5)',
                  '0 0 20px rgba(0, 255, 153, 0.8)',
                  '0 0 10px rgba(0, 255, 153, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-white group-hover:text-brand-green transition-colors duration-300">
              Quantum Canvas
            </span>
          </a>
        </motion.div>

        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item, index) => (
            <motion.a
              key={item.hash}
              href={`#${item.hash}`}
              onClick={(e) => handleHashNav(e, item.hash)}
              className="relative text-gray-300 hover:text-brand-green transition-colors duration-300 font-medium cursor-hover"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {item.label}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-brand-green"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}

          <motion.a
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="relative text-gray-300 hover:text-brand-green transition-colors duration-300 font-medium cursor-hover"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navItems.length * 0.1 }}
            whileHover={{ y: -2 }}
          >
            Contact
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-brand-green"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.button
            onClick={onGetQuoteClick}
            className="relative bg-transparent border-2 border-brand-green text-brand-green px-6 py-2 font-orbitron font-bold overflow-hidden group cursor-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (navItems.length + 1) * 0.1 }}
          >
            <motion.div
              className="absolute inset-0 bg-brand-green"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 group-hover:text-dark-bg transition-colors duration-300">
              Get Quote
            </span>
          </motion.button>
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
