import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaGraduationCap, FaTrophy, FaUsers } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    {
      icon: FaCode,
      number: '800+',
      label: 'LeetCode Problems',
      color: 'text-blue-500'
    },
    {
      icon: FaGraduationCap,
      number: '9.83',
      label: 'CGPA',
      color: 'text-green-500'
    },
    {
      icon: FaTrophy,
      number: '20+',
      label: 'Projects',
      color: 'text-orange-500'
    },
    {
      icon: FaUsers,
      number: '4+',
      label: 'Years Experience',
      color: 'text-purple-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <div className="space-y-4">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Highly motivated and passionate Computer Science undergraduate with hands-on experience in full-stack web development and a strong foundation in Data Structures, Algorithms, and OOP.
                </p>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Skilled in building scalable web applications using the MERN stack, with a strong problem-solving mindset backed by over 800 solved LeetCode problems. Adept in Agile practices, cross-functional team collaboration, and developing production-grade solutions.
                </p>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Currently pursuing B.Tech in Computer Science with a CGPA of 9.83. Experienced in building scalable web applications using MERN and Spring Boot. Proven problem-solver with a track record of delivering real-world projects.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Full-Stack Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">MERN Stack Expert</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Problem Solving</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Agile Development</span>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`text-3xl mb-3 ${stat.color}`}>
                    <stat.icon />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 dark:text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCode className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                Technical Skills
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Proficient in React, Node.js, MongoDB, and modern web technologies with strong backend development skills.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGraduationCap className="w-8 h-8 text-secondary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                Academic Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Maintaining 9.83 CGPA with strong foundation in DSA, OOP, OS, and advanced computer science concepts.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTrophy className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                Achievements
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                NCC 'A' Certificate, SAP Hackfest 2025 Finalist, and 800+ LeetCode problems solved demonstrating excellence.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 