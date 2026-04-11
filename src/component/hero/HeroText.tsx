import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import Button from '../button/Button'

const SOCIALS = [
  { icon: FaGithub,   href: 'https://github.com/your-username',          label: 'GitHub',   color: 'hover:text-white' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/your-username',      label: 'LinkedIn', color: 'hover:text-sky-400' },
  { icon: FaWhatsapp, href: 'https://wa.me/9525953344',                   label: 'WhatsApp', color: 'hover:text-green-400' },
]

function HeroText() {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl md:text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 via-green-700 to-red-700"
      >
        <span className="block m-1">Hi, I am </span>
        <span className="block mb-4 font-extrabold text-5xl lg:text-6xl h-fit lg:h-[5rem]">
          Seemoy Shome
        </span>
      </motion.h1>
      <TypeAnimation
        sequence={[
          'Turning ideas into products.',
          1500,
          'Building fast & scalable apps.',
          1500,
          'Optimizing performance & UX.',
          1500,
          'Creating real-world solutions.',
          1500,
        ]}
        speed={50}
        repeat={Infinity}
        className="text-xl md:text-[2.2rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 via-green-700 to-red-700"
      />
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-3 text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 via-green-500 to-red-500 font-medium"
      >
        React.js Developer with 3+ years of experience building scalable, high-performance
        web applications using React, Node.js, Express, PHP, and MySQL—focused on clean
        code and real-world impact.
      </motion.p>

      <div className="flex flex-col sm:flex-row gap-4 mt-5">
        <Button text="Hire Me" href="https://mail.google.com/mail/?view=cm&to=seemoys@gmail.com&su=Hire Me" />
        <Button text="CV" variant="secondary" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex gap-5 mt-5"
      >
        {SOCIALS.map(({ icon: Icon, href, label, color }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`text-2xl text-gray-400 transition-colors duration-200 ${color}`}
          >
            <Icon />
          </a>
        ))}
      </motion.div>
    </div>
  )
}

export default HeroText
