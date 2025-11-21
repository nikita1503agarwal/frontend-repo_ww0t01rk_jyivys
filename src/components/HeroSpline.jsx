import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function HeroSpline() {
  return (
    <section className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(80%_60%_at_50%_40%,black,transparent)]" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.25)]">
            Ghostline Protocol
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-violet-100/80">
            A dark, cyberpunk splash where a hacker awakens the network. Immerse in the ultra-fluid 3D animation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.35 }}
          className="mt-8"
        >
          <div className="mx-auto max-w-3xl">
            <div className="backdrop-blur-xl bg-black/40 border border-violet-400/20 rounded-2xl p-4 shadow-[0_0_60px_-10px_rgba(139,92,246,0.45)]">
              <div className="flex flex-col gap-4">
                <div className="text-center">
                  <span className="text-xs uppercase tracking-widest text-violet-200/70">Live Terminal</span>
                </div>
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-fuchsia-500/30 via-violet-500/30 to-indigo-500/30 blur-xl" />
                  <div className="relative rounded-xl border border-violet-500/30 bg-black/60">
                    {/* Inject hacker terminal */}
                    {/* We'll import in parent to keep bundle tidy; this component focuses on layout + spline */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
