import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import ServicesPreview from '../components/ServicesPreview'
import { 
  AnimatedGrid, 
  FloatingOrbs, 
  StarField, 
  ConnectedNodes,
  EnergyCurves,
  FloatingCards
} from '../components/AbstractShapes'
import { useOptimizedNavigation } from '../hooks/usePerformance'

const HomePage = () => {
  const { handleNavigation } = useOptimizedNavigation()
  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero />
      
      {/* About Preview Section */}
      <section className="relative py-32 bg-gradient-to-b from-background-secondary to-background overflow-hidden">
        {/* Abstract Background Elements (Reduced for performance) */}
        <AnimatedGrid />
        <FloatingOrbs />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-green-400 mx-auto mb-8"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 floating-element"
          >
            <p className="text-xl md:text-2xl text-muted leading-relaxed mb-8 max-w-4xl mx-auto">
              I'm a passionate Front-End Developer and AI Enthusiast based in Cairo, Egypt. 
              With a strong foundation in modern web technologies and a keen interest in artificial intelligence, 
              I create innovative digital experiences that blend creativity with functionality.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-accent/5 rounded-2xl border border-accent/20"
              >
                <div className="text-3xl font-bold text-accent mb-2">3+</div>
                <div className="text-foreground-secondary">Years Experience</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-green-400/5 rounded-2xl border border-green-400/20"
              >
                <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
                <div className="text-foreground-secondary">Projects Completed</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-blue-400/5 rounded-2xl border border-blue-400/20"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-foreground-secondary">Client Satisfaction</div>
              </motion.div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="text-center"
            >
              <button
                onClick={() => handleNavigation('/about')}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-background font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-glow hover:shadow-glow-lg"
              >
                Learn More About Me
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="relative py-32 bg-gradient-to-b from-background to-background-secondary overflow-hidden">
        {/* Abstract Background Elements (Reduced for performance) */}
        <StarField className="opacity-20" />
        <ConnectedNodes />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              A showcase of my latest work in web development and AI integration
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "FocusFlow - Pomodoro Timer",
                description: "A clean, minimal Pomodoro timer for productivity and deep work",
                tech: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
                gradient: "from-accent to-purple-500"
              },
              {
                title: "SkillLoop – Peer Learning Exchange",
                description: "Web app for skill sharing with smart matchmaking and scheduling",
                tech: ["React", "Tailwind", "Firebase", "Calendar Sync"],
                gradient: "from-green-400 to-blue-500"
              },
              {
                title: "TaskNest – Team Task Board",
                description: "Lightweight Trello-style task manager for team collaboration",
                tech: ["React", "Firebase", "Drag & Drop", "Team Tools"],
                gradient: "from-blue-500 to-accent"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card p-6 floating-element group cursor-pointer"
              >
                <div className={`w-full h-48 bg-gradient-to-br ${project.gradient} rounded-xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-muted mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-accent group-hover:text-accent-hover transition-colors">
                  <span className="text-sm font-medium">View Project</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button
              onClick={() => handleNavigation('/projects')}
              className="inline-flex items-center gap-2 border-2 border-accent text-accent hover:bg-accent hover:text-background font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-glow"
            >
              View All Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <ServicesPreview />

      {/* Client Testimonials & Freelance Work Section */}
      <section className="relative py-32 bg-gradient-to-b from-background-secondary to-background overflow-hidden">
        {/* Abstract Background Elements */}
        <FloatingCards className="opacity-30" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              Client Success Stories
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Trusted by clients worldwide for delivering exceptional digital solutions
            </p>
          </motion.div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Sarah Johnson",
                role: "Small Business Owner",
                company: "Local Café",
                testimonial: "Ali transformed our online presence completely. Our website is now modern, fast, and brings in more customers daily.",
                rating: 5,
                project: "Business Website Redesign"
              },
              {
                name: "Michael Chen",
                role: "Startup Founder",
                company: "TechStart Inc.",
                testimonial: "Professional, creative, and delivered exactly what we needed. The dashboard Ali built is intuitive and powerful.",
                rating: 5,
                project: "Custom Dashboard Development"
              },
              {
                name: "Emma Rodriguez",
                role: "Freelance Designer",
                company: "Creative Studio",
                testimonial: "Excellent collaboration! Ali brought my designs to life with smooth animations and perfect responsive design.",
                rating: 5,
                project: "Portfolio Website"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 floating-element"
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-muted mb-6 italic leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
                
                {/* Client Info */}
                <div className="border-t border-border/20 pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                      <span className="text-accent font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                      <p className="text-muted text-xs">{testimonial.role} • {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full inline-block">
                    {testimonial.project}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Call to Action for Freelance Work */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-accent/10 to-green-400/10 rounded-3xl p-8 border border-accent/20"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-muted mb-6 max-w-2xl mx-auto">
              I'm available for freelance projects and would love to help bring your ideas to life. 
              Let's discuss how we can work together to create something amazing.
            </p>
            
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => handleNavigation('/contact')}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(127, 90, 240, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-accent text-background font-bold px-8 py-4 rounded-2xl hover:bg-accent-hover transition-all duration-300"
              >
                Start a Project
              </motion.button>
              
              <motion.a
                href="mailto:ali_hegazy_@outlook.com"
                whileHover={{ scale: 1.05, borderColor: "#7f5af0" }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-accent/50 text-accent font-bold px-8 py-4 rounded-2xl hover:bg-accent/10 transition-all duration-300"
              >
                Send Quick Message
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="relative py-32 bg-gradient-to-t from-background-secondary to-background overflow-hidden">
        {/* Abstract Background Elements */}
        <EnergyCurves className="opacity-20" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-green-400 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-muted leading-relaxed">
              Ready to bring your ideas to life? Let's discuss how we can work together 
              to create something amazing.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                onClick={() => handleNavigation('/contact')}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-background font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-glow hover:shadow-glow-lg"
              >
                Get In Touch
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </motion.div>
            
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:ali.hegazy@example.com"
              className="inline-flex items-center gap-2 border-2 border-accent text-accent hover:bg-accent hover:text-background font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-glow"
            >
              Email Me
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
