import { useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(href)
  }

  // Handle navigation with scroll to top
  const handleNavigation = (href: string) => {
    navigate(href)
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
  }

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsMobileMenuOpen(false)
    }

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 glass border-b border-border/20">
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo/Brand */}
          <button 
            onClick={() => handleNavigation('/')}
            className="text-xl font-bold text-gradient hover:opacity-80 transition-opacity duration-200 z-50 bg-transparent border-none cursor-pointer"
          >
            Ali Hegazy
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 bg-transparent border-none cursor-pointer ${
                  isActive(item.href)
                    ? 'text-accent'
                    : 'text-foreground hover:text-accent'
                }`}
              >
                {item.name}
                {/* Active indicator with animation */}
                {isActive(item.href) && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button 
              onClick={() => handleNavigation('/contact')}
              className="btn-primary text-sm"
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden relative z-50 p-2 text-foreground hover:text-accent transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/20 md:hidden"
            >
              <div className="px-6 py-4 space-y-4">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className={`w-full text-left block py-3 px-4 text-lg font-medium transition-colors duration-200 rounded-lg bg-transparent border-none cursor-pointer ${
                        isActive(item.href)
                          ? 'text-accent bg-accent/10'
                          : 'text-foreground hover:text-accent hover:bg-accent/5'
                      }`}
                    >
                      {item.name}
                    </button>
                  </motion.div>
                ))}
                
                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4"
                >
                  <button 
                    onClick={() => handleNavigation('/contact')}
                    className="block w-full text-center btn-primary py-3"
                  >
                    Get In Touch
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
