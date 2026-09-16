import { Button } from '../components/ui/Button'

interface HeroProps {
  className?: string
}

export function Hero({ className = '' }: HeroProps) {
  return (
    <div className={className}>
      <p className="font-retro text-arcade-muted ">{'Hero'}</p>
      <Button />
    </div>
  )
}
