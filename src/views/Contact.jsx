import React from 'react'
import ContactForm from '../components/ContactForm'
import FindUs from '../components/FindUs'
import Faq from '../components/Faq'
import PageHeadline from '../components/PageHeadline'

function Contact() {
  return (
    <>
      <PageHeadline title='Contact Us'/>
      <ContactForm/>
      <FindUs/>
      <Faq/>
    </>
  )
}

export default Contact