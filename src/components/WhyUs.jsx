import React from 'react'
import Headline from './Headline'
import InfoBadge from './InfoBadge'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLock,
          faSackDollar,
          faBroom,
          faClock,
} from '@fortawesome/free-solid-svg-icons';

function WhyUs({ bg = '' }) {
  return (
    <section id="whyUs" className={`${bg && bg} py-20 `}>
        <div className='flex gap-8 mx-auto max-w-7xl'>
            <div className='w-1/2'> 
                <Headline title="Why Choose Us" contrast={true} size="h2" color="text-green">Choose Us for Exceptional Storage Solutions</Headline>
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
                    <div className='imageCard h-100 flex items-center justify-center text-white'>
                        <img src='./src/assets/images/storage-units.jpg' alt=''/>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default WhyUs