import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero({ onNotifyClick }) {
  return (
    <section id="hero" className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/hero.png"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.4) 50%, #0F0F0F 100%)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-[1024px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-condensed text-brand-yellow text-sm sm:text-base tracking-[0.35em] uppercase font-semibold mb-5"
        >
          Handcrafted Brittle Bites · Australian Made
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="font-display text-white leading-none"
          style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}
        >
          THE CRUNCH
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: 'easeOut' }}
          className="font-display text-brand-yellow leading-none mb-8"
          style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}
        >
          IS COMING
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="text-white/70 text-base sm:text-lg max-w-md mx-auto mb-10 leading-relaxed"
        >
          Premium ingredients. Serious crunch. Zero apologies.
          Find us at events now - launching online soon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onNotifyClick}
            className="bg-brand-yellow text-brand-dark font-condensed font-bold text-sm tracking-[0.2em] uppercase px-10 py-4 hover:bg-white transition-colors duration-150 cursor-pointer min-h-[52px] w-full sm:w-auto"
          >
            Get Notified
          </button>
          <a
            href="#products"
            className="font-condensed text-sm font-semibold tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-150 border border-white/25 px-10 py-4 min-h-[52px] flex items-center justify-center w-full sm:w-auto hover:border-white/60"
          >
            See the Range
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/35 hover:text-white/70 transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.a>
    </section>
  )
}
