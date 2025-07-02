import { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * Custom hook for optimized navigation with scroll to top
 * Memoizes navigation functions to prevent unnecessary re-renders
 */
export const useOptimizedNavigation = () => {
  const navigate = useNavigate()
  
  const handleNavigation = useCallback((href: string) => {
    navigate(href)
    // Use requestAnimationFrame for smoother scroll
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    })
  }, [navigate])
  
  return { handleNavigation }
}

/**
 * Memoized animation variants to prevent object recreation
 */
export const useAnimationVariants = () => {
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }), [])

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }), [])

  const slideUpVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  }), [])

  return {
    containerVariants,
    itemVariants,
    slideUpVariants
  }
}

/**
 * Throttle function for performance optimization
 */
export const useThrottle = (func: Function, delay: number) => {
  return useCallback(
    (() => {
      let timeoutId: number
      let lastExecTime = 0
      return (...args: any[]) => {
        const currentTime = Date.now()
        
        if (currentTime - lastExecTime > delay) {
          func(...args)
          lastExecTime = currentTime
        } else {
          clearTimeout(timeoutId)
          timeoutId = window.setTimeout(() => {
            func(...args)
            lastExecTime = Date.now()
          }, delay - (currentTime - lastExecTime))
        }
      }
    })(),
    [func, delay]
  )
}
