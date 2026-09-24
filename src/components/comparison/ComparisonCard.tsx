import { type LucideIcon } from 'lucide-react'
import { cn } from '../../lib/utils'

interface ComparisonCardProps {
  variant: 'isolated' | 'ecosystem'
  eyebrow: string
  title: string
  bullets: readonly { text: string; icon: LucideIcon }[]
  className?: string
}

const cardClasses = {
  isolated:
    'border-arcade-card-border bg-arcade-comparison-card hover:border-arcade-cyan/60 hover:shadow-arcade-card-glow',
  ecosystem:
    'border-arcade-cyan bg-arcade-comparison-card-active shadow-arcade-card-glow hover:border-arcade-purple-glow hover:shadow-arcade-tier-featured backdrop-blur-xl',
} as const

const eyebrowClasses = {
  isolated: 'text-arcade-cyan',
  ecosystem: 'text-arcade-cyan',
} as const

const iconBoxClasses = {
  isolated: 'border-arcade-icon-border bg-arcade-nav-muted text-arcade-footer',
  ecosystem:
    'border-arcade-cyan-icon-border bg-arcade-cyan-icon text-arcade-cyan',
} as const

export function ComparisonCard({
  variant,
  eyebrow,
  title,
  bullets,
  className,
}: ComparisonCardProps) {
  return (
    <article
      className={cn(
        'flex flex-col gap-6 rounded-2xl border p-8 transition-[transform,border-color,box-shadow] duration-200 ease-in-out hover:-translate-y-0.5 motion-reduce:transform-none lg:h-95',
        cardClasses[variant],
        className,
      )}
    >
      <div className="flex flex-col gap-3">
        <p
          className={cn(
            'font-sora text-xs font-semibold uppercase tracking-wider',
            eyebrowClasses[variant],
          )}
        >
          {eyebrow}
        </p>
        <h3 className="font-sans text-xl font-semibold leading-6.5 text-arcade-footer-heading">
          {title}
        </h3>
      </div>

      <ul className="flex flex-col gap-4">
        {bullets.map((bullet) => (
          <li key={bullet.text} className="flex items-start gap-3">
            <span
              className={cn(
                'flex size-6 shrink-0 items-center justify-center rounded-md border',
                iconBoxClasses[variant],
              )}
            >
              <bullet.icon className="size-3" />
            </span>
            <p className="font-sans text-sm font-medium leading-5 text-arcade-comparison-bullet">
              {bullet.text}
            </p>
          </li>
        ))}
      </ul>
    </article>
  )
}
