import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faDollarSign, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import ButtonStandard from './ButtonStandard';

function PricingCard({
                        title = 'Small Unit',
                        price = '50',
                        description = 'Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.',
                        listItems = ['Nam nec ipsum in dolor', 'Fusce nec ligula ut arcu', 'Aliquam pulvinar arcu in', 'Duis gravida enim porta', 'Etiam eget libero non ligula'],
                        buttonText = 'Rent Now'
                    })
{
  return (
    <div className='pricingCard text-center p-8 px-8 flex-1 border rounded-md h-full'>
        <h5 className='group-hover:text-white'>{title}</h5>
        <div className='grid my-2'>
                <p className='body-text-pricing'>
                    <span className='pricingCard-dollarSign'>
                        <FontAwesomeIcon icon={faDollarSign} />
                    </span>
                    {price}
                    <span className='body-text-standard ml-5'>
                        /month
                    </span>
                </p> 
        </div>
        <p className='body-text-standard '>
            {description} 
        </p>
        <hr className='pricingCardSeparator'/> 
            <div className='text-left pb-5'>
                <ul className='pricingCardList'>
                    {listItems.map((item, index) => (
                        <li className='pb-2' key={index}>
                            <FontAwesomeIcon className='pr-2' icon={faCircleCheck} /> 
                            {item} 
                        </li>
                    ))}
                </ul>
            </div>
            <div className='my-auto mt-auto'>
                <ButtonStandard mode='light'>{buttonText}</ButtonStandard>
            </div>
    </div>
  )
}

export default PricingCard