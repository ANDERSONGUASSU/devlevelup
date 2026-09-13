import { FinalCTA } from "./components/CTA"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"


export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />    
      <FinalCTA />
      <Footer />
    </div>
  )
}