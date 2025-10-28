import React from 'react'

function InputField({ placeholder = 'Your text', required = false, id, className = ''}) {
  return (
    <input id={id} placeholder={placeholder} className={`inputField w-full h-10 ${className}`} required={required}/>
  )
}

export default InputField