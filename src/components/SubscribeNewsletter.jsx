import React from 'react'
import Headline from './Headline'
import InputField from './InputField'

function SubscribeNewsletter() {
  return (
    <section id="newsletter" className='sectionYellowLight'>
        <div className='mx-auto max-w-7xl py-10 flex gap-8'>

            <div className='w-1/2'>
                <Headline color='text-green' size='h4'>Subscribe to Our Newsletter</Headline>
                <p className='body-text-standard'>Subscribe to our newsletter to receive early discount offers, updates and info</p>
            </div>

            <div className='w-1/2'>
                <InputField/>
            <form>
            </form>
            </div>


        </div>
    </section>
  )
}

export default SubscribeNewsletter