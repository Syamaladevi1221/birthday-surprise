import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { PET_NAME } from '../config'
import { ParticleBackground } from '../components/ParticleBackground'

export function WelcomeSection() {
  return (
    <motion.section
      className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-4 text-center"
      style={{ background: 'var(--gradient)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <ParticleBackground density={30} />

      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, var(--accent-soft) 0%, transparent 70%)',
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.div className="relative z-10 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="heartbeat mb-4 text-5xl sm:text-6xl"
          style={{ color: 'var(--accent)' }}
        >
          ♥
        </motion.div>

        <motion.h1
          className="display-font glow-text text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ color: 'var(--text-primary)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {['Happy', 'Birthday', 'My', 'Husband', '❤️'].map((word, i) => (
            <motion.span
              key={word}
              className="inline-block mr-2 sm:mr-3"
              initial={{ opacity: 0, y: 30, rotateX: 90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.8 + i * 0.15, duration: 0.6 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="elegant-font mt-6 text-lg sm:text-xl md:text-2xl"
          style={{ color: 'var(--text-muted)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          This little birthday world was made only for you, {PET_NAME}.
        </motion.p>

        <motion.p
          className="handwritten mt-4 text-xl sm:text-2xl"
          style={{ color: 'var(--accent)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Today you are the main Heroo 🎂👑
        </motion.p>

        <motion.p
          className="mt-8 text-sm sm:text-base"
          style={{ color: 'var(--text-muted)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
        </motion.p>

        <motion.div
          className="mt-6"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown style={{ color: 'var(--accent)' }} size={28} />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
