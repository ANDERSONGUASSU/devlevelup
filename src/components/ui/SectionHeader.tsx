import { cn } from '../../lib/utils'

interface SectionHeaderProps {
  badge?: string
  subtitle?: string
  title?: string
  description?: string
  size?: 'md' | 'lg'
  className?: string
}

export function SectionHeader({
  badge,
  subtitle,
  title,
  description,
  size = 'md',
  className,
}: SectionHeaderProps) {
  const isLg = size === 'lg'

  return (
    <div className={cn('flex flex-col items-center gap-4', className)}>
      {badge && (
        <span
          className={cn(
            'rounded-full border border-arcade-cyan-badge-border bg-arcade-cyan-badge font-inter font-semibold uppercase tracking-wider text-arcade-cyan',
            isLg ? 'px-5 py-2 text-sm' : 'px-4 py-1.5 text-xs',
          )}
        >
          {badge}
        </span>
      )}
      <div className="flex flex-col items-center gap-1">
        {subtitle && (
          <p
            className={cn(
              'font-inter font-bold text-arcade-white',
              isLg
                ? 'text-3xl leading-[1.2] sm:text-4xl lg:text-5xl'
                : 'text-2xl leading-10 sm:text-3xl lg:text-[32px]',
            )}
          >
            {subtitle}
          </p>
        )}
        {title && (
          <h2
            className={cn(
              'font-inter font-bold text-arcade-white',
              isLg
                ? 'text-3xl leading-[1.2] sm:text-4xl lg:text-5xl'
                : 'text-2xl leading-10 sm:text-3xl lg:text-[32px]',
            )}
          >
            {title}
          </h2>
        )}
      </div>
      {description && (
        <p
          className={cn(
            'max-w-160 text-center font-roboto-flex font-medium leading-6 text-arcade-footer-text',
            isLg ? 'text-lg' : 'text-base',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
