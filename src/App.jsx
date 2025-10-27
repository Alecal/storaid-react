import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUsCard from './components/AboutUsCard'
import Tile from './components/Tile'
import ButtonStandard from './components/ButtonStandard'
import InfoBadge from './components/InfoBadge'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPhone,
          faLock,
          faSackDollar,
          faBroom,
          faClock,
          faQuoteRight,
          faLocationDot,
          faEnvelope,
} from '@fortawesome/free-solid-svg-icons';


const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <section className='mx-auto max-w-7xl py-10'>
      <div class="flex flex-col md:flex-row gap-6">
      <div class="w-full md:w-1/2 py-4">
          <AboutUsCard/>
      </div>
      <div class="w-full md:w-1/2 py-4">
        <p className="text-primary-bold">About Us</p>
        <h4 className="text-green leading-tight mb-5">Providing a Safe Space for Your Treasured Items</h4>
        <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue. Phasellus eget elit gravida.</p>

      <div class="flex gap-6 mb-10">
        <div class="w-1/2">
          <Tile title="Vision">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.
          </Tile>
        </div>

        <div class="w-1/2">
          <Tile title="Mission">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.
          </Tile>
        </div>
      </div>
      <div class="flex">
        <div class="w-1/2">
          <ButtonStandard label="Discover More"/>
        </div>

        <div class="w-1/2">
          <InfoBadge icon={faPhone} title="More information" subTitle="+46 8 123 122 44">Tjena</InfoBadge>
        </div>
      </div>
      
      

      </div>
    </div>
    </section>
    </>
  )
}

export default App