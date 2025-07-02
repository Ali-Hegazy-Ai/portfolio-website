import { motion } from 'framer-motion'
import { FaCode, FaMobile, FaPalette, FaRocket, FaSearch, FaTools } from 'react-icons/fa'
import { useOptimizedNavigation } from '../hooks/usePerformance'

const ServicesPreview = () => {
  const { handleNavigation } = useOptimizedNavigation()
  const services = [
    {
      icon: FaCode,
      title: "Web Development",
      description: "Custom websites and web applications using modern technologies like React, TypeScript, and Tailwind CSS.",
      features: ["Responsive Design", "Performance Optimization", "Modern Frameworks"]
    },
    {
      icon: FaMobile,
      title: "Mobile-First Design",
      description: "Mobile-optimized experiences that work seamlessly across all devices and screen sizes.",
      features: ["Cross-Platform", "Touch Optimized", "Progressive Web Apps"]
    },
    {
      icon: FaPalette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that enhance user experience and drive engagement.",
      features: ["User Research", "Prototyping", "Design Systems"]
    },
    {
      icon: FaRocket,
      title: "Performance Optimization",
      description: "Speed up your website with advanced optimization techniques and best practices.",
      features: ["Core Web Vitals", "SEO Optimization", "Loading Speed"]
    },
    {
      icon: FaSearch,
      title: "SEO & Analytics",
      description: "Improve your search rankings and track performance with integrated analytics.",
      features: ["Technical SEO", "Analytics Setup", "Performance Tracking"]
    },
    {
      icon: FaTools,
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and maintenance to keep your website running smoothly.",
      features: ["Regular Updates", "Bug Fixes", "Performance Monitoring"]
    }
  ]

  return (
    <section className="relative py-32 bg-gradient-to-b from-background to-background-secondary overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            Freelance Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-green-400 mx-auto mb-8"></div>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Comprehensive web development services to help your business succeed online
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card p-6 floating-element group"
            >
              <div className="flex items-center mb-4">
                <service.icon className="w-8 h-8 text-accent mr-3" />
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
              
              <p className="text-muted mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex}
                    className="flex items-center text-sm text-foreground-secondary"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-border/20">
                <div className="text-accent text-sm font-medium group-hover:text-accent-hover transition-colors">
                  Learn More →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-accent/10 to-green-400/10 rounded-3xl p-8 border border-accent/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-muted mb-6 max-w-xl mx-auto">
              Let's discuss your project and see how I can help bring your vision to life with professional web development services.
            </p>
            <motion.button
              onClick={() => handleNavigation('/contact')}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(127, 90, 240, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-accent text-background font-bold px-8 py-4 rounded-2xl hover:bg-accent-hover transition-all duration-300"
            >
              Get Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview
