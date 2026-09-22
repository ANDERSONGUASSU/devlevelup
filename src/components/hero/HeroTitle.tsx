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
        'font-pixel text-2xl leading-[1.1] text-arcade-cyan text-shadow-arcade-title sm:text-3xl lg:text-[46px]',
        className,
      )}
    >
      {heroCopy.titleLines.map((line, index) => (
        <Fragment key={line}>
          {index > 0 && <br />}
          {line}
        </Fragment>
      ))}
    </h1>
  )
}
