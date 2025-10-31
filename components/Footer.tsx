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
    'Automation',
    'AI Tools',
    'Tutorial',
    'Business Growth',
    'Efficiency',
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
          <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/5 to-brand-orange/10 animate-pulse" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Never Miss an Update
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Join our community of contractors and construction professionals. Get the latest AI automation tips, resources, and industry insights delivered to your inbox weekly.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 bg-gray-900/80 border border-gray-700/50 text-white placeholder-gray-500 focus:border-brand-orange focus:outline-none transition-colors"
              />
              <motion.button
                type="submit"
                className="px-8 py-4 bg-brand-orange text-dark-bg font-heading font-bold hover:bg-brand-yellow transition-all duration-300 whitespace-nowrap"
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
            <div className="text-2xl font-heading font-bold mb-4">
              <a href="#" onClick={handleGoHome} className="flex items-center space-x-2 group">
                <svg className="w-6 h-6 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L4 8v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-8-5zm0 2.18l6 3.75V16c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1V8.93l6-3.75z"/>
                  <path d="M12 7c-2.21 0-4 1.79-4 4v5h8v-5c0-2.21-1.79-4-4-4zm2 7h-4v-3c0-1.1.9-2 2-2s2 .9 2 2v3z"/>
                </svg>
                <span className="text-white group-hover:text-brand-orange transition-colors">
                  AI for Contractors
                </span>
              </a>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering contractors with AI automation tools and resources. Streamline operations, boost efficiency, and grow your construction business.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors duration-300">
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors duration-300">
                <LinkedInIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors duration-300">
                <DribbbleIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-heading font-bold text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.slice(0, 6).map((category) => (
                <li key={category}>
                  <a
                    href={`#/category/${encodeURIComponent(category)}`}
                    className="text-gray-400 hover:text-brand-orange transition-colors duration-300"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" onClick={handleGoHome} className="hover:text-brand-orange transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#subscribe" className="hover:text-brand-orange transition-colors duration-300">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-orange transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-orange transition-colors duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-orange transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} AI for Contractors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
