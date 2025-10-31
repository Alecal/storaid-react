import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

function InputField({ label = '', placeholder = '', placeholderStar = true, required = false, id, className = '', height = '', errorMessage = '', error = false}) {

  const [textInput, setTextInput] = useState ('')
  const placeholderHidden = false
  let labelAlign = 'top-1/2'

  switch (height) {
      case 'small':
        height = 'h-10';
        break;
      case 'medium':
        height = 'h-20';
        break;
      case 'large':
        height = 'h-40';
        labelAlign = 'top-6'
        break;
      default:
        height = '';
    }

  return (
    <>
    <div>
    {label !== '' && <label className='mb-2 block-label' htmlFor={id}><p>{label}</p><span className='text-red-500 font-extrabold'>{ required && !placeholderStar ? ' *' : '' }</span></label>}
    <div className={`relative flex align-middle w-full`}>
      <input id={id} value={textInput} onChange={ (e) => { setTextInput(e.target.value) } } placeholder='' className={`${height} inputField w-full p-3 ${className}`} required={required} autocomplete="off"/>
      <div className={ `absolute ${labelAlign} left-3 transform -translate-y-1/2 pointer-events-none ${ textInput === '' ? '' : 'hidden' }` }>
        <p className='col-primary body-text-standard'>
          {placeholder}<span className='text-red-500 font-extrabold'>{ required && placeholderStar ? ' *' : '' }</span>
        </p>
      </div>
    </div>
    {error && !errorMessage && (<p className='flex-1 text-sm text-bold-acc text-red-500'><FontAwesomeIcon className='pr-1' icon={faCircleExclamation}/>{errorMessage}</p>)}
    </div>
    </>
  )
}

export default InputField