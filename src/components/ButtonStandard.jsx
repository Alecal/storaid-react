import React from 'react'

function ButtonStandard({ children }) {
  return (
        <button className='px-7 py-2 bg-primary rounded-md btn-yellow'>
            {children ? children : 'Button'}
        </button>
    )
}

export default ButtonStandard