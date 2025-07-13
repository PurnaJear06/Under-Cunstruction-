import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import anime from 'animejs'
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Sparkles, Zap, Code2 } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from '../contexts/AnimationContext'
import { featuredProjects, skills } from '../data/projects'

gsap.registerPlugin(ScrollTrigger)

const HomePage = () => {
  const { animationsEnabled } = useAnimation()
  const heroRef = useRef(null)
  const nameRef = useRef(null)
  const titleRef = useRef(null)
  const ctaRef = useRef(null)
  const socialRef = useRef(null)
  const particlesRef = useRef(null)
  const glowRef = useRef(null)

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // Skills imported from data file

  // Floating particles animation
  useEffect(() => {
    if (!animationsEnabled) return

    // Create floating particles
    const particles = []
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div')
      particle.className = 'absolute w-1 h-1 bg-blue-500 rounded-full opacity-30'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.top = Math.random() * 100 + '%'
      particlesRef.current?.appendChild(particle)
      particles.push(particle)
    }

    // Animate particles
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        delay: Math.random() * 2
      })
    })

    // Cleanup
    return () => {
      particles.forEach(particle => particle.remove())
    }
  }, [animationsEnabled])

  useEffect(() => {
    if (!animationsEnabled) return

    const tl = gsap.timeline({ delay: 0.5 })

    // Hero section animations with enhanced effects
    tl.from(nameRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: 'power4.out',
      rotationX: 90
    })
    .from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      scale: 0.8
    }, '-=0.8')
    .from(ctaRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
      scale: 0.9
    }, '-=0.6')
    .from(socialRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power4.out',
      scale: 0.8
    }, '-=0.4')

    // Glow effect animation
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        scale: 1.2,
        opacity: 0.3,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      })
    }

    // Enhanced text animation with Anime.js
    anime({
      targets: '.hero-text .letter',
      scale: [0, 1],
      opacity: [0, 1],
      translateY: [100, 0],
      rotateZ: [180, 0],
      duration: 1500,
      delay: anime.stagger(100),
      easing: 'easeOutExpo'
    })

    // Subtle floating animation for hero content (removed continuous animation that was causing conflicts)
    gsap.set(heroRef.current, { y: 0 })

    // Scroll-triggered animations
    ScrollTrigger.create({
      trigger: '.skills-section',
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo('.skill-item', 
          { y: 50, opacity: 0, scale: 0.8 },
          { 
            y: 0, 
            opacity: 1, 
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.7)'
          }
        )
      }
    })

    ScrollTrigger.create({
      trigger: '.projects-section',
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo('.project-card', 
          { y: 80, opacity: 0, rotationY: 45 },
          { 
            y: 0, 
            opacity: 1, 
            rotationY: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
          }
        )
      }
    })

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [animationsEnabled])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden z-10"
      >
        {/* Animated Background Elements */}
        <div 
          ref={particlesRef}
          className="absolute inset-0 pointer-events-none"
        />
        
        {/* Glowing Background Effect */}
        <div 
          ref={glowRef}
          className="absolute inset-0 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40 rounded-full blur-3xl mix-blend-screen pointer-events-none"
        />

        {/* Main Content */}
        <div className="text-center z-10 max-w-4xl mx-auto relative">
          {/* Enhanced Name with Letter Animation */}
          <motion.h1 
            ref={nameRef}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 hero-text relative"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            {['P', 'u', 'r', 'n', 'a', ' ', 'J', 'e', 'a', 'r'].map((letter, index) => (
              <span 
                key={index}
                className="letter inline-block gradient-text relative"
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  textShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
            
            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-6 -right-6 text-yellow-400"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={32} />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 text-blue-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap size={28} />
            </motion.div>
          </motion.h1>

          {/* Enhanced Title Section */}
          <motion.div 
            ref={titleRef}
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-12 space-y-3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <motion.p 
              className="font-bold text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Full Stack Developer & Infrastructure Engineer
            </motion.p>
            <motion.p 
              className="text-lg md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Building scalable solutions with modern technologies
            </motion.p>
            <motion.div 
              className="flex items-center justify-center space-x-4 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.div
                className="flex items-center space-x-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20"
                whileHover={{ scale: 1.05 }}
              >
                <Code2 size={20} className="text-blue-500" />
                <span className="text-sm font-medium">Cloud Engineer</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles size={20} className="text-purple-500" />
                <span className="text-sm font-medium">Full Stack Dev</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.button 
              onClick={scrollToProjects}
              className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View My Work</span>
              <ExternalLink size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ opacity: 1 }}
              />
            </motion.button>
            
            <motion.a
              href="/contact"
              className="relative px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-500 dark:text-blue-400 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center space-x-2 group"
              whileHover={{ 
                scale: 1.05,
                borderColor: '#8B5CF6'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get In Touch</span>
              <Mail size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div 
            ref={socialRef}
            className="flex justify-center space-x-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[
              { icon: Github, href: 'https://github.com/purnajear', color: 'hover:text-gray-700' },
              { icon: Linkedin, href: 'https://linkedin.com/in/purnajear', color: 'hover:text-blue-600' },
              { icon: Mail, href: 'mailto:purna.jear@example.com', color: 'hover:text-green-600' }
            ].map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 ${social.color}`}
                  whileHover={{ 
                    scale: 1.3, 
                    rotate: index % 2 === 0 ? 10 : -10,
                    y: -5
                  }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }
                  }}
                >
                  <Icon size={24} />
                </motion.a>
              )
            })}
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm text-gray-400 font-medium">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section 
        ref={skillsRef}
        className="skills-section py-20 px-4 bg-gray-50 dark:bg-gray-800/50"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Technologies & Skills
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.flatMap(category => category.items).map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-item p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <span className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </span>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 mt-2">
                  <motion.div 
                    className={`h-1 rounded-full ${skill.color}`}
                    initial={{ width: 0 }}
                    animate={skillsInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section 
        id="projects"
        ref={projectsRef}
        className="projects-section py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 group"
                initial={{ opacity: 0, y: 50 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={project.demoUrl || project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  View Project
                  <ExternalLink size={16} className="ml-1" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage 