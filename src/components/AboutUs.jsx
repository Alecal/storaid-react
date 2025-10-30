import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPhone } from '@fortawesome/free-solid-svg-icons';
import AboutUsCard from '../components/AboutUsCard';
import Tile from '../components/Tile';
import Headline from '../components/Headline';
import ButtonStandard from '../components/ButtonStandard';
import InfoBadge from '../components/InfoBadge';


function AboutUs() {
  return (
    <section id="aboutUs" className='mx-auto max-w-7xl py-10'>
      <div className="flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/2 py-4">
          <AboutUsCard/>
      </div>
      <div className="w-full md:w-1/2 py-4">
      <Headline size="h4" title="About Us" color="text-green">Providing a Safe Space for Your Treasured Items</Headline>
      <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue. Phasellus eget elit gravida.</p>

      <div className="flex gap-6 mb-5 ">
        <div className="w-1/2 transition duration-200 transform hover:scale-105">
          <Tile title="Vision">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.
          </Tile>
        </div>

        <div className="w-1/2 transition duration-200 transform hover:scale-105">
          <Tile title="Mission">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.
          </Tile>
        </div>
      </div>

      <div className="flex gap-6 mb-10">
        <div className="w-1/2 flex align-middle m-auto">
          <ButtonStandard>Discover More</ButtonStandard>
        </div>

        <div className="w-1/2">
          <InfoBadge icon={faPhone} title="More information" subTitle="+46 8 123 122 44"></InfoBadge>
        </div>
      </div>
      </div>
    </div>
    </section>
  )
}

export default AboutUs