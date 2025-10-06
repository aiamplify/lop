import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, slideIn, scaleIn } from '../utils/animations';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const handleNavigateToHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '';
  };

  const stats = [
    { label: 'Projects Delivered', value: '150+', icon: '🚀' },
    { label: 'Happy Clients', value: '80+', icon: '😊' },
    { label: 'Years Experience', value: '5+', icon: '⭐' },
    { label: 'Design Awards', value: '12', icon: '🏆' }
  ];

  const values = [
    {
      title: 'Authenticity',
      description: 'We create designs that reflect your true brand identity, not cookie-cutter templates.',
      icon: '✨'
    },
    {
      title: 'Innovation',
      description: 'Leveraging AI and cutting-edge tools to deliver faster without sacrificing quality.',
      icon: '🔬'
    },
    {
      title: 'Partnership',
      description: 'Your success is our success. We work with you, not just for you.',
      icon: '🤝'
    },
    {
      title: 'Excellence',
      description: 'Every pixel matters. We obsess over details so you can focus on growing your business.',
      icon: '💎'
    }
  ];

  const timeline = [
    {
      year: '2019',
      title: 'The Beginning',
      description: 'Started as a freelance designer helping local businesses with logo design and branding.'
    },
    {
      year: '2021',
      title: 'Going Digital',
      description: 'Expanded services to include social media graphics and digital marketing materials.'
    },
    {
      year: '2023',
      title: 'AI Integration',
      description: 'Pioneered AI-assisted design workflows, dramatically reducing turnaround times.'
    },
    {
      year: '2025',
      title: 'Quantum Canvas',
      description: 'Launched as a full-service design studio empowering SMBs with enterprise-level creativity.'
    }
  ];

  return (
    <section id="about" className="py-24 animate-fade-in overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#" onClick={handleNavigateToHome} className="text-brand-green hover:underline mb-8 inline-block font-orbitron">
            &larr; Back to Home
          </a>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate="show"
        >
          <motion.h2
            variants={fadeIn('down', 0)}
            className="text-5xl md:text-7xl font-orbitron font-bold text-white mb-6 bg-gradient-to-r from-white via-brand-green to-white bg-clip-text text-transparent"
          >
            About Quantum Canvas
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.2)}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Where <span className="text-brand-green font-bold">creativity meets technology</span> to amplify your brand and elevate your impact.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32"
          variants={staggerContainer(0.1, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={scaleIn(index * 0.1)}
              className="text-center p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50 hover:border-brand-green/50 transition-all duration-300 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-orbitron font-bold text-brand-green mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Who We Are */}
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center mb-32"
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={slideIn('left', 'spring', 0, 0.8)} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 blur opacity-25 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
            <div className="relative bg-dark-bg p-2 overflow-hidden">
              <img src="https://picsum.photos/seed/about/800/600" alt="Quantum Canvas Team" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </motion.div>
          <motion.div variants={slideIn('right', 'spring', 0.2, 0.8)} className="text-gray-300 text-lg leading-relaxed space-y-6">
            <h3 className="text-4xl font-orbitron text-white mb-6 bg-gradient-to-r from-white to-brand-green bg-clip-text text-transparent">Who We Are</h3>
            <p className="text-xl">
              Quantum Canvas helps <span className="text-brand-green font-semibold">small- to medium-sized businesses</span> stand out with bold, strategic design. We specialize in branding, logo design, marketing graphics, social media creatives, and AI-powered design solutions.
            </p>
            <p className="text-xl">
              Our mission is to <span className="text-brand-green font-semibold">amplify business potential</span> with design that connects, inspires trust, and drives results.
            </p>
            <div className="border-l-4 border-brand-green pl-6 py-4 bg-gray-900/30">
              <p className="text-lg italic text-gray-400">
                "We believe every business deserves world-class design, regardless of budget. That's why we've built a studio that combines human creativity with AI efficiency."
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          className="mb-32"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h3
            variants={fadeIn('down', 0)}
            className="text-4xl md:text-5xl font-orbitron text-white text-center mb-16"
          >
            Our Core Values
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeIn('up', index * 0.1)}
                className="p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50 hover:border-brand-green/50 transition-all duration-300 group hover:transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h4 className="text-2xl font-orbitron text-brand-green mb-4">{value.title}</h4>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="mb-32"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h3
            variants={fadeIn('down', 0)}
            className="text-4xl md:text-5xl font-orbitron text-white text-center mb-16"
          >
            Our Journey
          </motion.h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-brand-green via-green-600 to-brand-green/20"></div>

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={fadeIn(index % 2 === 0 ? 'right' : 'left', index * 0.1)}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50 hover:border-brand-green/50 transition-all duration-300 inline-block">
                      <h4 className="text-3xl font-orbitron text-brand-green mb-2">{item.year}</h4>
                      <h5 className="text-xl font-bold text-white mb-3">{item.title}</h5>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-brand-green rounded-full border-4 border-dark-bg z-10 flex-shrink-0 animate-pulse"></div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* About Mike */}
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center mb-32"
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={slideIn('left', 'spring', 0, 0.8)} className="text-gray-300 text-lg leading-relaxed space-y-6 order-2 md:order-1">
            <h3 className="text-4xl font-orbitron text-white mb-6 bg-gradient-to-r from-white to-brand-green bg-clip-text text-transparent">Meet Mike Eckmeier</h3>
            <p className="text-xl">
              Mike is the <span className="text-brand-green font-semibold">founder and creative director</span> of Quantum Canvas. He blends traditional design principles with cutting-edge AI tools to deliver high-quality, fast results for entrepreneurs and local businesses.
            </p>
            <p className="text-xl">
              Passionate about making great design accessible, Mike believes design is more than visuals—it's about <span className="text-brand-green font-semibold">helping businesses grow with confidence</span>.
            </p>
            <div className="bg-gray-900/50 border border-gray-700/50 p-6">
              <p className="text-gray-400 mb-4 flex items-start gap-3">
                <span className="text-2xl">🐕</span>
                <span>Personal note: Proud dog dad to a 7-year-old Chinese Shar-Pei named Wrinkles and a 2-month-old Husky named Aurora. They're the unofficial office mood boosters!</span>
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <a
                href="https://linkedin.com/in/mike-eckmeier/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green text-dark-bg font-orbitron font-bold hover:bg-green-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
          <motion.div variants={slideIn('right', 'spring', 0.2, 0.8)} className="relative group order-1 md:order-2">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 blur opacity-25 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
            <div className="relative bg-dark-bg p-2 overflow-hidden">
              <img src="https://picsum.photos/seed/founder/800/600" alt="Mike Eckmeier" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center bg-gradient-to-r from-gray-900/90 via-gray-800/70 to-gray-900/90 p-16 border-2 border-gray-700/50 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-green-400/10 animate-pulse"></div>
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-orbitron text-white mb-6">Ready to Amplify Your Brand?</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              If your visuals aren't telling your story or winning you customers, let's fix that. <span className="text-brand-green font-semibold">Your brand deserves better.</span>
            </p>
            <a
              href="#contact"
              className="inline-block px-10 py-5 bg-brand-green text-dark-bg font-orbitron font-bold text-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-brand-green/50"
            >
              Start Your Next Project →
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;