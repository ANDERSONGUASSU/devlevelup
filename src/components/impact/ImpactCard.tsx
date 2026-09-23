import { CountUp } from '../ui/CountUp'
import { cn } from '../../lib/utils'

interface ImpactCardProps {
  value: string
  title: string
  description: string
  className?: string
}

export function ImpactCard({
  value,
  title,
  description,
  className,
}: ImpactCardProps) {
  return (
    <article
      className={cn(
        'flex flex-col gap-3 rounded-2xl border border-arcade-nav-border bg-arcade-impact-card px-7 py-8 transition-[transform,border-color,box-shadow] duration-200 ease-in-out hover:-translate-y-0.5 hover:border-arcade-cyan/60 hover:shadow-arcade-card-glow motion-reduce:transform-none',
        className,
      )}
    >
      <p className="font-pixel text-[48px] leading-none text-arcade-cyan text-shadow-arcade-impact">
        <CountUp value={value} />
      </p>
      <div className="flex flex-col gap-2">
        <h3 className="font-sans text-xl font-bold leading-6 text-arcade-white">
          {title}
        </h3>
        <p className="font-roboto-flex text-sm font-medium leading-5 text-arcade-footer-text">
          {description}
        </p>
      </div>
    </article>
  )
}
