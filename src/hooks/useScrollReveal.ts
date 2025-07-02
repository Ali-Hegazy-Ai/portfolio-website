import { useEffect, useRef } from 'react'
import { useInView, useAnimation } from 'framer-motion'

interface ScrollRevealOptions {
  threshold?: number
  triggerOnce?: boolean
  delay?: number
  duration?: number
}

export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    delay = 0,
    duration = 0.6
  } = options

  const ref = useRef(null)
  const isInView = useInView(ref, { 
    amount: threshold,
    once: triggerOnce
  })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { 
          delay, 
          duration,
          ease: "easeOut"
        }
      })
    } else if (!triggerOnce) {
      controls.start({
        opacity: 0,
        y: 20
      })
    }
  }, [isInView, controls, delay, duration, triggerOnce])

  return {
    ref,
    controls,
    initial: { opacity: 0, y: 20 }
  }
}

// Preset variants for common animations
export const scrollRevealVariants = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  },
  fadeInDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 }
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }
}
