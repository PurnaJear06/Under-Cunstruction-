import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Briefcase, GraduationCap, Code, Server, Cloud, Database } from 'lucide-react'
import { useAnimation } from '../contexts/AnimationContext'
import { skills } from '../data/projects'

gsap.registerPlugin(ScrollTrigger)

const AboutPage = () => {
  const { animationsEnabled } = useAnimation()
  const pageRef = useRef(null)
  const profileRef = useRef(null)

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [experienceRef, experienceInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // Skills imported from data file

  const experience = [
    {
      title: 'Process Associate',
      company: 'Genpact',
      period: 'Jun 2024 - Present',
      location: 'Hyderabad, Telangana, India (Hybrid)',
      description: [
        'Working on infrastructure monitoring, automation support, and cloud systems (AWS, Azure) in a live production environment',
        'Hands-on experience with tools like ServiceNow, SolarWinds, and New Relic to manage system health and performance',
        'Resolve major incidents (P1/P2) and collaborate with core tech teams – Windows, Linux, Networking, and Databases',
        'Contribute to scripting tasks, CI/CD support, and basic automation to improve system reliability',
        'Actively learning and working across cloud infrastructure and enterprise-level IT support operations'
      ],
      technologies: ['AWS', 'Azure', 'ServiceNow', 'SolarWinds', 'New Relic', 'Windows', 'Linux', 'Networking', 'Databases']
    }
  ]

  const education = [
    {
      degree: 'Computer Science & Engineering',
      institution: 'Your University',
      period: '2020 - 2024',
      description: 'Specialized in software development, data structures, algorithms, and system design.'
    }
  ]

  useEffect(() => {
    if (!animationsEnabled) return

    const tl = gsap.timeline()

    // Page entrance animation
    tl.from(pageRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out'
    })

    // Profile section animation
    tl.from(profileRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      ease: 'back.out(1.7)'
    }, '-=0.4')

    // Skills bars animation
    ScrollTrigger.create({
      trigger: '.skills-section',
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo('.skill-bar', 
          { width: '0%' },
          { 
            width: (index, target) => target.getAttribute('data-level') + '%',
            duration: 1.5,
            ease: 'power2.out',
            stagger: 0.1
          }
        )
      }
    })

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [animationsEnabled])

  return (
    <div ref={pageRef} className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-4 gradient-text">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get to know more about my journey and expertise
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.div 
          ref={profileRef}
          className="grid md:grid-cols-2 gap-12 mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-3xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-4xl">PJ</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Purna Jear</h3>
                    <p className="text-gray-600 dark:text-gray-400">Full Stack Developer</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Hello! I'm Purna Jear
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                I'm a passionate Full Stack Developer and Infrastructure Engineer with expertise in building 
                scalable web applications and managing cloud infrastructure. Currently working at Genpact, 
                where I focus on infrastructure monitoring, automation, and cloud systems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Briefcase className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Position</p>
                  <p className="font-medium text-gray-800 dark:text-gray-200">Process Associate</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                  <MapPin className="text-green-600 dark:text-green-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="font-medium text-gray-800 dark:text-gray-200">Hyderabad, India</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Calendar className="text-purple-600 dark:text-purple-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
                  <p className="font-medium text-gray-800 dark:text-gray-200">2+ Years</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
                  <Code className="text-orange-600 dark:text-orange-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Specialization</p>
                  <p className="font-medium text-gray-800 dark:text-gray-200">Full Stack & DevOps</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <section 
          ref={skillsRef}
          className="skills-section mb-20"
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Technical Skills
          </motion.h2>

          <div className="space-y-8">
            {skills.map((category, categoryIndex) => (
              <div key={category.category} className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, x: -30 }}
                      animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: (categoryIndex * category.items.length + skillIndex) * 0.05 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div 
                          className={`skill-bar h-2.5 rounded-full ${skill.color}`}
                          data-level={skill.level}
                        ></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section 
          ref={experienceRef}
          className="mb-20"
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={experienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Professional Experience
          </motion.h2>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                animate={experienceInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {job.title}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                      {job.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 dark:text-gray-300 font-medium">
                      {job.period}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {job.location}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {job.description.map((point, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Education
          </motion.h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                    <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {edu.period}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutPage 