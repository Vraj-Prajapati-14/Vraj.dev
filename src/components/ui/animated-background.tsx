"use client"

import { motion } from 'framer-motion'

interface AnimatedBackgroundProps {
  intensity?: 'low' | 'medium' | 'high'
  className?: string
}

export function AnimatedBackground({ intensity = 'medium', className = '' }: AnimatedBackgroundProps) {
  const particleCount = intensity === 'high' ? 30 : intensity === 'medium' ? 20 : 10
  const orbCount = intensity === 'high' ? 6 : intensity === 'medium' ? 4 : 2

  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />
      
      {/* Floating Orbs */}
      {[...Array(orbCount)].map((_, i) => {
        // Use deterministic values based on index to avoid hydration mismatch
        const width = 100 + ((i * 50) % 200)
        const height = 100 + ((i * 70) % 200)
        const left = ((i * 30) % 100) + (i % 20)
        const top = ((i * 40) % 100) + (i % 15)
        const duration = 10 + (i % 5)
        const delay = (i % 3) * 2
        
        return (
          <motion.div
            key={`orb-${i}`}
            className={`absolute rounded-full blur-3xl ${
              i % 3 === 0 ? 'bg-blue-500/20' : i % 3 === 1 ? 'bg-purple-500/20' : 'bg-pink-500/20'
            }`}
            style={{
              width: `${width}px`,
              height: `${height}px`,
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
            }}
          />
        )
      })}
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>
      
      {/* Moving Particles */}
      <div className="absolute inset-0">
        {[...Array(particleCount)].map((_, i) => {
          // Use deterministic values based on index to avoid hydration mismatch
          const left = ((i * 7) % 100) + (i % 20)
          const top = ((i * 11) % 100) + (i % 15)
          const duration = 15 + (i % 10)
          const delay = (i % 5) * 2
          const moveX = ((i * 13) % 200) - 100
          const moveY = ((i * 17) % 200) - 100
          
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              animate={{
                x: [0, moveX],
                y: [0, moveY],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
              }}
              style={{
                left: `${left}%`,
                top: `${top}%`,
              }}
            />
          )
        })}
      </div>
      
      {/* Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent" />
    </div>
  )
} 