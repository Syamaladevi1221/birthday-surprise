import { motion } from 'framer-motion'
import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import { BIRTHDAY_COMPLIMENTS } from '../config'
import { useSounds } from '../hooks/useSounds'

export function ComplimentGenerator() {
  const [compliment, setCompliment] = useState<string | null>(null)
  const [spinning, setSpinning] = useState(false)
  const { playClick } = useSounds()

  const generate = () => {
    playClick()
    setSpinning(true)
    let count = 0
    const interval = setInterval(() => {
      setCompliment(
        BIRTHDAY_COMPLIMENTS[Math.floor(Math.random() * BIRTHDAY_COMPLIMENTS.length)],
      )
      count++
      if (count > 8) {
        clearInterval(interval)
        setSpinning(false)
        setCompliment(
          BIRTHDAY_COMPLIMENTS[Math.floor(Math.random() * BIRTHDAY_COMPLIMENTS.length)],
        )
      }
    }, 80)
  }

  return (
    <div id="compliments" className="scroll-mt-20 px-4 pb-12 sm:px-8">
      <motion.div
        className="mx-auto max-w-xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-3xl">🎁</span>
        <h3
          className="display-font mt-2 text-2xl font-semibold sm:text-3xl"
          style={{ color: 'var(--text-primary)' }}
        >
          Birthday Compliment Machine
        </h3>
        <p className="mt-2 text-sm sm:text-base" style={{ color: 'var(--text-muted)' }}>
          Press the button. Receive validation. Repeat until smiling.
        </p>

        <motion.button
          type="button"
          onClick={generate}
          disabled={spinning}
          className="btn-glow glass handwritten mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold disabled:opacity-70"
          style={{ color: 'var(--accent-strong)' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Sparkles size={22} />
          {spinning ? 'Cooking compliments…' : 'Give me a compliment!'}
        </motion.button>

        {compliment && (
          <motion.div
            key={compliment}
            className="glass mt-8 rounded-2xl p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <p
              className="handwritten text-xl leading-relaxed sm:text-2xl"
              style={{ color: 'var(--text-primary)' }}
            >
              {compliment}
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
