import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Github, Calendar, Users, Code, Server, Cloud, Monitor } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from '../contexts/AnimationContext'
import { projects, projectCategories } from '../data/projects'

gsap.registerPlugin(ScrollTrigger)

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState([])
  const { animationsEnabled } = useAnimation()
  const pageRef = useRef(null)

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const categories = [
    { id: 'all', name: 'All Projects', icon: Code, count: projects.length },
    { id: 'Infrastructure', name: 'Infrastructure', icon: Cloud, count: projects.filter(p => p.category === 'Infrastructure').length },
    { id: 'Automation', name: 'Automation', icon: Server, count: projects.filter(p => p.category === 'Automation').length },
    { id: 'Web Development', name: 'Web Development', icon: Monitor, count: projects.filter(p => p.category === 'Web Development').length },
    { id: 'DevOps', name: 'DevOps', icon: Code, count: projects.filter(p => p.category === 'DevOps').length }
  ]

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter))
    }
  }, [activeFilter, projects])

  useEffect(() => {
    if (!animationsEnabled) return

    gsap.from(pageRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out'
    })

    // Projects grid animation
    ScrollTrigger.create({
      trigger: '.projects-grid',
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo('.project-card', 
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out'
          }
        )
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [animationsEnabled])

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId)
  }

  return (
    <div ref={pageRef} className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-4 gradient-text">My Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development, 
            cloud infrastructure, and automation solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <motion.button
                key={category.id}
                onClick={() => handleFilterChange(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
                <span className="font-medium">{category.name}</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Projects Grid */}
        <div 
          ref={projectsRef}
          className="projects-grid"
        >
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeFilter}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card card-enhanced overflow-hidden group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center">
                        <Code size={48} className="mx-auto mb-2 opacity-80" />
                        <p className="text-sm font-medium opacity-90">{project.category.toUpperCase()}</p>
                      </div>
                    </div>
                    
                    {/* Project Links */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-black/20 rounded-full text-white hover:bg-black/40 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={16} />
                      </motion.a>
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-black/20 rounded-full text-white hover:bg-black/40 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-enhanced line-clamp-2">
                        {project.title}
                      </h3>
                      <span className="text-sm text-blue-600 dark:text-blue-400 ml-2 font-medium">
                        {project.year}
                      </span>
                    </div>

                    <p className="text-muted-enhanced mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Project Stats */}
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{project.year}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users size={14} />
                        <span>{project.role || 'Solo Developer'}</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github size={16} className="inline mr-2" />
                        Code
                      </motion.a>
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink size={16} className="inline mr-2" />
                        Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">
            Interested in Working Together?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. 
            Let's connect and see how we can work together.
          </p>
          <motion.a
            href="/contact"
            className="btn-primary inline-flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get In Touch</span>
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectsPage 