import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectsPage from './components/ProjectsPage';
import ProjectDetail from './components/ProjectDetail';
import Blog from './components/Blog';
import Footer from './components/Footer';
import BlogPostDetail from './components/BlogPostDetail';
import About from './components/About';
import { blogData } from './data/blogData';
import { projectsData } from './data/projectsData';
import RecentBlog from './components/RecentBlog';
import Modal from './components/Modal';
import ContactForm from './components/ContactForm';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import { servicesData } from './data/servicesData';
import ServicesPageOverhauled from './components/services/ServicesPageOverhauled';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import { pageTransition } from './utils/animations';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    // New Services Page Route
    if (route === '#/services') {
      return <ServicesPageOverhauled />;
    }

    // Service detail route: #/services/:id
    if (route.startsWith('#/services/')) {
      const serviceId = parseInt(route.split('/')[2], 10);
      const service = servicesData.find((s) => s.id === serviceId);
      if (service) {
        return <ServiceDetail service={service} />;
      }
    }

    // Project detail route: #/projects/:id
    if (route.startsWith('#/projects/')) {
      const projectId = parseInt(route.split('/')[2], 10);
      const project = projectsData.find((p) => p.id === projectId);
      if (project) {
        return <ProjectDetail project={project} />;
      }
    }

    // Projects index route
    if (route === '#/projects') {
      return <ProjectsPage />;
    }

    // Blog detail route
    if (route.startsWith('#/blog/')) {
      const postId = parseInt(route.split('/')[2], 10);
      const post = blogData.find((p) => p.id === postId);
      if (post) {
        return <BlogPostDetail post={post} />;
      }
    }

    // Blog index
    if (route === '#/blog') {
      return <Blog />;
    }

    if (route === '#/about') {
      return <About />;
    }

    // Home
    return (
      <>
        <Hero />
        <Services />
        <RecentBlog />
        <Projects />
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
            <Header onGetQuoteClick={() => setIsModalOpen(true)} />

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

          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <div className="text-center">
              <h2 className="text-3xl font-orbitron font-bold text-white mb-4">Get a Quote</h2>
              <p className="text-gray-400 mb-8">
                Let's build the future together. Fill out the form below to get started.
              </p>
            </div>
            <ContactForm />
          </Modal>
        </div>
      )}
    </>
  );
};

export default App;