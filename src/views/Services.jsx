import React from 'react'
import OurServices from '../components/OurServices'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
import BookNow from '../components/BookNow'
import PageHeadline from '../components/PageHeadline'

function Services() {
  return (
    <>
      <PageHeadline title='Services'/>
      <OurServices/>
      <Testimonials/>
      <Faq/>
      <BookNow/>
    </>
  )
}

export default Services