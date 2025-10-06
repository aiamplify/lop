import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { servicesDataOverhauled } from '../data/servicesDataOverhauled';
import { staggerContainer, fadeIn, textVariant } from '../utils/animations';

const Services: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const scrollToServiceCategory = (categoryId: string) => {
    window.location.hash = '/services';
    setTimeout(() => {
      const element = document.getElementById(categoryId);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth',
        });
      }
    }, 100);
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2
            variants={textVariant(0)}
            className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4 relative inline-block"
          >
            Our Services
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-green to-transparent"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.h2>

          <motion.p
            variants={fadeIn('up', 0.2)}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
          >
            From branding to experimental AI content, we deliver 50+ types of creative deliverables that elevate your brand.
          </motion.p>

          <motion.a
            href="#/services"
            variants={fadeIn('up', 0.3)}
            className="inline-block text-brand-green font-orbitron font-bold hover:underline cursor-hover"
          >
            View All Services →
          </motion.a>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.15, 0.4)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {servicesDataOverhauled.map((service, index) => (
            <motion.button
              key={service.id}
              onClick={() => scrollToServiceCategory(service.id)}
              variants={fadeIn('up', index * 0.1)}
              className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/70 border border-gray-700/30 p-8 rounded-lg backdrop-blur-sm text-left cursor-hover overflow-hidden"
              whileHover={{ scale: 1.05, borderColor: `${service.color}50` }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${service.color}15, transparent)`,
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-brand-green transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{service.tagline}</p>
                {service.startingPrice && (
                  <div className="text-brand-green font-orbitron font-bold text-sm">
                    From {service.startingPrice}
                  </div>
                )}
              </div>

              {/* Corner Accent */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-brand-green/0 group-hover:border-brand-green/50 transition-all duration-300"
                style={{ borderRadius: '0 0.5rem 0 0' }}
              />

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8 }}
              />
            </motion.button>
          ))}
        </motion.div>

        {/* CTA to Full Services Page */}
        <motion.div
          variants={fadeIn('up', 0.8)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mt-12"
        >
          <motion.a
            href="#/services"
            className="inline-block relative bg-brand-green text-dark-bg px-10 py-4 font-bold font-orbitron text-lg overflow-hidden group cursor-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
              style={{ opacity: 0.2 }}
            />
            <span className="relative z-10">Explore All Services</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </section>
  );
};

export default Services;
