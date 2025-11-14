import React from 'react';

import facebookIcon from '../assets/icons/facebook.svg';
import twitterIcon from '../assets/icons/x-twitter.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import youtubeIcon from '../assets/icons/youtube.svg';

const icons = {
  'Facebook': facebookIcon,
  'Twitter/X': twitterIcon,
  'Instagram': instagramIcon,
  'YouTube': youtubeIcon,
};

function SocialsBadge({ names }) {
  if (!Array.isArray(names) || names.length === 0) {
    return null;
  }

  return (
    <div className="socialsContainer">
      {names.map((name) => {
        const iconSrc = icons[name];
        
        return (
          <div key={name} className="socialsBadge mr-3">
            <img
              className="socialsIcon"
              src={iconSrc}
              alt={`Link to ${name}`}
            />
          </div>
        );
      })}
    </div>
  );
}

export default SocialsBadge;