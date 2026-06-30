import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PRODUCTS = [
  {
    name:        'Chocolate Peanut Brittle Bites',
    description: 'Roasted peanuts wrapped in a rich caramelised toffee brittle coating and generously covered in creamy milk chocolate.',
    image:       '/product-chocolate.png',
    rotation:    '-2deg',
    delay:       0,
  },
  {
    name:        'Peanut Toffee Brittle Bites',
    description: 'A golden toffee brittle block with rich caramelised sweetness and a satisfying crunch in every bite.',
    image:       '/product-toffee.png',
    rotation:    '0deg',
    delay:       0.14,
  },
  {
    name:        'Caramel Pop Brittle Bites',
    description: 'Freshly popped popcorn and peanuts coated in a golden toffee brittle that caramelises into a light, crisp crunch.',
    image:       '/product-caramel.png',
    rotation:    '2deg',
    delay:       0.28,
  },
]

export default function Products() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="products" className="bg-brand-cream py-24 lg:py-32" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2
            className="font-display text-brand-dark leading-none"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
          >
            THE LINEUP
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch">
          {PRODUCTS.map((p) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: p.delay, ease: 'easeOut' }}
              style={{ transform: `rotate(${p.rotation})` }}
              className="bg-white border-2 border-brand-orange p-6 flex flex-col items-center text-center cursor-default h-full"
            >
              {/* Product image */}
              <div className="flex items-center justify-center py-6 min-h-[220px]">
                <img
                  src={p.image}
                  alt={p.name}
                  className="max-h-64 w-auto object-contain"
                  loading="lazy"
                />
              </div>

              {/* Name */}
              <h3 className="font-display text-brand-dark text-2xl leading-tight mb-3">
                {p.name.toUpperCase()}
              </h3>

              {/* Description */}
              <p className="text-brand-dark/65 text-sm leading-relaxed">
                {p.description}
              </p>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}
