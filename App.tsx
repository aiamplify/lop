import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Blog from './components/Blog';
import Footer from './components/Footer';
import BlogPostDetail from './components/BlogPostDetail';
import { blogData } from './data/blogData';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import { pageTransition } from './utils/animations';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);

    // Set initial route based on current hash
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderContent = () => {
    // Blog post detail route
    if (route.startsWith('#/post/')) {
      const postId = parseInt(route.split('/')[2], 10);
      const post = blogData.find((p) => p.id === postId);
      if (post) {
        return <BlogPostDetail post={post} />;
      }
    }

    // Category filter route
    if (route.startsWith('#/category/')) {
      const category = decodeURIComponent(route.split('/')[2]);
      return <Blog filterCategory={category} />;
    }

    // Home - Blog landing page
    return (
      <>
        <Hero />
        <Blog />
      </>
    );
  };


  return (
    <>
      <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <div className="bg-dark-bg text-gray-200 font-sans min-h-screen overflow-x-hidden">
          {/* Scroll Progress */}
          <ScrollProgress />

          {/* Custom Cursor */}
          <CustomCursor />

          {/* Particle Background */}
          <ParticleBackground />

          {/* Ambient Background Blobs */}
          <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
            <motion.div
              className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-brand-green/5 rounded-full filter blur-3xl"
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
            <motion.div
              className="absolute bottom-[-20%] right-[-20%] w-[50%] h-[50%] bg-brand-green/10 rounded-full filter blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col min-h-screen">
            <Header />

            <AnimatePresence mode="wait">
              <motion.main
                key={route}
                variants={pageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex-grow pt-20"
              >
                {renderContent()}
              </motion.main>
            </AnimatePresence>

            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default App;