import React from 'react'
import WhyUs from '../components/WhyUs'
import BookNow from '../components/BookNow'
import Faq from '../components/Faq'
import PageHeadline from '../components/PageHeadline'
import BookingForm from '../components/BookingForm'

function Booking() {
  return (
    <>
      <PageHeadline title='Booking'/>
      <BookingForm/>
      <WhyUs bg='sectionYellowLight'/>
      <BookNow/>
      <Faq/>
    </>
  )
}

export default Booking