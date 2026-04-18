import { useEffect, useRef, useState } from 'react'
import HeroText from './HeroText'
import HeroImage from './HeroImage'
import RotatingArc from '../rotateingarc/RotatingArc'
import { heroObserverOptions } from '../../utils/heroFunctions'

function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [showArc, setShowArc] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowArc(entry.isIntersecting),
      heroObserverOptions
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex items-center justify-center overflow-hidden pt-20 pb-10 sm:min-h-screen sm:pt-24 sm:pb-16"
    >
      <div className="relative z-9 grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 sm:px-10 md:grid-cols-2 md:gap-12 lg:px-24">
        <HeroText />
        <div className="hidden justify-center md:flex">
          <HeroImage />
        </div>
      </div>
      {showArc && <RotatingArc />}
    </section>
  )
}

export default Hero
