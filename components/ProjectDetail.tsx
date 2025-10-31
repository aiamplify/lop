import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../types';
import { fadeIn, slideIn, staggerContainer } from '../utils/animations';
import { projectsData } from '../data/projectsData';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleHashNav = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    window.location.hash = hash;
  };

  // Get related projects (same category, excluding current)
  const relatedProjects = projectsData
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  const allImages = [project.imageUrl, ...(project.images || [])];

  return (
    <article className="py-12 bg-black/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Navigation */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#/projects"
              onClick={(e) => handleHashNav(e, '/projects')}
              className="bg-transparent border-2 border-brand-orange text-brand-orange px-6 py-3 hover:bg-brand-orange hover:text-dark-bg transition-all duration-300 font-heading font-bold inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Projects
            </a>
            <a
              href="#"
              onClick={(e) => handleHashNav(e, '')}
              className="bg-transparent border-2 border-gray-500 text-gray-300 px-6 py-3 hover:bg-gray-600/30 transition-all duration-300 font-heading font-bold inline-flex items-center gap-2"
            >
              Home
            </a>
          </motion.div>

          {/* Header */}
          <motion.header
            className="mb-12"
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={fadeIn('down', 0)}
              className="text-sm text-brand-orange mb-4 font-heading tracking-widest uppercase bg-brand-orange/10 inline-block px-4 py-2"
            >
              {project.category}
            </motion.p>
            <motion.h1
              variants={fadeIn('down', 0.1)}
              className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight bg-gradient-to-r from-white to-brand-orange bg-clip-text text-transparent"
            >
              {project.title}
            </motion.h1>
            <motion.p
              variants={fadeIn('up', 0.2)}
              className="text-2xl text-gray-400 leading-relaxed max-w-3xl"
            >
              {project.description}
            </motion.p>
          </motion.header>

          {/* Project Meta */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            variants={staggerContainer(0.1, 0.3)}
            initial="hidden"
            animate="show"
          >
            {project.client && (
              <motion.div
                variants={fadeIn('up', 0)}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50 p-6"
              >
                <p className="text-sm text-gray-500 font-heading uppercase tracking-wider mb-2">Client</p>
                <p className="text-xl font-bold text-brand-orange">{project.client}</p>
              </motion.div>
            )}
            {project.date && (
              <motion.div
                variants={fadeIn('up', 0.1)}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50 p-6"
              >
                <p className="text-sm text-gray-500 font-heading uppercase tracking-wider mb-2">Date</p>
                <p className="text-xl font-bold text-white">{project.date}</p>
              </motion.div>
            )}
            {project.technologies && project.technologies.length > 0 && (
              <motion.div
                variants={fadeIn('up', 0.2)}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50 p-6"
              >
                <p className="text-sm text-gray-500 font-heading uppercase tracking-wider mb-2">Tools Used</p>
                <p className="text-xl font-bold text-white">{project.technologies.length} Tools</p>
              </motion.div>
            )}
          </motion.div>

          {/* Main Featured Image */}
          <motion.div
            className="mb-12 relative group overflow-hidden border-2 border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <img
              src={allImages[selectedImageIndex]}
              alt={project.title}
              className="w-full h-auto max-h-[600px] object-cover cursor-pointer group-hover:scale-105 transition-transform duration-700"
              onClick={() => setIsLightboxOpen(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/80 text-white px-4 py-2 font-heading text-sm">
              {selectedImageIndex + 1} / {allImages.length}
            </div>
          </motion.div>

          {/* Image Gallery Thumbnails */}
          {allImages.length > 1 && (
            <motion.div
              className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {allImages.map((img, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative overflow-hidden border-2 ${
                    selectedImageIndex === idx ? 'border-brand-orange' : 'border-gray-700/50'
                  } hover:border-brand-orange transition-all duration-300 aspect-square`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={img} alt={`${project.title} ${idx + 1}`} className="w-full h-full object-cover" />
                  {selectedImageIndex === idx && (
                    <div className="absolute inset-0 bg-brand-orange/20" />
                  )}
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Project Description */}
          {project.longDescription && (
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-4xl font-heading font-bold text-white mb-6">Project Overview</h2>
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50 p-8">
                <p className="text-gray-300 text-xl leading-relaxed">{project.longDescription}</p>
              </div>
            </motion.div>
          )}

          {/* Technologies Section */}
          {project.technologies && project.technologies.length > 0 && (
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <h2 className="text-4xl font-heading font-bold text-white mb-6">Technologies & Tools</h2>
              <div className="flex flex-wrap gap-4">
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    key={tech}
                    className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border-2 border-brand-orange/30 text-brand-orange px-6 py-3 font-heading font-bold hover:border-brand-orange hover:bg-brand-orange/10 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + idx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.section>
          )}

          {/* Action Buttons */}
          {(project.liveUrl || project.repoUrl) && (
            <motion.div
              className="flex flex-wrap gap-4 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-brand-orange text-dark-bg px-8 py-4 font-heading font-bold hover:bg-green-400 transition-all duration-300 inline-flex items-center gap-2 transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Live Project
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-transparent border-2 border-gray-500 text-gray-300 px-8 py-4 font-heading font-bold hover:bg-gray-600/30 transition-all duration-300 inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Source Code
                </a>
              )}
            </motion.div>
          )}

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <motion.div
              className="mt-20 pt-12 border-t-2 border-gray-800/50"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-4xl font-heading font-bold text-white mb-8">More in {project.category}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject) => (
                  <a
                    key={relatedProject.id}
                    href={`#/projects/${relatedProject.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.hash = `#/projects/${relatedProject.id}`;
                    }}
                    className="block bg-gradient-to-br from-gray-900/80 to-gray-800/50 border-2 border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 overflow-hidden group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedProject.imageUrl}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <span className="absolute top-3 left-3 bg-brand-orange text-dark-bg text-xs font-bold font-heading uppercase px-2 py-1">
                        {relatedProject.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <h4 className="text-xl font-heading font-bold text-white group-hover:text-brand-orange transition-colors mb-2 line-clamp-2">
                        {relatedProject.title}
                      </h4>
                      <p className="text-sm text-gray-400 line-clamp-2">{relatedProject.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            className="mt-20 text-center bg-gradient-to-r from-gray-900/90 via-gray-800/70 to-gray-900/90 p-16 border-2 border-gray-700/50 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-green-400/10 animate-pulse"></div>
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-heading text-white mb-6">Like What You See?</h3>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                Let's create something amazing for your business. Get in touch today.
              </p>
              <a
                href="#contact"
                className="inline-block px-10 py-5 bg-brand-orange text-dark-bg font-heading font-bold text-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-brand-orange/50"
              >
                Start Your Project →
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-brand-orange transition-colors text-4xl font-bold"
              onClick={() => setIsLightboxOpen(false)}
            >
              ×
            </button>
            <motion.img
              src={allImages[selectedImageIndex]}
              alt={project.title}
              className="max-w-full max-h-full object-contain"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
            {/* Navigation */}
            {allImages.length > 1 && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : allImages.length - 1));
                  }}
                  className="bg-brand-orange text-dark-bg px-6 py-3 font-heading font-bold hover:bg-green-400 transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex((prev) => (prev < allImages.length - 1 ? prev + 1 : 0));
                  }}
                  className="bg-brand-orange text-dark-bg px-6 py-3 font-heading font-bold hover:bg-green-400 transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default ProjectDetail;
