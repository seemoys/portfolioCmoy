export const socialContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.8 },
  },
}

export const socialItem = {
  hidden: { opacity: 0, y: 20, scale: 0.4 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 300, damping: 15 },
  },
}

export const heroImageSpring = { stiffness: 100, damping: 25 }

export const getHeroMousePosition = (
  clientX: number,
  clientY: number,
  rect: DOMRect
) => ({
  x: (clientX - rect.left - rect.width / 2) / 10,
  y: (clientY - rect.top - rect.height / 2) / 10,
})

export const heroObserverOptions = { threshold: 0.5 }
