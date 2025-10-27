import React from 'react'
import ButtonStandard from './ButtonStandard'

function Hero() {
  return (
<div className="heroContainer">
<section className="mx-auto max-w-7xl">
    <div className="flex">
        <div className='w-2/3 h-full my-auto pr-35'>
            <p className="text-primary-bold">Welcome to StorAid</p>
            <h1 className="text-white leading-tight mb-5">Space Simplified,<br/>Storage Perfected</h1>
            <p className='text-white mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor.</p>
            <ButtonStandard label="Discover More"/>
        </div>
        <div className="w-1/3 heroSilhouette"></div>
    </div>
</section>
</div>
  )
}

export default Hero