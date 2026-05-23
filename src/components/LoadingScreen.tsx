import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useApp } from '../context/AppContext'

export function LoadingScreen() {
  const { phase, setPhase } = useApp()

  useEffect(() => {
    if (phase !== 'loading') return
    const timer = setTimeout(() => setPhase('locked'), 2800)
    return () => clearTimeout(timer)
  }, [phase, setPhase])

  if (phase !== 'loading') return null

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
      style={{ background: 'var(--gradient)' }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="heartbeat text-6xl sm:text-7xl"
        style={{ color: 'var(--accent)' }}
      >
        ♥
      </motion.div>
      <motion.p
        className="handwritten mt-6 text-2xl sm:text-3xl"
        style={{ color: 'var(--text-primary)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Wrapping your birthday surprise… 🎁
      </motion.p>
      <motion.div
        className="mt-8 h-1 w-48 overflow-hidden rounded-full sm:w-64"
        style={{ background: 'var(--accent-soft)' }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'var(--accent)' }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  )
}
