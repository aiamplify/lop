import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/animations';

interface ResourceItem {
  id: number;
  title: string;
  description: string;
  category: string;
  thumbnail?: string;
  downloadUrl?: string;
  type: 'video' | 'pdf' | 'template' | 'image' | 'prompt';
  tags: string[];
  duration?: string;
  fileSize?: string;
}

const Resources: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Mock data for resources
  const resources: ResourceItem[] = [
    // Videos
    {
      id: 1,
      title: 'AI Automation for Construction Projects',
      description: 'Learn how to automate repetitive tasks in construction management using AI tools.',
      category: 'Video',
      type: 'video',
      thumbnail: 'https://picsum.photos/seed/video1/800/450',
      downloadUrl: '#',
      tags: ['AI', 'Automation', 'Construction'],
      duration: '15:30',
    },
    {
      id: 2,
      title: 'Getting Started with N8N Workflows',
      description: 'Complete tutorial on setting up your first N8N automation workflow for contractor management.',
      category: 'Video',
      type: 'video',
      thumbnail: 'https://picsum.photos/seed/video2/800/450',
      downloadUrl: '#',
      tags: ['N8N', 'Workflow', 'Tutorial'],
      duration: '22:45',
    },
    {
      id: 3,
      title: 'ChatGPT for Project Documentation',
      description: 'Master the art of using ChatGPT to generate professional project documentation.',
      category: 'Video',
      type: 'video',
      thumbnail: 'https://picsum.photos/seed/video3/800/450',
      downloadUrl: '#',
      tags: ['ChatGPT', 'Documentation', 'AI'],
      duration: '18:20',
    },
    // PDFs
    {
      id: 4,
      title: 'AI Tools Handbook for Contractors',
      description: 'Comprehensive guide covering 50+ AI tools specifically designed for construction and contracting businesses.',
      category: 'PDF',
      type: 'pdf',
      thumbnail: 'https://picsum.photos/seed/pdf1/800/450',
      downloadUrl: '#',
      tags: ['Guide', 'AI Tools', 'Reference'],
      fileSize: '12.5 MB',
    },
    {
      id: 5,
      title: 'Prompt Engineering Masterclass',
      description: 'Complete guide to writing effective prompts for AI models to get the best results for your business.',
      category: 'PDF',
      type: 'pdf',
      thumbnail: 'https://picsum.photos/seed/pdf2/800/450',
      downloadUrl: '#',
      tags: ['Prompts', 'Guide', 'AI'],
      fileSize: '8.2 MB',
    },
    {
      id: 6,
      title: 'Contract Templates & AI Optimization',
      description: 'Legal contract templates optimized for AI processing and document management systems.',
      category: 'PDF',
      type: 'pdf',
      thumbnail: 'https://picsum.photos/seed/pdf3/800/450',
      downloadUrl: '#',
      tags: ['Contracts', 'Legal', 'Templates'],
      fileSize: '5.8 MB',
    },
    // N8N Templates
    {
      id: 7,
      title: 'Lead Generation Automation',
      description: 'N8N workflow template to automatically capture and qualify leads from multiple sources.',
      category: 'N8N Template',
      type: 'template',
      thumbnail: 'https://picsum.photos/seed/n8n1/800/450',
      downloadUrl: '#',
      tags: ['N8N', 'Lead Gen', 'Automation'],
    },
    {
      id: 8,
      title: 'Invoice Processing & Payment Tracking',
      description: 'Automated workflow for processing invoices, sending reminders, and tracking payments.',
      category: 'N8N Template',
      type: 'template',
      thumbnail: 'https://picsum.photos/seed/n8n2/800/450',
      downloadUrl: '#',
      tags: ['N8N', 'Finance', 'Automation'],
    },
    {
      id: 9,
      title: 'Client Communication Hub',
      description: 'Centralized communication workflow integrating email, SMS, and project management tools.',
      category: 'N8N Template',
      type: 'template',
      thumbnail: 'https://picsum.photos/seed/n8n3/800/450',
      downloadUrl: '#',
      tags: ['N8N', 'Communication', 'CRM'],
    },
    {
      id: 10,
      title: 'Project Status Reporting',
      description: 'Automatically generate and send weekly project status reports to clients and stakeholders.',
      category: 'N8N Template',
      type: 'template',
      thumbnail: 'https://picsum.photos/seed/n8n4/800/450',
      downloadUrl: '#',
      tags: ['N8N', 'Reporting', 'Project Management'],
    },
    // Prompts
    {
      id: 11,
      title: 'Bid Proposal Generator Prompts',
      description: 'Collection of ChatGPT prompts for creating competitive and professional bid proposals.',
      category: 'Prompt Library',
      type: 'prompt',
      downloadUrl: '#',
      tags: ['Prompts', 'Bidding', 'ChatGPT'],
    },
    {
      id: 12,
      title: 'Safety Inspection Report Prompts',
      description: 'Pre-built prompts for generating thorough safety inspection reports and checklists.',
      category: 'Prompt Library',
      type: 'prompt',
      downloadUrl: '#',
      tags: ['Prompts', 'Safety', 'Compliance'],
    },
    {
      id: 13,
      title: 'Client Email Response Templates',
      description: 'AI prompts for drafting professional responses to common client inquiries and requests.',
      category: 'Prompt Library',
      type: 'prompt',
      downloadUrl: '#',
      tags: ['Prompts', 'Communication', 'Email'],
    },
    {
      id: 14,
      title: 'Material Cost Estimation Prompts',
      description: 'Prompts designed to help estimate material costs and create accurate project budgets.',
      category: 'Prompt Library',
      type: 'prompt',
      downloadUrl: '#',
      tags: ['Prompts', 'Budgeting', 'Estimation'],
    },
    // Images & Graphics
    {
      id: 15,
      title: 'AI Workflow Diagrams Pack',
      description: 'High-resolution infographics showing AI automation workflows for contractors.',
      category: 'Graphics',
      type: 'image',
      thumbnail: 'https://picsum.photos/seed/graphic1/800/450',
      downloadUrl: '#',
      tags: ['Graphics', 'Diagrams', 'Visual'],
      fileSize: '25.3 MB',
    },
    {
      id: 16,
      title: 'Social Media Graphics Bundle',
      description: 'Editable Canva templates for promoting your AI-powered contractor services.',
      category: 'Graphics',
      type: 'image',
      thumbnail: 'https://picsum.photos/seed/graphic2/800/450',
      downloadUrl: '#',
      tags: ['Graphics', 'Marketing', 'Social Media'],
      fileSize: '18.7 MB',
    },
  ];

  const categories = ['All', 'Video', 'PDF', 'N8N Template', 'Prompt Library', 'Graphics'];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getIconForType = (type: string) => {
    switch (type) {
      case 'video':
        return '🎥';
      case 'pdf':
        return '📄';
      case 'template':
        return '⚙️';
      case 'prompt':
        return '💬';
      case 'image':
        return '🖼️';
      default:
        return '📦';
    }
  };

  return (
    <section className="py-24 animate-fade-in">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={fadeIn('down', 0)}
            className="text-5xl md:text-7xl font-orbitron font-bold text-white mb-6"
          >
            AI Resources for{' '}
            <span className="text-brand-green">Contractors</span>
          </motion.h1>
          <motion.p
            variants={fadeIn('up', 0.2)}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Everything you need to leverage AI in your contracting business. From automation templates to training videos and ready-to-use prompts.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/50 border border-gray-700/30 p-6">
              <p className="text-4xl font-orbitron font-bold text-brand-green mb-2">{resources.filter(r => r.type === 'video').length}</p>
              <p className="text-gray-400 text-sm">Video Tutorials</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/50 border border-gray-700/30 p-6">
              <p className="text-4xl font-orbitron font-bold text-brand-green mb-2">{resources.filter(r => r.type === 'template').length}</p>
              <p className="text-gray-400 text-sm">N8N Templates</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/50 border border-gray-700/30 p-6">
              <p className="text-4xl font-orbitron font-bold text-brand-green mb-2">{resources.filter(r => r.type === 'prompt').length}</p>
              <p className="text-gray-400 text-sm">Prompt Libraries</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/50 border border-gray-700/30 p-6">
              <p className="text-4xl font-orbitron font-bold text-brand-green mb-2">{resources.filter(r => r.type === 'pdf').length}</p>
              <p className="text-gray-400 text-sm">PDF Guides</p>
            </div>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-500 focus:border-brand-green focus:outline-none transition-colors"
              />
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={fadeIn('up', 0.5)}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-brand-green text-dark-bg shadow-lg shadow-brand-green/20'
                    : 'bg-gray-900/50 text-gray-300 border border-gray-700/50 hover:border-brand-green/50'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-500 text-sm">
            {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'} found
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </motion.div>

        {/* Resources Grid */}
        {filteredResources.length > 0 ? (
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            animate="show"
          >
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                className="group bg-gradient-to-br from-gray-900/80 to-gray-900/50 border border-gray-700/30 overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Thumbnail or Icon */}
                {resource.thumbnail ? (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={resource.thumbnail}
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-brand-green text-dark-bg text-xs font-bold uppercase">
                        {resource.category}
                      </span>
                    </div>
                    {resource.duration && (
                      <div className="absolute bottom-4 right-4 bg-dark-bg/80 backdrop-blur-sm text-white text-xs px-2 py-1">
                        ⏱️ {resource.duration}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <span className="text-6xl">{getIconForType(resource.type)}</span>
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-xl font-orbitron font-bold text-white mb-3 group-hover:text-brand-green transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {resource.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs border border-gray-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Download Button */}
                  <div className="flex items-center justify-between">
                    {resource.fileSize && (
                      <span className="text-xs text-gray-500">{resource.fileSize}</span>
                    )}
                    <motion.a
                      href={resource.downloadUrl}
                      className="ml-auto px-4 py-2 bg-brand-green text-dark-bg font-orbitron font-bold text-sm hover:bg-green-400 transition-colors flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {resource.type === 'video' ? 'Watch' : 'Download'}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </motion.a>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-green/0 to-brand-green/0 group-hover:from-brand-green/5 group-hover:to-brand-green/10 transition-all duration-500 pointer-events-none" />
              </motion.div>
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
            <h3 className="text-3xl font-orbitron text-white mb-4">No resources found</h3>
            <p className="text-gray-400 mb-8">
              Try adjusting your search or category filters
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-8 py-4 bg-brand-green text-dark-bg font-orbitron font-bold hover:bg-green-400 transition-colors"
            >
              Reset Filters
            </button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className="mt-24 text-center bg-gradient-to-br from-gray-900/80 to-gray-900/50 p-12 md:p-16 border border-gray-700/30 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-green/5 to-brand-green/10 animate-pulse" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
              Need Custom Resources?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              We create custom AI automation solutions tailored to your contracting business. Get in touch to discuss your specific needs.
            </p>
            <motion.a
              href="#subscribe"
              className="inline-block px-8 py-4 bg-brand-green text-dark-bg font-orbitron font-bold hover:bg-green-400 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;
