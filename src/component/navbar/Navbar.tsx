import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/Logo.png'

function Navbar() {
  const navbarOption = ['Home', 'Projects', 'Education', 'Skills', 'Contact']
  const [open, setOpen] = useState(false)

  return (
    <>
      
        {/* TOP BAR WRAPPER */}
        <div
          className="fixed top-0 left-1/2 -translate-x-1/2 w-[100%] max-w-8xl flex items-center justify-between z-50 backdrop-blur-md bg-[#051518]/10 border-b border-cyan-200 lg:px-20 py-2 flex items-center justify-between">
          {/* LOGO (LEFT) */}
          <motion.div
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="cursor-pointer shrink-0 "
          >
            <img src={logo} alt="CMOY Logo" className="h-10 w-auto scale-125" />
          </motion.div>

          {/* NAVBAR (RIGHT) */}
          <motion.nav
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-md bg-white/5 border border-white/10
          rounded-2xl px-6 py-4 flex items-center justify-between"
          >
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-12">
              {navbarOption.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-300 hover:text-cyan-400 transition group"
                >
                  {item}
                  <span
                    className="absolute left-0 -bottom-1 w-0 h-[2px]
                  bg-cyan-400 transition-all group-hover:w-full"
                  ></span>
                </a>
              ))}
            </div>

            {/* Mobile Button */}
            <button onClick={() => setOpen(!open)} className="md:hidden text-cyan-400">
              {open ? <X /> : <Menu />}
            </button>
          </motion.nav>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-[92%]
          rounded-xl backdrop-blur-md bg-white/5 border border-white/10
          p-6 flex flex-col gap-4 md:hidden z-40"
          >
            {navbarOption.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-cyan-400"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
     
    </>
  )
}

export default Navbar
