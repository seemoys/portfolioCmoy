export const getFlipClass = (direction: number, phase: 'out' | 'in') =>
  phase === 'out'
    ? direction > 0
      ? 'flip-out-right'
      : 'flip-out-left'
    : direction > 0
      ? 'flip-in-right'
      : 'flip-in-left'

export const getWrappedIndex = (index: number, length: number) =>
  ((index % length) + length) % length

export const calculateBookTilt = (
  clientX: number,
  clientY: number,
  rect: DOMRect
) => {
  const cx = rect.left + rect.width / 2
  const cy = rect.top + rect.height / 2

  return {
    x: ((clientY - cy) / (rect.height / 2)) * -3,
    y: ((clientX - cx) / (rect.width / 2)) * 4,
  }
}
