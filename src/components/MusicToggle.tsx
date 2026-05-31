import { motion } from 'framer-motion'
import { Music, VolumeX } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useApp } from '../context/AppContext'
import { BACKGROUND_MUSIC } from '../config'

export function MusicToggle() {
  const { musicPlaying, toggleMusic, unlocked } = useApp()
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio(BACKGROUND_MUSIC)
    audio.loop = true
    audio.volume = 0.35
    audioRef.current = audio

    audio.addEventListener('error', () => {
      /* music file optional — user adds /public/music.mp3 */
    })

    return () => {
      audio.pause()
      audioRef.current = null
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !unlocked) return

    if (musicPlaying) {
      audio.play().catch(() => {
        /* autoplay blocked until user interaction */
      })
    } else {
      audio.pause()
    }
  }, [musicPlaying, unlocked])

  if (!unlocked) return null

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      onClick={toggleMusic}
      className="glass btn-glow fixed right-4 top-20 z-[70] flex h-10 w-10 items-center justify-center rounded-full sm:right-6 sm:top-6 sm:h-11 sm:w-11"
      style={{ color: 'var(--accent)' }}
      aria-label={musicPlaying ? 'Pause music' : 'Play music'}
    >
      {musicPlaying ? <Music size={20} /> : <VolumeX size={20} />}
    </motion.button>
  )
}
