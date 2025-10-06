import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import BlogPostCard from './BlogPostCard';
import { blogData } from '../data/blogData';
import { fadeIn, staggerContainer } from '../utils/animations';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleNavigateToHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '';
  };

  // Extract unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(blogData.map(post => post.category)));
    return ['All', ...uniqueCategories];
  }, []);

  // Filter posts based on category and search
  const filteredPosts = useMemo(() => {
    return blogData.filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch = searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="blog" className="py-24 animate-fade-in">
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
          className="text-center mb-16"
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate="show"
        >
          <motion.h2
            variants={fadeIn('down', 0)}
            className="text-5xl md:text-7xl font-orbitron font-bold text-white mb-6 bg-gradient-to-r from-white via-brand-green to-white bg-clip-text text-transparent"
          >
            Insights & Inspiration
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.2)}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            From our design desk to your screen. Explore trends, tutorials, and our thoughts on the future of design.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-gray-900/50 border-2 border-gray-700/50 text-white placeholder-gray-500 focus:border-brand-green focus:outline-none transition-colors font-orbitron"
              />
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 font-orbitron font-bold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-brand-green text-dark-bg shadow-lg shadow-brand-green/30'
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
          className="mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-400 font-orbitron">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </motion.div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            animate="show"
          >
            {filteredPosts.map((post, index) => (
              <BlogPostCard key={post.id} post={post} delay={index * 100} />
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
            <h3 className="text-3xl font-orbitron text-white mb-4">No articles found</h3>
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

        {/* Newsletter CTA */}
        <motion.div
          className="mt-24 text-center bg-gradient-to-r from-gray-900/90 via-gray-800/70 to-gray-900/90 p-16 border-2 border-gray-700/50 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-green-400/10 animate-pulse"></div>
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-orbitron text-white mb-6">Stay Inspired</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Get the latest design insights, tutorials, and industry trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-6 py-4 bg-gray-900/80 border-2 border-gray-700/50 text-white placeholder-gray-500 focus:border-brand-green focus:outline-none transition-colors font-orbitron"
              />
              <button className="px-8 py-4 bg-brand-green text-dark-bg font-orbitron font-bold hover:bg-green-400 transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;