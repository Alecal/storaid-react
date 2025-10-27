import React from 'react'

import brandLogo1 from '../assets/brands/brand_logo_01.svg';
import brandLogo2 from '../assets/brands/brand_logo_02.svg';
import brandLogo3 from '../assets/brands/brand_logo_03.svg';
import brandLogo4 from '../assets/brands/brand_logo_04.svg';
import brandLogo5 from '../assets/brands/brand_logo_05.svg';

const logos = [
  { id: 1, name: 'Brand 01 Logo', path: brandLogo1 },
  { id: 2, name: 'Brand 02 Logo', path: brandLogo2 },
  { id: 3, name: 'Brand 03 Logo', path: brandLogo3 },
  { id: 4, name: 'Brand 04 Logo', path: brandLogo4 },
  { id: 5, name: 'Brand 05 Logo', path: brandLogo5 },
 
];

function Brands() {
  return (
    <section id='brands'>
    <div className='brandsContainer py-17'> 
      <div className="flex justify-between items-center max-w-7xl mx-auto h-full">
        {logos.map(logo => (
          <div key={logo.id} className='brandItem'>
            <img 
              src={logo.path} 
              alt={logo.name}
            />
          </div>
        ))}
      </div>
    </div>
    </section>
  )
}

export default Brands