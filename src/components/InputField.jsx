import { useState } from 'react'

function InputField({ placeholder = '', required = false, id, className = '' }) {

  const [textInput, setTextInput] = useState ('')
  const placeholderHidden = false

  return (
    <div className='relative flex align-middle w-full'>
      <label htmlFor={id} className="sr-only">
        {placeholder}
        {required && ' (required)'}
      </label>

      <input id={id} value={textInput} onChange={ (e) => { setTextInput(e.target.value) } } placeholder='' className={`inputField w-full p-3 ${className}`} required={required} autoComplete="off"/>
      <div className={ `absolute top-1/2 left-3 transform -translate-y-1/2 pointer-events-none ${ textInput === '' ? '' : 'hidden' }` }>
        <p className='text-gray-600 body-text-standard ml-2' aria-hidden='true'>
          {placeholder}<span className='text-red-500 font-extrabold'>{ required === true ? ' *' : '' }</span>
        </p>
      </div>
    </div>
  )
}

export default InputField