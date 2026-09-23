import { cn } from '../../lib/utils'

interface LevelNodeProps {
  label: string
  unlocked: boolean
  current: boolean
  className?: string
}

export function LevelNode({
  label,
  unlocked,
  current,
  className,
}: LevelNodeProps) {
  return (
    <div
      className={cn(
        'flex h-7 w-14 shrink-0 items-center justify-center rounded-lg border font-sora text-xs font-bold',
        current
          ? 'border-arcade-cyan bg-arcade-cyan-icon text-arcade-cyan shadow-arcade-card-glow'
          : unlocked
            ? 'border-arcade-cyan-badge-border bg-arcade-cyan-badge text-arcade-cyan'
            : 'border-arcade-icon-border bg-arcade-comparison-card text-arcade-muted',
        className,
      )}
    >
      {label}
    </div>
  )
}
