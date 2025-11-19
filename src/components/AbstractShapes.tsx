import { motion } from 'framer-motion'

// Moving Lines Animation (Optimized)
export const MovingLines = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent"
        style={{
          top: `${30 + i * 20}%`,
          width: '150%',
          left: '-25%',
        }}
        animate={{
          x: ['0%', '25%', '0%'],
          opacity: [0, 0.4, 0],
        }}
        transition={{
          duration: 6 + i * 0.5,
          repeat: Infinity,
          delay: i * 0.5,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>
)

// Animated Grid Pattern (Optimized)
export const AnimatedGrid = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 opacity-[0.02] pointer-events-none ${className}`}>
    <motion.div
      className="h-full w-full"
      animate={{
        backgroundPosition: ['0px 0px', '50px 50px', '0px 0px'],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        backgroundImage: `
          linear-gradient(rgba(127, 90, 240, 0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(127, 90, 240, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}
    />
  </div>
)

// Floating Orbs (Optimized)
export const FloatingOrbs = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-accent/20 rounded-full"
        style={{
          left: `${20 + i * 30}%`,
          top: `${30 + i * 20}%`,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          opacity: [0.2, 0.6, 0.2],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8 + i * 0.5,
          repeat: Infinity,
          delay: i * 0.6,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>
)

export const FloatingBlob1 = ({ className = "" }: { className?: string }) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    animate={{
      rotate: 360,
      scale: [1, 1.1, 1],
    }}
    transition={{
      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
      scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }}
  >
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
      <path
        d="M47.5,-78.4C61.8,-71.2,74.1,-58.1,83.7,-42.8C93.3,-27.5,100.2,-10,97.9,6.5C95.6,23,84.1,38.5,70.3,50.7C56.5,62.9,40.4,71.8,23.4,78.1C6.4,84.4,-11.5,88.1,-29.2,84.7C-46.9,81.3,-64.4,70.8,-75.8,55.4C-87.2,40,-92.5,19.7,-91.3,-0.9C-90.1,-21.5,-82.4,-42.4,-70.9,-59.2C-59.4,-76,-44.1,-88.7,-27.7,-94.2C-11.3,-99.7,6.2,-97.9,22.4,-89.9C38.6,-81.9,53.5,-67.7,47.5,-78.4Z"
        fill="url(#blob1Gradient)"
        opacity="0.6"
      />
      <defs>
        <linearGradient id="blob1Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7f5af0" />
          <stop offset="100%" stopColor="#2cb67d" />
        </linearGradient>
      </defs>
    </svg>
  </motion.div>
)

export const FloatingBlob2 = ({ className = "" }: { className?: string }) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    animate={{
      rotate: -360,
      scale: [1, 0.9, 1],
    }}
    transition={{
      rotate: { duration: 25, repeat: Infinity, ease: "linear" },
      scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    }}
  >
    <svg width="150" height="150" viewBox="0 0 200 200" fill="none">
      <path
        d="M54.1,-91.4C69.2,-83.7,79.8,-67.4,86.9,-49.8C94,-32.2,97.6,-13.3,95.6,4.8C93.6,22.9,86,40.2,74.8,54.4C63.6,68.6,48.8,79.7,32.2,84.9C15.6,90.1,-2.8,89.4,-20.5,84.2C-38.2,79,-55.2,69.3,-67.8,55.4C-80.4,41.5,-88.6,23.4,-91.1,4.1C-93.6,-15.2,-90.4,-35.7,-81.7,-52.8C-73,-69.9,-58.8,-83.6,-42.9,-90.8C-27,-98,-9.4,-98.7,6.8,-109.2C23,-119.7,46,-140,54.1,-91.4Z"
        fill="url(#blob2Gradient)"
        opacity="0.4"
      />
      <defs>
        <linearGradient id="blob2Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#7f5af0" />
        </linearGradient>
      </defs>
    </svg>
  </motion.div>
)

export const FloatingRing = ({ className = "" }: { className?: string }) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    animate={{
      rotate: 360,
      y: [0, -20, 0],
    }}
    transition={{
      rotate: { duration: 15, repeat: Infinity, ease: "linear" },
      y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    }}
  >
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
      <circle
        cx="50"
        cy="50"
        r="35"
        stroke="url(#ringGradient)"
        strokeWidth="3"
        fill="none"
        opacity="0.7"
      />
      <circle
        cx="50"
        cy="50"
        r="20"
        stroke="url(#ringGradient2)"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
      <defs>
        <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7f5af0" />
          <stop offset="100%" stopColor="#2cb67d" />
        </linearGradient>
        <linearGradient id="ringGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#7f5af0" />
        </linearGradient>
      </defs>
    </svg>
  </motion.div>
)

export const GeometricShape = ({ className = "" }: { className?: string }) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    animate={{
      rotate: [0, 45, 0],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <polygon
        points="40,5 70,25 70,55 40,75 10,55 10,25"
        fill="url(#geometricGradient)"
        opacity="0.3"
        stroke="url(#geometricStroke)"
        strokeWidth="1"
      />
      <defs>
        <linearGradient id="geometricGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7f5af0" />
          <stop offset="100%" stopColor="#16a34a" />
        </linearGradient>
        <linearGradient id="geometricStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2cb67d" />
          <stop offset="100%" stopColor="#7f5af0" />
        </linearGradient>
      </defs>
    </svg>
  </motion.div>
)

export const WavePattern = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <svg
      className="absolute bottom-0 left-0 w-full h-32"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        fill="url(#waveGradient)"
        opacity="0.1"
        animate={{
          d: [
            "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            "M0,128L48,138.7C96,149,192,171,288,181.3C384,192,480,192,576,176C672,160,768,128,864,122.7C960,117,1056,139,1152,154.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7f5af0" />
          <stop offset="50%" stopColor="#2cb67d" />
          <stop offset="100%" stopColor="#16a34a" />
        </linearGradient>
      </defs>
    </svg>
  </div>
)

export const StarField = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    {Array.from({ length: 15 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-accent rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [0.5, 1.5, 0.5],
        }}
        transition={{
          duration: 2 + Math.random() * 3,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
)

export const ConnectedNodes = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <svg className="w-full h-full" viewBox="0 0 1000 800">
      {Array.from({ length: 8 }).map((_, i) => {
        const x = 100 + (i * 120)
        const y = 100 + Math.sin(i * 0.5) * 200
        return (
          <g key={i}>
            <motion.circle
              cx={x}
              cy={y}
              r="4"
              fill="url(#nodeGradient)"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {i < 7 && (
              <motion.line
                x1={x}
                y1={y}
                x2={x + 120}
                y2={100 + Math.sin((i + 1) * 0.5) * 200}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                opacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            )}
          </g>
        )
      })}
      <defs>
        <linearGradient id="nodeGradient">
          <stop offset="0%" stopColor="#7f5af0" />
          <stop offset="100%" stopColor="#2cb67d" />
        </linearGradient>
        <linearGradient id="lineGradient">
          <stop offset="0%" stopColor="#7f5af0" />
          <stop offset="100%" stopColor="#16a34a" />
        </linearGradient>
      </defs>
    </svg>
  </div>
)

export const ParticleField = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    {Array.from({ length: 10 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-gradient-to-r from-accent to-green-400 rounded-full blur-[1px]"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, Math.random() * 100 - 50],
          y: [0, Math.random() * 100 - 50],
          opacity: [0, 0.6, 0],
          scale: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 8 + Math.random() * 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 3,
        }}
      />
    ))}
  </div>
)

export const EnergyCurves = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
      <motion.path
        d="M0,400 Q300,200 600,400 T1200,400"
        stroke="url(#energyGradient1)"
        strokeWidth="2"
        fill="none"
        opacity="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.path
        d="M0,500 Q400,300 800,500 T1200,500"
        stroke="url(#energyGradient2)"
        strokeWidth="3"
        fill="none"
        opacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <defs>
        <linearGradient id="energyGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7f5af0" stopOpacity="0" />
          <stop offset="50%" stopColor="#7f5af0" stopOpacity="1" />
          <stop offset="100%" stopColor="#2cb67d" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="energyGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#16a34a" stopOpacity="0" />
          <stop offset="50%" stopColor="#2cb67d" stopOpacity="1" />
          <stop offset="100%" stopColor="#7f5af0" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
)

export const AbstractGeometry = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <svg className="w-full h-full" viewBox="0 0 1000 600">
      {/* Floating triangles */}
      <motion.polygon
        points="100,50 150,150 50,150"
        fill="url(#triGradient)"
        opacity="0.2"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.polygon
        points="800,400 880,500 720,500"
        fill="url(#triGradient2)"
        opacity="0.15"
        animate={{
          rotate: [360, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Hexagon shapes */}
      <motion.polygon
        points="500,100 540,120 540,160 500,180 460,160 460,120"
        fill="url(#hexGradient)"
        opacity="0.25"
        animate={{
          rotate: [0, 120, 240, 360],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <defs>
        <linearGradient id="triGradient">
          <stop offset="0%" stopColor="#7f5af0" />
          <stop offset="100%" stopColor="#16a34a" />
        </linearGradient>
        <linearGradient id="triGradient2">
          <stop offset="0%" stopColor="#2cb67d" />
          <stop offset="100%" stopColor="#7f5af0" />
        </linearGradient>
        <linearGradient id="hexGradient">
          <stop offset="0%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#2cb67d" />
        </linearGradient>
      </defs>
    </svg>
  </div>
)

export const FloatingCards = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    {Array.from({ length: 4 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-20 h-12 bg-gradient-to-br from-accent/10 to-green-400/5 backdrop-blur-sm border border-accent/20 rounded-lg"
        style={{
          left: `${20 + i * 25}%`,
          top: `${30 + i * 10}%`,
        }}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 5, -5, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6 + i * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 1.5
        }}
      />
    ))}
  </div>
)
