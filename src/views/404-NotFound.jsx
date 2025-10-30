import React from 'react'
import Headline from '../components/Headline'
import ButtonStandard from '../components/ButtonStandard'

function NotFound() {
  return (
    <div className='grid align-middle justify-center text-center h-auto py-50 sectionGreen'>
        <div className='max-w-2xl'>
        <Headline title="Oops!" color='col-primary' titleClass='text-white'>Page Not Found</Headline>
        <p className='mb-5 text-white my-auto'>Sorry, the page you are looking for does not exist. It may have been moved, removed altogether or is temporarily unavailable.</p>
        <ButtonStandard to="/">Back To Home</ButtonStandard>
        </div>
    </div>
  )
}

export default NotFound