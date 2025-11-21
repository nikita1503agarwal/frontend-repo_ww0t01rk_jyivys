import Hero from './components/HeroSpline'
import HackerTerminal from './components/HackerTerminal'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <div className="container mx-auto px-6 -mt-24 relative z-10">
        <HackerTerminal />
      </div>
      <footer className="py-8 text-center text-xs text-white/60">
        Crafted with ultra-smooth animations and a 3D cyber scene.
      </footer>
    </div>
  )
}

export default App
