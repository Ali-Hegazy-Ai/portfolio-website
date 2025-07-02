import { motion } from 'framer-motion'

interface SectionDividerProps {
  className?: string
  variant?: 'wave' | 'angle' | 'curve'
}

export const SectionDivider = ({ className = "", variant = 'wave' }: SectionDividerProps) => {
  const variants = {
    wave: (
      <svg className="w-full h-16" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <motion.path
          d="M0,64L40,69.3C80,75,160,85,240,80C320,75,400,53,480,58.7C560,64,640,96,720,96C800,96,880,64,960,48C1040,32,1120,32,1200,42.7C1280,53,1360,75,1400,85.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          fill="url(#dividerGradient)"
          animate={{
            d: [
              "M0,64L40,69.3C80,75,160,85,240,80C320,75,400,53,480,58.7C560,64,640,96,720,96C800,96,880,64,960,48C1040,32,1120,32,1200,42.7C1280,53,1360,75,1400,85.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z",
              "M0,32L40,37.3C80,43,160,53,240,64C320,75,400,85,480,80C560,75,640,53,720,48C800,43,880,53,960,69.3C1040,85,1120,107,1200,112C1280,117,1360,107,1400,101.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z",
              "M0,64L40,69.3C80,75,160,85,240,80C320,75,400,53,480,58.7C560,64,640,96,720,96C800,96,880,64,960,48C1040,32,1120,32,1200,42.7C1280,53,1360,75,1400,85.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <defs>
          <linearGradient id="dividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(127, 90, 240, 0.1)" />
            <stop offset="50%" stopColor="rgba(34, 197, 94, 0.1)" />
            <stop offset="100%" stopColor="rgba(127, 90, 240, 0.1)" />
          </linearGradient>
        </defs>
      </svg>
    ),
    angle: (
      <svg className="w-full h-16" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <polygon 
          points="0,0 1440,120 1440,0" 
          fill="url(#angleGradient)"
        />
        <defs>
          <linearGradient id="angleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(127, 90, 240, 0.05)" />
            <stop offset="100%" stopColor="rgba(34, 197, 94, 0.05)" />
          </linearGradient>
        </defs>
      </svg>
    ),
    curve: (
      <svg className="w-full h-16" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path 
          d="M0,120 Q720,0 1440,120 L1440,0 L0,0 Z" 
          fill="url(#curveGradient)"
        />
        <defs>
          <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(127, 90, 240, 0.08)" />
            <stop offset="100%" stopColor="rgba(34, 197, 94, 0.08)" />
          </linearGradient>
        </defs>
      </svg>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {variants[variant]}
    </div>
  )
}

export default SectionDivider
