'use client'
//import { Footer } from '@/components/Footer'
import ReactGA from "react-ga4";
import { useEffect } from "react";
import { SuperHero } from '@/components/Hero'
import { Incubator } from '@/components/Incubator'

export default function Home() {

  useEffect(() => {
    ReactGA.initialize("G-0N2MY8TL6B");
  }, [])

  return (
    <div className="">
      <SuperHero />
      <main>
        <Incubator />
      </main>
      {/* <Footer /> */}
    </div>
  )
}
