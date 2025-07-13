import React, { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'
import { useTheme } from '../contexts/ThemeContext'
import { useAnimation } from '../contexts/AnimationContext'

// Particles Component
const Particles = ({ count = 2000 }) => {
  const mesh = useRef()
  const { isDark } = useTheme()
  const { animationsEnabled } = useAnimation()

  // Generate random particle positions
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      // Random positions in a sphere
      const distance = Math.random() * 20 + 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      
      positions[i * 3] = distance * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = distance * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = distance * Math.cos(phi)
      
      // Random colors
      const color = new THREE.Color()
      color.setHSL(
        isDark ? 0.6 + Math.random() * 0.2 : 0.5 + Math.random() * 0.3,
        0.7,
        isDark ? 0.7 : 0.5
      )
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }
    
    return [positions, colors]
  }, [count, isDark])

  // Animation loop
  useFrame((state) => {
    if (!animationsEnabled || !mesh.current) return

    const time = state.clock.getElapsedTime()
    
    // Rotate the entire particle system
    mesh.current.rotation.x = time * 0.1
    mesh.current.rotation.y = time * 0.05
    
    // Animate individual particles
    const positions = mesh.current.geometry.attributes.position.array
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const originalY = positions[i3 + 1]
      positions[i3 + 1] = originalY + Math.sin(time + i * 0.01) * 0.1
    }
    
    mesh.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <Points ref={mesh} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={2}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

// Floating Orbs Component
const FloatingOrbs = () => {
  const orbs = useRef([])
  const { isDark } = useTheme()
  const { animationsEnabled } = useAnimation()

  const orbsData = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40
      ],
      scale: Math.random() * 0.5 + 0.5,
      speed: Math.random() * 0.02 + 0.01,
      color: isDark ? '#3b82f6' : '#6366f1'
    }))
  }, [isDark])

  useFrame((state) => {
    if (!animationsEnabled) return

    orbs.current.forEach((orb, index) => {
      if (orb) {
        const time = state.clock.getElapsedTime()
        const data = orbsData[index]
        
        orb.position.x = data.position[0] + Math.sin(time * data.speed) * 5
        orb.position.y = data.position[1] + Math.cos(time * data.speed * 0.7) * 3
        orb.position.z = data.position[2] + Math.sin(time * data.speed * 0.5) * 4
        
        orb.material.opacity = 0.1 + Math.sin(time * 2) * 0.05
      }
    })
  })

  return (
    <>
      {orbsData.map((data, index) => (
        <Sphere
          key={index}
          ref={(el) => (orbs.current[index] = el)}
          args={[data.scale, 32, 32]}
          position={data.position}
        >
          <meshStandardMaterial
            color={data.color}
            transparent
            opacity={0.1}
            emissive={data.color}
            emissiveIntensity={0.2}
          />
        </Sphere>
      ))}
    </>
  )
}

// Mouse Interaction
const MouseInteraction = () => {
  const { camera, gl } = useThree()
  const mouse = useRef({ x: 0, y: 0 })
  const { animationsEnabled } = useAnimation()

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!animationsEnabled) return

      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [animationsEnabled])

  useFrame(() => {
    if (!animationsEnabled) return

    // Subtle camera movement based on mouse position
    camera.position.x += (mouse.current.x * 2 - camera.position.x) * 0.02
    camera.position.y += (mouse.current.y * 2 - camera.position.y) * 0.02
    camera.lookAt(0, 0, 0)
  })

  return null
}

// Main Three.js Background Component
const ThreeBackground = () => {
  const { isDark } = useTheme()
  const { animationsEnabled } = useAnimation()

  const cameraSettings = {
    position: [0, 0, 30],
    fov: 75,
    near: 0.1,
    far: 1000
  }

  return (
    <div className="three-canvas">
      <Canvas
        camera={cameraSettings}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        {/* Lighting */}
        <ambientLight intensity={isDark ? 0.3 : 0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={isDark ? 0.5 : 0.8}
          color={isDark ? '#3b82f6' : '#6366f1'}
        />
        <pointLight
          position={[-10, -10, -5]}
          intensity={isDark ? 0.3 : 0.5}
          color={isDark ? '#8b5cf6' : '#ec4899'}
        />

        {/* 3D Elements */}
        {animationsEnabled && (
          <>
            <Particles count={1500} />
            <FloatingOrbs />
            <MouseInteraction />
          </>
        )}

        {/* Fog for depth */}
        <fog attach="fog" args={[isDark ? '#0f172a' : '#f8fafc', 30, 100]} />
      </Canvas>
    </div>
  )
}

export default ThreeBackground 