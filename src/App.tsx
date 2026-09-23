import { Comparison } from './sections/Comparison'
import { CTA } from './sections/CTA'
import { Footer } from './sections/Footer'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { Impact } from './sections/Impact'
import { LevelUp } from './sections/LevelUp'
import { PowerUp } from './sections/PowerUp'
import { Squad } from './sections/Squad'
import { Voices } from './sections/Voices'
import { Reveal } from './components/ui/Reveal'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>
        <Comparison />
      </Reveal>
      <Reveal>
        <LevelUp />
      </Reveal>
      <Reveal>
        <CTA />
      </Reveal>
      <Reveal>
        <Squad />
      </Reveal>
      <Reveal>
        <Impact />
      </Reveal>
      <Reveal>
        <Voices />
      </Reveal>
      <Reveal>
        <PowerUp />
      </Reveal>
      <Footer />
    </div>
  )
}
