import React from 'react'
import Headline from './Headline'

function PageHeadline({
                            title = 'Title',
                            description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
                        }) {
  return (
    <div className='mx-auto sectionGreenLight text-white'>
        <div className='mx-auto max-w-7xl py-25 text-white'>
            <Headline>{title}</Headline>
            <p className='body-test-standard max-w-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
    </div>
  )
}

export default PageHeadline