import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt, FaCode, FaUsers } from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Mixins Technology',
      period: 'July 2025 - Present',
      location: 'Remote',
      description: [
        'Actively developing and deploying real-world web applications using React, Node.js, and MongoDB',
        'Focused on solving client-centric problems with scalable and efficient solutions',
        'Collaborating with senior engineers in an Agile team to deliver end-to-end features',
        'Participating in code reviews and integrating RESTful APIs for production-level systems'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'RESTful APIs', 'Agile'],
      color: 'bg-blue-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
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
                My Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-4 border-primary-500 rounded-full z-10"></div>

                  {/* Content Card */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-16 md:ml-0`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 ${exp.color} rounded-full flex items-center justify-center text-white`}>
                          <FaBriefcase className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-primary-500 font-semibold mb-2">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                            <span className="flex items-center">
                              <FaCalendarAlt className="w-4 h-4 mr-1" />
                              {exp.period}
                            </span>
                            <span className="flex items-center">
                              <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                              {exp.location}
                            </span>
                          </div>
                          <ul className="space-y-2 mb-4">
                            {exp.description.map((item, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-600 dark:text-gray-300 text-sm">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty space for timeline alignment */}
                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Experience Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Professional Development
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                  Key Responsibilities
                </h4>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Full-stack development using MERN stack technologies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Collaboration in Agile development environment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Code review and quality assurance processes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>API integration and database management</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                  Technical Achievements
                </h4>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Developed scalable web applications for production use</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Implemented responsive UI/UX designs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Optimized application performance and user experience</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Contributed to team knowledge sharing and documentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Future Goals */}
          <motion.div
            variants={itemVariants}
            className="mt-8 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
              Career Goals
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBriefcase className="w-8 h-8 text-primary-500" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                  Full-Time Role
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Seeking full-time opportunities as a Software Developer in dynamic tech companies
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCode className="w-8 h-8 text-secondary-500" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                  Technical Growth
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Continue learning advanced technologies and best practices in software development
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="w-8 h-8 text-orange-500" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                  Team Leadership
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Aspire to lead development teams and mentor junior developers
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 