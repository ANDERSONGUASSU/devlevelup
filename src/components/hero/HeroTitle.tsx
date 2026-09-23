import { Fragment } from 'react'
import { heroCopy } from '../../data/hero'
import { cn } from '../../lib/utils'

interface HeroTitleProps {
  className?: string
}

export function HeroTitle({ className }: HeroTitleProps) {
  return (
    <h1
      className={cn(
        'font-pixel text-lg leading-[1.1] text-arcade-footer-heading text-shadow-arcade-title sm:text-3xl lg:text-[38px]',
        className,
      )}
    >
      {heroCopy.titleLines.map((line, index) => (
        <Fragment key={line}>
          {index > 0 && <br />}
          <span className={cn(index > 0 && 'text-arcade-cyan')}>{line}</span>
        </Fragment>
      ))}
    </h1>
  )
}
