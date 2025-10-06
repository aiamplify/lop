import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ProcessStep } from '../../data/servicesDataOverhauled';
import { fadeIn, staggerContainer } from '../../utils/animations';

interface ProcessTimelineProps {
  steps: ProcessStep[];
  color?: string;
}

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ steps, color = '#00ff99' }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer(0.2, 0.1)}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className="relative py-12"
    >
      {/* Connection Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gray-700 to-transparent hidden md:block" />

      <div className="space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={step.step}
            variants={fadeIn('up', index * 0.2)}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } flex-col md:gap-8`}
          >
            {/* Content */}
            <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
              <motion.div
                className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-6 border border-gray-700/30 backdrop-blur-sm rounded-lg cursor-hover group"
                whileHover={{ scale: 1.02, borderColor: `${color}50` }}
                transition={{ duration: 0.3 }}
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-brand-green to-green-400 rounded-full flex items-center justify-center font-orbitron font-bold text-dark-bg shadow-lg">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="text-4xl mb-3">{step.icon}</div>

                {/* Title */}
                <h4 className="text-2xl font-orbitron font-bold text-white mb-2 group-hover:text-brand-green transition-colors">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">{step.description}</p>

                {/* Hover Glow */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${color}15, transparent)`,
                  }}
                />
              </motion.div>
            </div>

            {/* Center Dot */}
            <motion.div
              className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-brand-green shadow-lg z-10"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
              style={{
                boxShadow: `0 0 20px ${color}`,
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    `0 0 0px ${color}`,
                    `0 0 20px ${color}`,
                    `0 0 0px ${color}`,
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>

            {/* Spacer for alternating layout */}
            <div className="flex-1 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProcessTimeline;
