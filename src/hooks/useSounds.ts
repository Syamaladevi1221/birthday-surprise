import { useCallback, useRef } from 'react'

/** Web Audio API synthesized sounds — no external files needed */
export function useSounds() {
  const ctxRef = useRef<AudioContext | null>(null)

  const getCtx = useCallback(() => {
    if (!ctxRef.current) {
      ctxRef.current = new AudioContext()
    }
    if (ctxRef.current.state === 'suspended') {
      ctxRef.current.resume()
    }
    return ctxRef.current
  }, [])

  const playTone = useCallback(
    (freq: number, duration: number, type: OscillatorType = 'sine', volume = 0.15) => {
      try {
        const ctx = getCtx()
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = type
        osc.frequency.setValueAtTime(freq, ctx.currentTime)
        gain.gain.setValueAtTime(volume, ctx.currentTime)
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration)
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.start()
        osc.stop(ctx.currentTime + duration)
      } catch {
        /* audio not available */
      }
    },
    [getCtx],
  )

  const playUnlock = useCallback(() => {
    playTone(523, 0.15)
    setTimeout(() => playTone(659, 0.15), 100)
    setTimeout(() => playTone(784, 0.15), 200)
    setTimeout(() => playTone(1047, 0.4), 300)
  }, [playTone])

  const playWrong = useCallback(() => {
    playTone(200, 0.2, 'triangle', 0.1)
    setTimeout(() => playTone(180, 0.25, 'triangle', 0.08), 120)
  }, [playTone])

  const playClick = useCallback(() => {
    playTone(880, 0.08, 'sine', 0.08)
  }, [playTone])

  const playNote = useCallback(() => {
    playTone(698, 0.1)
    setTimeout(() => playTone(880, 0.15), 80)
  }, [playTone])

  const playHeartbeat = useCallback(() => {
    playTone(60, 0.08, 'sine', 0.2)
    setTimeout(() => playTone(60, 0.08, 'sine', 0.15), 200)
  }, [playTone])

  return { playUnlock, playWrong, playClick, playNote, playHeartbeat }
}
