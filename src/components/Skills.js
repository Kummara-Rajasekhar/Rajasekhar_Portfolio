import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase,
  FaJava, FaPython, FaGitAlt, FaDocker, FaAws, FaFigma, FaCode, FaGraduationCap
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiBootstrap, SiMysql, SiPostman } from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      description: 'Core programming languages and concepts',
      skills: [
        { name: 'Java', icon: FaJava, color: 'bg-orange-500' },
        { name: 'Python', icon: FaPython, color: 'bg-blue-500' },
        { name: 'JavaScript', icon: FaJs, color: 'bg-yellow-500' },
        { name: 'C/C++', icon: FaCode, color: 'bg-green-500' },
        { name: 'PHP', icon: FaCode, color: 'bg-indigo-500' }
      ]
    },
    {
      title: 'Frontend Development',
      description: 'Modern web technologies and frameworks',
      skills: [
        { name: 'React.js', icon: FaReact, color: 'bg-blue-500' },
        { name: 'HTML5', icon: FaHtml5, color: 'bg-orange-500' },
        { name: 'CSS3', icon: FaCss3Alt, color: 'bg-blue-600' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'bg-cyan-500' },
        { name: 'Bootstrap', icon: SiBootstrap, color: 'bg-green-600' }
      ]
    },
    {
      title: 'Backend Development',
      description: 'Server-side technologies and APIs',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: 'bg-green-500' },
        { name: 'Express.js', icon: SiExpress, color: 'bg-gray-500' },
        { name: 'Spring Boot', icon: FaJava, color: 'bg-green-600' },
        { name: 'RESTful APIs', icon: FaCode, color: 'bg-blue-500' }
      ]
    },
    {
      title: 'Databases',
      description: 'Database management and querying',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: 'bg-green-500' },
        { name: 'MySQL', icon: SiMysql, color: 'bg-blue-600' },
        { name: 'SQL', icon: FaDatabase, color: 'bg-orange-500' }
      ]
    },
    {
      title: 'Tools & Platforms',
      description: 'Development tools and platforms',
      skills: [
        { name: 'Git/GitHub', icon: FaGitAlt, color: 'bg-gray-800' },
        { name: 'Postman', icon: SiPostman, color: 'bg-orange-500' },
        { name: 'VS Code', icon: FaCode, color: 'bg-blue-500' },
        { name: 'Figma', icon: FaFigma, color: 'bg-pink-500' },
        { name: 'IntelliJ IDEA', icon: FaCode, color: 'bg-red-500' },
        { name: 'Eclipse', icon: FaCode, color: 'bg-purple-500' }
      ]
    },
    {
      title: 'Additional Skills',
      description: 'Other relevant skills and concepts',
      skills: [
        { name: 'Object-Oriented Programming', icon: FaCode, color: 'bg-indigo-500' },
        { name: 'Data Structures & Algorithms', icon: FaCode, color: 'bg-green-500' },
        { name: 'Operating Systems', icon: FaCode, color: 'bg-blue-500' },
        { name: 'Computer Networks', icon: FaCode, color: 'bg-purple-500' },
        { name: 'Machine Learning', icon: FaCode, color: 'bg-orange-500' },
        { name: 'Deep Learning', icon: FaCode, color: 'bg-red-500' }
      ]
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div
            variants={categoryVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise across various domains of software development
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={categoryVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Category Header */}
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-primary-100 text-sm">{category.description}</p>
                </div>

                {/* Skills List */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        variants={skillVariants}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                      >
                        <div className={`w-8 h-8 ${skill.color} rounded-full flex items-center justify-center text-white`}>
                          <skill.icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Information */}
          <motion.div
            variants={categoryVariants}
            className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  <FaGraduationCap className="inline-block w-6 h-6 mr-2 text-primary-500" />
                  Academic Coursework
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Object-Oriented Programming</li>
                  <li>• Data Structures and Algorithms</li>
                  <li>• Operating Systems</li>
                  <li>• Computer Networks</li>
                  <li>• Machine Learning</li>
                  <li>• Deep Learning</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  <FaCode className="inline-block w-6 h-6 mr-2 text-secondary-500" />
                  Core Concepts
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• RESTful API Design</li>
                  <li>• Agile Development</li>
                  <li>• Version Control (Git)</li>
                  <li>• Database Design</li>
                  <li>• UI/UX Principles</li>
                  <li>• Problem Solving</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 