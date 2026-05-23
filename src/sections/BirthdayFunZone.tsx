import { motion } from 'framer-motion'
import { ComplimentGenerator } from './ComplimentGenerator'

/**
 * Compliment section only — no extra games or certificates.
 */
export function ComplimentSection() {
  return (
    <section id="compliments" className="scroll-mt-16">
      <motion.div
        className="section-pad pb-8 pt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-4xl">💖</span>
        <h2
          className="display-font mt-3 text-3xl font-semibold sm:text-4xl"
          style={{ color: 'var(--text-primary)' }}
        >
          Birthday Compliments
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm sm:text-base" style={{ color: 'var(--text-muted)' }}>
          One place for sweet messages, birthday love, and bright words just for you.
        </p>
      </motion.div>

      <ComplimentGenerator />
    </section>
  )
}
