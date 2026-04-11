import { motion } from 'framer-motion'
import { FaEnvelope, FaDownload } from 'react-icons/fa'

type ButtonProps = {
  text: string
  href?: string
  variant?: 'primary' | 'secondary'
  className?: string
}

function Button({ text, href, variant = 'primary', className = '' }: ButtonProps) {
  const baseStyles =
    'inline-flex items-center gap-2 px-8 py-3 rounded-xl font-medium transition backdrop-blur-md'
  const primaryStyles =
    'bg-cyan-600 border border-cyan-400/30 text-cyan-100 hover:bg-cyan-500/20'
  const secondaryStyles =
    'bg-white/10 border border-white/20 text-white hover:bg-white/20'

  const finalClassName = `${baseStyles} ${
    variant === 'primary' ? primaryStyles : secondaryStyles
  } ${className}`

  const content = (
    <>
      {text === 'Hire Me' && <FaEnvelope className="text-cyan-300 text-lg" />}

      {text === 'CV' && <FaDownload className="text-white text-lg" />}

      <span>{text}</span>
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={text === 'Hire Me' ? '_blank' : undefined}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className={finalClassName}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className={finalClassName}
    >
      {content}
    </motion.button>
  )
}

export default Button
