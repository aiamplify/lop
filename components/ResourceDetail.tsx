import React from 'react';
import { motion } from 'framer-motion';
import { ResourceItem } from '../data/resourcesData';
import { fadeIn, staggerContainer } from '../utils/animations';

interface ResourceDetailProps {
  resource: ResourceItem;
}

const ResourceDetail: React.FC<ResourceDetailProps> = ({ resource }) => {
  const handleBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '/resources';
  };

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

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'text-brand-yellow';
      case 'Intermediate':
        return 'text-brand-orange';
      case 'Advanced':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <section className="py-24 animate-fade-in">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <a
            href="#/resources"
            onClick={handleBack}
            className="text-brand-orange hover:text-brand-yellow transition-colors duration-300 flex items-center gap-2 font-heading"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Resources
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              animate="show"
            >
              {/* Header */}
              <motion.div variants={fadeIn('down', 0)} className="mb-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl">{getIconForType(resource.type)}</span>
                      <span className="px-3 py-1 bg-brand-orange text-dark-bg text-xs font-bold uppercase">
                        {resource.category}
                      </span>
                      {resource.difficulty && (
                        <span className={`px-3 py-1 bg-gray-800 border border-gray-700 text-xs font-bold uppercase ${getDifficultyColor(resource.difficulty)}`}>
                          {resource.difficulty}
                        </span>
                      )}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                      {resource.title}
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      {resource.description}
                    </p>
                  </div>
                </div>

                {/* Meta Information */}
                <div className="flex flex-wrap gap-6 text-sm text-gray-400 border-t border-b border-gray-800 py-4">
                  {resource.author && (
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      <span>{resource.author}</span>
                    </div>
                  )}
                  {resource.publishDate && (
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>{resource.publishDate}</span>
                    </div>
                  )}
                  {resource.duration && (
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span>{resource.duration}</span>
                    </div>
                  )}
                  {resource.fileSize && (
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span>{resource.fileSize}</span>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Thumbnail */}
              {resource.thumbnail && (
                <motion.div
                  variants={fadeIn('up', 0.2)}
                  className="mb-12"
                >
                  <img
                    src={resource.thumbnail}
                    alt={resource.title}
                    className="w-full h-auto rounded-lg border border-gray-700"
                  />
                </motion.div>
              )}

              {/* Description */}
              <motion.div variants={fadeIn('up', 0.3)} className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">Overview</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {resource.longDescription}
                </p>
              </motion.div>

              {/* What You Will Learn */}
              {resource.whatYouWillLearn && resource.whatYouWillLearn.length > 0 && (
                <motion.div variants={fadeIn('up', 0.4)} className="mb-12">
                  <h2 className="text-2xl font-heading font-bold text-white mb-4">
                    What You'll Learn
                  </h2>
                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/50 border border-gray-700/30 p-6">
                    <ul className="space-y-3">
                      {resource.whatYouWillLearn.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-300">
                          <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Features */}
              {resource.features && resource.features.length > 0 && (
                <motion.div variants={fadeIn('up', 0.5)} className="mb-12">
                  <h2 className="text-2xl font-heading font-bold text-white mb-4">Features</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {resource.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 bg-gradient-to-br from-gray-900/80 to-gray-900/50 border border-gray-700/30 p-4"
                      >
                        <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Requirements */}
              {resource.requirements && resource.requirements.length > 0 && (
                <motion.div variants={fadeIn('up', 0.6)} className="mb-12">
                  <h2 className="text-2xl font-heading font-bold text-white mb-4">Requirements</h2>
                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/50 border border-gray-700/30 p-6">
                    <ul className="space-y-3">
                      {resource.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-300">
                          <svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Includes */}
              {resource.includesFiles && resource.includesFiles.length > 0 && (
                <motion.div variants={fadeIn('up', 0.7)} className="mb-12">
                  <h2 className="text-2xl font-heading font-bold text-white mb-4">What's Included</h2>
                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/50 border border-gray-700/30 p-6">
                    <ul className="space-y-3">
                      {resource.includesFiles.map((file, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-300">
                          <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                          </svg>
                          <span>{file}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              className="sticky top-24"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Download Card */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/50 border border-gray-700/30 p-8 mb-6">
                <div className="text-center mb-6">
                  <p className="text-gray-400 mb-4">Ready to get started?</p>
                  <motion.a
                    href={resource.downloadUrl}
                    className="block w-full px-8 py-4 bg-brand-orange text-dark-bg font-heading font-bold text-lg hover:bg-brand-yellow transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {resource.type === 'video' ? (
                      <>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        Watch Now
                      </>
                    ) : (
                      <>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Download Now
                      </>
                    )}
                  </motion.a>
                </div>

                {/* Quick Info */}
                <div className="border-t border-gray-700 pt-6 space-y-3">
                  {resource.fileSize && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">File Size:</span>
                      <span className="text-gray-200 font-medium">{resource.fileSize}</span>
                    </div>
                  )}
                  {resource.duration && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-gray-200 font-medium">{resource.duration}</span>
                    </div>
                  )}
                  {resource.difficulty && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Level:</span>
                      <span className={`font-medium ${getDifficultyColor(resource.difficulty)}`}>
                        {resource.difficulty}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/50 border border-gray-700/30 p-6">
                <h3 className="text-lg font-heading font-bold text-white mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {resource.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm border border-gray-700/50 hover:border-brand-orange/50 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceDetail;
