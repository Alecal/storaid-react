import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function InfoBadge({ icon, title, subTitle = '', children, sm = false}) {

  return (
    <div className='infoBadgeContainer text-green mb-1'> 
        <div className={sm ? 'infoBadgeIconSm' : 'infoBadgeIcon'}><FontAwesomeIcon icon={icon} /></div>
        <div>
        {title !== '' && (
            <h6 className={subTitle === '' ? (children !== '' ? 'mb-2' : 'mb-1') : ''}>
                {title}
            </h6>
        )}
        {subTitle !== '' && <h7>{subTitle}</h7>}
        {children !== '' && <p>{children}</p>}
        </div>
    </div>
  )
}

export default InfoBadge