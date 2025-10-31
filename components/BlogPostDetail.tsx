import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { BlogPost } from '../types';
import { fadeIn, slideIn } from '../utils/animations';
import { blogData } from '../data/blogData';

interface BlogPostDetailProps {
    post: BlogPost;
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post }) => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);

    const handleGoBlog = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.location.hash = '#/blog';
    };

    const handleGoHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.location.hash = '';
    };

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Calculate reading progress
    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
            setScrollProgress(progress);
            setShowScrollTop(scrollTop > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate reading time
    const readingTime = Math.ceil(post.content.split(/\s+/).length / 200);

    // Get related posts (same category, excluding current)
    const relatedPosts = blogData
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 3);

    // Share functionality
    const handleShare = (platform: string) => {
        const url = window.location.href;
        const text = post.title;

        const shareUrls: Record<string, string> = {
            twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        };

        if (shareUrls[platform]) {
            window.open(shareUrls[platform], '_blank', 'width=600,height=400');
        }
    };

    return (
        <section className="py-12 animate-fade-in relative">
            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
                <motion.div
                    className="h-full bg-gradient-to-r from-brand-orange to-brand-yellow"
                    style={{ width: `${scrollProgress}%` }}
                    transition={{ duration: 0.1 }}
                />
            </div>

            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Navigation */}
                    <motion.div
                        className="flex items-center gap-3 mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <a
                            href="#/blog"
                            onClick={handleGoBlog}
                            className="bg-transparent border-2 border-brand-orange text-brand-orange px-6 py-3 hover:bg-brand-orange hover:text-dark-bg transition-all duration-300 font-heading font-bold inline-flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Blog
                        </a>
                        <a
                            href="#"
                            onClick={handleGoHome}
                            className="bg-transparent border-2 border-gray-500 text-gray-300 px-6 py-3 hover:bg-gray-600/30 transition-all duration-300 font-heading font-bold inline-flex items-center gap-2"
                        >
                            Home
                        </a>
                    </motion.div>

                    {/* Article Header */}
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={fadeIn('down', 0.2)}
                    >
                        <p className="text-sm text-brand-orange mb-4 font-heading tracking-widest uppercase flex items-center gap-3">
                            <span className="bg-brand-orange/20 px-3 py-1">{post.category}</span>
                            <span className="flex items-center gap-2 text-gray-400">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                {readingTime} min read
                            </span>
                        </p>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 leading-tight bg-gradient-to-r from-white to-brand-orange bg-clip-text text-transparent">
                            {post.title}
                        </h1>
                    </motion.div>

                    {/* Author Info & Share */}
                    <motion.div
                        className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 pb-6 border-b border-gray-800/50 gap-4"
                        initial="hidden"
                        animate="show"
                        variants={fadeIn('up', 0.3)}
                    >
                        <div className="flex items-center gap-4">
                            <img src={post.author.avatarUrl} alt={post.author.name} className="w-14 h-14 rounded-full border-2 border-brand-orange" />
                            <div>
                                <p className="font-semibold text-white font-heading">{post.author.name}</p>
                                <p className="text-sm text-gray-400">{post.date}</p>
                            </div>
                        </div>

                        {/* Share Buttons */}
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-400 font-heading">Share:</span>
                            <button
                                onClick={() => handleShare('twitter')}
                                className="w-10 h-10 flex items-center justify-center bg-gray-900/50 border border-gray-700/50 hover:border-brand-orange hover:bg-brand-orange/10 transition-all duration-300"
                                aria-label="Share on Twitter"
                            >
                                <svg className="w-5 h-5 text-gray-400 hover:text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                                </svg>
                            </button>
                            <button
                                onClick={() => handleShare('linkedin')}
                                className="w-10 h-10 flex items-center justify-center bg-gray-900/50 border border-gray-700/50 hover:border-brand-orange hover:bg-brand-orange/10 transition-all duration-300"
                                aria-label="Share on LinkedIn"
                            >
                                <svg className="w-5 h-5 text-gray-400 hover:text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </button>
                            <button
                                onClick={() => handleShare('facebook')}
                                className="w-10 h-10 flex items-center justify-center bg-gray-900/50 border border-gray-700/50 hover:border-brand-orange hover:bg-brand-orange/10 transition-all duration-300"
                                aria-label="Share on Facebook"
                            >
                                <svg className="w-5 h-5 text-gray-400 hover:text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </button>
                        </div>
                    </motion.div>

                    {/* Featured Image */}
                    <motion.div
                        className="mb-12 overflow-hidden border-2 border-gray-700/50 relative group"
                        initial="hidden"
                        animate="show"
                        variants={slideIn('up', 'spring', 0.4, 0.8)}
                    >
                        <img src={post.imageUrl} alt={post.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </motion.div>

                    {/* Article Content */}
                    <motion.div
                        className="prose prose-lg prose-invert max-w-none"
                        initial="hidden"
                        animate="show"
                        variants={fadeIn('up', 0.5)}
                    >
                        <div className="text-gray-300 text-lg leading-relaxed space-y-8">
                            {post.content.split('\n').map((paragraph, index) => (
                                paragraph.trim() && (
                                    <p key={index} className="text-xl leading-loose">
                                        {paragraph.trim()}
                                    </p>
                                )
                            ))}
                        </div>
                    </motion.div>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <motion.div
                            className="mt-20 pt-12 border-t-2 border-gray-800/50"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-3xl font-heading font-bold text-white mb-8">Related Articles</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                {relatedPosts.map((relatedPost) => (
                                    <a
                                        key={relatedPost.id}
                                        href={`#/blog/${relatedPost.id}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.location.hash = `#/blog/${relatedPost.id}`;
                                        }}
                                        className="block bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 overflow-hidden group"
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <img src={relatedPost.imageUrl} alt={relatedPost.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                            <span className="absolute top-3 left-3 bg-brand-orange text-dark-bg text-xs font-bold font-heading uppercase px-2 py-1">{relatedPost.category}</span>
                                        </div>
                                        <div className="p-4">
                                            <h4 className="text-lg font-heading font-bold text-white group-hover:text-brand-orange transition-colors line-clamp-2">
                                                {relatedPost.title}
                                            </h4>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* CTA Section */}
                    <motion.div
                        className="mt-16 text-center bg-gradient-to-r from-gray-900/90 via-gray-800/70 to-gray-900/90 p-12 border-2 border-gray-700/50 relative overflow-hidden"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 to-brand-yellow/10 animate-pulse"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-heading text-white mb-4">Ready to Automate Your Business?</h3>
                            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                                Join thousands of contractors leveraging AI to streamline operations and boost profits. Get our free resources delivered to your inbox.
                            </p>
                            <a
                                href="#subscribe"
                                className="inline-block px-10 py-4 bg-brand-orange text-dark-bg font-heading font-bold text-lg hover:bg-brand-yellow hover:text-dark-bg transition-all duration-300 transform hover:scale-105"
                            >
                                Get Started →
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <motion.button
                    onClick={handleScrollTop}
                    className="fixed bottom-8 right-8 w-12 h-12 bg-brand-orange text-dark-bg rounded-full flex items-center justify-center shadow-lg hover:bg-brand-yellow transition-colors z-40"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </motion.button>
            )}
        </section>
    );
};

export default BlogPostDetail;
