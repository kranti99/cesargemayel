"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

// Generate random particles for the background
const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100 + 100, // Start below the viewport
    size: Math.random() * 8 + 3, // Larger particles
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 10,
    opacity: Math.random() * 0.5 + 0.3, // More visible
    color:
      Math.random() > 0.5
        ? Math.random() > 0.5
          ? "bg-amber-500"
          : "bg-orange-500"
        : Math.random() > 0.5
          ? "bg-red-500"
          : "bg-yellow-500",
    blur: Math.random() > 0.7 ? "blur-sm" : "",
  }))
}

export default function FloatingElements() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Only generate particles on client side
    setParticles(generateParticles(50))
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${particle.color} ${particle.blur}`}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          initial={{
            x: `${particle.x}vw`,
            y: `${particle.y}vh`,
            opacity: 0,
          }}
          animate={{
            y: [`${particle.y}vh`, "-10vh"],
            opacity: [0, particle.opacity, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}
