import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle } from 'lucide-react'

export default function NotifyModal({ isOpen, onClose }) {
  const [name,      setName]      = useState('')
  const [email,     setEmail]     = useState('')
  const [loading,   setLoading]   = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const firstFieldRef = useRef(null)

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    if (isOpen) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  // Focus first field on open
  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => firstFieldRef.current?.focus(), 120)
      return () => clearTimeout(t)
    }
  }, [isOpen])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1200)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setSubmitted(false)
      setName('')
      setEmail('')
    }, 280)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Dialog */}
          <div
            className="fixed inset-0 z-[101] flex items-center justify-center px-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1,    y: 0  }}
              exit={{    opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="bg-brand-dark border-2 border-brand-yellow w-full max-w-md p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors cursor-pointer p-1"
                aria-label="Close"
              >
                <X size={22} />
              </button>

              {!submitted ? (
                <>
                  <h2 id="modal-title" className="font-display text-brand-yellow" style={{ fontSize: '2.4rem' }}>
                    BE FIRST IN LINE
                  </h2>
                  <p className="text-white/60 text-sm mt-2 mb-7 leading-relaxed">
                    Sign up and we'll let you know the moment we launch online.
                  </p>

                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                    <div>
                      <label htmlFor="modal-name" className="block font-condensed text-xs font-semibold tracking-[0.25em] uppercase text-brand-yellow mb-2">
                        Name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        ref={firstFieldRef}
                        id="modal-name"
                        type="text"
                        required
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full bg-white/5 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-brand-yellow transition-colors min-h-[48px]"
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-email" className="block font-condensed text-xs font-semibold tracking-[0.25em] uppercase text-brand-yellow mb-2">
                        Email <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="modal-email"
                        type="email"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full bg-white/5 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-brand-yellow transition-colors min-h-[48px]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-1 bg-brand-yellow text-brand-dark font-condensed font-bold text-sm tracking-[0.2em] uppercase px-6 py-4 hover:bg-white transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer min-h-[52px]"
                    >
                      {loading ? 'Signing you up…' : 'Notify Me'}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-4"
                >
                  <CheckCircle className="text-brand-yellow mx-auto mb-4" size={52} />
                  <h2 className="font-display text-brand-yellow mb-3" style={{ fontSize: '2.4rem' }}>
                    YOU'RE IN!
                  </h2>
                  <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto">
                    We'll hit you up the moment we launch online. Stay crunchy.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-8 font-condensed text-xs tracking-[0.25em] uppercase text-white/40 hover:text-white transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
