import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import anime from 'animejs'

const LoadingScreen = () => {
  const loadingRef = useRef(null)
  const logoRef = useRef(null)
  const progressRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Initial setup
    gsap.set([logoRef.current, textRef.current], { opacity: 0, y: 20 })
    gsap.set(progressRef.current, { scaleX: 0 })

    // Logo animation
    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    })

    // Text animation with typewriter effect
    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.4')

    // Progress bar animation
    tl.to(progressRef.current, {
      scaleX: 1,
      duration: 1.5,
      ease: 'power2.inOut'
    }, '-=0.2')

    // Anime.js text animation
    anime({
      targets: textRef.current,
      scale: [0.8, 1],
      duration: 1000,
      easing: 'easeOutElastic(1, .8)',
      delay: 800
    })

    // Floating animation for logo
    gsap.to(logoRef.current, {
      y: -10,
      duration: 2,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
      delay: 1
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div 
      ref={loadingRef}
      className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center z-50"
    >
      <div className="text-center">
        {/* Logo */}
        <div ref={logoRef} className="mb-8">
          <div className="w-20 h-20 mx-auto mb-4 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl rotate-45 animate-pulse"></div>
            <div className="absolute inset-2 bg-gray-900 rounded-xl rotate-45 flex items-center justify-center">
              <span className="text-white font-bold text-2xl -rotate-45">PJ</span>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div ref={textRef} className="text-white text-xl font-medium mb-8">
          Loading Portfolio...
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden mx-auto">
          <div 
            ref={progressRef}
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transform origin-left"
          ></div>
        </div>

        {/* Dots Animation */}
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-blue-500 rounded-full"
              style={{
                animation: `pulse 1.5s infinite ${i * 0.2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s infinite ${Math.random() * 2}s ease-in-out`
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default LoadingScreen 