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
    <article className='pricingCard text-center p-8 px-8 flex-1 border rounded-md h-full drop-shadow-xl/25'>
        <h3 className='group-hover:text-white'>{title}</h3>
        <div className='grid my-2'>
                <p className='body-text-pricing' aria-label={`${price} dollars per month`}>
                    <span className='pricingCard-dollarSign' aria-hidden="true">
                        <FontAwesomeIcon icon={faDollarSign}/>
                    </span>
                    <span className='body-text-pricing priceText'>
                        {price}
                    </span>
                    <span className='body-text-standard ml-5' aria-hidden="true">
                        /month
                    </span>
                </p> 
        </div>
        <p className='body-text-standard '>
            {description} 
        </p>
        <hr className='pricingCardSeparator' aria-hidden="true"/> 
            <div className='text-left pb-5'>
                <ul className='pricingCardList'>
                    {listItems.map((item, index) => (
                        <li className='pb-2' key={index}>
                            <FontAwesomeIcon className='pr-2' icon={faCircleCheck} aria-hidden="true" /> 
                            {item} 
                        </li>
                    ))}
                </ul>
            </div>
            <div className='my-auto mt-auto'>
                <ButtonStandard mode='light' aria-label={`Rent ${title} for $${price} per month`}>{buttonText}</ButtonStandard>
            </div>
    </article>
  )
}

export default PricingCard