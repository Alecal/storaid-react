import React from 'react'
import Headline from './Headline'
import AccordionItem from './AccordionItem'
import Accordion from './Accordion'

function Faq() {
  return (
    <div className='flex mx-auto max-w-7xl py-25 gap-15'>
      <div className='w-1/2'>
        <Headline title='FAQs' size='h3' color='text-green'>
          Frequently Ask Questions
        </Headline>
        <p className='text-green'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      </div>
      <div className='w-1/2'>
      <Accordion>
        <AccordionItem title="Can I access my stored iterns anytime?">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</AccordionItem>
        <AccordionItem title="Do you offer climate-controlled storage units?">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</AccordionItem>
        <AccordionItem title="How long can I rent a storage unit?">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</AccordionItem>
        <AccordionItem title="Can I change the size of my storage unit if I need more space?">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</AccordionItem>
        <AccordionItem title="How do I pay for my storage unit?">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</AccordionItem>
      </Accordion>
      </div>
    </div>
  )
}

export default Faq