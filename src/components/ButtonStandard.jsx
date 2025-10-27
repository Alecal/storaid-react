import React from 'react'

function ButtonStandard({ label }) {
  return (
    <button className='px-7 py-2 bg-primary rounded-md btn-yellow'>
      {label}
    </button>
  )
}

export default ButtonStandard