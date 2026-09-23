import { useEffect, useRef, useState } from 'react'

interface UseCountUpOptions {
  duration?: number
  start?: boolean
}

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

export function useCountUp(
  target: number,
  { duration = 2000, start = true }: UseCountUpOptions = {},
) {
  const [value, setValue] = useState(0)
  const frameRef = useRef<number>(0)
  const reduceMotion = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )[0]

  useEffect(() => {
    if (!start || reduceMotion) return

    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      setValue(Math.round(target * easeOut(progress)))
      if (progress < 1) frameRef.current = requestAnimationFrame(tick)
    }

    frameRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameRef.current)
  }, [target, duration, start, reduceMotion])

  if (!start || reduceMotion) return target
  return value
}
