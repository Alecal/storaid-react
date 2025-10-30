import React from 'react'
import Headline from './Headline'
import ButtonStandard from './ButtonStandard'

function BookNow() {
  return (
    <section id="bookNow" className='sectionGreenLight'>
        <div className='text-center mx-auto max-w-5xl py-20'>
            <Headline color="text-white" size="h3">Looking for Secure and Flexible Storage? Find Your Perfect Fit With Us.</Headline>
            <p className='body-standard-text text-white pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
            <ButtonStandard mode="light" to="/booking">Book Now</ButtonStandard>
        </div>
    </section>
  )
}

export default BookNow