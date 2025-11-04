import React from 'react'

function FormField({ onChange, name, value, type, inputType = 'input', placeholder, label, required = false, error}) {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      {label ? (
        <label className='mb-2 block-label' htmlFor={name}>
          <p>
            {label}
            {required ? <span className='text-red-500 font-extrabold'> *</span> : null}
          </p>
        </label>
      ) : null}

      {inputType === 'textarea' ? (
        <textarea 
          onChange={onChange} 
          value={value} 
          name={name} 
          placeholder={placeholder} 
          className={`inputField h-40 w-full ${!error && 'mb-5'}`}
        />
      ) : (
        <input 
          onChange={onChange} 
          type={type} 
          value={value} 
          name={name} 
          placeholder={placeholder} 
          className={`inputField h-12 w-full ${!error && 'mb-5'}`}
        />
      )}
      {error && <p className='mt-0.5 mb-3 text-red-500'>{error}</p>}
    </>
  )
}

export default FormField