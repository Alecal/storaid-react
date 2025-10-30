import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Brands from '../components/Brands'
import OurServices from '../components/OurServices'
import WhyUs from '../components/WhyUs'
import Pricing from '../components/Pricing'
import BookNow from '../components/BookNow'
import BlogSection from '../components/BlogSection'
import SubscribeNewsletter from '../components/SubscribeNewsletter'
import Testimonials from '../components/Testimonials'

function Home() {
  return (
    <>
      <Hero/>
      <AboutUs/>
      <Brands/>
      <OurServices/>
      <Testimonials/>
      <WhyUs bg="sectionYellowLight"/>
      <Pricing/>
      <BookNow/>
      <BlogSection/>
    </>
  )
}

export default Home