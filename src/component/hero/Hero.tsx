import HeroText from './HeroText'
import HeroImage from './HeroImage'
import RotatingArc from '../rotateingarc/RotatingArc'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
      <div className="relative z-9 max-w-7xl w-full px-6 sm:px-10 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <HeroText />
        {/* Hidden on mobile, visible from md (laptop) */}
        <div className="hidden md:flex justify-center">
          <HeroImage />
        </div>
      </div>
      <RotatingArc />
    </section>
  )
}

export default Hero
