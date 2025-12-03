'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TierList from '@/components/TierList'
import Rankings from '@/components/Rankings'
import News from '@/components/News'
import Tournaments from '@/components/Tournaments'
import Community from '@/components/Characters'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />
      <Hero />
      <TierList />
      <Rankings />
      <News />
      <Tournaments />
      <Community />
      <Footer />
    </main>
  )
}
