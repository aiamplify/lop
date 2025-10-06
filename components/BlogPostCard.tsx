import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { BlogPost } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface BlogPostCardProps {
  post: BlogPost;
  delay?: number;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver<HTMLAnchorElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = `#/blog/${post.id}`;
  };

  // Calculate reading time (assuming 200 words per minute)
  const readingTime = Math.ceil(post.content.split(/\s+/).length / 200);

  return (
    <motion.a
      href={`#/blog/${post.id}`}
      onClick={handleNavigate}
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`block bg-gradient-to-br from-gray-900/80 to-gray-800/50 border-2 border-gray-700/50 group overflow-hidden cursor-pointer relative ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${isIntersecting ? delay : 0}ms` }}
      initial={{ opacity: 0, y: 20 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-r from-brand-green/20 to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

      {/* Animated Border Effect */}
      <div className="absolute inset-0 border-2 border-brand-green/0 group-hover:border-brand-green/50 transition-all duration-500"></div>

      <div className="relative overflow-hidden">
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

          {/* Category Badge */}
          <motion.span
            className="absolute top-4 left-4 bg-brand-green text-dark-bg text-xs font-bold font-orbitron uppercase px-4 py-2 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            {post.category}
          </motion.span>

          {/* Reading Time Badge */}
          <motion.div
            className="absolute top-4 right-4 bg-dark-bg/80 backdrop-blur-sm text-brand-green text-xs font-orbitron px-3 py-2 flex items-center gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isIntersecting ? 1 : 0, x: isIntersecting ? 0 : 20 }}
            transition={{ delay: delay / 1000 + 0.3 }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            {readingTime} min read
          </motion.div>
        </div>
      </div>

      <div className="p-6 flex flex-col relative z-10">
        <motion.h3
          className="text-2xl font-bold text-white mb-3 font-orbitron transition-colors line-clamp-2"
          animate={{ color: isHovered ? '#4ade80' : '#ffffff' }}
          transition={{ duration: 0.3 }}
        >
          {post.title}
        </motion.h3>

        <p className="text-gray-400 leading-relaxed mb-6 flex-grow line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between text-sm mt-auto pt-4 border-t border-gray-700/50">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={post.author.avatarUrl}
                alt={post.author.name}
                className="w-10 h-10 rounded-full border-2 border-gray-700 group-hover:border-brand-green transition-colors duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div>
              <p className="font-semibold text-gray-300 font-orbitron text-xs">{post.author.name}</p>
              <p className="text-gray-500 text-xs">{post.date}</p>
            </div>
          </div>

          {/* Read More Arrow */}
          <motion.div
            className="flex items-center gap-2 text-brand-green font-orbitron font-bold text-sm"
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            Read
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Decorative Corner Element */}
      <motion.div
        className="absolute bottom-0 right-0 w-20 h-20 bg-brand-green/10 transform rotate-45 translate-x-10 translate-y-10"
        animate={{
          x: isHovered ? 0 : 40,
          y: isHovered ? 0 : 40,
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.a>
  );
};

export default BlogPostCard;