import React from 'react'
import Banner from '../Components/home/Banner'
import Hero from '../Components/home/Hero'
import Features from '../Components/home/Features'
import CallToAction from '../Components/home/CallToAction'
import Footer from '../Components/home/Footer'

const home = () => {
  return (
    <div>
      <Banner />
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default home