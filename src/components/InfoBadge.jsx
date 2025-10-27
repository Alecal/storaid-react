import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function InfoBadge({ icon, title, subTitle = '', children}) {

  return (
    <div className='infoBadgeContainer'>
        <div className="infoBadgeIcon"><FontAwesomeIcon icon={icon} /></div>
        <div>
        {title !== '' && (
            <h6 className={subTitle === '' ? (children !== '' ? 'mb-3' : 'mb-1') : ''}>
                {title}
            </h6>
        )}
        {subTitle !== '' && <h6>{subTitle}</h6>}
        {children !== '' && <p>{children}</p>}
        </div>
    </div>
  )
}

export default InfoBadge