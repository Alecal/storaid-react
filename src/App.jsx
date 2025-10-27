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
          faLocationDot,
          faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import Brands from './components/Brands'
import Headline from './components/Headline'
import Testimonials from './components/Testimonials'


const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    
    <section id="aboutUs" className='mx-auto max-w-7xl py-10'>
      <div className="flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/2 py-4">
          <AboutUsCard/>
      </div>
      <div className="w-full md:w-1/2 py-4">
      <Headline size="h4" title="About Us" color="text-green">Providing a Safe Space for Your Treasured Items</Headline>
      <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue. Phasellus eget elit gravida.</p>

      <div className="flex gap-6 mb-5">
        <div className="w-1/2">
          <Tile title="Vision">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.
          </Tile>
        </div>

        <div className="w-1/2">
          <Tile title="Mission">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.
          </Tile>
        </div>
      </div>

      <div className="flex gap-6 mb-10">
        <div className="w-1/2 flex align-middle m-auto">
          <ButtonStandard label="Discover More"/>
        </div>

        <div className="w-1/2">
          <InfoBadge icon={faPhone} title="More information" subTitle="+46 8 123 122 44"></InfoBadge>
        </div>
      </div>
      </div>
    </div>
    </section>

    <Brands/>

    <section id="testimonials" className='testimonialsWrapper'>
      <div className="testimonialsContainer">
        <div className="testimonialsContent text-center mx-auto max-w-7xl py-20">
          <Headline title="Testimonials" size="h3" color="text-white">See What Our Client Have to Say</Headline>
          <p className='mb-5 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
            <Testimonials></Testimonials>
        </div>
      </div>
    </section>
    </>
  )
}

export default App