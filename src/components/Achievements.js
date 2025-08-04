import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaMedal, FaCertificate, FaAward, FaStar, FaGraduationCap, FaUsers, FaCode } from 'react-icons/fa';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const achievements = [
    {
      icon: FaTrophy,
      title: 'NCC Cadet with \'A\' Certification',
      description: 'Demonstrated leadership and discipline through National Cadet Corps, gaining valuable teamwork and leadership skills.',
      color: 'bg-yellow-500',
      category: 'Leadership'
    },
    {
      icon: FaCode,
      title: '800+ LeetCode Problems Solved',
      description: 'Strong grip on algorithmic problem-solving with extensive practice in data structures and algorithms.',
      color: 'bg-blue-500',
      category: 'Problem Solving'
    },
    {
      icon: FaAward,
      title: 'SAP Hackfest 2025 Finalist',
      description: 'Selected for presenting an innovative agriculture ecosystem project, showcasing creativity and technical insight.',
      color: 'bg-green-500',
      category: 'Innovation'
    },
    {
      icon: FaCertificate,
      title: 'Multiple Programming Certifications',
      description: 'Certified in Java Programming (HackerRank), Python Programming (Cisco), and MERN Stack development.',
      color: 'bg-purple-500',
      category: 'Certifications'
    }
  ];

  const stats = [
    { number: '9.83', label: 'CGPA', icon: FaGraduationCap, color: 'text-blue-500' },
    { number: '800+', label: 'LeetCode Problems', icon: FaCode, color: 'text-green-500' },
    { number: '20+', label: 'Projects', icon: FaUsers, color: 'text-orange-500' },
    { number: '4+', label: 'Years Experience', icon: FaStar, color: 'text-purple-500' }
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
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
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
                My Achievements
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Statistics */}
          <motion.div
            variants={cardVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
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

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${achievement.color} rounded-full flex items-center justify-center text-white`}>
                    <achievement.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {achievement.title}
                      </h3>
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs rounded-full">
                        {achievement.category}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Achievements */}
          <motion.div
            variants={cardVariants}
            className="mt-16 bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Additional Highlights
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                  Academic Excellence
                </h4>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Consistent 9.83 CGPA in B.Tech Computer Science</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>95.9% in Intermediate with strong foundation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Active participation in technical events and hackathons</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Leadership roles in college technical clubs</span>
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
                    <span>Developed 20+ full-stack web applications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Expertise in MERN stack and modern web technologies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Strong problem-solving skills with 800+ LeetCode solutions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Multiple certifications in programming languages</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            variants={cardVariants}
            className="mt-8 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
              Certifications & Awards
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Introduction to MERN Stack', issuer: 'Coursera', icon: FaCertificate },
                { name: 'Java Programming', issuer: 'HackerRank', icon: FaCode },
                { name: 'Data Structures', issuer: 'Talentio', icon: FaGraduationCap },
                { name: 'Python Programming', issuer: 'Cisco', icon: FaAward }
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {cert.issuer}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements; 