import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const SKILLS = [
  'React',
  'Node.js',
  'Express',
  'JavaScript',
  'TypeScript',
  'MySQL',
  'REST APIs',
  'Tailwind CSS',
  'Redux',
  'Zustand',
  'Git',
  'Performance'
]


const RADIUS = 150
const SKILL_COUNT = SKILLS.length

function RotatingArc() {
  const containerRef = useRef<HTMLDivElement>(null)
  const arcGroupRef = useRef<HTMLDivElement>(null)
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([])
  const angleRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)

  useGSAP(
    () => {
      gsap.to(angleRef, {
        current: 360, // clockwise
        duration: SKILL_COUNT * 1.25,
        repeat: -1,
        ease: 'none',
        onUpdate: () => {
          const angle = angleRef.current

          // Rotate the arc group clockwise
          if (arcGroupRef.current) {
            arcGroupRef.current.style.transform = `rotate(${angle}deg)`
          }

          // Counter-rotate each label so text stays upright
          labelRefs.current.forEach((el) => {
            if (el) el.style.transform = `rotate(${-angle}deg)`
          })

          // Highlight the skill closest to the 9-o'clock position (270deg = leftmost visible)
          const normalized = ((angle % 360) + 360) % 360
          let minDiff = Infinity
          let idx = 0
          SKILLS.forEach((_, i) => {
            const base = (i / SKILL_COUNT) * 360
            const pos = (base + normalized) % 360
            const diff = Math.min(Math.abs(pos - 270), 360 - Math.abs(pos - 270))
            if (diff < minDiff) {
              minDiff = diff
              idx = i
            }
          })
          setActiveIndex(idx)
        },
      })
    },
    { scope: containerRef }
  )

  return (
    <div
      ref={containerRef}
      className="hidden lg:block"
      style={{
        position: 'fixed',
        right: -RADIUS, // center of circle sits on the right screen edge
        top: '50%',
        transform: 'translateY(-50%)',
        width: RADIUS * 2,
        height: RADIUS * 2,
        zIndex: 10,
        pointerEvents: 'none',
      }}
    >
      {/* Static arc ring */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: '1.5px solid rgba(99,102,241,0.2)',
          boxShadow: '-6px 0 40px 10px rgba(99,102,241,0.08)',
        }}
      />

      {/* Rotating group — skills orbit clockwise */}
      <div
        ref={arcGroupRef}
        style={{
          position: 'absolute',
          inset: 0,
          transformOrigin: 'center center',
        }}
      >
        {SKILLS.map((skill, i) => {
          const angle = (i / SKILL_COUNT) * 360
          const rad = (angle * Math.PI) / 180
          // 0deg = top (12 o'clock), going clockwise
          const x = RADIUS + RADIUS * Math.sin(rad)
          const y = RADIUS - RADIUS * Math.cos(rad)
          const isActive = i === activeIndex

          return (
            <div
              key={skill}
              style={{
                position: 'absolute',
                left: x,
                top: y,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <span 
                ref={(el) => {
                  labelRefs.current[i] = el
                }}
                style={{
                  fontFamily:'fangsong',
                  display: 'inline-block',
                  padding: '4px 14px',
                  borderRadius: 999,
                  fontSize: isActive ? '0.9rem' : '0.72rem',
                  fontWeight: isActive ? 700 : 500,
                  letterSpacing: '0.04em',
                  color: isActive ? '#fff' : 'rgba(165,180,252,0.55)',
                  background: isActive
                    ? 'linear-gradient(135deg,#6366f1,#818cf8)'
                    : 'transparent',
                  boxShadow: isActive ? '0 0 18px 4px rgba(99,102,241,0.45)' : 'none',
                  border: isActive
                    ? '1.5px solid rgba(165,180,252,0.8)'
                    : '1px solid rgba(99,102,241,0.2)',
                  whiteSpace: 'nowrap',
                  transition:
                    'color 0.35s, background 0.35s, box-shadow 0.35s, font-size 0.35s, border-color 0.35s',
                  transformOrigin: 'center center',
                  textShadow: isActive ? '0 0 12px rgba(165,180,252,0.7)' : 'none',
                }}
              >
                {skill}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RotatingArc
