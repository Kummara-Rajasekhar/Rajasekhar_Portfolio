import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaSchool, FaUniversity } from 'react-icons/fa';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const educationData = [
    {
      icon: FaSchool,
      title: 'SSC',
      institution: 'Universal High School',
      period: '2020',
      percentage: '88%',
      location: 'Palamaner, Chittoor(District), AP',
      color: 'bg-blue-500'
    },
    {
      icon: FaUniversity,
      title: 'Intermediate',
      institution: 'Mother Theresa Junior College',
      period: '2020-2022',
      percentage: '95.9%',
      location: 'Palamaner, Chittoor(District), AP',
      color: 'bg-green-500'
    },
    {
      icon: FaGraduationCap,
      title: 'B.Tech in Computer Science',
      institution: 'Mohan Babu University',
      period: '2022-2026',
      percentage: 'CGPA: 9.83/10',
      location: 'Rangampeta, Tirupati, AP',
      color: 'bg-purple-500'
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

  const cardVariants = {
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
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div
            variants={cardVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                My Education
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500 hidden lg:block"></div>

            <div className="space-y-12">
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-4 border-primary-500 rounded-full z-10 hidden lg:block"></div>

                  {/* Content Card */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white`}>
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                            {item.title}
                          </h3>
                          <p className="text-primary-500 font-semibold mb-2">
                            {item.institution}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              {item.period}
                            </span>
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {item.percentage}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">
                            {item.location}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty space for timeline alignment */}
                  <div className="lg:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <motion.div
            variants={cardVariants}
            className="mt-16 bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  Academic Highlights
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Consistent academic performance with 9.83 CGPA
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                    Strong foundation in Computer Science fundamentals
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Active participation in technical events and hackathons
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Leadership roles in college technical clubs
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  Key Achievements
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Selected for SAP Hackfest 2025 Grand Finale
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    NCC 'A' Certificate holder
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    800+ LeetCode problems solved
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    Multiple certifications in programming languages
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 