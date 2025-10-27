import React from 'react'

function AboutUsCard() {
  return (
    <>
    <div className="aboutUsCardWrapper">
        <div className='aboutUsCard flex items-center justify-center text-white'>[ CONTENT ]</div>
        <div className='aboutUsCardBadge'>
            <div className='badgeItem'><h3 className='text-primary-bold'>12+</h3><p className='text-tiny text-white'>Years of Experience</p></div>
            <div className='badgeItem'><h3 className='text-primary-bold'>150k+</h3><p className='text-tiny text-white'>Satisfied Clients</p></div>
            <div className='badgeItem'><h3 className='text-primary-bold'>35+</h3><p className='text-tiny text-white'>Warehouse</p></div>
        </div>
    </div>
    </>
  )
}

export default AboutUsCard