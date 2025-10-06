import React from 'react';
import { Service } from '../types';
import { PaletteIcon, MegaphoneIcon, SparklesIcon } from './IconComponents';

interface ServiceDetailProps {
  service: Service;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  const handleNavigateToHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '';
  };

  const getIcon = () => {
    switch (service.icon) {
      case 'palette':
        return <PaletteIcon />;
      case 'megaphone':
        return <MegaphoneIcon />;
      case 'sparkles':
        return <SparklesIcon />;
      default:
        return <PaletteIcon />;
    }
  };

  return (
    <section className="py-24 animate-fade-in">
      <div className="container mx-auto px-6">
        <a href="#" onClick={handleNavigateToHome} className="text-brand-green hover:underline mb-8 inline-block font-orbitron">
          &larr; Back to Home
        </a>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-brand-green/10 border-2 border-brand-green/30">
              <div className="w-10 h-10 text-brand-green">
                {getIcon()}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {service.shortDescription}
            </p>
          </div>

          <div className="relative group mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-dark-bg p-2">
              <img src={service.imageUrl} alt={service.title} className="w-full h-[400px] object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-900/50 p-8 border border-gray-700/50">
              <h2 className="text-2xl font-orbitron font-bold text-white mb-6">What's Included</h2>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-900/50 p-8 border border-gray-700/50">
              <h2 className="text-2xl font-orbitron font-bold text-white mb-6">Our Process</h2>
              <ol className="space-y-4">
                {service.process.map((step, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="flex items-center justify-center w-8 h-8 bg-brand-green/10 border border-brand-green/30 text-brand-green font-orbitron text-sm mr-4 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="text-center bg-gray-900/50 p-12 border border-gray-700/50">
            <h3 className="text-3xl font-orbitron text-white mb-6">Ready to Get Started?</h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Let's discuss how this service can help amplify your brand and achieve your business goals.
            </p>
            <a href="#contact" className="inline-block px-8 py-4 bg-brand-green text-dark-bg font-orbitron font-bold hover:bg-green-400 transition-colors">
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
