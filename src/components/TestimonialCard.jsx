import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid, faQuoteRight} from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons'; // Renamed to faStarOutline for clarity

const TestimonialCard = ({ item }) => {
    const generateRating = (rating) => {
        const stars = [];
        const maxRating = 5;


        for (let i = 0; i < maxRating; i++) {
            const iconToUse = i < rating ? faStarSolid : faStarOutline;
        
        stars.push(<FontAwesomeIcon key={i} icon={iconToUse} />);
        }

        return stars;
    }
  
    return (
    <figure className='testimonialsCardWrapper flex-1 h-70 rounded-md p-6 text-left bg-white text-green flex flex-col transition duration-200 transform hover:scale-105'>
        <blockquote>
            <div className='mb-5' role="img" aria-label={`Rating: ${item.rating} out of 5 stars`}>
                { generateRating(item.rating) }
            </div>
            <p className='mb-5'>{ item.comment }</p>
        </blockquote>
        
        <figcaption className='mt-auto'>
            <div className='flex items-center gap-4'> 

                    <img className="testimonialsCardAvatar" src={ item.avatarUrl } alt={`${item.name}`}/>

                <div>
                    <p className="body-text-bold">{ item.name }</p>
                    <p className="body-text-small">{ item.companyName }</p>
                </div>
            </div>
        </figcaption>
        
        <div className="testimonialsCardIcon self-end" aria-hidden="true">
            <FontAwesomeIcon icon={faQuoteRight} />
        </div>

    </figure>
  )
}

export default TestimonialCard;