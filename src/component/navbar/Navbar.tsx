import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/Logo.png'
import { navbarOptions } from '../../utils/navbarData'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { root: null, rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => sections.forEach((s) => observer.unobserve(s))
  }, [])

  return (
    <>
      {/* ── Top bar ── */}
      <div className="fixed top-0 left-1/2 z-50 flex w-full -translate-x-1/2 items-center justify-between border-b border-cyan-200/10 bg-[#051518]/10 px-4 py-2 backdrop-blur-md sm:px-8 md:px-10 lg:px-20">
        <motion.div
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="cursor-pointer"
          onClick={() => {
            const homeSection = document.getElementById('home')
            if (homeSection) {
              homeSection.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        >
          <img src={logo} alt="CMOY Logo" className="h-8 sm:h-10" />
        </motion.div>

        <motion.nav
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center rounded-2xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md sm:px-6 sm:py-4"
        >
          {/* Desktop links */}
          <div className="hidden gap-6 md:flex lg:gap-12">
            {navbarOptions.map((item) => {
              const id = item.toLowerCase()
              const isActive = active === id
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  className={`relative text-sm transition lg:text-base ${
                    isActive ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {item}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </a>
              )
            })}
          </div>

          {/* Hamburger — animated icon swap */}
          <button
            onClick={() => setOpen(!open)}
            className="relative z-50 text-cyan-400 md:hidden"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.nav>
      </div>

      {/* ── Full-screen mobile menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 3rem) 2rem)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 3rem) 2rem)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 3rem) 2rem)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-slate-950 md:hidden"
          >
            {/* Decorative grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(6,182,212,1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
              }}
            />

            {/* Glow orb */}
            <div className="pointer-events-none absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/8 blur-[80px]" />

            {/* Corner accents */}
            <div className="pointer-events-none absolute top-16 left-6 h-12 w-[1px] bg-gradient-to-b from-cyan-400/40 to-transparent" />
            <div className="pointer-events-none absolute top-16 left-6 h-[1px] w-12 bg-gradient-to-r from-cyan-400/40 to-transparent" />
            <div className="pointer-events-none absolute top-16 right-6 h-12 w-[1px] bg-gradient-to-b from-cyan-400/40 to-transparent" />
            <div className="pointer-events-none absolute top-16 right-6 h-[1px] w-12 bg-gradient-to-l from-cyan-400/40 to-transparent" />
            <div className="pointer-events-none absolute bottom-16 left-6 h-12 w-[1px] bg-gradient-to-t from-cyan-400/40 to-transparent" />
            <div className="pointer-events-none absolute bottom-16 left-6 h-[1px] w-12 bg-gradient-to-r from-cyan-400/40 to-transparent" />
            <div className="pointer-events-none absolute bottom-16 right-6 h-12 w-[1px] bg-gradient-to-t from-cyan-400/40 to-transparent" />
            <div className="pointer-events-none absolute bottom-16 right-6 h-[1px] w-12 bg-gradient-to-l from-cyan-400/40 to-transparent" />

            {/* Header */}
            <div className="relative flex items-center justify-between px-6 pt-4 pb-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
              >
                <img src={logo} alt="CMOY Logo" className="h-8" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="font-mono text-[10px] tracking-[0.25em] text-cyan-500/50 uppercase"
              >
                navigation
              </motion.div>
            </div>

            {/* Top divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="origin-left h-[1px] bg-gradient-to-r from-cyan-500/30 via-slate-700 to-transparent mx-6"
            />

            {/* Nav items */}
            <nav className="relative flex flex-1 flex-col justify-center px-6 gap-1">
              {navbarOptions.map((item, i) => {
                const id = item.toLowerCase()
                const isActive = active === id

                return (
                  <motion.a
                    key={item}
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.35 + i * 0.07,
                      duration: 0.4,
                      ease: 'easeOut',
                    }}
                    className={`group flex items-center gap-4 rounded-xl px-4 py-4 transition-all duration-200 ${
                      isActive
                        ? 'bg-cyan-500/8 text-cyan-400'
                        : 'text-slate-500 hover:bg-slate-800/50 hover:text-slate-200'
                    }`}
                  >
                    {/* Index */}
                    <span className="font-mono text-[11px] text-slate-700 w-5 text-right shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Active bar */}
                    <span
                      className={`h-5 w-[2px] rounded-full transition-all duration-300 shrink-0 ${
                        isActive ? 'bg-cyan-400' : 'bg-slate-800 group-hover:bg-slate-600'
                      }`}
                    />

                    {/* Label */}
                    <span className="text-xl font-light tracking-wide">{item}</span>

                    {/* Arrow on active */}
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="ml-auto font-mono text-xs text-cyan-500/60"
                      >
                        ›
                      </motion.span>
                    )}
                  </motion.a>
                )
              })}
            </nav>

            {/* Bottom divider + footer strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="h-[1px] bg-gradient-to-r from-cyan-500/30 via-slate-700 to-transparent mx-6" />
              <div className="flex items-center justify-between px-6 py-4">
                <p className="font-mono text-[10px] tracking-widest text-slate-700 uppercase">
                  © {new Date().getFullYear()} Cmoy
                </p>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>
                  <span className="font-mono text-[10px] tracking-widest text-slate-600 uppercase">
                    Open to work
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
