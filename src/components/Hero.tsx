import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FloatingBlob1, FloatingBlob2, FloatingRing, GeometricShape } from './AbstractShapes'

const Hero = () => {
  const navigate = useNavigate()
  
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  // Navigate to projects page
  const scrollToProjects = () => {
    navigate('/projects')
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
  }

  // Navigate to contact page
  const scrollToContact = () => {
    navigate('/contact')
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-background-secondary overflow-hidden">
      {/* Abstract Background Elements */}
      <FloatingBlob1 className="top-20 -left-20 opacity-30" />
      <FloatingBlob2 className="bottom-32 -right-16 opacity-25" />
      <FloatingRing className="top-1/4 right-1/4 opacity-40" />
      <GeometricShape className="bottom-1/4 left-1/3 opacity-20" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40 pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(127, 90, 240, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(127, 90, 240, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-[1200px] mx-auto px-6 text-center"
      >
        {/* Main Title with Enhanced Typography */}
        <motion.h1 
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[64px] md:text-[120px] font-black text-white leading-[0.8] tracking-tight mb-4 relative"
        >
          <span className="relative inline-block">
            Ali Hegazy
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-transparent rounded-2xl"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.1, 0.3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </span>
        </motion.h1>

        {/* Enhanced Subtitle with Gradient */}
        <motion.h2 
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-[24px] md:text-[40px] font-bold mb-6 bg-gradient-to-r from-accent via-green-400 to-accent bg-clip-text text-transparent"
        >
          Front-End Developer & AI Enthusiast
        </motion.h2>

        {/* Tagline */}
        <motion.p 
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-[18px] md:text-[24px] text-muted max-w-[600px] mx-auto mb-10 leading-relaxed"
        >
          Cairo-based tech enthusiast turning creative ideas into functional websites and AI-powered tools.
        </motion.p>

        {/* Enhanced CTA Buttons with Glassmorphism */}
        <motion.div 
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              y: -5,
              boxShadow: "0 20px 40px rgba(127, 90, 240, 0.3)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToProjects}
            className="group w-full sm:w-auto bg-accent text-black font-bold px-8 py-4 text-lg hover:bg-white transition-all duration-300 min-w-[180px] rounded-2xl relative overflow-hidden backdrop-blur-sm border border-accent/20 shadow-lg"
          >
            <span className="relative z-10">View My Work</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>

          <motion.button
            whileHover={{ 
              scale: 1.05,
              y: -5,
              backgroundColor: "rgba(127, 90, 240, 0.1)",
              borderColor: "#7f5af0",
              boxShadow: "0 20px 40px rgba(127, 90, 240, 0.2)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToContact}
            className="group w-full sm:w-auto border-2 border-accent/50 text-accent font-bold px-8 py-4 text-lg transition-all duration-300 min-w-[180px] rounded-2xl backdrop-blur-sm bg-white/5 hover:bg-accent/10 relative overflow-hidden"
          >
            <span className="relative z-10">Get In Touch</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator removed for cleaner, modern design */}
    </section>
  )
}

export default Hero
