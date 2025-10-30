import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import SubscribeNewsletter from './SubscribeNewsletter';

function Footer() {
  return (
    <>
    <SubscribeNewsletter/>
    <footer id='footer' className='darkBg w-full py-8'>
            <div className='mx-auto max-w-7xl text-white text-sm'>
                <div className='flex'>
                    <div className='w-1/2'>
                        © 2025 StorAid, All rights reserved.
                    </div>

                    <div className='w-1/2 flex pl-50'>

                        <div className='w-1/2'>
                            <p className='flex items-center space-x-2 justify-end'>
                                <span className='bg-white w-4 h-4 flex items-center justify-center rounded-full'>
                                    <FontAwesomeIcon className='text-green fa-sm' icon={faChevronRight} />
                                </span>
                                <span>Terms & Condition</span>
                            </p>
                        </div>

                        <div className='w-1/2'>
                            <p className='flex items-center space-x-2 justify-end'>
                                <span className='bg-white w-4 h-4 flex items-center justify-center rounded-full'>
                                    <FontAwesomeIcon className='text-green fa-sm' icon={faChevronRight} />
                                </span>
                                <span>Privacy Policy</span>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
    </footer>
    </>
  )
}

export default Footer