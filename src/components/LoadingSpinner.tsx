import { motion } from 'framer-motion'

interface LoadingSpinnerProps {
  message?: string
}

const LoadingSpinner = ({ message = "Loading..." }: LoadingSpinnerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm"
    >
      <div className="flex flex-col items-center gap-4 p-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted text-center"
        >
          {message}
        </motion.p>
      </div>
    </motion.div>
  )
}

export default LoadingSpinner
