import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react'

export type Theme = 'night' | 'pastel'
export type AppPhase = 'loading' | 'locked' | 'welcome' | 'journey' | 'finale'

interface AppContextValue {
  theme: Theme
  setTheme: (t: Theme) => void
  phase: AppPhase
  setPhase: (p: AppPhase) => void
  unlocked: boolean
  unlock: () => void
  musicPlaying: boolean
  toggleMusic: () => void
  setMusicPlaying: (v: boolean) => void
  showJourney: boolean
  startJourney: () => void
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('night')
  const [phase, setPhase] = useState<AppPhase>('loading')
  const [unlocked, setUnlocked] = useState(false)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const [showJourney, setShowJourney] = useState(false)

  const unlock = useCallback(() => {
    setUnlocked(true)
    setShowJourney(true)
    setPhase('welcome')
  }, [])

  const startJourney = useCallback(() => {
    setShowJourney(true)
    setPhase('journey')
  }, [])

  const toggleMusic = useCallback(() => {
    setMusicPlaying((p) => !p)
  }, [])

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        phase,
        setPhase,
        unlocked,
        unlock,
        musicPlaying,
        toggleMusic,
        setMusicPlaying,
        showJourney,
        startJourney,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
