import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

interface ArcadePanelProps extends HTMLAttributes<HTMLDivElement> {
  corner?: boolean
}

export function ArcadePanel({
  className,
  corner = true,
  children,
  ...props
}: ArcadePanelProps) {
  return (
    <div
      className={cn(
        'relative rounded-2xl border border-arcade-cyan bg-arcade-panel p-8 shadow-arcade-panel backdrop-blur-[14px]',
        className,
      )}
      {...props}
    >
      {corner && <Corners />}
      {children}
    </div>
  )
}

const cornerPositions = [
  '-top-1 -left-1',
  '-top-1 -right-1 rotate-90',
  '-bottom-1 -right-1 rotate-180',
  '-bottom-1 -left-1 -rotate-90',
]

function Corners() {
  return (
    <>
      {cornerPositions.map((position) => (
        <span
          key={position}
          aria-hidden="true"
          className={cn('absolute grid size-4 grid-cols-2', position)}
        >
          <span className="size-2 bg-arcade-cyan" />
          <span className="size-2 bg-arcade-950" />
          <span className="size-2 bg-arcade-950" />
        </span>
      ))}
    </>
  )
}
