import React from 'react';
import { DribbbleIcon, LinkedInIcon, TwitterIcon } from './IconComponents';
import ContactForm from './ContactForm';

const Footer: React.FC = () => {
  const handleGoHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '';
  }

  return (
    <footer className="bg-dark-bg border-t border-gray-800/50 pt-24 pb-12">
      <div id="contact" className="container mx-auto px-6 mb-24">
         <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? We'd love to hear from you.
            </p>
          </div>
          <ContactForm />
      </div>

      <div className="container mx-auto px-6 text-center text-gray-400">
        <div className="mb-8">
          <div className="text-2xl font-orbitron font-bold mb-4">
            <a href="#/" onClick={handleGoHome} className="flex items-center justify-center space-x-2">
              <span className="w-3 h-3 bg-brand-green block"></span>
              <span className="text-white">Quantum Canvas</span>
            </a>
          </div>
          <p>Designing the future, today.</p>
        </div>
        <div className="flex justify-center space-x-6 mb-8">
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
        <p className="text-sm">&copy; {new Date().getFullYear()} Quantum Canvas. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;