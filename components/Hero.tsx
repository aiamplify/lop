import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn, staggerContainer, textVariant } from '../utils/animations';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  const categories = [
    { name: 'Design Trends', count: 1, icon: '🎨' },
    { name: 'Tutorial', count: 2, icon: '📚' },
    { name: 'Opinion', count: 1, icon: '💭' },
    { name: 'Branding', count: 1, icon: '🎯' },
    { name: 'Design Tips', count: 1, icon: '✨' },
    { name: 'Best Practices', count: 1, icon: '⚡' },
  ];

  return (
    <section ref={ref} className="container mx-auto px-6 py-24 md:py-32 min-h-[80vh] flex flex-col justify-center relative">
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="text-center max-w-5xl mx-auto"
      >
        {/* Main Heading */}
        <motion.div variants={textVariant(0)}>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold text-white mb-6 leading-tight"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
          >
            Quantum{' '}
            <motion.span
              className="text-brand-green inline-block relative"
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
              style={{
                rotateX: mousePosition.y * 0.3,
                rotateY: mousePosition.x * 0.3,
              }}
            >
              Insights
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.p
          variants={fadeIn('up', 0.2)}
          className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Exploring the intersection of design, technology, and creative thinking.
          <br />
          <span className="text-brand-green/80">Where ideas become reality.</span>
        </motion.p>

        {/* Tagline */}
        <motion.div
          variants={fadeIn('up', 0.3)}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <span className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 text-gray-300 text-sm font-medium backdrop-blur-sm">
            Design
          </span>
          <span className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 text-gray-300 text-sm font-medium backdrop-blur-sm">
            Technology
          </span>
          <span className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 text-gray-300 text-sm font-medium backdrop-blur-sm">
            Creativity
          </span>
          <span className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 text-gray-300 text-sm font-medium backdrop-blur-sm">
            Innovation
          </span>
        </motion.div>

        {/* Category Pills */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        >
          {categories.map((category, index) => (
            <motion.a
              key={category.name}
              href={`#/category/${encodeURIComponent(category.name)}`}
              className="group relative px-5 py-2.5 bg-gradient-to-br from-gray-900/80 to-gray-900/50 border border-gray-700/30 backdrop-blur-sm overflow-hidden cursor-hover"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.05 }}
            >
              {/* Hover effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-brand-green/0 to-brand-green/0 group-hover:from-brand-green/10 group-hover:to-brand-green/5 transition-all duration-300"
              />

              {/* Glowing border on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 border border-brand-green/30" />
              </div>

              <span className="relative flex items-center gap-2 text-gray-300 group-hover:text-brand-green transition-colors duration-300">
                <span className="text-lg">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
                <span className="text-xs bg-brand-green/10 text-brand-green px-2 py-0.5 rounded-full">
                  {category.count}
                </span>
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          className="mt-16 flex flex-col items-center"
        >
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">Scroll to Explore</p>
          <motion.div
            className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center pt-2"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <motion.div
              className="w-1.5 h-2 bg-brand-green rounded-full"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
