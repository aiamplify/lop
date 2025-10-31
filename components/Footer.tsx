import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DribbbleIcon, LinkedInIcon, TwitterIcon } from './IconComponents';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleGoHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '';
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
    alert('Thanks for subscribing!');
  };

  const categories = [
    'Design Trends',
    'Tutorial',
    'Opinion',
    'Branding',
    'Design Tips',
    'Best Practices',
  ];

  return (
    <footer className="bg-dark-bg border-t border-gray-800/50 pt-20 pb-8">
      {/* Newsletter Section */}
      <div id="subscribe" className="container mx-auto px-6 mb-16">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-gradient-to-br from-gray-900/80 to-gray-900/50 p-12 md:p-16 border border-gray-700/30 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-green/5 to-brand-green/10 animate-pulse" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
              Never Miss an Insight
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Join our community of designers, developers, and creative thinkers. Get the latest articles delivered to your inbox weekly.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 bg-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:border-brand-green focus:outline-none transition-colors"
              />
              <motion.button
                type="submit"
                className="px-8 py-4 bg-brand-green text-dark-bg font-orbitron font-bold hover:bg-green-400 transition-all duration-300 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
            <p className="text-sm text-gray-500 mt-4">No spam, ever. Unsubscribe anytime.</p>
          </div>
        </motion.div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="text-2xl font-orbitron font-bold mb-4">
              <a href="#" onClick={handleGoHome} className="flex items-center space-x-2 group">
                <span className="w-3 h-3 bg-brand-green block"></span>
                <span className="text-white group-hover:text-brand-green transition-colors">
                  Quantum Insights
                </span>
              </a>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Exploring the intersection of design, technology, and creative thinking. Where ideas become reality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-green transition-colors duration-300">
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-green transition-colors duration-300">
                <LinkedInIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-green transition-colors duration-300">
                <DribbbleIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-orbitron font-bold text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.slice(0, 6).map((category) => (
                <li key={category}>
                  <a
                    href={`#/category/${encodeURIComponent(category)}`}
                    className="text-gray-400 hover:text-brand-green transition-colors duration-300"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-orbitron font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" onClick={handleGoHome} className="hover:text-brand-green transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#subscribe" className="hover:text-brand-green transition-colors duration-300">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-green transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-green transition-colors duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-green transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Quantum Insights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
