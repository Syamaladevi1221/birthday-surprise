import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Typewriter } from './Typewriter'

interface LoveNoteModalProps {
  open: boolean
  message: string
  onClose: () => void
}

export function LoveNoteModal({ open, message, onClose }: LoveNoteModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/65 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            className="secret-modal-panel relative max-w-md rounded-2xl p-6 sm:p-8"
            initial={{ scale: 0.8, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 30, opacity: 0 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 rounded-full p-1.5 transition-colors"
              style={{
                color: 'var(--secret-accent)',
                background: 'var(--accent-soft)',
              }}
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <motion.div className="mb-3 text-2xl">💌</motion.div>
            <h3
              className="handwritten mb-4 text-2xl font-semibold sm:text-3xl"
              style={{ color: 'var(--secret-accent)' }}
            >
              A Secret For You
            </h3>
            <p className="elegant-font text-base leading-relaxed sm:text-lg" style={{ color: 'var(--modal-text)' }}>
              <Typewriter text={message} speed={25} />
            </p>
            <div className="mt-4 flex justify-center gap-2 text-lg" style={{ color: 'var(--secret-accent)' }}>
              {['♥', '✨', '♥'].map((s, i) => (
                <motion.span
                  key={i}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
