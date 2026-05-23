import { useEffect } from 'react'
import type { Theme } from '../context/AppContext'

/** Applies theme CSS variables to <html> so portaled UI (secret notes) inherits colors. */
export function useThemeOnDocument(theme: Theme) {
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    return () => {
      delete document.documentElement.dataset.theme
    }
  }, [theme])
}
