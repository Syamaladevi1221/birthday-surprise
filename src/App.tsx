import { AnimatePresence, motion } from 'framer-motion'
import { AppProvider, useApp } from './context/AppContext'
import { LoadingScreen } from './components/LoadingScreen'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import { MusicToggle } from './components/MusicToggle'
import { SectionNav } from './components/SectionNav'
import { useCursorSparkles } from './hooks/useCursorSparkles'
import { useThemeOnDocument } from './hooks/useThemeOnDocument'
import { UnlockPage } from './sections/UnlockPage'
import { WelcomeSection } from './sections/WelcomeSection'
import { SecretMessagesSection } from './sections/SecretMessagesSection'
import { ComplimentSection } from './sections/ComplimentSection'
import { MemoryGallery } from './sections/MemoryGallery'
import { Timeline } from './sections/Timeline'
import { ReasonsILoveYou } from './sections/ReasonsILoveYou'
import { BirthdayLetter } from './sections/BirthdayLetter'
import { FinalSurprise } from './sections/FinalSurprise'

function AppContent() {
  const { theme, unlocked } = useApp()
  const sparkleRef = useCursorSparkles(unlocked)
  useThemeOnDocument(theme)

  return (
    <motion.div
      data-theme={theme}
      className="relative min-h-dvh"
      style={{ background: 'var(--gradient)' }}
    >
      <motion.div ref={sparkleRef} aria-hidden />

      <LoadingScreen />
      <ThemeSwitcher />
      <MusicToggle />

      <AnimatePresence mode="wait">
        {!unlocked && <UnlockPage key="unlock" />}
      </AnimatePresence>

      {unlocked && (
        <>
          <WelcomeSection />
          <SectionNav />

          <main>
            <SecretMessagesSection />
            <ComplimentSection />
            <MemoryGallery />
            <Timeline />
            <ReasonsILoveYou />
            <BirthdayLetter />
            <FinalSurprise />
          </main>
        </>
      )}
    </motion.div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}
