import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projectsData';
import { fadeIn, staggerContainer } from '../utils/animations';

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handleHashNav = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    window.location.hash = hash;
  };

  // Extract unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(projectsData.map(project => project.category)));
    return ['All', ...uniqueCategories.sort()];
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch = searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.client?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Stats
  const stats = [
    { label: 'Total Projects', value: projectsData.length.toString(), icon: '🎨' },
    { label: 'Happy Clients', value: new Set(projectsData.map(p => p.client)).size.toString(), icon: '😊' },
    { label: 'Categories', value: categories.length - 1, icon: '📁' },
    { label: 'Success Rate', value: '100%', icon: '✨' }
  ];

  return (
    <section className="py-24 bg-black/30">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <a
            href="#"
            onClick={(e) => handleHashNav(e, '')}
            className="bg-transparent border-2 border-brand-orange text-brand-orange px-6 py-3 hover:bg-brand-orange hover:text-dark-bg transition-all duration-300 font-heading font-bold inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Home
          </a>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={fadeIn('down', 0)}
            className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 bg-gradient-to-r from-white via-brand-orange to-white bg-clip-text text-transparent"
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            variants={fadeIn('up', 0.2)}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Real results for real businesses. Explore our work across <span className="text-brand-orange font-semibold">branding, design, and digital experiences</span>.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50 p-6 text-center hover:border-brand-orange/50 transition-all duration-300"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-heading font-bold text-brand-orange mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Filters Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-gray-900/50 border-2 border-gray-700/50 text-white placeholder-gray-500 focus:border-brand-orange focus:outline-none transition-colors font-heading"
              />
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Filters & View Toggle */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 font-heading font-bold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-brand-orange text-dark-bg shadow-lg shadow-brand-orange/30'
                      : 'bg-gray-900/50 text-gray-300 border border-gray-700/50 hover:border-brand-orange/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2 bg-gray-900/50 border border-gray-700/50 p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 font-heading font-bold transition-all duration-300 ${
                  viewMode === 'grid' ? 'bg-brand-orange text-dark-bg' : 'text-gray-400 hover:text-white'
                }`}
                aria-label="Grid view"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 font-heading font-bold transition-all duration-300 ${
                  viewMode === 'list' ? 'bg-brand-orange text-dark-bg' : 'text-gray-400 hover:text-white'
                }`}
                aria-label="List view"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-gray-400 font-heading">
            {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} found
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </motion.div>

        {/* Projects Grid/List */}
        {filteredProjects.length > 0 ? (
          <motion.div
            className={viewMode === 'grid'
              ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'grid grid-cols-1 gap-6 max-w-5xl mx-auto'
            }
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            animate="show"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} delay={index * 100} viewMode={viewMode} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-3xl font-heading text-white mb-4">No projects found</h3>
            <p className="text-gray-400 mb-8">
              Try adjusting your search or category filters
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-8 py-4 bg-brand-orange text-dark-bg font-heading font-bold hover:bg-green-400 transition-colors"
            >
              Reset Filters
            </button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          className="mt-24 text-center bg-gradient-to-r from-gray-900/90 via-gray-800/70 to-gray-900/90 p-16 border-2 border-gray-700/50 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-green-400/10 animate-pulse"></div>
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-heading text-white mb-6">Ready for Your Own Success Story?</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Let's create something extraordinary together. Your project could be our next showcase.
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
    </section>
  );
};

export default ProjectsPage;
