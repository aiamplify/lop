import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { servicesDataOverhauled } from '../../data/servicesDataOverhauled';
import ServiceCategorySection from './ServiceCategorySection';
import { fadeIn, staggerContainer, textVariant } from '../../utils/animations';

const ServicesPageOverhauled: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const scrollToCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-32 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
        }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-full opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 153, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 153, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '100px 100px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            animate={heroInView ? 'show' : 'hidden'}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Main Title */}
            <motion.h1
              variants={textVariant(0)}
              className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight"
            >
              World-Class{' '}
              <motion.span
                className="text-brand-orange inline-block"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(0, 255, 153, 0.5)',
                    '0 0 40px rgba(0, 255, 153, 0.8)',
                    '0 0 20px rgba(0, 255, 153, 0.5)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                Creative Services
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeIn('up', 0.2)}
              className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto"
            >
              From branding to experimental AI content, we deliver 50+ types of creative deliverables
              that elevate your brand and drive results.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={staggerContainer(0.1, 0.4)}
              initial="hidden"
              animate={heroInView ? 'show' : 'hidden'}
              className="flex flex-wrap justify-center gap-8 mb-12"
            >
              {[
                { number: '8', label: 'Service Categories' },
                { number: '50+', label: 'Deliverable Types' },
                { number: '100+', label: 'Projects Completed' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeIn('up', idx * 0.1)}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/30 backdrop-blur-sm px-8 py-4 rounded-lg cursor-hover"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(0, 255, 153, 0.5)' }}
                >
                  <div className="text-3xl font-heading font-bold text-brand-orange mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeIn('up', 0.6)}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.button
                onClick={() => {
                  const element = document.getElementById('service-categories');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="relative bg-brand-orange text-dark-bg px-10 py-4 font-bold font-heading text-lg overflow-hidden group cursor-hover"
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
                <span className="relative z-10">Explore Services</span>
              </motion.button>

              <motion.a
                href="#contact"
                className="relative bg-transparent border-2 border-brand-orange text-brand-orange px-10 py-4 font-bold font-heading text-lg overflow-hidden group cursor-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-brand-orange"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 group-hover:text-dark-bg transition-colors duration-300">
                  Get a Quote
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl"
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

      {/* Service Categories Grid */}
      <section id="service-categories" className="py-24 bg-gradient-to-b from-black/50 to-black/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Click any category below to explore what we can create for you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesDataOverhauled.map((category, idx) => (
              <motion.button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/70 border border-gray-700/30 p-8 rounded-lg backdrop-blur-sm text-left cursor-hover overflow-hidden"
                whileHover={{ scale: 1.05, borderColor: `${category.color}50` }}
              >
                {/* Background Glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${category.color}15, transparent)`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{category.tagline}</p>
                  {category.startingPrice && (
                    <div className="text-brand-orange font-heading font-bold">
                      From {category.startingPrice}
                    </div>
                  )}
                </div>

                {/* Corner Accent */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-brand-orange/0 group-hover:border-brand-orange/50 transition-all duration-300"
                  style={{ borderRadius: '0 0.5rem 0 0' }}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Category Sections */}
      <div className="relative">
        {servicesDataOverhauled.map((category, idx) => (
          <ServiceCategorySection key={category.id} category={category} index={idx} />
        ))}
      </div>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 via-transparent to-brand-orange/5" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Let's create something incredible together. Get in touch to discuss your needs.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#contact"
                className="relative bg-brand-orange text-dark-bg px-12 py-4 font-bold font-heading text-lg overflow-hidden group cursor-hover"
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
                <span className="relative z-10">Get Your Free Quote</span>
              </motion.a>

              <motion.a
                href="#/projects"
                className="relative bg-transparent border-2 border-brand-orange text-brand-orange px-12 py-4 font-bold font-heading text-lg overflow-hidden group cursor-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-brand-orange"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 group-hover:text-dark-bg transition-colors duration-300">
                  View Our Work
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPageOverhauled;
