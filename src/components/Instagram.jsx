import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import InstagramIcon from './InstagramIcon'

const GRID = [
  { src: '/hero-2.jpg',          alt: 'Crunch Time at an event' },
  { src: '/product-chocolate.png', alt: 'Chocolate Peanut Brittle Bites' },
  { src: '/product-toffee.png',  alt: 'Peanut Toffee Brittle Bites' },
  { src: '/caramel.jpg',         alt: 'Caramel brittle close-up' },
  { src: '/product-caramel.png', alt: 'Caramel Pop Brittle Bites' },
  { src: '/range.png',           alt: 'The full Crunch Time range' },
]

const IG_URL = 'https://www.instagram.com/crunchtimegoods/'

export default function InstagramSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="instagram" className="bg-brand-yellow py-24 lg:py-32" ref={ref}>
      <div className="max-w-[768px] mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="font-condensed text-brand-dark/55 text-xs tracking-[0.35em] uppercase font-semibold mb-4">
            Follow the Journey
          </p>
          <h2
            className="font-display text-brand-dark leading-none"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
          >
            @CRUNCHTIMEGOODS
          </h2>
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-10">
          {GRID.map((item, i) => (
            <motion.a
              key={i}
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="aspect-square overflow-hidden bg-brand-dark/15 block group"
              aria-label={`${item.alt} - view on Instagram`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.48 }}
        >
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-dark text-white font-condensed font-bold text-sm tracking-[0.2em] uppercase px-10 py-4 hover:bg-white hover:text-brand-dark transition-colors duration-150 min-h-[52px]"
          >
            <InstagramIcon size={18} />
            Follow on Instagram
          </a>
        </motion.div>

      </div>
    </section>
  )
}
