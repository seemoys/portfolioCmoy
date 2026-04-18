import { Github, Linkedin, Mail, Terminal, ArrowUpRight } from 'lucide-react'
import { heroSocials } from '../../utils/heroData'

const socials = [
  {
    icon: Github,
    label: 'GitHub',
    href: heroSocials[0].href,
    external: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: heroSocials[1].href,
    external: true,
  },
  {
    icon: Mail,
    label: 'seemoys@gmail.com',
    href: 'mailto:seemoys@gmail.com',
    external: false,
  },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-cyan-500/20 bg-slate-950 overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-48 w-48 rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -top-16 right-1/3 h-32 w-32 rounded-full bg-blue-500/5 blur-2xl" />

      {/* Scanline texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6,182,212,1) 2px, rgba(6,182,212,1) 3px)',
          backgroundSize: '100% 4px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-2 md:px-12">
        {/* Top row — name + tagline | socials */}
        <div className="mb-2 flex flex-col items-center gap-3 border-b border-slate-800 pb-2 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col items-center sm:items-start">
            <div className="mb-1 flex items-center gap-2 text-[11px] font-mono text-cyan-500/70 tracking-widest uppercase">
              <Terminal size={11} />
              <span>portfolio.v2</span>
              <span className="inline-block h-2 w-1 bg-cyan-400 animate-pulse" />
            </div>
            <p className="mt-0.5 text-sm text-slate-500">Building things for the web.</p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="group relative flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-500 transition-all duration-200 hover:border-cyan-500/50 hover:bg-slate-800 hover:text-cyan-400 hover:shadow-[0_0_12px_rgba(6,182,212,0.15)]"
              >
                <Icon size={16} />
                <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-800 px-2 py-0.5 font-mono text-[10px] text-slate-300 opacity-0 transition-opacity group-hover:opacity-100">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-center gap-3 py-2 sm:flex-row sm:items-center sm:justify-between">
          {/* Copyright */}
          <p className="font-mono text-[11px] text-slate-600 tracking-wide text-center sm:text-left">
            <span className="text-cyan-600/60">©</span>{' '}
            <span className="text-slate-500">{year}</span>{' '}
            <span className="text-slate-400 font-medium">Cmoy</span>
            <span className="text-slate-600"> — All rights reserved.</span>
          </p>

          {/* Status badge */}
          <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-[10px] tracking-widest text-slate-500 uppercase">
              Open to work
            </span>
          </div>

          {/* Made by */}
          <p className="font-mono text-[11px] text-slate-600 tracking-wide text-center sm:text-right">
            <span className="text-slate-600">crafted with </span>
            <span className="text-cyan-500/80">⌨</span>
            <span className="text-slate-600"> by </span>
            <a
              href={heroSocials[1].href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-0.5 text-slate-400 transition-colors hover:text-cyan-400"
            >
              Cmoy
              <ArrowUpRight
                size={10}
                className="opacity-0 transition-opacity group-hover:opacity-100"
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
