import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaCode, FaHackerrank, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload, FaArrowRight, FaUser, FaLaptopCode, FaBriefcase, FaEnvelopeOpen } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Kummara-Rajasekhar',
      icon: FaGithub,
      color: 'hover:text-gray-800 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
    },
    {
      name: 'LinkedIn',
              url: 'https://www.linkedin.com/in/k-raja-sekhar-990349284/',
      icon: FaLinkedin,
      color: 'hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    {
      name: 'LeetCode',
              url: 'https://leetcode.com/u/kummara_rajasekhar/',
      icon: FaCode,
      color: 'hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20'
    },
    {
      name: 'HackerRank',
              url: 'https://www.hackerrank.com/profile/k_rajasekhar_17',
      icon: FaHackerrank,
      color: 'hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'
    }
  ];

  const quickLinks = [
    { name: 'About', to: '/about', icon: FaUser },
    { name: 'Skills', to: '/skills', icon: FaLaptopCode },
    { name: 'Projects', to: '/projects', icon: FaBriefcase },
    { name: 'Contact', to: '/contact', icon: FaEnvelopeOpen }
  ];

  const contactInfo = [
    { icon: FaEnvelope, text: 'kummararajasekhar17092004@gmail.com', link: 'mailto:kummararajasekhar17092004@gmail.com' },
    { icon: FaPhone, text: '+91 6304692069', link: 'tel:+916304692069' },
    { icon: FaMapMarkerAlt, text: 'Tirupati, Andhra Pradesh, India', link: null }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-800 dark:text-white py-12 overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 dark:from-primary-500/10 dark:to-secondary-500/10"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-100/50 dark:from-black/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-8">
          {/* Enhanced Quick Links */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
                <FaArrowRight className="w-5 h-5 mr-2 text-primary-500" />
                Quick Links
              </h4>
              <div className="w-10 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
            </div>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                                                        <Link 
                     to={link.to}
                     onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                     className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-all duration-300 hover:translate-x-2 group"
                   >
                     <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                     <span className="relative text-base">
                       {link.name}
                       <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 group-hover:w-full"></span>
                     </span>
                   </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Enhanced Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
                <FaEnvelopeOpen className="w-5 h-5 mr-2 text-primary-500" />
                Contact Info
              </h4>
              <div className="w-10 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
            </div>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-500 group-hover:bg-primary-500/30 transition-all duration-300 shadow-md">
                    <contact.icon className="w-4 h-4" />
                  </div>
                  {contact.link ? (
                    <a 
                      href={contact.link}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors duration-300 text-sm leading-relaxed group-hover:translate-x-1 transition-transform duration-300"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {contact.text}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links Section */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
                <FaGithub className="w-5 h-5 mr-2 text-primary-500" />
                Connect
              </h4>
              <div className="w-10 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full p-3 bg-gray-100/80 dark:bg-gray-800/60 backdrop-blur-md rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 shadow-md hover:shadow-lg ${social.color}`}
                >
                  <social.icon className="w-4 h-4 mr-2" />
                  <span className="text-xs font-medium">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Bottom Section */}
        <motion.div 
          className="pt-8 border-t border-gray-200/50 dark:border-gray-800/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex justify-center">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <a
                href="https://drive.google.com/file/d/1ZSLge9kGpbanhR4VPncIZaY_a_4QmHo_/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-full hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-500 group hover:scale-105"
              >
                <FaDownload className="w-4 h-4 group-hover:animate-bounce" />
                <span className="font-semibold text-sm">Download Resume</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 