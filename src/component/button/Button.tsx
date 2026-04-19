import { motion } from 'framer-motion'
import { FaEnvelope, FaDownload } from 'react-icons/fa'

type ButtonProps = {
  text: string
  href?: string
  download?: boolean
  fileName?: string
  variant?: 'primary' | 'secondary'
  className?: string
}

const hireGlow = {
  animate: {
    boxShadow: [
      '0 0 0px rgba(6,182,212,0.2)',
      '0 0 28px rgba(6,182,212,0.75)',
      '0 0 0px rgba(6,182,212,0.2)',
    ],
    scale: [1, 1.03, 1],
  },
  transition: {
    duration: 2.2,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
}

function Button({
  text,
  href,
  download = false,
  fileName = 'file.pdf',
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center gap-2 px-5 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base rounded-xl font-medium transition backdrop-blur-md'

  const primaryStyles =
    'bg-cyan-600 border border-cyan-400/30 text-cyan-100 hover:bg-cyan-500/20'

  const secondaryStyles =
    'bg-white/10 border border-white/20 text-white hover:bg-white/20'

  const isHireMe = text === 'Hire Me'

  const finalClassName = `${baseStyles} ${
    variant === 'primary' ? primaryStyles : secondaryStyles
  } ${isHireMe ? 'relative overflow-hidden' : ''} ${className}`

  const handleDownload = () => {
    if (!download || !href) return

    const link = document.createElement('a')
    link.href = href
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const content = (
    <>
      {isHireMe && <FaEnvelope className="relative z-10 text-cyan-300 text-lg" />}

      {text === 'CV' && <FaDownload className="text-white text-lg" />}

      <span className={isHireMe ? 'relative z-10' : ''}>{text}</span>

      {isHireMe && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-xl"
          style={{
            background:
              'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.28) 50%, transparent 65%)',
          }}
          animate={{ x: ['-110%', '210%'] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: 'linear',
            repeatDelay: 1.8,
          }}
        />
      )}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        download={download ? fileName : undefined}
        target={!download && isHireMe ? '_blank' : undefined}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={isHireMe ? hireGlow.animate : undefined}
        transition={isHireMe ? hireGlow.transition : undefined}
        className={finalClassName}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className={finalClassName}
    >
      {content}
    </motion.button>
  )
}

export default Button
