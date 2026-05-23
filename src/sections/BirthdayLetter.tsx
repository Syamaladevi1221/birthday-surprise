import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mic, Mail } from 'lucide-react'
import { BIRTHDAY_LETTER, YOUR_NAME } from '../config'
import { useSounds } from '../hooks/useSounds'

export function BirthdayLetter() {
  const [envelopeOpen, setEnvelopeOpen] = useState(false)
  const [showLetter, setShowLetter] = useState(false)
  const [voicePlaying, setVoicePlaying] = useState(false)
  const { playClick, playHeartbeat } = useSounds()

  const openEnvelope = () => {
    playClick()
    setEnvelopeOpen(true)
    setTimeout(() => setShowLetter(true), 800)
  }

  const toggleVoice = () => {
    playHeartbeat()
    setVoicePlaying((p) => !p)
    /* Add your voice note: place voice.mp3 in /public and use Audio API */
  }

  const paragraphs = BIRTHDAY_LETTER.split('\n\n').filter(Boolean)

  return (
    <section id="letter" className="section-pad relative">
      <motion.div
        className="mx-auto max-w-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="mb-10 text-center">
          <span className="handwritten text-2xl" style={{ color: 'var(--accent)' }}>
            from my heart
          </span>
          <h2
            className="display-font mt-2 text-3xl font-semibold sm:text-4xl"
            style={{ color: 'var(--text-primary)' }}
          >
            A Letter For You
          </h2>
        </div>

        {!showLetter ? (
          <motion.button
            type="button"
            onClick={openEnvelope}
            className="mx-auto block w-full max-w-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="relative mx-auto flex h-48 w-72 flex-col items-center justify-center sm:h-56 sm:w-80"
              animate={envelopeOpen ? { y: -20 } : {}}
            >
              {/* Envelope */}
              <motion.div
                className="absolute inset-0 rounded-lg"
                style={{
                  background: 'linear-gradient(145deg, #c9a86c, #a08040)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                }}
              />
              <motion.div
                className="absolute top-0 left-0 right-0 h-1/2 origin-top rounded-t-lg"
                style={{
                  background: 'linear-gradient(180deg, #d4b87a, #b89850)',
                  clipPath: 'polygon(0 0, 50% 70%, 100% 0)',
                }}
                animate={envelopeOpen ? { rotateX: 180, opacity: 0 } : {}}
                transition={{ duration: 0.8 }}
              />
              {!envelopeOpen && (
                <motion.div
                  className="relative z-10 flex flex-col items-center gap-2"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Mail size={40} className="text-white/90" />
                  <span className="handwritten text-xl text-white">
                    Tap to open ♥
                  </span>
                </motion.div>
              )}
            </motion.div>
          </motion.button>
        ) : (
          <motion.div
            className="paper-texture relative rounded-lg p-6 shadow-2xl sm:p-10"
            initial={{ opacity: 0, y: 40, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, type: 'spring' }}
            style={{
              boxShadow: '0 0 60px var(--accent-soft), 0 20px 60px rgba(0,0,0,0.2)',
            }}
          >
            {/* Warm glow */}
            <div
              className="pointer-events-none absolute -top-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full blur-3xl"
              style={{ background: 'var(--accent-soft)' }}
            />

            <div className="relative space-y-4">
              {paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  className="elegant-font text-base leading-relaxed sm:text-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.4, duration: 0.8 }}
                >
                  {para}
                </motion.p>
              ))}

              <motion.p
                className="handwritten mt-8 text-right text-2xl sm:text-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: paragraphs.length * 0.4 + 0.5 }}
              >
                {YOUR_NAME} ❤️
              </motion.p>
            </div>

            <motion.button
              type="button"
              onClick={toggleVoice}
              className="glass btn-glow mt-6 flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm"
              style={{ color: 'var(--accent)' }}
              whileHover={{ scale: 1.02 }}
            >
              <Mic size={18} />
              {voicePlaying ? 'Playing voice note...' : 'Play voice note (add voice.mp3)'}
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
