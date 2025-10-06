import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PlayIcon } from './IconComponents';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';
import { fadeIn, staggerContainer, textVariant } from '../utils/animations';

interface StatCardProps {
  value: number;
  label: string;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, index }) => {
  const animatedValue = useAnimatedCounter(value, 2000);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      variants={fadeIn('up', index * 0.1)}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/50 p-6 border border-gray-700/30 backdrop-blur-sm group cursor-hover overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-brand-green/0 to-brand-green/0 group-hover:from-brand-green/5 group-hover:to-brand-green/10 transition-all duration-500"
      />

      {/* Glowing border effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 border border-brand-green/50 animate-pulse" />
      </div>

      <div className="relative">
        <p className="font-orbitron text-4xl lg:text-5xl font-bold text-brand-green mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
          {animatedValue}+
        </p>
        <p className="text-gray-400 text-sm uppercase tracking-widest group-hover:text-gray-300 transition-colors">
          {label}
        </p>
      </div>
    </motion.div>
  );
};

const Hero: React.FC = () => {
  const vapiRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (vapiRef.current && !vapiRef.current.querySelector('vapi-widget')) {
      const vapiWidget = document.createElement('vapi-widget');
      vapiWidget.setAttribute('public-key', '909c7669-6d9b-42f5-8302-48fa39cec9d1');
      vapiWidget.setAttribute('assistant-id', '91b276f7-9f3e-4c2a-ad98-5b61ca820f72');
      vapiWidget.setAttribute('mode', 'voice');
      vapiWidget.setAttribute('theme', 'dark');
      vapiWidget.setAttribute('base-bg-color', '#000000');
      vapiWidget.setAttribute('accent-color', '#14B8A6');
      vapiWidget.setAttribute('cta-button-color', '#000000');
      vapiWidget.setAttribute('cta-button-text-color', '#ffffff');
      vapiWidget.setAttribute('border-radius', 'large');
      vapiWidget.setAttribute('size', 'full');
      vapiWidget.setAttribute('position', 'bottom-right');
      vapiWidget.setAttribute('title', 'TALK WITH AI');
      vapiWidget.setAttribute('start-button-text', 'Start');
      vapiWidget.setAttribute('end-button-text', 'End Call');
      vapiWidget.setAttribute('chat-first-message', 'Hey, How can I help you today?');
      vapiWidget.setAttribute('chat-placeholder', 'Type your message...');
      vapiWidget.setAttribute('voice-show-transcript', 'true');
      vapiWidget.setAttribute('consent-required', 'true');
      vapiWidget.setAttribute('consent-title', 'Terms and conditions');
      vapiWidget.setAttribute('consent-content', 'By clicking "Agree," and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service.');
      vapiWidget.setAttribute('consent-storage-key', 'vapi_widget_consent');
      vapiRef.current.appendChild(vapiWidget);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  return (
    <section ref={ref} className="container mx-auto px-6 py-32 min-h-screen flex flex-col justify-center relative">
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="text-center md:text-left">
          <motion.div variants={textVariant(0)}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold text-white mb-6 leading-tight">
              Designing the{' '}
              <motion.span
                className="text-brand-green inline-block"
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
                Future
              </motion.span>{' '}
              of Digital Interaction
            </h1>
          </motion.div>

          <motion.p
            variants={fadeIn('up', 0.2)}
            className="text-lg text-gray-400 mb-10 max-w-xl mx-auto md:mx-0"
          >
            We are Quantum Canvas, a creative agency specializing in crafting stunning visuals and intuitive user experiences that push boundaries and define tomorrow.
          </motion.p>

          <motion.div
            variants={fadeIn('up', 0.3)}
            className="flex justify-center md:justify-start space-x-4"
          >
            <motion.a
              href="#projects"
              className="relative bg-brand-green text-dark-bg px-8 py-3 font-bold font-orbitron overflow-hidden group cursor-hover"
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
              <span className="relative z-10">View Work</span>
            </motion.a>

            <motion.a
              href="#contact"
              className="relative bg-gray-800/50 text-white px-8 py-3 font-bold font-orbitron border border-gray-700 overflow-hidden group cursor-hover backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: 'rgba(0, 255, 153, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-brand-green/10"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">Contact Us</span>
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn('left', 0.4)}
          className="relative group cursor-hover"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 blur opacity-25 group-hover:opacity-50 transition duration-1000 animate-pulse" />
          <motion.div
            className="relative bg-dark-bg aspect-video flex items-center justify-center p-2 overflow-hidden"
            style={{
              rotateX: mousePosition.y * 0.5,
              rotateY: mousePosition.x * 0.5,
            }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <motion.img
              src="https://picsum.photos/seed/design/1280/720"
              alt="Video Placeholder"
              className="w-full h-full object-cover opacity-30"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-black/50" />

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(0, 255, 153, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 255, 153, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px',
                }}
              />
            </div>

            <motion.div
              className="absolute w-24 h-24 bg-brand-green/20 rounded-full flex items-center justify-center cursor-pointer z-10"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="w-20 h-20 bg-brand-green/50 rounded-full flex items-center justify-center"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(0, 255, 153, 0.3)',
                    '0 0 40px rgba(0, 255, 153, 0.6)',
                    '0 0 20px rgba(0, 255, 153, 0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <PlayIcon className="w-10 h-10 text-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <div ref={vapiRef}></div>

      <motion.div
        variants={staggerContainer(0.1, 0.5)}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center"
      >
        <StatCard value={150} label="Projects Completed" index={0} />
        <StatCard value={85} label="Happy Clients" index={1} />
        <StatCard value={12} label="Design Awards" index={2} />
        <StatCard value={8} label="Years of Experience" index={3} />
      </motion.div>
    </section>
  );
};

export default Hero;