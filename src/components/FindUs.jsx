import React from 'react'
import Headline from './Headline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPhone,
          faSackDollar,
          faBroom,
          faClock,
          faLocationDot,
          faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import InfoBadge from './InfoBadge';
import SocialsBadge from './SocialsBadge';

function FindUs() {
  return (
      <section id="findUs" className='sectionGreenLight'>
        <div className='mx-auto max-w-5xl'>
          <div className='flex w-full'>
            <div className='w-1/2 relative'>
              <div className="w-full h-[88%] absolute bottom-0 silhouetteWoman"></div>
            </div>
            <div className='w-1/2 sectionGreenLighter p-5'>
              <Headline size="h4" color="text-green">Find Us On:</Headline>
              <p className='text-green'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
                <div className='grid gap-5 my-5'>
                  <InfoBadge icon={faPhone} title="Call Center" subTitle='+46 8 123 122 44' sm='true'/>
                  <InfoBadge icon={faEnvelope} title="Email Adress" subTitle='contact@domain.com' sm='true'/>
                  <InfoBadge icon={faLocationDot} title="Location" subTitle='Klarabergsviadukten 90, Stockholm' sm='true'/>
                </div>
              
                    <div className='flex items-center w-full max-w-2xl mx-auto my-6'>
                      
                      <div className='shrink-0'>
                        <p className='text-lg font-semibold whitespace-nowrap'>
                          Our Social Media
                        </p>
                      </div>
                      <div className='grow mx-4 border-t border-black border-opacity-30'/>
                      <div className='shrink-0'>
                          <SocialsBadge names={['facebook', 'twitter', 'instagram', 'youtube']} />
                      </div>
                    </div>
              
            </div>
          </div>

        </div>
    </section>
  )
}

export default FindUs