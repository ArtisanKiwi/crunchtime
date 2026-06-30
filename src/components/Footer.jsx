import InstagramIcon from './InstagramIcon'

export default function Footer({ onNotifyClick }) {
  return (
    <footer className="bg-brand-dark border-t border-white/10 py-10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <a href="#hero" aria-label="Back to top - Crunch Time">
            <img src="/logo.png" alt="Crunch Time" className="h-8 w-auto" />
          </a>
          <p className="text-white/35 text-sm font-condensed tracking-wide text-center">
            © 2025 Crunch Time Goods. All rights reserved.
          </p>
          <a
            href="https://www.instagram.com/crunchtimegoods/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-brand-yellow transition-colors duration-150"
            aria-label="Follow Crunch Time on Instagram"
          >
            <InstagramIcon size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
