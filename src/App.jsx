import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

// Components
import LoadingScreen from './components/LoadingScreen'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ResumePage from './pages/ResumePage'
import ContactPage from './pages/ContactPage'
import ThreeBackground from './components/ThreeBackground'
import ScrollToTop from './components/ScrollToTop'
import { ThemeProvider } from './contexts/ThemeContext'
import { AnimationProvider } from './contexts/AnimationContext'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin)

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Initialize app
    const initApp = async () => {
      // Simulate loading time for assets
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Initialize GSAP
      gsap.set('body', { visibility: 'visible' })
      
      setIsLoading(false)
      setIsInitialized(true)
    }

    initApp()
  }, [])

  useEffect(() => {
    if (!isInitialized) return

    // Initialize ScrollTrigger after loading
    ScrollTrigger.refresh()

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [isInitialized])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <ThemeProvider>
      <AnimationProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          {/* Three.js Background */}
          <ThreeBackground />
          
          {/* Main App Content */}
          <div className="relative z-10">
            <Navigation />
            
            <main className="relative">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/resume" element={<ResumePage />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
              </AnimatePresence>
            </main>

            {/* Scroll to Top Button */}
            <ScrollToTop />
          </div>
        </div>
      </AnimationProvider>
    </ThemeProvider>
  )
}

export default App 