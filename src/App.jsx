import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import Products from './components/Products'
import Events from './components/Events'
import Instagram from './components/Instagram'
import Footer from './components/Footer'
import NotifyModal from './components/NotifyModal'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Navbar onNotifyClick={() => setModalOpen(true)} />
      <main>
        <Hero onNotifyClick={() => setModalOpen(true)} />
        <Ticker />
        <About />
        <Products />
        <Events />
        <Instagram />
      </main>
      <Footer />
      <NotifyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
