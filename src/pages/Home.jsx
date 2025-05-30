import React from 'react'
import Hero from '../Components/HomePage/Hero'
import HomeAbout from '../Components/HomePage/HomeAbout'
import HomePageServices from '../Components/HomePage/HomePageServices'
import ClientTestimonial from '../Components/HomePage/ClientTestimonial'

function Home() {
  return (
    <div>
      <Hero/>
      <HomeAbout/>
      <HomePageServices/>
      <ClientTestimonial/>
    </div>
  )
}

export default Home
