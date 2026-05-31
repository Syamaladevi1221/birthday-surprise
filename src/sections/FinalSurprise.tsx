import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useApp } from '../context/AppContext'
import { useRelationshipDuration } from '../hooks/useRelationshipDuration'
import { HIS_NAME } from '../config'

function BirthdayCountdown() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const endOfDay = new Date(now)
      endOfDay.setHours(23, 59, 59, 999)
      const diff = endOfDay.getTime() - now.getTime()
      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      })
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="glass mt-6 inline-flex gap-4 rounded-2xl px-6 py-4">
      {[
        { label: 'hrs', value: timeLeft.hours },
        { label: 'min', value: timeLeft.minutes },
        { label: 'sec', value: timeLeft.seconds },
      ].map((t) => (
        <motion.div key={t.label} className="text-center">
          <motion.span
            key={t.value}
            className="display-font block text-2xl font-semibold sm:text-3xl"
            style={{ color: 'var(--accent)' }}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            {String(t.value).padStart(2, '0')}
          </motion.span>
          <span className="text-xs uppercase" style={{ color: 'var(--text-muted)' }}>
            {t.label}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

export function FinalSurprise() {
  const { setPhase } = useApp()
  const duration = useRelationshipDuration()

  useEffect(() => {
    setPhase('finale')
  }, [setPhase])

  return (
    <section
      id="finale"
      className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-4 py-20 text-center"
      style={{ background: 'var(--gradient)' }}
    >
      {/* Stars */}
      {[...Array(40)].map((_, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute text-xs"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            color: 'var(--accent)',
          }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.3, 1] }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          ✦
        </motion.span>
      ))}

      {/* Falling hearts */}
      {[...Array(15)].map((_, i) => (
        <motion.span
          key={`heart-${i}`}
          className="pointer-events-none absolute text-lg sm:text-xl"
          style={{ left: `${(i * 7) % 100}%`, color: 'var(--accent)' }}
          initial={{ top: '-10%', opacity: 0.8 }}
          animate={{ top: '110%', opacity: 0 }}
          transition={{
            duration: 6 + (i % 4),
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'linear',
          }}
        >
          ♥
        </motion.span>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="relative z-10 max-w-2xl"
      >
        <motion.div
          className="heartbeat mb-6 text-6xl sm:text-7xl"
          style={{ color: 'var(--accent)' }}
        >
          ♥
        </motion.div>

        <motion.h2
          className="display-font glow-text text-4xl font-semibold sm:text-5xl md:text-6xl"
          style={{ color: 'var(--text-primary)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          I Love You Forever ❤️
        </motion.h2>

        <motion.p
          className="handwritten mt-4 text-2xl sm:text-3xl"
          style={{ color: 'var(--accent)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          Happy Birthday, {HIS_NAME}
        </motion.p>

        {/* Relationship duration */}
        <motion.div
          className="glass mt-8 rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-sm uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
            We've been in love for
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-3 sm:gap-6">
            {[
              { v: duration.years, l: 'years' },
              { v: duration.months, l: 'months' },
              { v: duration.days, l: 'days' },
              { v: duration.hours, l: 'hours' },
            ].map((d) => (
              <div key={d.l} className="text-center">
                <span
                  className="display-font block text-3xl font-semibold sm:text-4xl"
                  style={{ color: 'var(--accent)' }}
                >
                  {d.v}
                </span>
                <span className="text-xs capitalize" style={{ color: 'var(--text-muted)' }}>
                  {d.l}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p
          className="mt-4 text-xs"
          style={{ color: 'var(--text-muted)' }}
        >
          Time left in your special day
        </motion.p>
        <BirthdayCountdown />

        <motion.p
          className="mt-6 text-sm"
          style={{ color: 'var(--text-muted)' }}
        >
        </motion.p>

        <motion.p
          className="elegant-font mx-auto mt-10 max-w-md text-lg leading-relaxed sm:text-xl"
          style={{ color: 'var(--text-primary)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        >
          Thank you for existing and making my life beautiful.
        </motion.p>

        <motion.p
          className="handwritten mt-6 text-xl opacity-60"
          style={{ color: 'var(--accent)' }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Forever & Always ♥
        </motion.p>
      </motion.div>
    </section>
  )
}
