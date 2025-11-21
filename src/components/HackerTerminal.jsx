import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function HackerTerminal() {
  const script = useMemo(
    () => [
      'connect --host darknet.core --port 31337',
      'auth --key 0xA9F3C... --handshake ECDH',
      'tunnel open ✓  latency: 12ms  cipher: chacha20',
      'git clone ssh://ghost@repo/blackice && cd blackice',
      'npm run build -- --optimize --profile',
      'deploy --target edge-nodes --region global',
      'watch logs --filter "intrusion-prevention:allow"',
      'echo ACCESS GRANTED',
    ],
    []
  )

  const [display, setDisplay] = useState('')
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [stack, setStack] = useState([])
  const [blink, setBlink] = useState(true)
  const timerRef = useRef(null)

  useEffect(() => {
    const blinkTimer = setInterval(() => setBlink((b) => !b), 500)
    return () => clearInterval(blinkTimer)
  }, [])

  useEffect(() => {
    if (lineIdx >= script.length) {
      const id = setTimeout(() => {
        setStack([])
        setLineIdx(0)
        setCharIdx(0)
        setDisplay('')
      }, 1400)
      return () => clearTimeout(id)
    }

    timerRef.current = setTimeout(() => {
      const line = script[lineIdx]
      if (charIdx < line.length) {
        setDisplay((prev) => prev + line[charIdx])
        setCharIdx((c) => c + 1)
      } else {
        setStack((s) => [...s, line])
        setDisplay('')
        setCharIdx(0)
        setLineIdx((i) => i + 1)
      }
    }, Math.random() * 40 + 20)

    return () => clearTimeout(timerRef.current)
  }, [charIdx, lineIdx, script])

  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="rounded-xl border border-emerald-400/30 bg-black/60 backdrop-blur-md shadow-[0_0_60px_-10px_rgba(16,185,129,0.35)] overflow-hidden"
      >
        <div className="px-4 py-2 flex items-center gap-2 border-b border-emerald-400/20 bg-gradient-to-r from-emerald-950/60 to-transparent">
          <span className="w-2 h-2 rounded-full bg-emerald-400/80 animate-pulse" />
          <span className="text-emerald-300/90 text-xs font-mono tracking-widest uppercase">Session: ghost@prime-node</span>
        </div>
        <div className="p-4 font-mono text-sm leading-relaxed text-emerald-200/90">
          <div className="space-y-1">
            <AnimatePresence initial={false}>
              {stack.slice(-8).map((l, i) => (
                <motion.div
                  key={`${l}-${i}-${stack.length}`}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="whitespace-pre-wrap"
                >
                  <span className="text-emerald-400">$</span> {l}
                </motion.div>
              ))}
            </AnimatePresence>
            <div className="whitespace-pre-wrap">
              <span className="text-emerald-400">$</span> {display}
              <span
                className={`inline-block w-2 h-4 align-baseline ml-1 ${blink ? 'bg-emerald-400' : 'bg-transparent'}`}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
