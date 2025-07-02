import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // More reliable desktop detection
    const isDesktop = () => {
      return window.innerWidth >= 1024 && 
             !('ontouchstart' in window) && 
             navigator.maxTouchPoints === 0
    }
    
    const checkDevice = () => {
      setIsVisible(isDesktop())
    }
    
    checkDevice()
    window.addEventListener('resize', checkDevice)

    if (!isVisible) {
      return () => window.removeEventListener('resize', checkDevice)
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add event listeners for cursor tracking
    document.addEventListener('mousemove', updateMousePosition)

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"], .cursor-pointer')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    // Hide default cursor
    document.body.style.cursor = 'none'

    return () => {
      window.removeEventListener('resize', checkDevice)
      document.removeEventListener('mousemove', updateMousePosition)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
      // Restore default cursor
      document.body.style.cursor = 'auto'
    }
  }, [isVisible])

  // Don't render if not visible
  if (!isVisible) return null

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 1.5 : 1
        }}
        transition={{
          type: 'tween',
          ease: 'backOut',
          duration: 0.08
        }}
      />
      
      {/* Cursor outline */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 border border-accent/30 rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.3 : 1
        }}
        transition={{
          type: 'tween',
          ease: 'backOut',
          duration: 0.12
        }}
      />
    </>
  )
}

export default CustomCursor
