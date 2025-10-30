import React from 'react'
import BookNowForm from '../components/BookNowForm'
import WhyUs from '../components/WhyUs'
import BookNow from '../components/BookNow'
import Faq from '../components/Faq'
import PageHeadline from '../components/PageHeadline'

function Booking() {
  return (
    <>
      <PageHeadline title='Booking'/>
      <BookNowForm/>
      <WhyUs/>
      <BookNow/>
      <Faq/>
    </>
  )
}

export default Booking