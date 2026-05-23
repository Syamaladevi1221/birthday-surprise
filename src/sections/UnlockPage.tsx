import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Unlock } from 'lucide-react'
import { useState, useCallback, useEffect } from 'react'
import { useApp } from '../context/AppContext'
import { fireConfettiBurst } from '../utils/confettiBurst'
import {
  SECRET_PASSWORD,
  WRONG_PASSWORD_MESSAGES,
  UNLOCK_PROGRESS_MESSAGES,
} from '../config'
import { useSounds } from '../hooks/useSounds'
import { ParticleBackground } from '../components/ParticleBackground'

export function UnlockPage() {
  const { phase, unlock, setMusicPlaying } = useApp()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isUnlocking, setIsUnlocking] = useState(false)
  const [unlockProgress, setUnlockProgress] = useState(0)
  const [unlockMessage, setUnlockMessage] = useState(UNLOCK_PROGRESS_MESSAGES[0])
  const [shake, setShake] = useState(false)
  const { playUnlock, playWrong } = useSounds()

  useEffect(() => {
    if (!isUnlocking) return
    const start = Date.now()
    const duration = 3000
    const interval = setInterval(() => {
      const pct = Math.min(100, ((Date.now() - start) / duration) * 100)
      setUnlockProgress(pct)
      const msgIndex = Math.min(
        UNLOCK_PROGRESS_MESSAGES.length - 1,
        Math.floor((pct / 100) * UNLOCK_PROGRESS_MESSAGES.length),
      )
      setUnlockMessage(UNLOCK_PROGRESS_MESSAGES[msgIndex])
    }, 100)
    return () => clearInterval(interval)
  }, [isUnlocking])

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      if (password.trim().toLowerCase() === SECRET_PASSWORD.toLowerCase()) {
        setIsUnlocking(true)
        playUnlock()
        const stopConfetti = fireConfettiBurst(3000)
        setTimeout(() => {
          stopConfetti()
          setMusicPlaying(true)
          unlock()
        }, 3000)
      } else {
        playWrong()
        setShake(true)
        setError(
          WRONG_PASSWORD_MESSAGES[
            Math.floor(Math.random() * WRONG_PASSWORD_MESSAGES.length)
          ],
        )
        setTimeout(() => setShake(false), 500)
      }
    },
    [password, playUnlock, playWrong, unlock, setMusicPlaying],
  )

  if (phase !== 'locked' && !isUnlocking) return null

  return (
    <motion.section
      className="fixed inset-0 z-40 flex min-h-dvh items-center justify-center overflow-hidden px-4"
      style={{ background: 'var(--gradient)' }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1.2 }}
    >
      <ParticleBackground density={35} />

      {/* Light orbs */}
      <motion.div
        className="pointer-events-none absolute h-64 w-64 rounded-full blur-3xl sm:h-96 sm:w-96"
        style={{ background: 'var(--accent-soft)', top: '10%', left: '10%' }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="pointer-events-none absolute h-48 w-48 rounded-full blur-3xl sm:h-72 sm:w-72"
        style={{ background: 'var(--accent-glow)', bottom: '15%', right: '10%' }}
        animate={{ x: [0, -30, 0], y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <AnimatePresence mode="wait">
        {!isUnlocking ? (
          <motion.div
            key="lock"
            className="relative z-10 w-full max-w-md text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full glass glow-border"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Lock size={36} style={{ color: 'var(--accent)' }} />
              </motion.div>

              <h1
                className="display-font glow-text mb-2 text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl"
                style={{ color: 'var(--text-primary)' }}
              >
                Only the love of my life
                <br />
                <span className="handwritten text-3xl sm:text-4xl" style={{ color: 'var(--accent)' }}>
                  can unlock this ❤️
                </span>
              </h1>

              <p
                className="mb-8 text-sm sm:text-base"
                style={{ color: 'var(--text-muted)' }}
              >
                Enter our special secret...
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      setError('')
                    }}
                    placeholder="Our secret memory..."
                    className="glass glow-border w-full rounded-2xl px-5 py-4 text-center text-base outline-none transition-all focus:ring-2 sm:text-lg"
                    style={{
                      color: 'var(--text-primary)',
                      caretColor: 'var(--accent)',
                      borderColor: 'var(--glass-border)',
                    }}
                    autoComplete="off"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl shimmer opacity-30" />
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="handwritten text-lg"
                    style={{ color: 'var(--accent)' }}
                  >
                    {error}
                  </motion.p>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-glow handwritten w-full rounded-2xl py-4 text-xl font-semibold"
                  style={{
                    background: 'var(--accent-soft)',
                    color: 'var(--accent)',
                    border: '1px solid var(--glass-border)',
                  }}
                >
                  Unlock My Heart ♥
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="unlocking"
            className="relative z-10 flex flex-col items-center"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <motion.div
              animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5 }}
            >
              <Unlock size={80} style={{ color: 'var(--accent)' }} />
            </motion.div>
            <motion.p
              className="mt-6 text-sm font-medium sm:text-base"
              style={{ color: 'var(--text-muted)' }}
            >
              {unlockMessage}
            </motion.p>
            <div
              className="mt-4 h-2 w-56 overflow-hidden rounded-full sm:w-64"
              style={{ background: 'var(--accent-soft)' }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'var(--accent)', width: `${unlockProgress}%` }}
              />
            </div>
            <motion.p
              className="handwritten mt-6 text-3xl sm:text-4xl glow-text"
              style={{ color: 'var(--accent)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Birthday surprise unlocked! 🎂♥
            </motion.p>
            {[...Array(12)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute text-2xl"
                initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                animate={{
                  opacity: 0,
                  scale: 2,
                  x: Math.cos((i / 12) * Math.PI * 2) * 120,
                  y: Math.sin((i / 12) * Math.PI * 2) * 120,
                }}
                transition={{ duration: 1.5, delay: 0.2 }}
                style={{ color: 'var(--accent)' }}
              >
                ♥
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}
