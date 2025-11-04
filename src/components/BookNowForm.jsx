import React from 'react'
import Headline from './Headline'
import InputField from './InputField'
import ButtonStandard from './ButtonStandard'
import { Form } from 'react-router-dom'
import FormField from './FormField'
import FormInput from './old/FormInput.old'

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
            <FormField className='grid grid-cols-2 gap-5'>
              <FormInput label='Your Name'></FormInput>
              <FormInput label='Your Email'></FormInput>
              <FormInput label='Choose Unit' className='col-span-2'></FormInput>
              <FormInput label='Storage Purpose' className='col-span-2'></FormInput>
            </FormField>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookNowForm