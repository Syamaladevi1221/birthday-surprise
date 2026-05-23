import { motion } from 'framer-motion'

const PHRASES = ['I love you', 'forever yours', 'my heart', 'always', '♥']

export function FloatingLoveTexts() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      {PHRASES.map((text, i) => (
        <motion.span
          key={text}
          className="handwritten absolute text-sm opacity-20 sm:text-base"
          style={{
            left: `${10 + i * 18}%`,
            top: `${15 + (i % 3) * 25}%`,
            color: 'var(--accent)',
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.25, 0.1],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: i * 0.8,
          }}
        >
          {text}
        </motion.span>
      ))}
    </div>
  )
}
