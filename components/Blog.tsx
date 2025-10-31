import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlogPostCard from './BlogPostCard';
import { blogData } from '../data/blogData';
import { fadeIn, staggerContainer } from '../utils/animations';

interface BlogProps {
  filterCategory?: string;
}

const Blog: React.FC<BlogProps> = ({ filterCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Update selected category when filterCategory changes
  useEffect(() => {
    if (filterCategory) {
      setSelectedCategory(filterCategory);
    } else {
      setSelectedCategory('All');
    }
  }, [filterCategory]);

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

  // Get featured post (first post or random)
  const featuredPost = blogData[0];
  const regularPosts = filteredPosts.filter(post => post.id !== featuredPost.id);

  return (
    <section id="blog" className="py-12 animate-fade-in">
      <div className="container mx-auto px-6">
        {/* Featured Post Section */}
        {!filterCategory && !searchQuery && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-orbitron font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-brand-green">✦</span>
              Featured Article
            </h2>
            <motion.a
              href={`#/post/${featuredPost.id}`}
              className="group block bg-gradient-to-br from-gray-900/80 to-gray-900/50 border border-gray-700/30 overflow-hidden cursor-hover"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative overflow-hidden h-64 md:h-96">
                  <motion.img
                    src={featuredPost.imageUrl}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-brand-green text-dark-bg text-xs font-bold uppercase tracking-wider">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-4 group-hover:text-brand-green transition-colors duration-300">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <img
                      src={featuredPost.author.avatarUrl}
                      alt={featuredPost.author.name}
                      className="w-10 h-10 rounded-full border-2 border-gray-700"
                    />
                    <div>
                      <p className="text-gray-300 font-medium">{featuredPost.author.name}</p>
                      <p>{featuredPost.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          </motion.div>
        )}

        {/* Section Header */}
        <motion.div
          className="mb-12"
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={fadeIn('down', 0)}
            className="flex items-center justify-between mb-8"
          >
            <h2 className="text-4xl font-orbitron font-bold text-white flex items-center gap-3">
              {filterCategory ? (
                <>
                  <span className="text-brand-green">✦</span>
                  {filterCategory}
                </>
              ) : (
                <>
                  <span className="text-brand-green">✦</span>
                  Latest Articles
                </>
              )}
            </h2>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            variants={fadeIn('up', 0.2)}
            className="max-w-2xl mb-6"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-500 focus:border-brand-green focus:outline-none transition-colors"
              />
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  if (category === 'All') {
                    window.location.hash = '';
                  } else {
                    window.location.hash = `/category/${encodeURIComponent(category)}`;
                  }
                }}
                className={`px-4 py-2 font-medium transition-all duration-300 transform hover:scale-105 text-sm ${
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
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-500 text-sm">
            {filteredPosts.length === featuredPost && !filterCategory && !searchQuery ? regularPosts.length : filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
            {searchQuery && ` matching "${searchQuery}"`}
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
            {(filterCategory || searchQuery ? filteredPosts : regularPosts).map((post, index) => (
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
                window.location.hash = '';
              }}
              className="px-8 py-4 bg-brand-green text-dark-bg font-orbitron font-bold hover:bg-green-400 transition-colors"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blog;
