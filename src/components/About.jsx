import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="bg-brand-dark py-24 lg:py-32" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2
              className="font-display text-white leading-none mb-7"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
            >
              SNACKING SHOULD BE AN EVENT
            </h2>
            <p className="text-white/65 text-base lg:text-lg leading-relaxed mb-5">
              We make bold, handcrafted brittle bites loaded with premium ingredients and the kind of crunch that gets noticed across a room.
            </p>
            <p className="text-white/65 text-base lg:text-lg leading-relaxed mb-10">
              Right now, we're out at shows and events across Australia and New Zealand - turning up and making noise. The online shop is coming. Sign up to be first.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18, ease: 'easeOut' }}
            className="relative"
          >
            <div className="border-2 border-brand-yellow/25 overflow-hidden">
              <img
                src="/range.png"
                alt="The full Crunch Time range of handcrafted brittle bites"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            {/* Decorative corner */}
            <div
              className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-brand-yellow"
              aria-hidden="true"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
