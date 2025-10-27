import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faArrowRight, faEnvelopeOpen, } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import SocialsBadge from './components/SocialsBadge'


const App = () => {
  return (
    <div className="topBarBg">
      <div className="topBarContainer container mx-auto">
        <div className="contactContainer">
          <div className="contactItem">
            <p className="body-text-small text-white"><FontAwesomeIcon icon={faPhone} />+46 8 123 122 44</p>
          </div>
          <div className="contactItem">
            <p className="body-text-small text-white"><FontAwesomeIcon icon={faEnvelopeOpen} />contact@domain.com</p>
          </div>
        </div>
        <div className="socialsContainer">
          <SocialsBadge names={['facebook', 'twitter', 'instagram', 'youtube']} />
        </div>
      </div>
    </div>
  )
}

export default App