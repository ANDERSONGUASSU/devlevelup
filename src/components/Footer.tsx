interface FooterProps {
  className?: string
}

export function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={className}>
      <p className="font-retro text-arcade-muted">{"Footer"}</p>
    </footer>
  )
}