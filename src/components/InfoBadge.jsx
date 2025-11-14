import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function InfoBadge({ icon, title, subTitle = '', children, sm = false}) {

  return (
    <div className='infoBadgeContainer text-green mb-1 transition duration-200 transform hover:translate-x-5 hover:scale-103'> 
        <div className={sm ? 'infoBadgeIconSm' : 'infoBadgeIcon'}><FontAwesomeIcon icon={icon} /></div>
        <div>
        {title !== '' && (
            <p className={`${sm ? 'infoBadgeTitleSm' : 'infoBadgeTitle'} ${subTitle === '' ? (children ? 'mb-2' : 'mb-1') : ''}`}>
                {title}
            </p>
        )}
        {subTitle !== '' && <p className='infoBadgeSubTitle'>{subTitle}</p>}
        {children !== '' && <p>{children}</p>}
        </div>
    </div>
  )
}

export default InfoBadge