import React from 'react'
import Headline from './Headline'
import PricingCard from './PricingCard'

function Pricing() {
  return (
    <section id="pricing" className='flex gap-8 mx-auto max-w-7xl py-25'>
        <div className='w-full'>
            <div className='w-150'>
                <Headline size="h2" contrast={true} title="Pricing Plan" color="text-green">Find the Perfect Plan for Your Storage Needs</Headline>
            </div>

            <div className='flex justify-between gap-6'>
                <PricingCard title='Small Unit' price='50'/>
                <PricingCard title='Medium Unit' price='100'/>
                <PricingCard title='Large Unit' price='150' listItems={['Very good item', 'Much bigger storage', 'Very recommended','Both by experts and not','You have to get this']}/>
                <PricingCard title='Executive Unit' price='200'/>
            </div>
        </div>
    </section>
  )
}

export default Pricing