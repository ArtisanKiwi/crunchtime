import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'About',     href: '#about' },
  { label: 'Products',  href: '#products' },
  { label: 'Events',    href: '#events' },
  { label: 'Instagram', href: '#instagram' },
]

export default function Navbar({ onNotifyClick }) {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeAndNotify = () => { setMenuOpen(false); onNotifyClick() }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-dark/95 backdrop-blur-sm shadow-lg shadow-black/40'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20" aria-label="Main navigation">
          {/* Logo */}
          <a href="#hero" aria-label="Crunch Time - back to top">
            <img src="/logo.png" alt="Crunch Time" className="h-9 lg:h-11 w-auto" />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="font-condensed text-sm font-semibold tracking-[0.2em] uppercase text-white/75 hover:text-brand-yellow transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={onNotifyClick}
            className="hidden md:inline-flex items-center bg-brand-yellow text-brand-dark font-condensed font-bold text-sm tracking-[0.2em] uppercase px-6 py-2.5 hover:bg-white transition-colors duration-150 cursor-pointer min-h-[44px]"
          >
            Get Notified
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 -mr-2 text-white hover:text-brand-yellow transition-colors cursor-pointer"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-brand-dark border-t border-white/10"
          >
            <div className="px-4 py-6 flex flex-col gap-1">
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-condensed text-base font-semibold tracking-[0.2em] uppercase text-white/75 hover:text-brand-yellow transition-colors py-3 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={closeAndNotify}
                className="mt-4 bg-brand-yellow text-brand-dark font-condensed font-bold text-sm tracking-[0.2em] uppercase px-6 py-3.5 hover:bg-white transition-colors cursor-pointer min-h-[44px]"
              >
                Get Notified
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
