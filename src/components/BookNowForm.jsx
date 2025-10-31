import React from 'react'
import Headline from './Headline'
import InputField from './InputField'
import ButtonStandard from './ButtonStandard'

function BookNowForm() {
  return (
    <section id="bookNowForm">
      <div className='mx-auto max-w-7xl py-25'>
        <div className='flex w-full gap-10'>
          <div className='w-1/2'>
            <Headline title='Booking Unit' color='text-green' size='h4'>Book Your Storage Unit Now & Simplify Your Life!</Headline>
          </div>
          <div className='w-1/2 pt-7'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
          </div>
        </div>
        <div className='flex mx-auto gap-10'>
          <div className='w-1/2'>
            <div className='imageCard'></div>
          </div>
          <div className='w-1/2'>
            <form className='sectionYellowLight h-full rounded-md p-5'>


              <div className='flex gap-5 mb-5'>
                <div className='w-1/2'>
                <InputField label='Your Name' placeholder='Your Name' placeholderStar='false' type='name' required='true' errorMessage='Please enter a valid name.'></InputField>
                </div>
                <div className='w-1/2'>
                <InputField label='Email' placeholder='Email' placeholderStar='false' type='name' required='true' errorMessage='Please enter a valid email.'></InputField>
                </div>
              </div>

              <div className='mb-5'>
                <InputField label='Choose Unit' placeholderStar='false' placeholder='Choose Unit' type='unit' required='true' errorMessage='Please choose a unit.' error='true'></InputField>
              </div>

              <div className='mb-5'>
                <InputField label='Storage Purpose' placeholder='Describe your storage purpose so that we can match your request' placeholderStar='false' type='comment' height='large'></InputField>
              </div>
              <ButtonStandard type="submit" width='large'>Book Unit</ButtonStandard>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookNowForm