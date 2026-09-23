import { Fragment } from 'react'
import { heroStats } from '../../data/hero'
import { CountUp } from '../ui/CountUp'
import { cn } from '../../lib/utils'

interface HeroStatsProps {
  className?: string
}

export function HeroStats({ className }: HeroStatsProps) {
  return (
    <div className={cn('flex items-center gap-6', className)}>
      {heroStats.map((stat, index) => (
        <Fragment key={stat.value}>
          {index > 0 && (
            <span aria-hidden="true" className="h-9 w-px bg-arcade-divider" />
          )}
          <div className="flex flex-col gap-0.5">
            <span className="font-sans text-xl font-extrabold text-arcade-cyan">
              <CountUp value={stat.value} />
            </span>
            <span className="font-sans text-[11px] text-arcade-text-secondary">
              {stat.label}
            </span>
          </div>
        </Fragment>
      ))}
    </div>
  )
}
