import React from 'react'

function FormField({ onChange, name, value, type, inputType = 'input', placeholder, label, required = false, error, items = [] }) {

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

      {(() => {
        switch(inputType) {
          case 'textarea':
            return (
              <textarea 
                onChange={onChange} 
                value={value} 
                name={name} 
                placeholder={placeholder} 
                className={`inputField h-40 w-full ${!error && 'mb-5'}`}
              />
            );
          
          case 'dropdown':
            return (
              <select
                onChange={onChange}
                value={value}
                name={name}
                className={`h-12 w-full ${!error && 'mb-5'}`}
              >
                <option value="">{placeholder}</option>
                {items?.map((item, index) => (
                  <option key={index} value={item.value || item}>
                    {item.description || item}
                  </option>
                ))}
              </select>
            );
          
          case 'input':
          default:
            return (
              <input 
                onChange={onChange} 
                type={type} 
                value={value} 
                name={name} 
                placeholder={placeholder} 
                className={`inputField h-12 w-full ${!error && 'mb-5'}`}
              />
            );
        }
      })()}
      {error && <p className='mt-0.5 mb-3 text-red-500'>{error}</p>}
    </>
  )
}

export default FormField