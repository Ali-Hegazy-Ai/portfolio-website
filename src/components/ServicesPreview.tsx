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
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)
          `,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            Freelance Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive web development services to help your business succeed online
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center text-white font-semibold group-hover:gap-2 gap-1 transition-all">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-white/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-white/10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how I can help bring your vision to life with professional web development services.
            </p>
            <motion.button
              onClick={() => handleNavigation('/contact')}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-white text-black font-bold px-10 py-5 rounded-2xl hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <span>Get Free Consultation</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview
