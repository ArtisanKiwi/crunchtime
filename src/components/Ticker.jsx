const ITEMS = [
  'CRUNCH TIME',
  'AUSTRALIAN MADE',
  'COMING SOON ONLINE',
  'FIND US AT EVENTS',
  'PREMIUM BRITTLE BITES',
  'THE CRUNCH IS COMING',
]

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="bg-brand-yellow overflow-hidden py-3.5" aria-hidden="true">
      <div
        className="ticker-track flex whitespace-nowrap"
        style={{ animation: 'ticker 22s linear infinite', width: 'max-content' }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="font-display text-brand-dark text-xl lg:text-2xl tracking-wider mx-8 inline-flex items-center gap-6">
            {item}
            <span className="text-brand-orange text-base">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
