import { useOptimizedNavigation } from '../hooks/usePerformance'

const Footer = () => {
  const { handleNavigation } = useOptimizedNavigation()
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com', external: true },
    { name: 'LinkedIn', href: 'https://linkedin.com', external: true },
    { name: 'Twitter', href: 'https://twitter.com', external: true },
    { name: 'Email', href: 'mailto:ali_hegazy_@outlook.com', external: true },
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="min-h-[120px] bg-background-secondary border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <button 
              onClick={() => handleNavigation('/')}
              className="text-xl font-bold text-gradient mb-2 inline-block bg-transparent border-none cursor-pointer"
            >
              Ali Hegazy
            </button>
            <p className="text-muted text-sm">
              Front-End Developer & AI Enthusiast
            </p>
            <p className="text-muted text-xs mt-1">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-foreground font-medium mb-3 text-sm">Quick Links</h4>
            <div className="flex justify-center space-x-6">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.href)}
                  className="text-muted hover:text-accent transition-colors duration-200 text-sm bg-transparent border-none cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-foreground font-medium mb-3 text-sm">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="text-muted hover:text-accent transition-colors duration-200 text-sm flex items-center space-x-1"
                >
                  <span>{link.name}</span>
                  {link.external && (
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-muted text-xs">
            Built with React, Vite, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
