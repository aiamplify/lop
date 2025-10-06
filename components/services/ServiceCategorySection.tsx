import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ServiceCategory } from '../../data/servicesDataOverhauled';
import ProcessTimeline from './ProcessTimeline';
import { fadeIn, staggerContainer } from '../../utils/animations';

interface ServiceCategorySectionProps {
  category: ServiceCategory;
  index: number;
}

const ServiceCategorySection: React.FC<ServiceCategorySectionProps> = ({ category, index }) => {
  const [expandedSubcategory, setExpandedSubcategory] = useState<number | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const toggleSubcategory = (idx: number) => {
    setExpandedSubcategory(expandedSubcategory === idx ? null : idx);
  };

  return (
    <motion.section
      id={category.id}
      ref={ref}
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className="py-24 relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${category.color}, transparent 70%)`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Category Header */}
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mb-16"
        >
          {/* Icon */}
          <motion.div
            variants={fadeIn('up', 0)}
            className="text-7xl mb-6 inline-block"
          >
            {category.icon}
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={fadeIn('up', 0.1)}
            className="text-5xl md:text-6xl font-orbitron font-bold text-white mb-4"
          >
            {category.name}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={fadeIn('up', 0.2)}
            className="text-2xl font-orbitron mb-6"
            style={{ color: category.color }}
          >
            {category.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeIn('up', 0.3)}
            className="text-lg text-gray-400 max-w-3xl mx-auto mb-8"
          >
            {category.description}
          </motion.p>

          {/* Meta Info */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            {category.startingPrice && (
              <div className="bg-gray-900/50 border border-gray-700/30 px-6 py-3 rounded-full backdrop-blur-sm">
                <span className="text-gray-400">Starting at </span>
                <span className="text-brand-green font-bold font-orbitron">{category.startingPrice}</span>
              </div>
            )}
            {category.typicalTimeline && (
              <div className="bg-gray-900/50 border border-gray-700/30 px-6 py-3 rounded-full backdrop-blur-sm">
                <span className="text-gray-400">Timeline: </span>
                <span className="text-white font-orbitron">{category.typicalTimeline}</span>
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="relative mb-16 group cursor-hover"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-brand-green/50 to-transparent blur opacity-0 group-hover:opacity-100 transition duration-500" />
          <motion.img
            src={category.heroImage}
            alt={category.name}
            className="w-full h-96 object-cover rounded-lg relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg" />
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer(0.1, 0.6)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16"
        >
          {category.features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn('up', idx * 0.1)}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/30 px-4 py-3 rounded-lg text-center backdrop-blur-sm group cursor-hover"
              whileHover={{ scale: 1.05, borderColor: `${category.color}50` }}
            >
              <span className="text-gray-300 group-hover:text-brand-green transition-colors font-medium">
                {feature}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Subcategories */}
        <div className="mb-16">
          <motion.h3
            variants={fadeIn('up', 0.7)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="text-3xl font-orbitron font-bold text-white mb-8 text-center"
          >
            What's Included
          </motion.h3>

          <motion.div
            variants={staggerContainer(0.1, 0.8)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-4"
          >
            {category.subcategories.map((subcategory, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn('up', idx * 0.1)}
                className="bg-gradient-to-br from-gray-900/90 to-gray-800/70 border border-gray-700/30 rounded-lg backdrop-blur-sm overflow-hidden"
              >
                {/* Subcategory Header */}
                <motion.button
                  onClick={() => toggleSubcategory(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left group cursor-hover"
                  whileHover={{ backgroundColor: 'rgba(0, 255, 153, 0.05)' }}
                >
                  <span className="text-xl font-orbitron font-bold text-white group-hover:text-brand-green transition-colors">
                    {subcategory.name}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedSubcategory === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-brand-green"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </motion.button>

                {/* Deliverables List */}
                <AnimatePresence>
                  {expandedSubcategory === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 grid md:grid-cols-2 gap-4">
                        {subcategory.deliverables.map((deliverable, delIdx) => (
                          <motion.div
                            key={delIdx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: delIdx * 0.05 }}
                            className="bg-gray-800/50 p-4 rounded border border-gray-700/20 group cursor-hover"
                            whileHover={{ scale: 1.02, borderColor: `${category.color}30` }}
                          >
                            <h5 className="font-orbitron font-bold text-brand-green mb-1 group-hover:text-white transition-colors">
                              {deliverable.name}
                            </h5>
                            <p className="text-gray-400 text-sm mb-2">{deliverable.description}</p>
                            {deliverable.formats && (
                              <div className="flex flex-wrap gap-2">
                                {deliverable.formats.map((format, fIdx) => (
                                  <span
                                    key={fIdx}
                                    className="text-xs px-2 py-1 bg-gray-900/50 border border-gray-700/30 rounded text-gray-400"
                                  >
                                    {format}
                                  </span>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Process Timeline */}
        <div>
          <motion.h3
            variants={fadeIn('up', 0.9)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="text-3xl font-orbitron font-bold text-white mb-8 text-center"
          >
            Our Process
          </motion.h3>
          <ProcessTimeline steps={category.processSteps} color={category.color} />
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeIn('up', 1)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            className="inline-block relative bg-brand-green text-dark-bg px-12 py-4 font-bold font-orbitron text-lg overflow-hidden group cursor-hover"
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
            <span className="relative z-10">Get Started with {category.name}</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ backgroundColor: category.color }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.section>
  );
};

export default ServiceCategorySection;
