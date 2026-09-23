import { Fragment } from 'react'
import { heroStats } from '../../data/hero'
import { CountUp } from '../ui/CountUp'
import { cn } from '../../lib/utils'

interface HeroStatsProps {
  className?: string
}

export function HeroStats({ className }: HeroStatsProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-3 rounded-2xl border border-arcade-cyan bg-arcade-stats-bar px-4 py-3 shadow-arcade-stats-bar backdrop-blur-md',
        className,
      )}
    >
      {heroStats.map((stat, index) => (
        <Fragment key={stat.value}>
          {index > 0 && (
            <span aria-hidden="true" className="h-8 w-px bg-arcade-cyan/25" />
          )}
          <div className="flex flex-col gap-0.5">
            <span className="font-pixel text-xl leading-none text-arcade-cyan">
              <CountUp value={stat.value} />
            </span>
            <span className="font-roboto-flex text-xs text-arcade-white">
              {stat.label}
            </span>
          </div>
        </Fragment>
      ))}
    </div>
  )
}
