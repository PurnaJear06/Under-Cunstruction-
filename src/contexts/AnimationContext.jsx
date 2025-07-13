import React, { createContext, useContext, useEffect, useState } from 'react'

const AnimationContext = createContext()

export const useAnimation = () => {
  const context = useContext(AnimationContext)
  if (!context) {
    throw new Error('useAnimation must be used within an AnimationProvider')
  }
  return context
}

export const AnimationProvider = ({ children }) => {
  const [animationsEnabled, setAnimationsEnabled] = useState(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const savedPreference = localStorage.getItem('animationsEnabled')
    
    if (savedPreference !== null) {
      return JSON.parse(savedPreference)
    }
    
    return !prefersReducedMotion
  })

  const [isPageTransitioning, setIsPageTransitioning] = useState(false)
  const [currentSection, setCurrentSection] = useState('home')

  useEffect(() => {
    // Save animation preference
    localStorage.setItem('animationsEnabled', JSON.stringify(animationsEnabled))
  }, [animationsEnabled])

  useEffect(() => {
    // Listen for reduced motion preference changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    
    const handleChange = (e) => {
      if (e.matches) {
        setAnimationsEnabled(false)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleAnimations = () => {
    setAnimationsEnabled(prev => !prev)
  }

  const startPageTransition = () => {
    setIsPageTransitioning(true)
  }

  const endPageTransition = () => {
    setIsPageTransitioning(false)
  }

  const value = {
    animationsEnabled,
    toggleAnimations,
    isPageTransitioning,
    startPageTransition,
    endPageTransition,
    currentSection,
    setCurrentSection
  }

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  )
} 