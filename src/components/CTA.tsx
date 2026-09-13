interface FinalCTAProps {
  className?: string
}

export function FinalCTA({ className = "" }: FinalCTAProps) {
  return (
    <div className={className}>
      <p className="font-retro text-arcade-muted">{"CTA"}</p>
    </div>
  )
}