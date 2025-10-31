import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Service } from '../types';
import { fadeIn } from '../utils/animations';

interface ServiceCardProps {
  service: Service;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, delay = 0 }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = `#/services/${service.id}`;
  };

  return (
    <motion.a
      href={`#/services/${service.id}`}
      onClick={handleClick}
      ref={ref}
      variants={fadeIn('up', delay * 0.1)}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className="block group cursor-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative overflow-hidden h-[500px] border border-gray-700/30 backdrop-blur-sm"
        whileHover={{ y: -8, borderColor: 'rgba(0, 255, 153, 0.5)' }}
        transition={{ duration: 0.3 }}
      >
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${service.imageUrl})`,
          }}
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.6 }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90" />

        {/* Animated Overlay on Hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: isHovered ? '100%' : '-100%' }}
          transition={{ duration: 0.8 }}
        />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-8">
          <motion.div
            className="mb-3"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: isHovered ? 1 : 0.7 }}
          >
            <span className="text-brand-orange text-sm font-heading tracking-wider uppercase">
              {service.category}
            </span>
          </motion.div>

          <motion.h3
            className="text-3xl font-heading font-bold text-white mb-3"
            animate={{
              color: isHovered ? '#00ff99' : '#ffffff',
            }}
            transition={{ duration: 0.3 }}
          >
            {service.title}
          </motion.h3>

          <p className="text-gray-300 leading-relaxed">{service.description}</p>

          {/* Animated bottom accent */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange to-green-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ transformOrigin: 'left' }}
          />
        </div>

        {/* Corner Accent */}
        <motion.div
          className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-brand-orange/0"
          animate={{
            borderColor: isHovered ? 'rgba(0, 255, 153, 0.8)' : 'rgba(0, 255, 153, 0)',
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.a>
  );
};

export default ServiceCard;
