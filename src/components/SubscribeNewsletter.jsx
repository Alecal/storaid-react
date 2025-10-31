import React from 'react'
import Headline from './Headline'
import InputField from './InputField'
import ButtonStandard from './ButtonStandard'

function SubscribeNewsletter() {
  return (
    <section id="newsletter" className='sectionYellowLight'>
        <div className='mx-auto max-w-7xl py-10 flex gap-8'>

            <div className='w-1/2'>
                <Headline color='text-green' size='h4'>Subscribe to Our Newsletter</Headline>
                <p className='body-text-standard'>Subscribe to our newsletter to receive early discount offers, updates and info</p>
            </div>

            <div className='w-1/2'>
                <form className='flex gap-5' onSubmit={ (e) => e.preventDefault() }>
                  <InputField placeholder='Enter your email' className='flex-1' id='email' required='true'/>
                  <ButtonStandard type='submit'>Submit</ButtonStandard>
                </form>
            </div>


        </div>
    </section>
  )
}

export default SubscribeNewsletter