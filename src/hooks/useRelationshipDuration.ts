import { useEffect, useState } from 'react'
import { RELATIONSHIP_START } from '../config'

export function useRelationshipDuration() {
  const [duration, setDuration] = useState({ years: 0, months: 0, days: 0, hours: 0 })

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const start = RELATIONSHIP_START
      let years = now.getFullYear() - start.getFullYear()
      let months = now.getMonth() - start.getMonth()
      let days = now.getDate() - start.getDate()
      let hours = now.getHours() - start.getHours()

      if (hours < 0) {
        hours += 24
        days--
      }
      if (days < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0)
        days += prevMonth.getDate()
        months--
      }
      if (months < 0) {
        months += 12
        years--
      }

      setDuration({ years, months, days, hours })
    }

    update()
    const interval = setInterval(update, 60000)
    return () => clearInterval(interval)
  }, [])

  return duration
}
