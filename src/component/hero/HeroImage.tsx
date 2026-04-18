import React from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { heroImages } from '../../utils/heroData'
import { getHeroMousePosition, heroImageSpring } from '../../utils/heroFunctions'

function HeroImage() {
  const mouseX = useMotionValue(-25)
  const mouseY = useMotionValue(-25)

  const springX = useSpring(mouseX, heroImageSpring)
  const springY = useSpring(mouseY, heroImageSpring)

  const img1X = useTransform(springX, (val) => val * 2)
  const img1Y = useTransform(springY, (val) => val * 2)

  const img2X = useTransform(springX, (val) => val * 3)
  const img2Y = useTransform(springY, (val) => val * 2)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const { x, y } = getHeroMousePosition(e.clientX, e.clientY, rect)
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative hidden items-center justify-center md:flex"
    >
      <motion.img
        src={heroImages.main}
        style={{ x: img1X, y: img1Y }}
        className="relative z-10 -left-8 bottom-8 w-64 rounded-3xl border border-cyan-400/20 drop-shadow-2xl lg:-left-12 lg:bottom-10 lg:w-80 xl:-left-16 xl:bottom-12 xl:w-96"
      />

      <motion.img
        src={heroImages.front}
        style={{ x: img2X, y: img2Y }}
        className="absolute top-32 left-8 w-64 rounded-xl shadow-lg lg:top-40 lg:left-12 lg:w-80 xl:top-44 xl:left-16 xl:w-96"
      />
    </div>
  )
}

export default HeroImage
