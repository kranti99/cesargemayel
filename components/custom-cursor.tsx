"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Check if cursor is over a clickable element
      const target = e.target as HTMLElement
      const isClickable =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer"

      setIsPointer(isClickable)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        body {
          cursor: auto;
        }
      `}</style>

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 hidden h-16 w-16 rounded-full border-2 border-amber-500/60 bg-transparent md:block"
        animate={{
          x: mousePosition.x - 32,
          y: mousePosition.y - 32,
          scale: isPointer ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.5,
        }}
      />
    </>
  )
}
