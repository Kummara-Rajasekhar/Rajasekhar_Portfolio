import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaCode, FaHackerrank, FaDownload, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Software Developer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 150);
    
    return () => clearInterval(timer);
  }, []);



  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-green-50 dark:from-gray-900 dark:via-blue-900 dark:to-green-900">

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 max-w-4xl"
          >
            <div className="space-y-6">
                             <motion.h1 
                 className="text-5xl lg:text-7xl font-bold text-gray-800 dark:text-white"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6 }}
               >
                <span className="text-gradient">
                  Kummara Rajasekhar
                </span>
              </motion.h1>
              
                             <motion.div 
                 className="text-2xl lg:text-4xl font-semibold text-gray-800 dark:text-white"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.2 }}
               >
                <span className="text-gradient">
                  I'm a{' '}
                  {text}
                  {isTyping && <span className="animate-pulse">|</span>}
                </span>
              </motion.div>
              
                             <motion.p 
                 className="text-lg lg:text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.4 }}
               >
                Passionate about creating innovative web solutions and turning ideas into reality. 
                Specialized in MERN stack development with a strong foundation in problem-solving.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                to="/contact"
                className="btn-primary flex items-center gap-2"
              >
                <FaDownload className="text-sm" />
                Download Resume
              </Link>
              
              <Link
                to="/projects"
                className="btn-secondary flex items-center gap-2"
              >
                View Projects
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a
                href="https://github.com/Kummara-Rajasekhar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                                 className="w-12 h-12 bg-gray-800/10 dark:bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 dark:text-white hover:text-gray-900 hover:bg-white dark:hover:text-gray-900 dark:hover:bg-white transition-all duration-300 border border-gray-300/20 dark:border-white/20"
              >
                <FaGithub className="w-6 h-6" />
              </motion.a>
              
                             <motion.a
                 href="https://www.linkedin.com/in/k-raja-sekhar-990349284/"
                 target="_blank"
                 rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                                 className="w-12 h-12 bg-gray-800/10 dark:bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 dark:text-white hover:text-blue-600 hover:bg-white dark:hover:text-blue-600 dark:hover:bg-white transition-all duration-300 border border-gray-300/20 dark:border-white/20"
              >
                <FaLinkedin className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                                 href="https://www.hackerrank.com/profile/k_rajasekhar_17"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                                 className="w-12 h-12 bg-gray-800/10 dark:bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 dark:text-white hover:text-green-600 hover:bg-white dark:hover:text-green-600 dark:hover:bg-white transition-all duration-300 border border-gray-300/20 dark:border-white/20"
              >
                <FaHackerrank className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                                 href="https://leetcode.com/u/kummara_rajasekhar/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                                 className="w-12 h-12 bg-gray-800/10 dark:bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 dark:text-white hover:text-orange-600 hover:bg-white dark:hover:text-orange-600 dark:hover:bg-white transition-all duration-300 border border-gray-300/20 dark:border-white/20"
              >
                <FaCode className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
                             className="flex flex-col items-center text-gray-600/70 dark:text-white/70"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <FaArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 