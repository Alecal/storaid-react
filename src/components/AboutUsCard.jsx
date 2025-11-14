import React from 'react'

function AboutUsCard() {
  return (
    <div className="aboutUsCardWrapper">
        <div className='imageCard h-100 flex items-center justify-center text-white'><img src='./src/assets/images/smiling-people.jpg' alt=''/></div>
        <div className='aboutUsCardBadge'>
            <div className='badgeItem'><p className='aboutUsCat text-primary-bold'>12+</p><p className='text-tiny text-white'>Years of Experience</p></div>
            <div className='badgeItem'><p className='aboutUsCat text-primary-bold'>150k+</p><p className='text-tiny text-white'>Satisfied Clients</p></div>
            <div className='badgeItem'><p className='aboutUsCat text-primary-bold'>35+</p><p className='text-tiny text-white'>Warehouse</p></div>
        </div>
    </div>
  )
}

export default AboutUsCard