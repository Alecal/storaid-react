import React from 'react'
import ButtonStandard from './ButtonStandard'
import Headline from './Headline'

function Hero() {
  return (
<div className="heroContainer">
<section className="mx-auto max-w-7xl">
    <div className="flex">
        <div className='w-2/3 h-full my-auto pr-35'>
            <Headline size="h1" title="Welcome to StorAid" color="text-white">
              Space Simplified,<br/>Storage Perfected
            </Headline>

            <p className='text-white mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor.</p>
            <ButtonStandard>Discover More</ButtonStandard>
        </div>
        <div className="w-1/3 heroSilhouette"></div>
    </div>
</section>
</div>
  )
}

export default Hero