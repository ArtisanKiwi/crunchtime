import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EVENTS = [
  {
    weekday:     'Fri–Sun',
    day:         '17–19',
    month:       'Jul',
    year:        '2026',
    name:        'Good Food & Wine Show Perth',
    location:    'Perth Convention and Exhibition Centre',
    description: 'One of Australia\'s premier food and wine events. Come find us sampling the full range.',
    url:         'https://www.goodfoodandwineshow.com.au/perth',
  },
  {
    weekday:     'Fri–Sun',
    day:         '17–19',
    month:       'Jul',
    year:        '2026',
    name:        'The Little Food Market',
    location:    'Royal Exhibition Building, Carlton, Melbourne',
    description: '200+ of Australia\'s top producers under one roof. We\'ll be there with the full lineup.',
    url:         'https://thelittlefoodmarket.com/',
  },
  {
    weekday:     'Thu–Sun',
    day:         '23–26',
    month:       'Jul',
    year:        '2026',
    name:        'Auckland Food Show',
    location:    'Auckland Showgrounds, Epsom',
    description: 'New Zealand\'s biggest food event. Find us on the floor sampling the full range.',
    url:         'https://foodshow.co.nz/show/the-auckland-food-show-2026/',
  },
]

export default function Events() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="events" className="bg-brand-dark py-24 lg:py-32" ref={ref}>
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2
            className="font-display text-white leading-none"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
          >
            UPCOMING EVENTS
          </h2>
        </motion.div>

        {/* Event cards */}
        <div className="flex flex-col gap-0 divide-y divide-white/10">
          {EVENTS.map((event, i) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              className="py-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start"
            >
              {/* Date box */}
              <div className="flex-shrink-0 flex flex-col items-center justify-center bg-brand-yellow text-brand-dark w-20 h-20 sm:w-24 sm:h-24">
                {event.day ? (
                  <>
                    <span className="font-condensed text-xs font-semibold tracking-widest uppercase leading-none mb-0.5">
                      {event.weekday}
                    </span>
                    <span className="font-display text-3xl sm:text-4xl leading-none">
                      {event.day}
                    </span>
                    <span className="font-condensed text-xs font-bold tracking-widest uppercase leading-none mt-0.5">
                      {event.month}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="font-condensed text-xs font-semibold tracking-widest uppercase leading-none mb-1">
                      {event.weekday}
                    </span>
                    <span className="font-display text-xl leading-none text-center px-1">
                      {event.month}
                    </span>
                  </>
                )}
              </div>

              {/* Vertical divider */}
              <div className="hidden sm:block w-px bg-white/15 self-stretch flex-shrink-0" />

              {/* Info */}
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <div className="flex-1">
                  <h3 className="font-display text-white text-2xl sm:text-3xl leading-tight mb-1">
                    {event.name.toUpperCase()}
                  </h3>
                  <p className="font-condensed text-brand-yellow text-sm tracking-wide font-semibold mb-2">
                    {event.location}
                    {event.year && <span className="text-white/40 font-normal"> · {event.year}</span>}
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Button */}
                <div className="flex-shrink-0">
                  <a
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-transparent border border-white/25 text-white font-condensed font-bold text-sm tracking-[0.2em] uppercase px-6 py-3 hover:bg-brand-yellow hover:text-brand-dark hover:border-brand-yellow transition-colors duration-150 min-h-[44px]"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center text-white/35 text-sm mt-10 font-condensed tracking-wide"
        >
          More events dropping soon - follow us on Instagram for the latest.
        </motion.p>

      </div>
    </section>
  )
}
