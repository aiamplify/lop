import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useInView } from 'react-intersection-observer';
import type { Project } from '../types';
import { fadeIn } from '../utils/animations';

interface ProjectCardProps {
  project: Project;
  delay?: number;
  viewMode?: 'grid' | 'list';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay = 0, viewMode = 'grid' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // List View Layout
  if (viewMode === 'list') {
    return (
      <motion.div
        ref={ref}
        variants={fadeIn('up', delay * 0.05)}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
      >
        <a
          href={`#/projects/${project.id}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="block relative bg-gradient-to-br from-gray-900/80 to-gray-800/50 border-2 border-gray-700/50 group overflow-hidden hover:border-brand-orange/50 transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row gap-6 p-6">
            {/* Image */}
            <div className="relative overflow-hidden md:w-80 h-48 flex-shrink-0">
              <motion.img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <span className="absolute top-3 left-3 bg-brand-orange text-dark-bg text-xs font-bold font-heading uppercase px-3 py-1">
                {project.category}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-white mb-3 font-heading group-hover:text-brand-orange transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-lg">{project.description}</p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                  {project.client && (
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      <span>{project.client}</span>
                    </div>
                  )}
                  {project.date && (
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>{project.date}</span>
                    </div>
                  )}
                </div>

                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-800/50 text-brand-orange border border-brand-orange/30 px-2 py-1 font-heading"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* View Project Arrow */}
              <motion.div
                className="flex items-center gap-2 text-brand-orange font-heading font-bold text-sm mt-4"
                animate={{ x: isHovered ? 10 : 0 }}
                transition={{ duration: 0.3 }}
              >
                View Project
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            </div>
          </div>
        </a>
      </motion.div>
    );
  }

  // Grid View Layout (Original)
  return (
    <motion.div
      ref={ref}
      variants={fadeIn('up', delay * 0.1)}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className="cursor-hover"
    >
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        scale={1.02}
        transitionSpeed={2500}
        glareEnable={true}
        glareMaxOpacity={0.1}
        glareColor="#00ff99"
        glarePosition="all"
        glareBorderRadius="0"
      >
        <a
          href={`#/projects/${project.id}`}
          className="block relative bg-gradient-to-br from-gray-900/80 via-gray-900/50 to-gray-900/80 border-2 border-gray-700/30 group overflow-hidden backdrop-blur-sm hover:border-brand-orange/50 transition-all duration-500"
          style={{
            background: 'linear-gradient(135deg, rgba(17, 17, 17, 0.8) 0%, rgba(17, 17, 17, 0.5) 50%, rgba(17, 17, 17, 0.8) 100%)',
          }}
        >
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 via-transparent to-brand-orange/5" />
          </div>

          <div className="relative overflow-hidden">
            <motion.img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-64 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.8 }}
            />

            {/* Category Badge */}
            <span className="absolute top-4 left-4 bg-brand-orange text-dark-bg text-xs font-bold font-heading uppercase px-3 py-1.5 shadow-lg">
              {project.category}
            </span>
          </div>

          <div className="relative p-6">
            <h3 className="text-2xl font-bold text-white mb-3 font-heading group-hover:text-brand-orange transition-colors duration-300 line-clamp-2">
              {project.title}
            </h3>
            <p className="text-gray-400 leading-relaxed line-clamp-2 mb-4">{project.description}</p>

            {/* Client Info */}
            {project.client && (
              <p className="text-sm text-gray-500 font-heading mb-2">
                Client: <span className="text-brand-orange">{project.client}</span>
              </p>
            )}

            {/* Animated bottom border */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-brand-orange to-green-400"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </a>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
