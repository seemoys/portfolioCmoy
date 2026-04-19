import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { useState } from 'react'
import Button from '../button/Button'
import { heroContent, heroSocials, heroTypeSequence } from '../../utils/heroData'
import { socialContainer, socialItem } from '../../utils/heroFunctions'
import { useScreenSize } from '../../utils/screenSize'

function HeroText() {
  const [showCV, setShowCV] = useState(false)
  const screenSize = useScreenSize()

  const handleViewCV = () => {
    if (screenSize !== 'desktop') {
      window.open('/Seemoys_CV.pdf', '_blank')
    } else {
      setShowCV(true)
    }
  }

  return (
    <>
      <div>
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-cyan-700 via-green-700 to-red-700 bg-clip-text text-xl font-bold tracking-wide text-transparent sm:text-2xl md:text-3xl lg:text-4xl"
        >
          <span className="block m-1">{heroContent.greeting}</span>
          <span className="block mb-1 h-fit text-3xl font-extrabold sm:text-4xl lg:h-[5rem] lg:text-6xl">
            {heroContent.name}
          </span>
        </motion.h1>

        <TypeAnimation
          sequence={heroTypeSequence}
          speed={50}
          repeat={Infinity}
          className="bg-gradient-to-r from-cyan-700 via-green-700 to-red-700 bg-clip-text text-base font-extrabold text-transparent sm:text-lg md:text-xl md:font-bold lg:text-[2.2rem] lg:font-bold"
        />

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-3 w-3/4 bg-gradient-to-r from-cyan-100 via-green-500 to-red-500 bg-clip-text text-md font-medium text-transparent sm:w-full sm:text-base md:text-xl"
        >
          {heroContent.summary}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-2 bg-gradient-to-r from-cyan-100 via-green-500 to-red-500 bg-clip-text text-md font-medium text-transparent sm:text-sm md:text-base"
        >
          {heroContent.highlights.map((line, index) => (
            <span key={line}>
              {index > 0 && <span>• </span>}
              {line}
              <br />
            </span>
          ))}
        </motion.p>

        {/* BUTTONS */}
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Button
            text="Hire Me"
            href={`https://mail.google.com/mail/?view=cm&to=${'seemoys' + '@gmail.com'}&su=Hire Me`}
          />

          <Button
            text="CV"
            href="/Seemoys_CV.pdf"
            variant="secondary"
            download
            fileName="Seemoys_CV.pdf"
          />

          {/* ✅ SHOW ONLY ON DESKTOP */}
          {screenSize === 'desktop' && (
            <button
              onClick={handleViewCV}
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base rounded-xl font-medium bg-white/10 border border-white/20 text-white hover:bg-white/20 transition backdrop-blur-md"
            >
              View CV
            </button>
          )}
        </div>

        {/* SOCIAL ICONS */}
        <motion.div
          variants={socialContainer}
          initial="hidden"
          animate="show"
          className="mt-10 flex w-full justify-around sm:mt-3 sm:w-auto sm:justify-start sm:gap-5 lg:mt-3"
        >
          {heroSocials.map(({ icon: Icon, href, label, color }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              variants={socialItem}
              whileHover={{ scale: 1.25, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              className={`text-4xl text-gray-400 transition-colors duration-200 md:text-3xl lg:text-2xl ${color}`}
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* MODAL */}
      {showCV && (
        <div
          onClick={() => setShowCV(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl h-[85vh] bg-slate-900 rounded-xl overflow-hidden border border-white/10"
          >
            <button
              onClick={() => setShowCV(false)}
              className="absolute top-3 right-3 z-10 px-3 py-1 text-sm bg-white/10 text-white rounded-md hover:bg-white/20"
            >
              ✕
            </button>

            <iframe src="/Seemoys_CV.pdf" title="CV Preview" className="w-full h-full" />
          </div>
        </div>
      )}
    </>
  )
}

export default HeroText
