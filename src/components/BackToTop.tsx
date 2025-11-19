import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useSmoothScroll } from '../utils/smoothScroll'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollToTop } = useSmoothScroll()

  useEffect(() => {
    let timeoutId: number | undefined

    const toggleVisibility = () => {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = window.setTimeout(() => {
        setIsVisible(window.pageYOffset > 300)
      }, 100)
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "#9370ff",
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-accent text-black p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          aria-label="Back to top"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
