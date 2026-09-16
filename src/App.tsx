import { CTA } from './sections/CTA'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <CTA />
      <Footer />
    </div>
  )
}
