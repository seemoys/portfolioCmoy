import { useState, useEffect } from 'react'

export type ScreenSize = 'mobile' | 'tablet' | 'desktop'

export function useScreenSize(): ScreenSize {
  const [screenSize, setScreenSize] = useState<ScreenSize>(() => {
    if (typeof window === 'undefined') return 'desktop'
    const w = window.innerWidth
    if (w < 768) return 'mobile'
    if (w < 1024) return 'tablet'
    return 'desktop'
  })

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth
      if (w < 768) setScreenSize('mobile')
      else if (w < 1024) setScreenSize('tablet')
      else setScreenSize('desktop')
    }
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return screenSize
}
