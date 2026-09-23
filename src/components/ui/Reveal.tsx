import type { ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'
import { cn } from '../../lib/utils'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition-[opacity,transform] duration-500 ease-out will-change-[opacity,transform]',
        inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
        className,
      )}
    >
      {children}
    </div>
  )
}
