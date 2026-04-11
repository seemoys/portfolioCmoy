import React from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import heroImg1 from '../../assets/heroImg1.png'
import heroImg2 from '../../assets/heroImg2.png'

function HeroImage() {

  const mouseX = useMotionValue(-15)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 100, damping: 25 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 25 })

  // 🔥 Create different depth layers
  const img1X = useTransform(springX, (val) => val * 2)
  const img1Y = useTransform(springY, (val) => val * 2)

  const img2X = useTransform(springX, (val) => val * 3)
  const img2Y = useTransform(springY, (val) => val * 3)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()

    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    mouseX.set(x / 10)   // ← IMPORTANT strength
    mouseY.set(y / 10)
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative hidden md:flex justify-center items-center"
    >

      {/* MAIN IMAGE (less movement) */}
      <motion.img
        src={heroImg1}
        style={{ x: img1X, y: img1Y }}
        className="relative z-10 w-96 -left-16 bottom-12 rounded-3xl border border-cyan-400/20 drop-shadow-2yxl"
      />

      {/* FRONT IMAGE (more movement = depth) */}
      <motion.img
        src={heroImg2}
        style={{ x: img2X, y: img2Y }}
        className="absolute top-44 left-16 w-96 rounded-xl shadow-lg"
      />

    </div>
  )
}

export default HeroImage
