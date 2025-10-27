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
    <div className='testimonialsCardWrapper flex-1 h-70 rounded-md p-6 text-left bg-white text-green flex flex-col'>

        <div className='mb-5'>{ generateRating(item.rating) }</div>
        <p className='mb-5'>{ item.comment }</p>
        
        <div className='mt-auto'>
            <div className='flex items-center gap-4'> 

                    <img className="testimonialsCardAvatar" src={ item.avatarUrl }/>

                <div className="">
                    <p className="body-text-bold">{ item.name }</p>
                    <p className="body-text-small">{ item.companyName }</p>
                </div>
            </div>
        </div>
        
        <div className="testimonialsCardIcon self-end">
            <FontAwesomeIcon icon={faQuoteRight} />
        </div>

    </div>
  )
}

export default TestimonialCard;