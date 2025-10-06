import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projectsData';
import { staggerContainer, textVariant, fadeIn } from '../utils/animations';

const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Show only first 6 projects on home page
  const featuredProjects = projectsData.slice(0, 6);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div variants={textVariant(0)}>
            <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-white mb-6 relative inline-block bg-gradient-to-r from-white via-brand-green to-white bg-clip-text text-transparent">
              Featured Work
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-green to-transparent"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </h2>
          </motion.div>

          <motion.p
            variants={fadeIn('up', 0.2)}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Real results for real businesses. From <span className="text-brand-green font-semibold">branding to web design</span>, we help small businesses stand out.
          </motion.p>

          <motion.div
            variants={fadeIn('up', 0.3)}
            className="flex justify-center gap-6"
          >
            <div className="text-center">
              <div className="text-4xl font-orbitron font-bold text-brand-green">{projectsData.length}+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-orbitron font-bold text-brand-green">{new Set(projectsData.map(p => p.client)).size}+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-orbitron font-bold text-brand-green">100%</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.15, 0.3)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} delay={index} />
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#/projects"
            className="inline-block px-10 py-5 bg-brand-green text-dark-bg font-orbitron font-bold text-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-brand-green/50"
          >
            View All Projects →
          </a>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl"
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

export default Projects;
