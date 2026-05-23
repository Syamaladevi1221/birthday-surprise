import { motion } from 'framer-motion'
import { useMemo } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
  type: 'heart' | 'star' | 'sparkle'
}

export function ParticleBackground({ density = 25 }: { density?: number }) {
  const particles = useMemo<Particle[]>(() => {
    const types: Particle['type'][] = ['heart', 'star', 'sparkle']
    return Array.from({ length: density }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 12 + 6,
      delay: Math.random() * 5,
      duration: Math.random() * 8 + 6,
      type: types[Math.floor(Math.random() * types.length)],
    }))
  }, [density])

  const symbol = (t: Particle['type']) =>
    t === 'heart' ? '♥' : t === 'star' ? '✦' : '✧'

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      aria-hidden
    >
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute select-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: p.size,
            color: 'var(--accent)',
            opacity: 0.4,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() > 0.5 ? 15 : -15, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {symbol(p.type)}
        </motion.span>
      ))}
    </motion.div>
  )
}
