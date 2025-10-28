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
import PricingCard from './components/PricingCard'


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

    <section id="whyUs" className='whyUsWrapper py-20'>
        <div className='flex gap-8 mx-auto max-w-7xl'>
            <div className='w-1/2'>
                <Headline title="Why Choose Us" size="h3" color="text-green">Choose Us for Exceptional Storage Solutions</Headline>
                <div className='grid gap-4'>

                    <InfoBadge icon={faLock} title="Security and Safety">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </InfoBadge>

                    <InfoBadge icon={faSackDollar} title="Flexible and Affordable">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </InfoBadge>

                    <InfoBadge icon={faBroom} title="Clean and Well-Maintained Facilities">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </InfoBadge>
                    
                    <InfoBadge icon={faClock} title="24/7 and Convenient Access">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </InfoBadge>
                </div>
            </div>
            <div className='w-1/2'>
                <p className='body-text-standard mb-10'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.
                </p>
                    <div className='imageCard flex items-center justify-center text-white'></div>
            </div>
        </div>
    </section>
    <section id="pricing" className='flex gap-8 mx-auto max-w-7xl py-25'>
        <div className='w-full'>
            <div className='w-150'>
                <Headline size="h3" title="Pricing Plan" color="text-green">Find the Perfect Plan for Your Storage Needs</Headline>
            </div>

            <div className='flex justify-between gap-6'>
                <PricingCard title='Small Unit' price='50'/>
                <PricingCard title='Medium Unit' price='100'/>
                <PricingCard title='Large Unit' price='150' listItems={['Very good item', 'Much bigger storage', 'Very recommended','Both by experts and not','You have to get this']}/>
                <PricingCard title='Executive Unit' price='200'/>
            </div>
        </div>
    </section>
    <section id="bookNow" className='sectionGreenLight'>
        <div className='text-center mx-auto max-w-5xl py-20'>
            <Headline color="text-white" size="h3">Looking for Secure and Flexible Storage? Find Your Perfect Fit With Us.</Headline>
            <p className='body-standard-text text-white pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
            <ButtonStandard mode="light">Book Now</ButtonStandard>
        </div>
    </section>
    </>
  )
}

export default App