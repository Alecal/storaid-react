import React from 'react'
import Headline from './Headline'
import Tile from './Tile'

function OurServices() {
  return (
    <section id="our-services" className='flex-row gap-8 mx-auto max-w-7xl py-25'>
      <div className="flex gap-6 mb-5 ">
        <div className="w-1/2">
          <Headline size="h3" title="Our Services" color="text-green">Specialized Storage for Every Special Item</Headline>
        </div>

        <div className="w-1/2">
          <p className='pt-9 body-standard-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
        </div>
      </div>

      <div className="flex gap-5 mb-5">
        <div className="grid gap-5 w-3/10">
          <Tile title="Diverse Unit Sizes">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Tile>
          <Tile title="Moving Assistance">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Tile>
        </div>

        <div className="w-4/10">
          <div className='imageCard'>
            
          </div>
        </div>

        <div className="grid gap-5 w-3/10">
          <Tile title="Vehicle Storage">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Tile>
          <Tile title="Top-Notch Security">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Tile>
        </div>
      </div>



    </section>
  )
}

export default OurServices