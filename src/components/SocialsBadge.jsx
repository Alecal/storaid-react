import React from 'react';

// Import all necessary icon assets
import facebookIcon from '../assets/icons/facebook.svg';
import twitterIcon from '../assets/icons/x-twitter.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import youtubeIcon from '../assets/icons/youtube.svg';

const icons = {
  facebook: facebookIcon,
  twitter: twitterIcon,
  instagram: instagramIcon,
  youtube: youtubeIcon,
};

function SocialsBadge({ names }) {

  if (!Array.isArray(names) || names.length === 0) {
    return null;
  }

  return (
    <div className="socialsContainer">
      
        {names.map((name, index) => {
          const iconSrc = icons[name]
          return (

            
            <div className="socialsBadge">
            <img
              key={name} 
              className="socialsIcon"
              src={iconSrc}
              alt={`${name} icon`}
            />
            </div>
          );
        })}
    </div>
  );
}

export default SocialsBadge;