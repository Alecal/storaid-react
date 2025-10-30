import React from 'react'
import AboutUs from '../components/AboutUs'
import Brands from '../components/Brands'
import Testimonials from '../components/Testimonials'
import WhyUs from '../components/WhyUs'
import PageHeadline from '../components/PageHeadline'

function About() {
  return (
    <>
      <PageHeadline title='About Us'/>
      <AboutUs/>
      <Brands/>
      <Testimonials/>
      <WhyUs bg="bg-white"/>
    </>
  )
}

export default About