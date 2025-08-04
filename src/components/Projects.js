import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiBootstrap, SiMysql, SiPostman, SiFirebase, SiStripe } from 'react-icons/si';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: 'Doctor Appointment Booking',
      description: 'A comprehensive web application for doctor appointment management with role-based access for Patients, Doctors, and Admins. Features secure authentication, dynamic scheduling, and responsive UI.',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      github: 'https://github.com/Kummara-Rajasekhar/PreScripto_Doctor_Appointment_WebApp',
      live: '#',
      technologies: ['React', 'Node.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
      icons: [FaReact, FaNodeJs, SiMongodb, SiTailwindcss],
      color: 'bg-blue-500'
    },
    {
      title: 'Zero Waste Food Management',
      description: 'A full-stack system for managing food waste by connecting donors with organizations. Features Cloudinary integration for media handling and deployed on Render.',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1480&q=80',
      github: 'https://github.com/Kummara-Rajasekhar/Food-Waste-Management',
      live: '#',
      technologies: ['MERN Stack', 'Cloudinary', 'Render', 'Express.js'],
      icons: [FaReact, FaNodeJs, SiMongodb, SiExpress],
      color: 'bg-green-500'
    },
    {
      title: 'Job Portal Application',
      description: 'A full-stack job portal connecting employers with job seekers. Features advanced job search filters, application tracking, and secure user authentication.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80',
      github: 'https://github.com/Kummara-Rajasekhar/Job_Portal_MERNPRoject',
      live: '#',
      technologies: ['MERN Stack', 'JWT', 'Redux', 'MongoDB'],
      icons: [FaReact, FaNodeJs, SiMongodb, SiExpress],
      color: 'bg-purple-500'
    },
    {
      title: 'Shopping Cart Application',
      description: 'Backend implementation for an e-commerce shopping cart system with product management, user authentication, and order processing.',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      github: 'https://github.com/Kummara-Rajasekhar/Backend_Shopping_Cart_Application',
      live: '#',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      icons: [FaNodeJs, SiExpress, SiMongodb, SiPostman],
      color: 'bg-orange-500'
    },
    {
      title: 'E-commerce Application',
      description: 'Full-featured e-commerce platform with product listings, cart functionality, and payment integration using Stripe.',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      github: 'https://github.com/Kummara-Rajasekhar/E-Commerce-Website',
      live: '#',
      technologies: ['React', 'Firebase', 'Stripe', 'Bootstrap'],
      icons: [FaReact, SiFirebase, SiStripe, SiBootstrap],
      color: 'bg-pink-500'
    },
    {
      title: 'Real Time Chat App',
      description: 'Built a real-time chat application using Socket.io, Node.js, and React.js for seamless instant messaging with user authentication.',
      image: '/project1.jpg',
      github: 'https://github.com/Kummara-Rajasekhar/Real-Time-Chat-App',
      live: '#',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      icons: [FaReact, FaNodeJs, SiMongodb, SiExpress],
      color: 'bg-indigo-500'
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
    <section className="py-20 bg-white dark:bg-gray-900">
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
                My Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
              A collection of my recent projects showcasing my skills in full-stack development, 
              problem-solving, and creating innovative solutions.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Project';
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:text-primary-500 transition-colors"
                        >
                          <FaGithub className="w-6 h-6" />
                        </motion.a>
                        {project.live !== '#' && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:text-primary-500 transition-colors"
                          >
                            <FaExternalLinkAlt className="w-6 h-6" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {project.title}
                      </h3>
                      <div className={`w-3 h-3 ${project.color} rounded-full`}></div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technology Icons */}
                    <div className="flex items-center space-x-2 mb-4">
                      {project.icons.map((Icon, idx) => (
                        <div
                          key={idx}
                          className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300"
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                      ))}
                    </div>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
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
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 