import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { GeometricShape, AnimatedGrid, FloatingOrbs } from '../components/AbstractShapes'

const Projects = () => {
  // Filter state
  const [activeFilter, setActiveFilter] = useState('All')
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  
  // Filter options
  const filters = ['All', 'Web', 'Apps', 'Open Source']
  
  // Featured project data
  const featuredProject = {
    title: "FocusFlow - Pomodoro Timer",
    description: "A clean, minimal Pomodoro timer designed for productivity and deep work. Built with HTML, CSS, and JavaScript featuring simple layout, sound alerts, and adjustable focus/break intervals.",
    image: "/api/placeholder/800/600",
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
    githubUrl: "https://github.com",
    liveUrl: "https://egfocusflow.netlify.app/",
    category: 'Web'
  }
  
  // Projects grid data
  const projects = [
    {
      id: 1,
      title: "SkillLoop – Peer Learning Exchange",
      description: "A web app where users list skills they can teach and skills they want to learn, then match with others. Features smart matchmaking, session scheduling, and feedback system.",
      image: "/api/placeholder/400/300",
      technologies: ['React', 'Tailwind CSS', 'Firebase', 'Calendar Sync'],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      category: 'Apps'
    },
    {
      id: 2,
      title: "PathFinder – University Map & Planner",
      description: "An interactive campus map and semester planner for students. Features clickable building maps, class scheduling, room routes, and mobile-friendly UI.",
      image: "/api/placeholder/400/350",
      technologies: ['Leaflet.js', 'JavaScript', 'Tailwind CSS', 'LocalStorage'],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      category: 'Web'
    },
    {
      id: 3,
      title: "QuickQuote – Instant PDF Generator",
      description: "A web app for freelancers to generate professional PDF quotes/invoices in seconds. Features auto-fill, template styles, and quote history.",
      image: "/api/placeholder/400/280",
      technologies: ['HTML', 'JavaScript', 'Tailwind CSS', 'jsPDF'],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      category: 'Web'
    },
    {
      id: 4,
      title: "Challengr – Personal Challenge Tracker",
      description: "Track 30-day or weekly challenges with calendar view, progress tracking, streak badges, and mobile-first design to build better habits.",
      image: "/api/placeholder/400/320",
      technologies: ['React', 'LocalStorage', 'Calendar UI', 'Mobile-First'],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      category: 'Apps'
    },
    {
      id: 5,
      title: "LocalGoods – Hyperlocal E-commerce",
      description: "A neighborhood-based e-commerce store concept with product grids, filtering, cart simulation, and blog-style homepage to showcase commercial UI skills.",
      image: "/api/placeholder/400/290",
      technologies: ['HTML', 'CSS', 'JavaScript', 'E-commerce UI'],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      category: 'Web'
    },
    {
      id: 6,
      title: "TaskNest – Lightweight Team Task Board",
      description: "A Trello-style team task manager with drag-and-drop cards, shared boards via link, status colors, and no sign-in required for simplicity.",
      image: "/api/placeholder/400/270",
      technologies: ['React', 'Firebase', 'Drag & Drop', 'Team Collaboration'],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      category: 'Apps'
    }
  ]

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

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

  // Refs for scroll animations
  const featuredRef = useRef(null)
  const gridRef = useRef(null)
  const isFeaturedInView = useInView(featuredRef, { once: true, margin: "-100px" })
  const isGridInView = useInView(gridRef, { once: true, margin: "-100px" })

  return (
    <div className="bg-background text-foreground relative overflow-hidden">
      {/* Abstract Background Elements (Reduced for performance) */}
      <AnimatedGrid />
      <FloatingOrbs />
      <GeometricShape className="top-32 right-20 opacity-10" />
      
      {/* Hero Section with Enhanced Design */}
      <section className="relative min-h-[25vh] flex items-center justify-center px-6 py-20 abstract-bg">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90 pointer-events-none" />
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative z-10 max-w-[800px] mx-auto text-center"
        >
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-[48px] md:text-[64px] font-black text-white mb-6 leading-tight relative"
          >
            <span className="relative inline-block">
              Selected Work
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-accent/10 to-green-400/10 rounded-3xl"
                animate={{ 
                  scale: [1, 1.02, 1],
                  opacity: [0.5, 0.2, 0.5]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            transition={{ delay: 0.2 }}
            className="text-[18px] md:text-[20px] text-muted leading-relaxed"
          >
            A collection of projects that showcase my passion for creating exceptional digital experiences.
          </motion.p>
        </motion.div>
      </section>

      {/* Featured Project Section */}
      <section ref={featuredRef} className="min-h-[50vh] py-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isFeaturedInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center"
          >
            {/* Project Image */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={isFeaturedInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="relative overflow-hidden bg-background-secondary border border-border/30 aspect-[4/3] rounded-3xl floating-element">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="bg-accent text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                    FEATURED
                  </span>
                </div>
                {/* Placeholder for image */}
                <div className="w-full h-full flex items-center justify-center text-muted">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-accent/20 rounded-2xl flex items-center justify-center">
                      <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm">Project Image</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project Info */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={isFeaturedInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h2 className="text-[28px] md:text-[36px] font-bold text-white mb-4 leading-tight">
                  {featuredProject.title}
                </h2>
                <p className="text-[16px] md:text-[18px] text-muted leading-relaxed">
                  {featuredProject.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-sm font-medium text-foreground mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 10px rgba(127, 90, 240, 0.3)"
                      }}
                      className="bg-background-secondary text-white text-sm px-3 py-1 border border-border/30 hover:border-accent/50 transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-accent text-black font-bold px-6 py-3 text-center hover:bg-white transition-colors duration-200"
                >
                  View Live Demo
                </motion.a>
                <motion.a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-accent text-accent font-bold px-6 py-3 text-center hover:bg-accent hover:text-black transition-all duration-200"
                >
                  View Code
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter System */}
      <section className="py-12 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-3 text-sm font-medium transition-all duration-200 rounded-2xl ${
                  activeFilter === filter
                    ? 'bg-accent text-black shadow-lg'
                    : 'text-muted border border-border hover:text-accent hover:border-accent/50 bg-background-secondary/30'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Grid */}
      <section ref={gridRef} className="py-12 px-6 pb-20">
        <div className="max-w-[1200px] mx-auto">
          <motion.div 
            key={activeFilter} // Re-trigger animation on filter change
            initial="hidden"
            animate={isGridInView ? "visible" : "hidden"}
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ 
                  y: -8,
                  scale: expandedProject === project.id ? 1 : 1.02,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                  transition: { duration: 0.3 }
                }}
                animate={{
                  scale: expandedProject === project.id ? 1.1 : 1,
                  y: expandedProject === project.id ? -20 : 0,
                  zIndex: expandedProject === project.id ? 50 : 1
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                className="glass-card floating-element glow-on-hover overflow-hidden group rounded-3xl border border-border/30 bg-gradient-to-br from-background-secondary/80 to-background-secondary/40 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 cursor-pointer"
              >
                {/* Project Image */}
                <div className="aspect-[4/3] bg-background-secondary relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-full h-full flex items-center justify-center text-muted">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 bg-accent/20 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-xs">Project Image</p>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-[20px] font-bold text-white mb-2 group-hover:text-accent transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-[14px] text-muted leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Expanded content */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: expandedProject === project.id ? 'auto' : 0,
                        opacity: expandedProject === project.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      {expandedProject === project.id && (
                        <div className="mt-4 space-y-3">
                          <div className="p-4 bg-accent/10 rounded-2xl border border-accent/20">
                            <h4 className="text-sm font-medium text-accent mb-2">Project Details</h4>
                            <p className="text-xs text-muted">
                              This project demonstrates modern web development practices with clean code architecture and responsive design principles.
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                              Completed
                            </span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">
                              {project.category}
                            </span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-background text-muted text-xs px-2 py-1 border border-border/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-muted px-2 py-1">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-white text-sm font-medium transition-colors duration-200"
                      >
                        Live Demo →
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent text-sm font-medium transition-colors duration-200"
                    >
                      Code →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No results message */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted text-lg">No projects found for "{activeFilter}" category.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Projects
