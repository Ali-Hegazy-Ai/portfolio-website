import { motion } from 'framer-motion'
import { useScrollReveal, scrollRevealVariants } from '../hooks/useScrollReveal'
import { FloatingRing, GeometricShape, MovingLines, AnimatedGrid, FloatingOrbs } from '../components/AbstractShapes'

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const slideUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  }

  // Core technologies data
  const technologies = [
    'React', 'TypeScript', 'Next.js', 'Tailwind CSS',
    'Node.js', 'Framer Motion', 'Vite', 'Git',
    'Figma', 'JavaScript', 'HTML5', 'CSS3'
  ]

  return (
    <div className="bg-background text-foreground relative overflow-hidden">
      {/* Abstract Background Elements */}
      <MovingLines className="opacity-60" />
      <AnimatedGrid />
      <FloatingOrbs />
      <FloatingRing className="top-20 right-10 opacity-20" />
      <GeometricShape className="bottom-40 left-10 opacity-15" />
      
      {/* Hero Block with Enhanced Design */}
      <section className="relative min-h-[30vh] flex items-center justify-center px-6 py-20 mesh-gradient">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative z-10 max-w-[800px] mx-auto text-center"
        >
          <motion.h1 
            variants={slideUpVariants}
            className="text-[48px] md:text-[64px] font-black text-white mb-6 leading-tight relative"
          >
            <span className="relative inline-block">
              About Me
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent to-green-400 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            transition={{ delay: 0.2 }}
            className="text-[18px] md:text-[24px] text-muted leading-relaxed"
          >
            I'm Ali Hegazy, a Cairo-based tech enthusiast focused on front-end development, AI foundations, and real-world project building. I specialize in turning creative ideas into functional websites and tools, with a focus on simplicity, usability, and strong execution.
          </motion.p>
        </motion.div>
      </section>

      {/* Core Technologies Grid */}
      <section className="min-h-[40vh] py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[28px] md:text-[32px] font-bold text-white text-center mb-12"
          >
            Core Technologies
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {technologies.map((tech) => (
              <motion.div
                key={tech}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(127, 90, 240, 0.3)",
                  transition: { duration: 0.2 }
                }}
                className="group relative bg-gradient-to-br from-background-secondary/80 to-background-secondary/40 backdrop-blur-sm border border-border/30 p-4 md:p-6 text-center hover:border-accent/50 transition-all duration-300 cursor-pointer rounded-2xl overflow-hidden floating-element"
              >
                <span className="text-[18px] font-bold text-foreground">
                  {tech}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
