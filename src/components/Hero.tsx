import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

const Hero = () => {
  const navigate = useNavigate()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number }>>([])

  // Mouse tracking for 3D effects
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10])
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10])

  const springConfig = { stiffness: 100, damping: 30 }
  const rotateXSpring = useSpring(rotateX, springConfig)
  const rotateYSpring = useSpring(rotateY, springConfig)

  // Generate particles
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10
    }))
    setParticles(newParticles)
  }, [])

  // Mouse move handler
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    mouseX.set(x)
    mouseY.set(y)
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const scrollToProjects = () => navigate('/projects')
  const scrollToContact = () => navigate('/contact')

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Particle System */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Dynamic Grid with Perspective */}
      <div className="absolute inset-0" style={{ perspective: '1000px' }}>
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 2px, transparent 2px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 2px, transparent 2px)
            `,
            backgroundSize: '100px 100px',
            rotateX: rotateXSpring,
            rotateY: rotateYSpring,
          }}
        />
      </div>

      {/* Floating Abstract Shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-64 h-64 border border-white/10 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 10}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-[1400px] mx-auto px-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Glitch Effect Title */}
        <div className="relative mb-8">
          <motion.h1
            className="text-[80px] md:text-[160px] font-black text-white leading-[0.85] tracking-tighter"
            style={{
              textShadow: '0 0 80px rgba(255,255,255,0.5)',
            }}
            animate={{
              textShadow: [
                '0 0 80px rgba(255,255,255,0.5)',
                '0 0 100px rgba(255,255,255,0.8)',
                '0 0 80px rgba(255,255,255,0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.span
              className="inline-block"
              animate={{
                rotateX: [0, 5, 0, -5, 0],
                rotateY: [0, -5, 0, 5, 0],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              ALI HEGAZY
            </motion.span>
          </motion.h1>

          {/* Glitch layers */}
          <motion.h1
            className="absolute inset-0 text-[80px] md:text-[160px] font-black text-white/20 leading-[0.85] tracking-tighter"
            animate={{
              x: [0, -5, 5, -5, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 3 }}
          >
            ALI HEGAZY
          </motion.h1>
        </div>

        {/* Animated Subtitle with 3D Effect */}
        <motion.div
          className="mb-8"
          style={{
            rotateX: rotateXSpring,
            rotateY: rotateYSpring,
            transformStyle: 'preserve-3d',
          }}
        >
          <motion.h2
            className="text-[28px] md:text-[48px] font-bold mb-6 relative"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              background: 'linear-gradient(90deg, #fff, #888, #fff, #888, #fff)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Front-End Developer & AI Enthusiast
          </motion.h2>
        </motion.div>

        {/* Tagline with Typewriter Effect */}
        <motion.p
          className="text-[20px] md:text-[26px] text-gray-400 max-w-[700px] mx-auto mb-10 leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Cairo-based tech enthusiast turning creative ideas into functional websites and AI-powered tools.
        </motion.p>

        {/* Enhanced Social Links with Magnetic Effect */}
        <motion.div
          className="flex gap-6 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {[
            { name: 'GitHub', url: 'https://github.com/Ali-Hegazy-Ai', icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
            { name: 'LinkedIn', url: 'https://linkedin.com/in/ali-hegazy', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' }
          ].map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 rounded-2xl backdrop-blur-xl transition-all duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d={social.icon} clipRule="evenodd" />
                </svg>
                <span className="text-white font-bold text-lg">{social.name}</span>
              </div>

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-white/20 blur-xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons with Advanced Effects */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button
            onClick={scrollToProjects}
            className="group relative w-full sm:w-auto px-10 py-5 bg-white text-black font-bold text-lg rounded-2xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View My Work</span>

            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              animate={{
                x: ['-200%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1,
              }}
            />
          </motion.button>

          <motion.button
            onClick={scrollToContact}
            className="group relative w-full sm:w-auto px-10 py-5 border-2 border-white/50 text-white font-bold text-lg rounded-2xl backdrop-blur-sm bg-white/5 overflow-hidden"
            whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,1)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get In Touch</span>

            {/* Hover fill effect */}
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              style={{ originX: 0 }}
            />

            <motion.span
              className="absolute inset-0 flex items-center justify-center text-black font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Get In Touch
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator with Animation */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5 },
            y: { duration: 2, repeat: Infinity }
          }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60 pointer-events-none" />
    </section>
  )
}

export default Hero
