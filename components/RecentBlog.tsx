import React from 'react';
import { blogData } from '../data/blogData';
import BlogPostCard from './BlogPostCard';

const RecentBlog: React.FC = () => {
  const recentPosts = blogData.slice(0, 3);

  const handleViewAll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '#/blog';
  };

  return (
    <section id="recent-blog" className="py-24 bg-black/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">Latest Insights</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Stay updated with our latest thoughts on design, technology, and creativity.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <BlogPostCard key={post.id} post={post} delay={index * 100} />
          ))}
        </div>
        <div className="text-center mt-16">
          <a
            href="#/blog"
            onClick={handleViewAll}
            className="bg-transparent border-2 border-brand-green text-brand-green px-8 py-3 font-bold font-orbitron hover:bg-brand-green hover:text-dark-bg transition-all duration-300"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;