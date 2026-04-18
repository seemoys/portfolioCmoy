import { useState, useEffect, useRef, useCallback } from 'react'
import type { MouseEvent } from 'react'
import { GraduationCap, ChevronLeft, ChevronRight, BookOpen, List } from 'lucide-react'
import { useScreenSize } from '../../utils/screenSize'
import { educationItems } from '../../utils/educationData'
import {
  calculateBookTilt,
  getFlipClass,
  getWrappedIndex,
} from '../../utils/educationFunctions'
import '../../styles/education.css'

export default function Education() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [mode, setMode] = useState('book')
  const [animating, setAnimating] = useState(false)
  const [animClass, setAnimClass] = useState('')
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const timerRef = useRef<number | null>(null)
  const bookRef = useRef<HTMLDivElement | null>(null)

  const flipTo = useCallback(
    (newIndex: number, dir: number) => {
      if (animating) return
      setAnimating(true)
      setAnimClass(getFlipClass(dir, 'out'))
      setTimeout(() => {
        setIndex(newIndex)
        setAnimClass(getFlipClass(dir, 'in'))
        setTimeout(() => {
          setAnimClass('')
          setAnimating(false)
        }, 400)
      }, 350)
    },
    [animating]
  )

  const next = useCallback(() => {
    flipTo(getWrappedIndex(index + 1, educationItems.length), 1)
  }, [index, flipTo])

  const prev = useCallback(() => {
    flipTo(getWrappedIndex(index - 1, educationItems.length), -1)
  }, [index, flipTo])

  useEffect(() => {
    if (paused || mode !== 'book') return
    timerRef.current = window.setInterval(() => {
      flipTo(getWrappedIndex(index + 1, educationItems.length), 1)
    }, 5000)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [paused, mode, index, flipTo])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!bookRef.current) return
    setTilt(
      calculateBookTilt(e.clientX, e.clientY, bookRef.current.getBoundingClientRect())
    )
  }

  const item = educationItems[index]
  const screenSize = useScreenSize()

  return (
    <section
      id="education"
      style={{ position: 'relative', padding: '5rem 1.5rem', overflow: 'hidden' }}
    >
      <div className="bg-glow" />

      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.25em',
            color: '#a78bfa',
            textTransform: 'uppercase',
          }}
        >
          My journey
        </span>
        <h2
          style={{
            marginTop: 0,
            fontSize: 'clamp(2rem,5vw,3rem)',
            fontWeight: 800,
            background: 'linear-gradient(to right,#a78bfa,#818cf8,#22d3ee)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Education
        </h2>
        <p
          style={{
            marginTop: 8,
            color: '#9ca3af',
            fontSize: 15,
            maxWidth: 500,
            margin: '8px auto 0',
          }}
        >
          Flip through the book or switch to timeline view.
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          marginBottom: '2rem',
          flexWrap: 'wrap',
        }}
      >
        <button
          className={`mode-btn ${mode === 'book' ? 'active' : ''}`}
          onClick={() => setMode('book')}
        >
          <BookOpen size={15} /> Book
        </button>
        <button
          className={`mode-btn ${mode === 'timeline' ? 'active' : ''}`}
          onClick={() => setMode('timeline')}
        >
          <List size={15} /> Timeline
        </button>
      </div>

      {mode === 'book' && (
        <>
          <div
            ref={bookRef}
            style={{ perspective: 1800, maxWidth: 720, margin: '0 auto' }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => {
              setPaused(false)
              setTilt({ x: 0, y: 0 })
            }}
            onMouseMove={handleMouseMove}
          >
            <div
              className="book-body"
              style={{
                position: 'relative',
                height: 420,
                borderRadius: '4px 16px 16px 4px',
                background:
                  'linear-gradient(135deg,rgba(15,23,42,0.85),rgba(30,27,75,0.65),rgba(15,23,42,0.85))',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 20px 60px -15px rgba(139,92,246,0.35)',
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: 20,
                  borderRadius: '4px 0 0 4px',
                  background:
                    'linear-gradient(to right,#1e1145,#312e81,rgba(30,27,75,0.4))',
                  borderRight: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 16,
                    bottom: 16,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 1,
                    background: 'rgba(255,255,255,0.08)',
                  }}
                />
              </div>

              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 8,
                  bottom: 8,
                  width: 3,
                  borderRadius: '0 3px 3px 0',
                  background:
                    'linear-gradient(to bottom,rgba(255,255,255,0.08),rgba(255,255,255,0.03),rgba(255,255,255,0.08))',
                }}
              />

              <div
                className={`page-shadow ${animClass ? 'flipping' : ''}`}
                style={{
                  position: 'absolute',
                  left: 20,
                  right: 6,
                  top: 0,
                  bottom: 0,
                  transformStyle: 'preserve-3d',
                  borderRadius: '0 12px 12px 0',
                }}
              >
                <div
                  className={animClass}
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '2rem 2.5rem',
                    transformOrigin: 'left center',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      color: '#c4b5fd',
                    }}
                  >
                    <GraduationCap size={16} />
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {item.year}
                    </span>
                    <span
                      style={{
                        marginLeft: 'auto',
                        fontSize: 11,
                        fontWeight: 500,
                        color: '#6b7280',
                        letterSpacing: '0.1em',
                      }}
                    >
                      Page {index + 1} / {educationItems.length}
                    </span>
                  </div>

                  <h3
                    style={{
                      marginTop: 20,
                      fontSize: 'clamp(1.2rem,3vw,1.5rem)',
                      fontWeight: 800,
                      background: 'linear-gradient(to right,#c4b5fd,#67e8f9)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      lineHeight: 1.3,
                    }}
                  >
                    {item.degree}
                  </h3>

                  <p
                    style={{
                      fontSize: 16,
                      fontWeight: 500,
                      marginTop: 6,
                    }}
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-200/90 hover:text-cyan-400 transition"
                    >
                      {item.institution} →
                    </a>
                  </p>

                  <div
                    style={{
                      marginTop: 20,
                      height: 1,
                      width: 64,
                      background:
                        'linear-gradient(to right,rgba(139,92,246,0.6),transparent)',
                    }}
                  />

                  <p
                    className="book-desc"
                    style={{
                      color: '#9ca3af',
                      marginTop: 15,
                      lineHeight: screenSize === 'mobile' ? 1.2 : 1.9,
                    }}
                  >
                    {item.desc}
                  </p>

                  <div
                    style={{
                      marginTop: 'auto',
                      paddingTop: 24,
                      fontSize: 10,
                      letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                      color: 'rgba(139,92,246,0.5)',
                    }}
                  >
                    — Chapter {3 - index} —
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 16,
              marginTop: 24,
            }}
          >
            <button className="nav-arrow" onClick={prev} aria-label="Previous">
              <ChevronLeft size={18} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {educationItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (i !== index) {
                      flipTo(i, i > index ? 1 : -1)
                    }
                  }}
                  aria-label={`Page ${i + 1}`}
                  style={{
                    height: 8,
                    width: i === index ? 28 : 8,
                    borderRadius: 999,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all .3s',
                    background:
                      i === index
                        ? 'linear-gradient(to right,#a78bfa,#22d3ee)'
                        : 'rgba(255,255,255,0.15)',
                  }}
                />
              ))}
            </div>
            <button className="nav-arrow" onClick={next} aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>

          <div
            style={{
              display: 'flex',
              gap: 12,
              justifyContent: 'center',
              flexWrap: 'wrap',
              maxWidth: 720,
              margin: '32px auto 0',
            }}
          >
            {educationItems.map((ed, i) => (
              <div
                key={i}
                className={`preview-card ${i === index ? 'active' : ''}`}
                onClick={() => {
                  if (i !== index) flipTo(i, i > index ? 1 : -1)
                }}
                style={{ flex: '1 1 140px', maxWidth: 200, minWidth: 140 }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: '#a78bfa',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    marginBottom: 4,
                  }}
                >
                  {ed.year}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: i === index ? '#e0e7ff' : '#9ca3af',
                    fontWeight: 600,
                    lineHeight: 1.3,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {ed.degree}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {mode === 'timeline' && (
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          {educationItems.map((ed, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: 20,
                position: 'relative',
                paddingBottom: i < educationItems.length - 1 ? 32 : 0,
              }}
            >
              {i < educationItems.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    left: 6,
                    top: 14,
                    bottom: -18,
                    width: 2,
                    background:
                      'linear-gradient(to bottom,rgba(139,92,246,0.25),rgba(34,211,238,0.15))',
                  }}
                />
              )}

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  paddingTop: 2,
                  flexShrink: 0,
                }}
              >
                <div className="tl-dot" />
              </div>

              <div className="tl-card" style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 12,
                    color: '#a78bfa',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: 6,
                  }}
                >
                  {ed.year}
                </div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    background: 'linear-gradient(to right,#c4b5fd,#67e8f9)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1.3,
                    margin: 0,
                  }}
                >
                  {ed.degree}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    margin: '4px 0 0',
                  }}
                >
                  <a
                    href={ed.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-200/90 hover:text-cyan-400 transition"
                  >
                    {ed.institution}
                  </a>
                </p>
                <div
                  style={{
                    marginTop: 12,
                    height: 1,
                    width: 40,
                    background:
                      'linear-gradient(to right,rgba(139,92,246,0.4),transparent)',
                  }}
                />
                <p
                  style={{
                    fontSize: 14,
                    color: '#9ca3af',
                    lineHeight: 1.7,
                    margin: '12px 0 0',
                  }}
                >
                  {ed.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
