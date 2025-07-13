import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Download, MapPin, Calendar, Briefcase, GraduationCap, Award, Code, Mail, Phone, Linkedin, Github } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from '../contexts/AnimationContext'

gsap.registerPlugin(ScrollTrigger)

const ResumePage = () => {
  const { animationsEnabled } = useAnimation()
  const pageRef = useRef(null)

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const personalInfo = {
    name: 'Purna Jear',
    title: 'Full Stack Developer & Infrastructure Engineer',
    email: 'purna.jear@example.com',
    phone: '+91-XXXXX-XXXXX',
    location: 'Hyderabad, Telangana, India',
    linkedin: 'https://linkedin.com/in/purnajear',
    github: 'https://github.com/purnajear',
    summary: 'Passionate Full Stack Developer and Infrastructure Engineer with 2+ years of experience in building scalable web applications and managing cloud infrastructure. Currently working at Genpact, specializing in infrastructure monitoring, automation, and cloud systems (AWS, Azure). Proven track record in resolving critical incidents and implementing automation solutions.'
  }

  const experience = [
    {
      title: 'Process Associate',
      company: 'Genpact',
      location: 'Hyderabad, Telangana, India (Hybrid)',
      period: 'June 2024 - Present',
      achievements: [
        'Working on infrastructure monitoring, automation support, and cloud systems (AWS, Azure) in live production environment',
        'Hands-on experience with ServiceNow, SolarWinds, and New Relic for system health and performance management',
        'Resolve major incidents (P1/P2) collaborating with Windows, Linux, Networking, and Database teams',
        'Contribute to scripting tasks, CI/CD support, and automation to improve system reliability',
        'Actively learning cloud infrastructure and enterprise-level IT support operations'
      ]
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Technology - Computer Science & Engineering',
      institution: 'Your University Name',
      location: 'Your City, State',
      period: '2020 - 2024',
      grade: 'CGPA: 8.5/10',
      highlights: [
        'Specialized in Data Structures, Algorithms, and System Design',
        'Completed projects in Web Development and Cloud Computing',
        'Active member of Computer Science Society'
      ]
    }
  ]

  const technicalSkills = {
    'Programming Languages': [
      { name: 'JavaScript', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Java', level: 75 }
    ],
    'Frontend Technologies': [
      { name: 'React/Next.js', level: 92 },
      { name: 'HTML5/CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Three.js', level: 75 }
    ],
    'Backend Technologies': [
      { name: 'Node.js/Express', level: 88 },
      { name: 'REST APIs', level: 90 },
      { name: 'GraphQL', level: 75 },
      { name: 'Microservices', level: 80 }
    ],
    'Cloud & DevOps': [
      { name: 'AWS', level: 85 },
      { name: 'Azure', level: 80 },
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 78 }
    ],
    'Databases': [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'Redis', level: 75 },
      { name: 'MySQL', level: 80 }
    ],
    'Tools & Platforms': [
      { name: 'ServiceNow', level: 88 },
      { name: 'SolarWinds', level: 85 },
      { name: 'New Relic', level: 82 },
      { name: 'Jenkins', level: 80 }
    ]
  }

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2024',
      status: 'In Progress'
    },
    {
      name: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      date: '2023',
      status: 'Completed'
    }
  ]

  const achievements = [
    'Reduced incident response time by 40% through automated monitoring solutions',
    'Successfully managed P1/P2 incidents with 99.5% resolution rate',
    'Implemented automation scripts that improved system reliability by 30%',
    'Collaborated with cross-functional teams across multiple time zones'
  ]

  useEffect(() => {
    if (!animationsEnabled) return

    gsap.from(pageRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out'
    })

    // Skills animation
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
            stagger: 0.05
          }
        )
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [animationsEnabled])

  const downloadResume = () => {
    // In a real application, this would download the actual PDF
    const link = document.createElement('a')
    link.href = '/resume-purna-jear.pdf' // You would place your actual PDF in the public folder
    link.download = 'Purna_Jear_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div ref={pageRef} className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-4 gradient-text">Resume</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Download my complete resume or view it below
          </p>
          <motion.button
            onClick={downloadResume}
            className="btn-primary flex items-center space-x-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            <span>Download Resume</span>
          </motion.button>
        </motion.div>

        {/* Resume Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Personal Info & Contact */}
          <motion.div 
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
                      {/* Personal Info */}
          <div className="card-enhanced p-6">
            <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">PJ</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  {personalInfo.name}
                </h2>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  {personalInfo.title}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="text-blue-500" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">{personalInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="text-green-500" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">{personalInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="text-red-500" size={16} />
                  <span className="text-gray-600 dark:text-gray-300">{personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Linkedin className="text-blue-600" size={16} />
                  <a href={personalInfo.linkedin} className="text-blue-600 hover:text-blue-700 transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Github className="text-gray-700 dark:text-gray-300" size={16} />
                  <a href={personalInfo.github} className="text-blue-600 hover:text-blue-700 transition-colors">
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="card-enhanced p-6">
              <h3 className="text-xl font-bold mb-4 text-enhanced flex items-center">
                <Award className="text-yellow-500 mr-2" size={20} />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-l-2 border-blue-500 pl-4">
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">{cert.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-gray-500">{cert.date}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        cert.status === 'Completed' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                          : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Achievements */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Key Achievements
              </h3>
              <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                  <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Experience, Education, Skills */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Summary */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Professional Summary
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>

            {/* Experience */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 flex items-center">
                <Briefcase className="text-blue-500 mr-2" size={24} />
                Professional Experience
              </h3>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                          {job.title}
                        </h4>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                          {job.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-600 dark:text-gray-300 font-medium">
                          {job.period}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {job.location}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2 mt-4">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 flex items-center">
                <GraduationCap className="text-green-500 mr-2" size={24} />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                          {edu.degree}
                        </h4>
                        <p className="text-lg text-green-600 dark:text-green-400 font-medium">
                          {edu.institution}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{edu.grade}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-600 dark:text-gray-300 font-medium">
                          {edu.period}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {edu.location}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-1 mt-4">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                          <span className="text-green-500 mr-2 mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div 
              ref={skillsRef}
              className="skills-section bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 flex items-center">
                <Code className="text-purple-500 mr-2" size={24} />
                Technical Skills
              </h3>
              <div className="space-y-6">
                {Object.entries(technicalSkills).map(([category, skills]) => (
                  <div key={category}>
                    <h4 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">
                      {category}
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {skills.map((skill) => (
                        <div key={skill.name} className="skill-item">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-gray-800 dark:text-gray-200">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div 
                              className="skill-bar h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                              data-level={skill.level}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ResumePage 